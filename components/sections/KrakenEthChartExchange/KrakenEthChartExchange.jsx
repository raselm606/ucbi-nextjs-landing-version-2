'use client';

import { useCallback, useEffect, useState } from 'react';
import { MarketChart } from '../EthChartExchange/EthChartExchange';
import styles from '../EthChartExchange/EthChartExchange.module.css';

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

export default function KrakenEthChartExchange() {
  const [range, setRange] = useState('24H');
  const [chartType, setChartType] = useState('candles');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const loadMarket = useCallback(async (signal) => {
    try {
      const response = await fetch(`/api/kraken-eth-market?range=${range}`, { signal, cache: 'no-store' });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Kraken market data is unavailable');
      setData(result);
      setError('');
    } catch (fetchError) {
      if (fetchError.name !== 'AbortError') setError(fetchError.message || 'Kraken market data is unavailable');
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
  const candles = data?.candles ?? [];
  const firstOpen = candles[0]?.open;
  const lastClose = candles.at(-1)?.close;
  const rangeChange = firstOpen && lastClose ? ((lastClose - firstOpen) / firstOpen) * 100 : null;

  return (
    <section className={styles.market_section} id="kraken-ethereum-market">
      <div className={`container cline ${styles.section_inner}`}>
        <div className="row align-items-start mb-4">
          <div className="col-lg-8">
            <span className={styles.sub_title}>KRAKEN ETHEREUM MARKET</span>
            <h2 className={styles.section_title}>Ethereum <span className={styles.cyan_text}>Price Chart</span> <small className={styles.exchange_tag}>KRAKEN</small></h2>
            <p className={styles.section_description}>Live ETH/USD spot price, volume, market range and exchange quotes from Kraken with interactive timeframes.</p>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className={styles.header_note}>
              <span>KRAKEN SPOT MARKET</span><span>ETH / USD · PRICE · VOLUME</span><span>LIVE DATA · REFRESHED EVERY 30 SEC</span>
            </div>
          </div>
        </div>

        <div className={styles.market_card}>
          <div className={styles.market_topline}>
            <div className={styles.asset_identity}>
              <span className={styles.eth_badge} aria-hidden="true">◆</span>
              <span><strong>Ethereum</strong><small>ETH / USD · Kraken spot</small></span>
            </div>
            <span className={styles.live_status}><i /> LIVE MARKET</span>
          </div>

          <div className={styles.price_summary}>
            <div className={styles.current_price}>{loading && !ticker ? 'Loading…' : usd(ticker?.price)}</div>
            <div className={`${styles.change_badge} ${positive ? styles.positive : styles.negative}`}>
              {positive ? '▲' : '▼'} {number(Math.abs(ticker?.changePercent ?? 0), 2)}% <span>today</span>
            </div>
            <span className={styles.price_conversion}>{ticker ? `≈ ${number(ticker.price, 6)} USD` : 'ETH priced directly in USD'}</span>
            {ticker && <span className={styles.range_change}>Selected range {rangeChange >= 0 ? '+' : ''}{number(rangeChange, 2)}%</span>}
          </div>

          <div className={styles.stats_strip}>
            <div><span>24H HIGH</span><strong>{usd(ticker?.high)}</strong></div>
            <div><span>24H LOW</span><strong>{usd(ticker?.low)}</strong></div>
            <div><span>24H VOLUME</span><strong>{compact(ticker?.volumeEth)} ETH</strong><small>{usd(ticker?.volumeUsd)}</small></div>
            <div><span>ETH / BTC</span><strong>{ticker ? number(ticker.ethBtc, 6) : '—'} XBT</strong></div>
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

          {error && !data ? <div className={styles.chart_message}>{error}</div> : candles.length ? <MarketChart candles={candles} range={range} chartType={chartType} /> : <div className={styles.chart_message}>Loading Kraken Ethereum price history…</div>}
          {error && data && <p className={styles.stale_notice}>Showing last available prices. Refresh failed: {error}</p>}
          <div className={styles.market_footer}>
            <span>Data: Kraken · ETH/USD spot market · Updates every 30 seconds</span>
            <span>{data?.updatedAt ? `Updated ${new Date(data.updatedAt).toLocaleTimeString('en-US', { timeZone: 'UTC', hour: '2-digit', minute: '2-digit' })} UTC` : 'Waiting for market data'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
