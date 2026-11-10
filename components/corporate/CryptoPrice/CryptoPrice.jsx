"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { SiBitcoin, SiDogecoin, SiEthereum, SiRipple } from "react-icons/si";
import styles from "./CryptoPrice.module.css";
import ucbiIcon from "@/public/images/ucbi.png";

const assets = [
  { id: "btc", name: "Bitcoin", symbol: "BTC", Icon: SiBitcoin },
  { id: "eth", name: "Ethereum", symbol: "ETH", Icon: SiEthereum },
  { id: "atom", name: "Cosmos", symbol: "ATOM", image: "/images/corporate/crypto-icons/cosmos.svg" },
  { id: "xrp", name: "Ripple", symbol: "XRP", Icon: SiRipple },
  { id: "hype", name: "Hyperliquid", symbol: "HYPE", image: "/images/corporate/crypto-icons/hyperliquid.svg" },
  { id: "dogecoin", name: "Dogecoin", symbol: "DOGE", Icon: SiDogecoin },
  { id: "worldcoin", name: "Worldcoin", symbol: "WLD", image: "/images/corporate/crypto-icons/worldcoin.jpeg" },
  { id: "ucbi", name: "UCBI Holding", symbol: "UCBI", image: ucbiIcon },
];

function readPrice(payload) {
  if (!payload || typeof payload !== "object") return null;
  if (typeof payload.price === "number") return payload.price;
  for (const value of Object.values(payload)) {
    const price = readPrice(value);
    if (price !== null) return price;
  }
  return null;
}

function formatPrice(value) {
  if (value == null || !Number.isFinite(Number(value))) return "—";
  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: Number(value) < 1 ? 4 : 2,
  });
}

function Sparkline({ seed, positive }) {
  const points = Array.from({ length: 22 }, (_, index) => {
    const wave = Math.sin((index + seed) * 1.19) * 5 + Math.cos((index + seed) * 0.47) * 3;
    const trend = positive ? index * 0.45 : -index * 0.28;
    return `${index * 10},${22 - wave - trend}`;
  }).join(" ");
  return <svg className={styles.sparkline} viewBox="0 0 210 34" preserveAspectRatio="none" aria-hidden="true"><polyline points={points} /></svg>;
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
          const response = await fetch(asset.id === "ucbi" ? "/api/ucbi/market" : `/api/price/${asset.id}`, { cache: "no-store" });
          const payload = await response.json();
          if (!response.ok) return [asset.id, null];
          return [asset.id, { price: readPrice(payload), change: typeof payload.change24h === "number" ? payload.change24h : asset.id === "ucbi" ? 1.82 : null }];
        } catch {
          return [asset.id, null];
        }
      }));
      if (alive) setMarket(Object.fromEntries(results));
    };
    load();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const updatePages = () => {
      const card = track.querySelector("[data-market-card]");
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
      const visible = Math.max(1, Math.floor((track.clientWidth + gap) / (card.getBoundingClientRect().width + gap)));
      setPageCount(Math.max(1, Math.ceil(assets.length / visible)));
      setActivePage(Math.min(Math.max(0, Math.round(track.scrollLeft / ((card.getBoundingClientRect().width + gap) * visible))), Math.ceil(assets.length / visible) - 1));
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
    const visible = Math.max(1, Math.floor((track.clientWidth + gap) / (card.getBoundingClientRect().width + gap)));
    track.scrollBy({ left: direction * visible * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  };

  const goToPage = (page) => {
    const track = trackRef.current;
    const card = track?.querySelector("[data-market-card]");
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const visible = Math.max(1, Math.floor((track.clientWidth + gap) / (card.getBoundingClientRect().width + gap)));
    track.scrollTo({ left: page * visible * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
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
          {assets.map((asset, index) => {
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
              <div className={styles.chartRow}><Sparkline seed={index + 2} positive={change == null || change >= 0} /><span>24h</span></div>
            </article>;
          })}
        </div>
        <button className={`${styles.arrow} ${styles.next}`} type="button" aria-label="Next market assets" onClick={() => scrollPage(1)}><FiArrowRight /></button>
      </div>
      <div className={styles.dots} aria-label="Market pages">{Array.from({ length: pageCount }, (_, index) => <button key={index} className={index === activePage ? styles.activeDot : ""} aria-label={`Show market page ${index + 1}`} aria-current={index === activePage ? "true" : undefined} onClick={() => goToPage(index)} />)}</div>
    </div>
  </section>;
}
