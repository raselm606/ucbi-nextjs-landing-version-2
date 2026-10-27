'use client';

import { useCryptoEtfData } from './CryptoEtfDataProvider';
import styles from './EtfOverview.module.css';

const DatabaseIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3" />
  </svg>
);

const ChartUpIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const PieChartIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

const EthereumIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35zm.056-17.97l-7.37 12.25 7.37 4.36 7.37-4.36L12 0z" />
  </svg>
);

const formatFlow = (value) => {
  if (value == null) return '—';
  const amount = Number(value);
  return `${amount > 0 ? '+' : amount < 0 ? '−' : ''}$${Math.abs(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}M`;
};

const flowColor = (value) => value < 0 ? '#ff5252' : value > 0 ? '#00e676' : '#94A3B8';

export default function EtfOverview() {
  const { data, error, loading } = useCryptoEtfData();
  const flows = data?.flows ?? [];
  const latest = flows.at(-1);
  const windowTotal = flows.reduce((sum, point) => sum + Number(point.netFlowUsdM || 0), 0);
  const rows = [...flows].reverse().slice(0, 12);

  return (
    <section className={styles.etf_overview_section} id="etf-overview">
      <div className={`container cline ${styles.section_padding_custom}`}>
        <div className={styles.overview_header}>
          <span className={styles.sub_title}>UCBI · ETHEREUM ETF DATA</span>
          <p className={styles.header_subtitle}>Institutional fund activity and market indicators, updated daily</p>
        </div>

        <div className={styles.top_controls_row}>
          <div className={styles.intro_block}>
            <h2 className={styles.main_title}>Ethereum ETF Market Snapshot</h2>
            <p className={styles.description}>Track fund flows, trading activity, and spot pricing.</p>
          </div>
          <div className={styles.metric_group}>
            <div className={styles.metric_pill}>
              <div>
                <span className={styles.metric_label}>Latest Daily Flow</span>
                <span className={styles.metric_val} style={{ color: flowColor(latest?.netFlowUsdM ?? 0) }}>
                  {formatFlow(latest?.netFlowUsdM)}
                </span>
              </div>
            </div>
            <div className={styles.metric_pill}>
              <div>
                <span className={styles.metric_label}>{data ? `${data.windowDays}-Day Net Flow` : 'Period Net Flow'}</span>
                <span className={styles.metric_val} style={{ color: flowColor(windowTotal) }}>
                  {data ? formatFlow(windowTotal) : '—'}
                </span>
              </div>
            </div>
            <div className={styles.metric_pill}>
              <div>
                <span className={styles.metric_label}>ETH Spot Price</span>
                <span className={styles.metric_val}>
                  {data?.price
                    ? `$${data.price.priceUsd.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
                    : '—'}
                </span>
                {data?.price && <span className={styles.price_change} style={{ color: flowColor(data.price.change24hPct) }}>{data.price.change24hPct >= 0 ? '+' : ''}{data.price.change24hPct}% <small>(24h)</small></span>}
              </div>
            </div>
          </div>
          <div className={styles.tagline_box}>
            <p className={styles.tagline_item}><DatabaseIcon /> Meta</p>
            <p className={styles.tagline_item}><ChartUpIcon /> {data ? `${data.windowDays}-Day ${formatFlow(windowTotal)}` : 'Latest Daily Data'}</p>
            <p className={styles.tagline_item}><PieChartIcon /> Price · <span style={{ color: flowColor(data?.price?.change24hPct ?? 0) }}>{data?.price ? `${data.price.change24hPct >= 0 ? '+' : ''}${data.price.change24hPct}% (24h)` : '—'}</span></p>
          </div>
        </div>

        <div className={styles.main_card}>
          <div className={styles.table_responsive}>
            <table className={styles.etf_table}>
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>#</th>
                  <th>Date (UTC)</th>
                  <th>Asset</th>
                  <th>Aggregated Net Flow (USD millions)</th>
                  <th>Daily Direction</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.date}>
                    <td style={{ color: '#64748B', fontWeight: '600' }}>{index + 1}</td>
                    <td style={{ color: '#E2E8F0', fontWeight: '600' }}>{row.date}</td>
                    <td><span className={styles.ticker_badge}>ETH</span></td>
                    <td style={{ color: flowColor(row.netFlowUsdM), fontWeight: '600' }}>
                      {formatFlow(row.netFlowUsdM)}
                    </td>
                    <td style={{ color: flowColor(row.netFlowUsdM) }}>
                      {row.netFlowUsdM > 0 ? 'Net inflow' : row.netFlowUsdM < 0 ? 'Net outflow' : 'Neutral'}
                    </td>
                  </tr>
                ))}
                {!rows.length && (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', padding: '24px' }}>
                      {error || (loading ? 'Loading Ethereum ETF data…' : 'No Ethereum ETF flow data is available yet.')}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.bottom_card}>
          <div className="row align-items-center gy-4">
            <div className="col-lg-4 col-md-6">
              <div className={styles.feature_item}>
                <div className={styles.feature_icon}><EthereumIcon /></div>
                <div>
                  <h4 className={styles.feature_title}>Aggregated ETF Data</h4>
                  <p className={styles.feature_desc}>Combined Ethereum spot ETF flow values.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.feature_item}>
                <div className={styles.feature_icon}><ChartUpIcon /></div>
                <div>
                  <h4 className={styles.feature_title}>Flow History</h4>
                  <p className={styles.feature_desc}>
                    {data ? ` ${flows.length} trading days  available ${data.windowDays}-day history` : 'Recent daily flow history will appear here'}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.feature_item}>
                <div className={styles.feature_icon}><DatabaseIcon /></div>
                <div>
                  <h4 className={styles.feature_title}>Data Update</h4>
                  <p className={styles.feature_desc}>
                    {data?.updatedAt
                      ? `Updated ${new Date(data.updatedAt).toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'medium', timeStyle: 'short' })} UTC`
                      : error || 'Data refreshes automatically'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
