"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { SiBitcoin, SiDogecoin, SiEthereum, SiRipple } from "react-icons/si";
import styles from "./CryptoPrice.module.css";
import ucbiIcon from "@/public/images/ucbi.png";

const assets = [
  { id: "ucbi", name: "UCBI Holding", symbol: "UCBI", image: ucbiIcon },
  { id: "btc", name: "Bitcoin", symbol: "BTC", Icon: SiBitcoin },
  { id: "eth", name: "Ethereum", symbol: "ETH", Icon: SiEthereum },
  { id: "atom", name: "Cosmos", symbol: "ATOM", image: "/images/corporate/crypto-icons/cosmos.svg" },
  { id: "xrp", name: "Ripple", symbol: "XRP", Icon: SiRipple },
  { id: "hype", name: "Hyperliquid", symbol: "HYPE", image: "/images/corporate/crypto-icons/hyperliquid.svg" },
  { id: "dogecoin", name: "Dogecoin", symbol: "DOGE", Icon: SiDogecoin },
  { id: "worldcoin", name: "Worldcoin", symbol: "WLD", image: "/images/corporate/crypto-icons/worldcoin.jpeg" },
];

function readMarketMetrics(payload) {
  if (!payload || typeof payload !== "object") return {};
  if (Array.isArray(payload)) {
    for (const item of payload) {
      const metrics = readMarketMetrics(item);
      if (metrics.price != null || metrics.change != null) return metrics;
    }
    return {};
  }

  const price = typeof payload.price === "number"
    ? payload.price
    : typeof payload.p === "number"
      ? payload.p
      : null;
  const change = typeof payload.change24h === "number"
    ? payload.change24h
    : typeof payload.percent_change_24h === "number"
      ? payload.percent_change_24h
      : typeof payload.pc24h === "number"
        ? payload.pc24h
        : null;
  if (price !== null || change !== null) return { price, change };

  for (const value of Object.values(payload)) {
    const metrics = readMarketMetrics(value);
    if (metrics.price != null || metrics.change != null) return metrics;
  }
  return {};
}

function formatPrice(value) {
  if (value == null || !Number.isFinite(Number(value))) return "—";
  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: Number(value) < 1 ? 4 : 2,
  });
}

function Sparkline({ prices, symbol }) {
  const values = (prices || []).map((point) => Number(point[1])).filter(Number.isFinite);
  const count = Math.min(values.length, 24);
  const sampled = count > 1
    ? Array.from({ length: count }, (_, index) => values[Math.round(index * (values.length - 1) / (count - 1))])
    : [];
  const min = sampled.length ? Math.min(...sampled) : 0;
  const max = sampled.length ? Math.max(...sampled) : 0;
  const spread = max - min || Math.max(Math.abs(max) * 0.002, 1);
  const coords = sampled.map((value, index) => {
    const x = (index / Math.max(1, sampled.length - 1)) * 210;
    const y = 28 - ((value - min) / spread) * 21;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const positive = sampled.length < 2 || sampled[sampled.length - 1] >= sampled[0];
  const linePoints = coords.join(" ");
  const areaPath = coords.length > 1 ? `M ${coords[0]} L ${coords.slice(1).join(" L ")} L 210,34 L 0,34 Z` : "";

  return <svg className={styles.sparkline} viewBox="0 0 210 34" preserveAspectRatio="none" role="img" aria-label={`${symbol} actual price movement over the last 24 hours`}>
    {sampled.length > 1 ? <>
      <path d={areaPath} className={`${styles.chartArea} ${positive ? styles.chartPositive : styles.chartNegative}`} />
      <polyline points={linePoints} className={positive ? styles.chartPositive : styles.chartNegative} />
    </> : <line x1="0" y1="28" x2="210" y2="28" className={styles.chartUnavailable} />}
  </svg>;
}

export default function CryptoPrice() {
  const trackRef = useRef(null);
  const [market, setMarket] = useState({});
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(3);

  useEffect(() => {
    let alive = true;
    const load = async () => {
      const results = await Promise.all(assets.map(async (asset) => {
        try {
          const [response, historyResponse] = await Promise.all([
            fetch(asset.id === "ucbi" ? "/api/ucbi/market" : `/api/price/${asset.id}`, { cache: "no-store" }),
            fetch(asset.id === "ucbi" ? "/api/ucbi/market-history" : `/api/price/${asset.id}/history`, { cache: "no-store" }),
          ]);
          const payload = await response.json();
          if (!response.ok && asset.id !== "ucbi") return [asset.id, null];
          const metrics = readMarketMetrics(payload);
          const history = historyResponse?.ok ? await historyResponse.json() : null;
          const prices = history?.prices || [];
          if (asset.id === "ucbi" && prices.length > 1 && metrics.price == null) {
            const firstPrice = Number(prices[0][1]);
            const latestPrice = Number(prices[prices.length - 1][1]);
            if (Number.isFinite(latestPrice)) metrics.price = latestPrice;
            if (firstPrice > 0 && Number.isFinite(latestPrice)) metrics.change = ((latestPrice - firstPrice) / firstPrice) * 100;
          }
          return [asset.id, { ...metrics, prices }];
        } catch {
          return [asset.id, null];
        }
      }));
      if (alive) setMarket(Object.fromEntries(results));
    };
    load();
    const interval = setInterval(load, 90_000);
    return () => { alive = false; clearInterval(interval); };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const updatePages = () => {
      const card = track.querySelector("[data-market-card]");
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
      const step = card.getBoundingClientRect().width + gap;
      const visible = Math.max(1, Math.floor((track.clientWidth + gap) / step));
      const pages = Math.max(1, Math.ceil(assets.length / visible));
      const maxScroll = track.scrollWidth - track.clientWidth;
      const page = maxScroll > 0 && pages > 1
        ? Math.round((track.scrollLeft / maxScroll) * (pages - 1))
        : 0;
      setPageCount(pages);
      setActivePage(Math.min(Math.max(0, page), pages - 1));
    };
    const observer = new ResizeObserver(updatePages);
    observer.observe(track);
    track.addEventListener("scroll", updatePages, { passive: true });
    updatePages();
    return () => { observer.disconnect(); track.removeEventListener("scroll", updatePages); };
  }, []);

  const scrollPage = (direction) => {
    const track = trackRef.current;
    const card = track?.querySelector("[data-market-card]");
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const visible = Math.max(1, Math.floor((track.clientWidth + gap) / step));
    const pages = Math.max(1, Math.ceil(assets.length / visible));
    const maxScroll = track.scrollWidth - track.clientWidth;
    const currentPage = maxScroll > 0 && pages > 1 ? Math.round((track.scrollLeft / maxScroll) * (pages - 1)) : 0;
    const targetPage = Math.min(Math.max(currentPage + direction, 0), pages - 1);
    const targetLeft = targetPage === pages - 1 ? maxScroll : targetPage * visible * step;
    track.scrollTo({ left: targetLeft, behavior: "smooth" });
  };

  const goToPage = (page) => {
    const track = trackRef.current;
    const card = track?.querySelector("[data-market-card]");
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const visible = Math.max(1, Math.floor((track.clientWidth + gap) / (card.getBoundingClientRect().width + gap)));
    const maxScroll = track.scrollWidth - track.clientWidth;
    const pages = Math.max(1, Math.ceil(assets.length / visible));
    const targetPage = Math.min(Math.max(page, 0), pages - 1);
    const targetLeft = targetPage === pages - 1 ? maxScroll : targetPage * visible * (card.getBoundingClientRect().width + gap);
    track.scrollTo({ left: targetLeft, behavior: "smooth" });
  };

  return <section className={styles.section} aria-labelledby="crypto-price-title">
    <div className={styles.inner}>
      <div className={styles.headingRow}>
        <div><p className={styles.eyebrow}>Crypto Market Trends</p><h2 id="crypto-price-title">Real-Time <span>Market Insights</span></h2></div>
        <Link className={styles.allMarkets} href="/markets">View all markets <FiArrowRight aria-hidden="true" /></Link>
      </div>
      <div className={styles.carousel}>
        <button className={`${styles.arrow} ${styles.previous}`} type="button" aria-label="Previous market assets" onClick={() => scrollPage(-1)}><FiArrowLeft /></button>
        <div className={styles.track} ref={trackRef}>
          {assets.map((asset) => {
            const item = market[asset.id];
            const change = item?.change;
            return <article className={styles.card} data-market-card key={asset.id}>
              <div className={styles.asset}>
              {asset.id === "ucbi" ? <Image src={asset.image} alt="" width={44} height={44} className={styles.coinIcon} /> : <span className={`${styles.coinBadge} ${styles[`${asset.id}Badge`]}`} aria-hidden="true">
                {asset.Icon ? <asset.Icon className={styles.coinGlyph} /> : <Image src={asset.image} alt="" width={44} height={44} className={styles.badgeImage} />}
              </span>}
                <div className={styles.assetName}><h3>{asset.name}</h3><span>{asset.symbol}</span></div>
              </div>
              <p className={styles.price}>${formatPrice(item?.price)}</p>
              <p className={`${styles.change} ${change == null ? styles.neutral : change >= 0 ? styles.up : styles.down}`}>{change == null ? "—" : `${change > 0 ? "+" : ""}${change.toFixed(2)}%`}</p>
              <div className={styles.chartRow}><Sparkline prices={item?.prices} symbol={asset.symbol} /><span>24h</span></div>
            </article>;
          })}
        </div>
        <button className={`${styles.arrow} ${styles.next}`} type="button" aria-label="Next market assets" onClick={() => scrollPage(1)}><FiArrowRight /></button>
      </div>
      <div className={styles.dots} aria-label="Market pages">{Array.from({ length: pageCount }, (_, index) => <button key={index} className={index === activePage ? styles.activeDot : ""} aria-label={`Show market page ${index + 1}`} aria-current={index === activePage ? "true" : undefined} onClick={() => goToPage(index)} />)}</div>
    </div>
  </section>;
}
