'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './EthChartExchange.module.css';

const RANGES = ['1H', '24H', '7D', '30D', '90D', '1Y'];
const number = (value, digits = 2) => Number.isFinite(value)
  ? value.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })
  : '—';
const usd = (value) => Number.isFinite(value)
  ? `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  : '—';
const compact = (value) => Number.isFinite(value)
  ? new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 }).format(value)
  : '—';

function timestampLabel(timestamp, range) {
  const date = new Date(timestamp);
  return date.toLocaleString('en-US', range === '1H' || range === '24H'
    ? { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' }
    : { month: 'short', day: 'numeric', timeZone: 'UTC' });
}

export function MarketChart({ candles, range, chartType }) {
  const width = 900;
  const height = 340;
  const left = 8;
  const right = 82;
  const top = 14;
  const bottom = 270;
  const volumeTop = 290;
  const plotWidth = width - left - right;
  const plotHeight = bottom - top;
  const values = candles.flatMap((candle) => [candle.high, candle.low]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = (max - min || max * 0.002) * 0.1;
  const low = min - padding;
  const high = max + padding;
  const y = (price) => top + ((high - price) / (high - low)) * plotHeight;
  const x = (index) => left + (index / Math.max(candles.length - 1, 1)) * plotWidth;
  const maxVolume = Math.max(...candles.map((candle) => candle.volume), 1);
  const closePath = candles.map((candle, index) => `${index ? 'L' : 'M'} ${x(index)} ${y(candle.close)}`).join(' ');
  const areaPath = `${closePath} L ${x(candles.length - 1)} ${bottom} L ${x(0)} ${bottom} Z`;
  const ticks = Array.from({ length: 5 }, (_, index) => high - ((high - low) * index) / 4);
  const labels = Array.from({ length: 5 }, (_, index) => Math.round((candles.length - 1) * index / 4));
  const candleWidth = Math.max(1, Math.min(8, plotWidth / candles.length * 0.62));

  return (
    <div className={styles.chart_wrap}>
      <svg className={styles.chart} viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`Ethereum ${range} ${chartType} price chart`}>
        <defs>
          <linearGradient id="ethChartFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0cc0df" stopOpacity=".24" />
            <stop offset="100%" stopColor="#0cc0df" stopOpacity="0" />
          </linearGradient>
        </defs>
        {ticks.map((tick, index) => (
          <g key={tick}>
            <line x1={left} x2={width - right + 6} y1={top + index * plotHeight / 4} y2={top + index * plotHeight / 4} className={styles.grid_line} />
            <text x={width - right + 13} y={top + index * plotHeight / 4 + 4} className={styles.axis_label}>{number(tick, 0)}</text>
          </g>
        ))}
        {chartType === 'line' ? (
          <>
            <path d={areaPath} fill="url(#ethChartFill)" />
            <path d={closePath} className={styles.price_line} />
          </>
        ) : candles.map((candle, index) => {
          const rising = candle.close >= candle.open;
          const colorClass = rising ? styles.candle_up : styles.candle_down;
          const candleX = x(index);
          const candleY = Math.min(y(candle.open), y(candle.close));
          const candleHeight = Math.max(1, Math.abs(y(candle.open) - y(candle.close)));
          return (
            <g key={candle.time} className={colorClass}>
              <title>{`${new Date(candle.time).toLocaleString()} · O ${usd(candle.open)} · H ${usd(candle.high)} · L ${usd(candle.low)} · C ${usd(candle.close)}`}</title>
              <line x1={candleX} x2={candleX} y1={y(candle.high)} y2={y(candle.low)} stroke="currentColor" />
              <rect x={candleX - candleWidth / 2} y={candleY} width={candleWidth} height={candleHeight} fill="currentColor" />
            </g>
          );
        })}
        {candles.map((candle, index) => (
          <rect key={`volume-${candle.time}`} x={x(index) - candleWidth / 2} y={volumeTop + 34 - (candle.volume / maxVolume) * 31} width={candleWidth} height={(candle.volume / maxVolume) * 31} className={candle.close >= candle.open ? styles.volume_up : styles.volume_down} />
        ))}
        <line x1={left} x2={width - right + 6} y1={volumeTop} y2={volumeTop} className={styles.grid_line} />
        <text x={left} y={volumeTop + 51} className={styles.axis_label}>VOL (ETH)</text>
        {labels.map((index) => (
          <text key={index} x={x(index)} y="337" textAnchor={index === 0 ? 'start' : index === candles.length - 1 ? 'end' : 'middle'} className={styles.axis_label}>
            {timestampLabel(candles[index].time, range)}
          </text>
        ))}
      </svg>
    </div>
  );
}

export default function EthChartExchange() {
  const [range, setRange] = useState('24H');
  const [chartType, setChartType] = useState('candles');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const loadMarket = useCallback(async (signal) => {
    try {
      const response = await fetch(`/api/eth-market?range=${range}`, { signal, cache: 'no-store' });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Ethereum market data is unavailable');
      setData(result);
      setError('');
    } catch (fetchError) {
      if (fetchError.name !== 'AbortError') setError(fetchError.message || 'Ethereum market data is unavailable');
    } finally {
      if (!signal?.aborted) setLoading(false);
    }
  }, [range]);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    loadMarket(controller.signal);
    const refreshId = window.setInterval(() => loadMarket(controller.signal), 30_000);
    return () => {
      controller.abort();
      window.clearInterval(refreshId);
    };
  }, [loadMarket]);

  const ticker = data?.ticker;
  const positive = (ticker?.changePercent ?? 0) >= 0;
  const rangeChange = useMemo(() => {
    const first = data?.candles?.[0]?.open;
    const last = data?.candles?.at(-1)?.close;
    if (!first || !last) return null;
    return ((last - first) / first) * 100;
  }, [data]);

  return (
    <section className={styles.market_section} id="ethereum-market">
      <div className={`container cline ${styles.section_inner}`}>
        <div className="row align-items-start mb-4">
          <div className="col-lg-8">
            <span className={styles.sub_title}>LIVE ETHEREUM MARKET</span>
            <h2 className={styles.section_title}>Ethereum <span className={styles.cyan_text}>Price Chart</span></h2>
            <p className={styles.section_description}>Follow live ETH price action, trading volume, market range and exchange quotes with interactive timeframes.</p>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className={styles.header_note}>
              <span>ETHEREUM SPOT MARKET</span><span>PRICE · VOLUME · 24H RANGE</span><span>LIVE DATA · REFRESHED EVERY 30 SEC</span>
            </div>
          </div>
        </div>

        <div className={styles.market_card}>
          <div className={styles.market_topline}>
            <div className={styles.asset_identity}>
              <span className={styles.eth_badge} aria-hidden="true">◆</span>
              <span><strong>Ethereum</strong><small>ETH / USDT · Binance spot</small></span>
            </div>
            <span className={styles.live_status}><i /> LIVE MARKET</span>
          </div>

          <div className={styles.price_summary}>
            <div className={styles.current_price}>{loading && !ticker ? 'Loading…' : usd(ticker?.price)}</div>
            <div className={`${styles.change_badge} ${positive ? styles.positive : styles.negative}`}>
              {positive ? '▲' : '▼'} {number(Math.abs(ticker?.changePercent ?? 0), 2)}% <span>24h</span>
            </div>
            <span className={styles.price_conversion}>{ticker ? `≈ ${number(ticker.price, 6)} USDT` : 'Live USD equivalent'}</span>
            {ticker && <span className={styles.range_change}>Selected range {rangeChange >= 0 ? '+' : ''}{number(rangeChange, 2)}%</span>}
          </div>

          <div className={styles.stats_strip}>
            <div><span>24H HIGH</span><strong>{usd(ticker?.high)}</strong></div>
            <div><span>24H LOW</span><strong>{usd(ticker?.low)}</strong></div>
            <div><span>24H VOLUME</span><strong>{compact(ticker?.volumeEth)} ETH</strong><small>{usd(ticker?.volumeUsd)}</small></div>
            <div><span>ETH / BTC</span><strong>{ticker ? number(ticker.ethBtc, 6) : '—'} BTC</strong></div>
            <div><span>BEST BID / ASK</span><strong>{ticker ? `${number(ticker.bid, 2)} / ${number(ticker.ask, 2)}` : '—'}</strong></div>
            <div><span>24H TRADES</span><strong>{ticker ? compact(ticker.trades) : '—'}</strong></div>
          </div>

          <div className={styles.chart_toolbar}>
            <div className={styles.range_controls} aria-label="Chart time range">
              {RANGES.map((item) => <button key={item} type="button" onClick={() => setRange(item)} className={range === item ? styles.range_active : ''} aria-pressed={range === item}>{item}</button>)}
            </div>
            <div className={styles.chart_controls} aria-label="Chart display type">
              <button type="button" onClick={() => setChartType('candles')} className={chartType === 'candles' ? styles.chart_active : ''} aria-pressed={chartType === 'candles'} title="Candlestick chart">▥</button>
              <button type="button" onClick={() => setChartType('line')} className={chartType === 'line' ? styles.chart_active : ''} aria-pressed={chartType === 'line'} title="Line chart">⌁</button>
            </div>
          </div>

          {error && !data ? <div className={styles.chart_message}>{error}</div> : data?.candles?.length ? <MarketChart candles={data.candles} range={range} chartType={chartType} /> : <div className={styles.chart_message}>Loading Ethereum price history…</div>}
          {error && data && <p className={styles.stale_notice}>Showing last available prices. Refresh failed: {error}</p>}
          <div className={styles.market_footer}>
            <span>Data: {data?.source ?? 'Binance'} · ETH/USDT spot market · Updates every 30 seconds</span>
            <span>{data?.updatedAt ? `Updated ${new Date(data.updatedAt).toLocaleTimeString('en-US', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit' })} UTC` : 'Waiting for market data'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
