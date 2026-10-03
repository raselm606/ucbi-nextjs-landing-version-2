'use client';
import { useState } from 'react';
import styles from './EtfOverview.module.css';

// SVG Icon components for 100% reliability and compatibility
const DatabaseIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
  </svg>
);

const ChartUpIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const PieChartIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
  </svg>
);

const FilterIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const DollarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const LineChartIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const RefreshIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"></polyline>
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
  </svg>
);

const UsersIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const EthereumIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35zm.056-17.97l-7.37 12.25 7.37 4.36 7.37-4.36L12 0z"/>
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

const ArrowDownRed = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ff5252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

const EtfOverview = () => {
  const [viewMode, setViewMode] = useState('Overview');

  const tableData = [
    {
      id: 1,
      ticker: 'ETHA',
      name: 'iShares Ethereum Trust ETF',
      price: '$20.12',
      changeVal: '-0.16',
      changePct: '-0.79%',
      volumeUSD: '$412.30M',
      volumeShares: '20.33M',
      turnover: '4.411%',
      sharesOut: '464.56M',
      aum: '$8.61B',
      marketCap: '$9.35B',
      expense: '0.25%',
      status: 'Closed',
    },
    {
      id: 2,
      ticker: 'ETH',
      name: 'Grayscale Ethereum Staking Mini ETF Shares',
      price: '$25.49',
      changeVal: '-0.2',
      changePct: '-0.78%',
      volumeUSD: '$70.73M',
      volumeShares: '2.76M',
      turnover: '2.955%',
      sharesOut: '93.90M',
      aum: '$2.20B',
      marketCap: '$2.39B',
      expense: '0.15%',
      status: 'Closed',
    },
    {
      id: 3,
      ticker: 'ETHE',
      name: 'Grayscale Ethereum Staking ETF Shares',
      price: '$21.43',
      changeVal: '-0.18',
      changePct: '-0.83%',
      volumeUSD: '$48.43M',
      volumeShares: '2.24M',
      turnover: '2.438%',
      sharesOut: '92.70M',
      aum: '$1.83B',
      marketCap: '$1.99B',
      expense: '2.50%',
      status: 'Closed',
    },
    {
      id: 4,
      ticker: 'FETH',
      name: 'Fidelity Ethereum Fund',
      price: '$26.57',
      changeVal: '-0.2',
      changePct: '-0.75%',
      volumeUSD: '$39.37M',
      volumeShares: '1.47M',
      turnover: '2.609%',
      sharesOut: '56.80M',
      aum: '$1.37B',
      marketCap: '$1.51B',
      expense: '0.25%',
      status: 'Closed',
    },
    {
      id: 5,
      ticker: 'ETHW',
      name: 'Bitwise Ethereum ETF',
      price: '$19.06',
      changeVal: '-0.18',
      changePct: '-0.94%',
      volumeUSD: '$8.27M',
      volumeShares: '431.30K',
      turnover: '2.788%',
      sharesOut: '15.56M',
      aum: '$297.42M',
      marketCap: '$296.57M',
      expense: '0.20%',
      status: 'Closed',
    },
    {
      id: 6,
      ticker: 'ETHV',
      name: 'VanEck Ethereum ETF',
      price: '$38.96',
      changeVal: '-0.3',
      changePct: '-0.76%',
      volumeUSD: '$3.00M',
      volumeShares: '76.72K',
      turnover: '2.284%',
      sharesOut: '3.38M',
      aum: '$131.82M',
      marketCap: '$131.49M',
      expense: '0.20%',
      status: 'Closed',
    },
    {
      id: 7,
      ticker: 'EETH',
      name: 'ProShares Ether ETF',
      price: '$32.16',
      changeVal: '-0.31',
      changePct: '-0.95%',
      volumeUSD: '$2.76M',
      volumeShares: '85.24K',
      turnover: '3.754%',
      sharesOut: '2.29M',
      aum: '$68.15M',
      marketCap: '$73.57M',
      expense: '-',
      status: 'Closed',
    },
    {
      id: 8,
      ticker: 'EZET',
      name: 'Franklin Ethereum ETF',
      price: '$20.2',
      changeVal: '-0.18',
      changePct: '-0.88%',
      volumeUSD: '$710.00K',
      volumeShares: '35.04K',
      turnover: '1.191%',
      sharesOut: '2.95M',
      aum: '$59.74M',
      marketCap: '$59.59M',
      expense: '0.19%',
      status: 'Closed',
    },
    {
      id: 9,
      ticker: 'QETH',
      name: 'Invesco Galaxy Ethereum ETF',
      price: '$26.51',
      changeVal: '-0.25',
      changePct: '-0.93%',
      volumeUSD: '$1.12M',
      volumeShares: '42.14K',
      turnover: '3.744%',
      sharesOut: '1.13M',
      aum: '$29.96M',
      expense: '0.25%',
      status: 'Closed',
    },
  ];

  return (
    <section className={styles.etf_overview_section}>
      <div className={`container cline ${styles.section_padding_custom}`}>
        {/* Header Title & Tagline */}
        <div className="row align-items-start mb-4">
          <div className="col-lg-8">
            <span className={styles.sub_title}>ETF MARKET OVERVIEW</span>
            <h2 className={styles.main_title}>
              Ethereum <span className={styles.cyan_text}>ETF Overview</span>
            </h2>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className={styles.tagline_box}>
              <p className={styles.tagline_item}>INSTITUTIONAL ACCESS</p>
              <p className={styles.tagline_item}>TO ETHEREUM</p>
              <p className={styles.tagline_item}>BUILDS A STRONGER</p>
              <p className={styles.tagline_item}>TOMORROW</p>
            </div>
          </div>
        </div>

        {/* Metric Cards & View Switcher Bar */}
        <div className={styles.top_controls_row}>
          <div className={styles.metric_group}>
            <div className={styles.metric_pill}>
              <div className={styles.metric_icon}>
                <DatabaseIcon />
              </div>
              <div>
                <span className={styles.metric_label}>Total Volume</span>
                <span className={styles.metric_val}>$618.83M</span>
              </div>
            </div>

            <div className={styles.metric_pill}>
              <div className={styles.metric_icon}>
                <ChartUpIcon />
              </div>
              <div>
                <span className={styles.metric_label}>Total Cap</span>
                <span className={styles.metric_val}>$16.59B</span>
              </div>
            </div>

            <div className={styles.metric_pill}>
              <div className={styles.metric_icon}>
                <PieChartIcon />
              </div>
              <div>
                <span className={styles.metric_label}>Total AUM</span>
                <span className={styles.metric_val}>$14.61B</span>
              </div>
            </div>
          </div>

          <div className={styles.view_switcher}>
            <button
              onClick={() => setViewMode('Overview')}
              className={`${styles.view_btn} ${
                viewMode === 'Overview' ? styles.view_active : ''
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setViewMode('Inflows')}
              className={`${styles.view_btn} ${
                viewMode === 'Inflows' ? styles.view_active : ''
              }`}
            >
              Assets Inflows/Outflows
            </button>
          </div>
        </div>

        {/* Main Table Card */}
        <div className={styles.main_card}>
          <div className={styles.table_responsive}>
            <table className={styles.etf_table}>
              <thead>
                <tr>
                  <th style={{ width: '30px' }}>#</th>
                  <th>
                    <span className={styles.th_flex}>
                      <FilterIcon /> Ticker
                    </span>
                  </th>
                  <th>ETF Name</th>
                  <th>
                    <span className={styles.th_flex}>
                      <DollarIcon /> Price
                    </span>
                  </th>
                  <th style={{ textAlign: 'center' }}>
                    <span className={styles.th_flex}>
                      <LineChartIcon /> Price Change
                    </span>
                  </th>
                  <th>
                    <span className={styles.th_flex}>
                      <ChartUpIcon /> Volume
                    </span>
                  </th>
                  <th>
                    <span className={styles.th_flex}>
                      <ChartUpIcon /> Volume
                    </span>
                  </th>
                  <th>
                    <span className={styles.th_flex}>
                      <RefreshIcon /> Turnover Rate
                    </span>
                  </th>
                  <th>
                    <span className={styles.th_flex}>
                      <UsersIcon /> Shares Outstanding
                    </span>
                  </th>
                  <th>
                    <span className={styles.th_flex}>
                      <DatabaseIcon /> AUM
                    </span>
                  </th>
                  <th>
                    <span className={styles.th_flex}>
                      <ChartUpIcon /> MarketCap
                    </span>
                  </th>
                  <th>Expense Ratio</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td style={{ color: '#64748B', fontWeight: '600' }}>
                      {row.id}
                    </td>
                    <td>
                      <span className={styles.ticker_badge}>{row.ticker}</span>
                    </td>
                    <td style={{ color: '#E2E8F0', fontWeight: '600' }}>
                      {row.name}
                    </td>
                    <td style={{ color: '#FFFFFF', fontWeight: '600' }}>
                      {row.price}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={styles.change_red}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                          <ArrowDownRed /> {row.changeVal}
                        </span>
                        <span>{row.changePct}</span>
                      </span>
                    </td>
                    <td style={{ color: '#94A3B8' }}>{row.volumeUSD}</td>
                    <td style={{ color: '#94A3B8' }}>{row.volumeShares}</td>
                    <td style={{ color: '#94A3B8' }}>{row.turnover}</td>
                    <td style={{ color: '#94A3B8' }}>{row.sharesOut}</td>
                    <td style={{ color: '#94A3B8' }}>{row.aum}</td>
                    <td style={{ color: '#94A3B8' }}>{row.marketCap}</td>
                    <td style={{ color: '#94A3B8' }}>{row.expense}</td>
                    <td>
                      <span className={styles.status_badge}>
                        <span className={styles.status_dot}></span> {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Feature Card */}
        <div className={styles.bottom_card}>
          <div className="row align-items-center gy-4">
            <div className="col-lg-3 col-md-6">
              <div className={styles.feature_item}>
                <div className={styles.feature_icon}>
                  <EthereumIcon />
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
                  <ChartUpIcon />
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

export default EtfOverview;
