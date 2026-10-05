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
        <div className="row align-items-start mb-4">
          <div className="col-lg-8">
            <span className={styles.sub_title}>ETHEREUM FLOW OVERVIEW</span>
            <h2 className={styles.main_title}>
              Ethereum <span className={styles.cyan_text}>ETF Overview</span>
            </h2>
            <p className={styles.description}>
              Aggregated Ethereum spot ETF activity and live ETH market data.
            </p>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className={styles.tagline_box}>
              <p className={styles.tagline_item}>ETHEREUM SPOT ETFS</p>
              <p className={styles.tagline_item}>AGGREGATED NET FLOWS</p>
              <p className={styles.tagline_item}>LIVE ETH PRICE</p>
            </div>
          </div>
        </div>

        <div className={styles.top_controls_row}>
          <div className={styles.metric_group}>
            <div className={styles.metric_pill}>
              <div className={styles.metric_icon}><DatabaseIcon /></div>
              <div>
                <span className={styles.metric_label}>Latest Daily Flow</span>
                <span className={styles.metric_val} style={{ color: flowColor(latest?.netFlowUsdM ?? 0) }}>
                  {formatFlow(latest?.netFlowUsdM)}
                </span>
              </div>
            </div>
            <div className={styles.metric_pill}>
              <div className={styles.metric_icon}><ChartUpIcon /></div>
              <div>
                <span className={styles.metric_label}>{data ? `${data.windowDays}-Day Net Flow` : 'Period Net Flow'}</span>
                <span className={styles.metric_val} style={{ color: flowColor(windowTotal) }}>
                  {data ? formatFlow(windowTotal) : '—'}
                </span>
              </div>
            </div>
            <div className={styles.metric_pill}>
              <div className={styles.metric_icon}><PieChartIcon /></div>
              <div>
                <span className={styles.metric_label}>ETH Spot Price</span>
                <span className={styles.metric_val}>
                  {data?.price
                    ? `$${data.price.priceUsd.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
                    : '—'}
                </span>
              </div>
            </div>
          </div>
          {data?.price && (
            <div className={styles.view_switcher}>
              <span className={styles.view_btn} style={{ color: flowColor(data.price.change24hPct) }}>
                {data.price.change24hPct >= 0 ? '+' : ''}{data.price.change24hPct}% (24h)
              </span>
            </div>
          )}
        </div>

        <div className={styles.main_card}>
          <div className={styles.table_responsive}>
            <table className={styles.etf_table}>
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>#</th>
                  <th>Date (UTC)</th>
                  <th>Asset</th>
                  <th style={{ textAlign: 'right' }}>Aggregated Net Flow (USD millions)</th>
                  <th>Daily Direction</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.date}>
                    <td style={{ color: '#64748B', fontWeight: '600' }}>{index + 1}</td>
                    <td style={{ color: '#E2E8F0', fontWeight: '600' }}>{row.date}</td>
                    <td><span className={styles.ticker_badge}>ETH</span></td>
                    <td style={{ textAlign: 'right', color: flowColor(row.netFlowUsdM), fontWeight: '600' }}>
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
                  <p className={styles.feature_desc}>Flow values represent the combined Ethereum spot ETF market, not individual funds.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.feature_item}>
                <div className={styles.feature_icon}><ChartUpIcon /></div>
                <div>
                  <h4 className={styles.feature_title}>Flow History</h4>
                  <p className={styles.feature_desc}>
                    {data ? `Showing ${flows.length} trading days in the available ${data.windowDays}-day history.` : 'Recent daily flow history will appear here.'}
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
                      ? `Updated ${new Date(data.updatedAt).toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'medium', timeStyle: 'short' })} UTC.`
                      : error || 'Data refreshes automatically.'}
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
