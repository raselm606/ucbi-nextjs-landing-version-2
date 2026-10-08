'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './ExchangeOverview.module.css';

const formatUsd = (value) => {
  if (value == null || !Number.isFinite(value)) return '—';
  const abs = Math.abs(value);
  if (abs >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (abs >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (abs >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  return `$${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
};

const formatBtc = (value) => `${Number(value || 0).toLocaleString('en-US', { maximumFractionDigits: 2 })} BTC`;
const formatVolume = (usd, btc) => usd == null ? formatBtc(btc) : formatUsd(usd);

const formatUpdated = (date) => {
  if (!date) return 'Waiting for market data';
  return new Date(date).toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'medium',
    timeStyle: 'short',
  }) + ' UTC';
};

export default function ExchangeOverview() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadExchanges = async () => {
      try {
        const response = await fetch('/api/crypto-exchanges', {
          signal: controller.signal,
          cache: 'no-store',
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Exchange market data is unavailable');
        setData(result);
        setError('');
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') setError(fetchError.message || 'Exchange market data is unavailable');
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadExchanges();
    const refreshId = window.setInterval(loadExchanges, 120_000);
    return () => {
      controller.abort();
      window.clearInterval(refreshId);
    };
  }, []);

  const exchanges = data?.exchanges ?? [];
  const stats = useMemo(() => {
    const volumeUsd = exchanges.every((exchange) => exchange.volumeUsd != null)
      ? exchanges.reduce((sum, exchange) => sum + exchange.volumeUsd, 0)
      : null;
    const volumeBtc = exchanges.reduce((sum, exchange) => sum + (exchange.volumeBtc ?? 0), 0);
    const highestVolume = [...exchanges].sort((a, b) => b.volumeBtc - a.volumeBtc)[0];
    return { volumeUsd, volumeBtc, highestVolume };
  }, [exchanges]);

  return (
    <section className={styles.exchange_section} id="top-exchanges">
      <div className={`container cline ${styles.section_inner}`}>
        <div className="row align-items-start mb-4">
          <div className="col-lg-8">
            <span className={styles.sub_title}>GLOBAL CRYPTO MARKETS</span>
            <h2 className={styles.section_title}>
              Top <span className={styles.cyan_text}>Crypto Exchanges</span>
            </h2>
            <p className={styles.section_description}>
              Compare leading centralized exchanges by reported 24-hour trading volume market rank and exchange details
            </p>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className={styles.header_note}>
              <span>EXCHANGE MARKET DATA</span>
              <span>VOLUME · RANK · COVERAGE</span>
              <span>UPDATED EVERY 2 MINUTES</span>
            </div>
          </div>
        </div>

        <div className={styles.stats_grid}>
          <article className={styles.stat_card}>
            <span className={styles.stat_label}>Tracked 24h Volume</span>
            <strong className={styles.stat_value}>{formatVolume(stats.volumeUsd, stats.volumeBtc)}</strong>
            <span className={styles.stat_hint}>{formatBtc(stats.volumeBtc)} across listed exchanges</span>
          </article>
          <article className={styles.stat_card}>
            <span className={styles.stat_label}>Exchanges Tracked</span>
            <strong className={styles.stat_value}>{loading ? '—' : exchanges.length}</strong>
            <span className={styles.stat_hint}>Ranked by CoinGecko trust rank</span>
          </article>
          <article className={styles.stat_card}>
            <span className={styles.stat_label}>Highest 24h Volume</span>
            <strong className={styles.stat_value}>{stats.highestVolume?.name ?? '—'}</strong>
            <span className={styles.stat_hint}>
              {stats.highestVolume ? formatVolume(stats.highestVolume.volumeUsd, stats.highestVolume.volumeBtc) : '—'}
            </span>
          </article>
        </div>

        <div className={styles.table_card}>
          <div className={styles.table_heading}>
            <div>
              <h3>Exchange Market Overview</h3>
              <p>24-hour spot trading volume reported in BTC with an estimated USD equivalent</p>
            </div>
            <span className={styles.updated_label}>
              {data?.source ?? 'CoinGecko'} · {formatUpdated(data?.updatedAt)}
            </span>
          </div>
          <div className={styles.table_scroller}>
            <table className={styles.exchange_table}>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Exchange</th>
                  <th className={styles.align_right}>24h Volume</th>
                  <th>Trust Score</th>
                  <th>Established</th>
                  <th>Country</th>
                  <th>Market</th>
                </tr>
              </thead>
              <tbody>
                {exchanges.map((exchange, index) => (
                  <tr key={exchange.id}>
                    <td className={styles.rank_cell}>{exchange.rank ?? index + 1}</td>
                    <td>
                      <a className={styles.exchange_link} href={exchange.url} target="_blank" rel="noreferrer">
                        <span className={styles.exchange_identity}>
                          {exchange.image ? <img src={exchange.image} alt="" loading="lazy" /> : null}
                          <span>{exchange.name}</span>
                          <span className={styles.external_icon} aria-hidden="true">↗</span>
                        </span>
                      </a>
                    </td>
                    <td className={`${styles.volume_cell} ${styles.align_right}`}>
                      <strong>{formatVolume(exchange.volumeUsd, exchange.volumeBtc)}</strong>
                      <span>{formatBtc(exchange.volumeBtc)}</span>
                    </td>
                    <td>
                      <span className={styles.trust_badge}>
                        <i aria-hidden="true" />
                        {exchange.trustScore == null ? 'Not rated' : `${exchange.trustScore} / 10`}
                      </span>
                    </td>
                    <td>{exchange.yearEstablished ?? '—'}</td>
                    <td>{exchange.country || '—'}</td>
                    <td><span className={styles.market_badge}>Spot · CEX</span></td>
                  </tr>
                ))}
                {!exchanges.length && (
                  <tr>
                    <td colSpan={7} className={styles.empty_state}>
                      {loading ? 'Loading exchange market data…' : error || 'Exchange market data is not available right now'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className={styles.table_footer}>
            <span>Volume and exchange data provided by CoinGecko.</span>
            <span>Volume values are estimates and can vary by data provider.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
