'use client';
import { useState } from 'react';
import styles from './EtfFlow.module.css';

// SVG Icon components for 100% reliability and compatibility
const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0cc0df" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const EthereumIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35zm.056-17.97l-7.37 12.25 7.37 4.36 7.37-4.36L12 0z"/>
  </svg>
);

const ChartBarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const DiamondIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 9 12 22 22 9 12 2"></polygon>
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const EtfFlow = () => {
  const [currency, setCurrency] = useState('ETH');

  const columns = [
    { key: 'ethe', name: 'ETHE', provider: 'Grayscale' },
    { key: 'eth', name: 'ETH', provider: 'Grayscale' },
    { key: 'etha', name: 'ETHA', provider: 'Blackrock' },
    { key: 'ethb', name: 'ETHB', provider: 'Blackrock' },
    { key: 'ethw', name: 'ETHW', provider: 'Bitwise' },
    { key: 'feth', name: 'FETH', provider: 'Fidelity' },
    { key: 'ethv', name: 'ETHV', provider: 'VanEck' },
    { key: 'ezet', name: 'EZET', provider: 'Franklin' },
    { key: 'teth', name: 'TETH', provider: '21 Shares' },
    { key: 'qeth', name: 'QETH', provider: 'Invesco' },
  ];

  const tableData = [
    {
      date: '2026-09-30',
      ethe: '-2.80K',
      eth: '-9.53K',
      etha: '+0',
      ethb: '+0',
      ethw: '+0',
      feth: '-9.94K',
      ethv: '+0',
      ezet: '+0',
      teth: '+0',
      qeth: '+0',
      total: '-22.26K',
    },
    {
      date: '2026-09-29',
      ethe: '+0',
      eth: '+4.74K',
      etha: '-3.31K',
      ethb: '+0',
      ethw: '+0',
      feth: '-2.49K',
      ethv: '+0',
      ezet: '+0',
      teth: '+0',
      qeth: '+0',
      total: '-1.04K',
    },
    {
      date: '2026-09-28',
      ethe: '+0',
      eth: '+0',
      etha: '+5.73K',
      ethb: '+0',
      ethw: '+0',
      feth: '+0',
      ethv: '+0',
      ezet: '+0',
      teth: '+632.59',
      qeth: '+0',
      total: '+6.36K',
    },
    {
      date: '2026-09-25',
      ethe: '+0',
      eth: '+0',
      etha: '+18.76K',
      ethb: '+11.87K',
      ethw: '+0',
      feth: '+1.75K',
      ethv: '+0',
      ezet: '+0',
      teth: '+0',
      qeth: '+0',
      total: '+32.38K',
    },
    {
      date: '2026-09-24',
      ethe: '+0',
      eth: '+6.63K',
      etha: '+9.99K',
      ethb: '+0',
      ethw: '+0',
      feth: '+8.01K',
      ethv: '+0',
      ezet: '+0',
      teth: '+0',
      qeth: '+0',
      total: '+24.63K',
    },
    {
      date: '2026-09-23',
      ethe: '+1.56K',
      eth: '-1.49K',
      etha: '+18.45K',
      ethb: '+0',
      ethw: '+0',
      feth: '+15.00K',
      ethv: '+1.05K',
      ezet: '+1.09K',
      teth: '+1.45K',
      qeth: '+326.95',
      total: '+37.96K',
    },
    {
      date: '2026-09-22',
      ethe: '+3.75K',
      eth: '+9.84K',
      etha: '+31.75K',
      ethb: '+1.01K',
      ethw: '+0',
      feth: '+12.11K',
      ethv: '+0',
      ezet: '+0',
      teth: '+0',
      qeth: '+0',
      total: '+58.46K',
    },
  ];

  const getValueClass = (val) => {
    if (!val) return '';
    if (val.startsWith('-')) return styles.val_red;
    if (val === '+0') return styles.val_zero;
    if (val.startsWith('+')) return styles.val_green;
    return '';
  };

  return (
    <section className={styles.etf_flow_section}>
      <div className={`container cline ${styles.section_padding_custom}`}>
        {/* Header Section */}
        <div className="row align-items-start mb-4">
          <div className="col-lg-8">
            <span className={styles.sub_title}>MARKET INSIGHTS</span>
            <h2 className={styles.main_title}>
              Ethereum <span className={styles.cyan_text}>ETF Flows</span>
            </h2>
            <p className={styles.description}>
              Track real-time inflows and outflows across major Ethereum ETFs. Stay informed with institutional capital trends and market momentum.
            </p>

            {/* Filter Tabs */}
           
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

        {/* Main ETF Table Card */}
        <div className={styles.main_card}>
          <div className={styles.card_header}>
            <div className={styles.header_info}>
              <div className={styles.eth_icon_badge}>
                <EthereumIcon />
              </div>
              <div>
                <h3 className={styles.header_title}>
                  Net Total Flow of Ethereum Spot ETF (ETH)
                </h3>
                <p className={styles.header_subtitle}>
                  Last Update (UTC): 2026-09-30
                </p>
              </div>
            </div>

            <div className={styles.currency_switcher}>
              <button
                onClick={() => setCurrency('ETH')}
                className={`${styles.switch_btn} ${
                  currency === 'ETH' ? styles.switch_active : ''
                }`}
              >
                ETH
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`${styles.switch_btn} ${
                  currency === 'USD' ? styles.switch_active : ''
                }`}
              >
                USD
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className={styles.table_responsive}>
            <table className={styles.etf_table}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <CalendarIcon /> Date (UTC)
                    </span>
                  </th>
                  {columns.map((col) => (
                    <th key={col.key} style={{ textAlign: 'center' }}>
                      {col.name}
                      <span className={styles.sub_name}>{col.provider}</span>
                    </th>
                  ))}
                  <th style={{ textAlign: 'center' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td style={{ textAlign: 'left' }}>
                      <span className={styles.date_cell}>{row.date}</span>
                    </td>
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        style={{ textAlign: 'center' }}
                        className={getValueClass(row[col.key])}
                      >
                        {row[col.key]}
                      </td>
                    ))}
                    <td
                      style={{ textAlign: 'center' }}
                      className={`${styles.total_col} ${getValueClass(row.total)}`}
                    >
                      {row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Feature Items Card */}
        <div className={styles.bottom_card}>
          <div className="row align-items-center gy-4">
            <div className="col-lg-3 col-md-6">
              <div className={styles.feature_item}>
                <div className={styles.feature_icon}>
                  <ChartBarIcon />
                </div>
                <div>
                  <h4 className={styles.feature_title}>Institutional Capital</h4>
                  <p className={styles.feature_desc}>
                    ETF inflows signal growing institutional interest in Ethereum and its ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className={styles.feature_item}>
                <div className={styles.feature_icon}>
                  <DiamondIcon />
                </div>
                <div>
                  <h4 className={styles.feature_title}>Market Momentum</h4>
                  <p className={styles.feature_desc}>
                    Consistent inflows support long-term price stability and ecosystem growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className={styles.feature_item}>
                <div className={styles.feature_icon}>
                  <ShieldIcon />
                </div>
                <div>
                  <h4 className={styles.feature_title}>Data Transparency</h4>
                  <p className={styles.feature_desc}>
                    Real-time data from leading ETF providers for informed decision making.
                  </p>
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
};

export default EtfFlow;
