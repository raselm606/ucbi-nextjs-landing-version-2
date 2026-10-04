'use client';

import { useState } from 'react';
import styles from './EtfFlow.module.css';
import { useCryptoEtfData } from './CryptoEtfDataProvider';

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0cc0df" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const EthereumIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35zm.056-17.97l-7.37 12.25 7.37 4.36 7.37-4.36L12 0z" />
  </svg>
);

const ChartBarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const DiamondIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 2 9 12 22 22 9 12 2" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const columns = [
  { key: 'grayscale', name: 'ETHE', provider: 'Grayscale' },
  { key: 'grayscaleCrypto', name: 'ETH', provider: 'Grayscale' },
  { key: 'blackrock', name: 'ETHA', provider: 'BlackRock' },
  { key: 'blackrock2', name: 'ETHB', provider: 'BlackRock' },
  { key: 'bitwise', name: 'ETHW', provider: 'Bitwise' },
  { key: 'fidelity', name: 'FETH', provider: 'Fidelity' },
  { key: 'vanEck', name: 'ETHV', provider: 'VanEck' },
  { key: 'franklin', name: 'EZET', provider: 'Franklin' },
  { key: 'twentyOneShares', name: 'TETH', provider: '21Shares' },
  { key: 'invesco', name: 'QETH', provider: 'Invesco' },
  { key: 'morganStanleyEth', name: 'MS ETH', provider: 'Morgan Stanley' },
];

const getValueClass = (value) => {
  if (value < 0) return styles.val_red;
  if (value > 0) return styles.val_green;
  return styles.val_zero;
};

const formatFlow = (value, row, currency) => {
  const amountUsdM = Number(value ?? 0);
  if (!amountUsdM) return '+0';

  if (currency === 'USD') {
    return `${amountUsdM > 0 ? '+' : '−'}$${Math.abs(amountUsdM).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}M`;
  }

  const ethAmount = row.ethPrice > 0 ? amountUsdM * 1_000_000 / row.ethPrice : amountUsdM * 1_000;
  const valueText = Math.abs(ethAmount) >= 1_000
    ? `${(Math.abs(ethAmount) / 1_000).toFixed(2)}K`
    : Math.abs(ethAmount).toLocaleString('en-US', { maximumFractionDigits: 2 });
  return `${amountUsdM > 0 ? '+' : '−'}${valueText}`;
};

export default function EtfFlow() {
  const [currency, setCurrency] = useState('ETH');
  const { data, error, loading } = useCryptoEtfData();
  const hasIssuerBreakdown = Boolean(data?.hasIssuerBreakdown);
  const rows = [...(data?.issuerFlows ?? [])].slice(-7).reverse();
  const lastUpdated = rows[0]?.date ?? data?.updatedAt;

  return (
    <section className={styles.etf_flow_section}>
      <div className={`container cline ${styles.section_padding_custom}`}>
        <div className="row align-items-start mb-4">
          <div className="col-lg-8">
            <span className={styles.sub_title}>MARKET INSIGHTS</span>
            <h2 className={styles.main_title}>
              Ethereum <span className={styles.cyan_text}>ETF Flows</span>
            </h2>
            <p className={styles.description}>
              Track daily inflows and outflows for each Ethereum spot ETF, with a combined total.
              Stay informed with institutional capital trends and market momentum.
            </p>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className={styles.tagline_box}>
              <h4 className={styles.tagline_title}>ETHEREUM ETFS</h4>
              <p className={styles.tagline_item}>MORE LIQUIDITY</p>
              <p className={styles.tagline_item}>MORE INSTITUTIONS</p>
              <p className={styles.tagline_item}>A STRONGER ECOSYSTEM</p>
            </div>
          </div>
        </div>

        <div className={styles.main_card}>
          <div className={styles.card_header}>
            <div className={styles.header_info}>
              <div className={styles.eth_icon_badge}><EthereumIcon /></div>
              <div>
                <h3 className={styles.header_title}>Net Total Flow of Ethereum Spot ETF ({currency})</h3>
                <p className={styles.header_subtitle}>
                  Last Update (UTC): {lastUpdated || 'Loading'}
                </p>
              </div>
            </div>
            <div className={styles.currency_switcher}>
              {['ETH', 'USD'].map((unit) => (
                <button
                  key={unit}
                  onClick={() => setCurrency(unit)}
                  className={`${styles.switch_btn} ${currency === unit ? styles.switch_active : ''}`}
                  aria-pressed={currency === unit}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.table_responsive}>
            <table className={styles.etf_table}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <CalendarIcon /> Date (UTC)
                    </span>
                  </th>
                  {hasIssuerBreakdown && columns.map((column) => (
                    <th key={column.key} style={{ textAlign: 'center' }}>
                      {column.name}
                      <span className={styles.sub_name}>{column.provider}</span>
                    </th>
                  ))}
                  <th style={{ textAlign: 'center' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.date}>
                    <td style={{ textAlign: 'left' }}>
                      <span className={styles.date_cell}>{row.date}</span>
                    </td>
                    {hasIssuerBreakdown && columns.map((column) => (
                      <td key={column.key} style={{ textAlign: 'center' }} className={getValueClass(row[column.key])}>
                        {formatFlow(row[column.key], row, currency)}
                      </td>
                    ))}
                    <td
                      style={{ textAlign: 'center' }}
                      className={`${styles.total_col} ${getValueClass(row.total ?? row.netFlowUsdM)}`}
                    >
                      {formatFlow(row.total ?? row.netFlowUsdM, row, currency)}
                    </td>
                  </tr>
                ))}
                {!rows.length && (
                  <tr>
                    <td colSpan={hasIssuerBreakdown ? columns.length + 2 : 2} style={{ textAlign: 'center', padding: '24px' }}>
                      {error || (loading ? 'Loading Ethereum ETF flows…' : 'No ETF flow history is available yet.')}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.bottom_card}>
          <div className="row align-items-center gy-4">
            <div className="col-lg-3 col-md-6">
              <div className={styles.feature_item}>
                <div className={styles.feature_icon}><ChartBarIcon /></div>
                <div>
                  <h4 className={styles.feature_title}>Institutional Capital</h4>
                  <p className={styles.feature_desc}>ETF inflows signal growing institutional interest in Ethereum and its ecosystem.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.feature_item}>
                <div className={styles.feature_icon}><DiamondIcon /></div>
                <div>
                  <h4 className={styles.feature_title}>Market Momentum</h4>
                  <p className={styles.feature_desc}>Consistent inflows support long-term price stability and ecosystem growth.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className={styles.feature_item}>
                <div className={styles.feature_icon}><ShieldIcon /></div>
                <div>
                  <h4 className={styles.feature_title}>Data Transparency</h4>
                  <p className={styles.feature_desc}>Daily fund-level flow data for informed market analysis.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-lg-end text-start">
              <a href="#etf-analytics" className={styles.analytics_btn}>
                View Full ETF Analytics <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
