'use client';
import { useState, useEffect } from 'react';
import styles from './SpotEtf.module.css';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from 'recharts';

// SVG Icons for clean, 100% reliable rendering
const CalendarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0cc0df" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

const LineChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
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

const SpotEtf = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currencyLeft, setCurrencyLeft] = useState('ETH');
  const [currencyRight, setCurrencyRight] = useState('ETH');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Left Chart Data (Daily Ethereum Spot ETF Net Inflow)
  const dailyData = [
    { name: 'ETHA', value: 0 },
    { name: 'ETHB', value: 0 },
    { name: 'ETHW', value: 0 },
    { name: 'ETHV', value: 0 },
    { name: 'EZET', value: 0 },
    { name: 'TETH', value: 0 },
    { name: 'QETH', value: 0 },
    { name: 'ETHE', value: -2.80 },
    { name: 'ETH', value: -9.53 },
    { name: 'FETH', value: -9.94 },
  ];

  // Right Chart Data (Total Ethereum Spot ETF Net Inflow & Price Trend)
  const totalTrendData = [
    { date: '2024-07-23', inflow: 120, price: 3400 },
    { date: '2024-09-15', inflow: -50, price: 2700 },
    { date: '2024-11-21', inflow: 180, price: 3900 },
    { date: '2025-01-10', inflow: -110, price: 2200 },
    { date: '2025-03-24', inflow: 80, price: 2900 },
    { date: '2025-05-15', inflow: -80, price: 2600 },
    { date: '2025-07-23', inflow: 260, price: 4750 },
    { date: '2025-09-10', inflow: -140, price: 3100 },
    { date: '2025-11-24', inflow: 90, price: 3300 },
    { date: '2026-02-01', inflow: 50, price: 3200 },
    { date: '2026-04-01', inflow: -60, price: 2800 },
    { date: '2026-06-15', inflow: 110, price: 3600 },
    { date: '2026-08-06', inflow: -75, price: 2900 },
  ];

  return (
    <section className={styles.spot_etf_section}>
      <div className={`container cline ${styles.section_padding_custom}`}>
        {/* Header Row */}
        <div className="row align-items-start mb-4">
          <div className="col-lg-8">
            <span className={styles.sub_title}>MARKET INSIGHTS</span>
            <h2 className={styles.main_title}>
              Ethereum <span className={styles.cyan_text}>Spot ETF Net Inflow</span>
            </h2>
            <p className={styles.description}>
              Track real-time inflows and outflows across major Ethereum ETFs. <br />
              Stay informed with institutional capital trends and market momentum.
            </p>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className={styles.tagline_box}>
              <div className={styles.tagline_line}></div>
              <p className={styles.tagline_item}>INSTITUTIONAL FLOWS</p>
              <p className={styles.tagline_item}>DRIVE A STRONGER</p>
              <p className={styles.tagline_item}>ETHEREUM ECOSYSTEM</p>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="row gy-4 mb-4">
          {/* Left Chart Box */}
          <div className="col-lg-6">
            <div className={styles.chart_card}>
              <div className={styles.card_header}>
                <div className={styles.header_left}>
                  <div className={styles.icon_badge}>
                    <EthereumIcon />
                  </div>
                  <div>
                    <h3 className={styles.header_title}>
                      Daily Ethereum Spot ETF Net Inflow
                    </h3>
                    <p className={styles.header_subtitle}>
                      <CalendarIcon /> Last update(UTC) : 2026-09-30
                    </p>
                  </div>
                </div>

                <div className={styles.header_controls}>
                  <div className={styles.currency_switcher}>
                    <button
                      onClick={() => setCurrencyLeft('ETH')}
                      className={`${styles.switch_btn} ${
                        currencyLeft === 'ETH' ? styles.switch_active : ''
                      }`}
                    >
                      ETH
                    </button>
                    <button
                      onClick={() => setCurrencyLeft('USD')}
                      className={`${styles.switch_btn} ${
                        currencyLeft === 'USD' ? styles.switch_active : ''
                      }`}
                    >
                      USD
                    </button>
                  </div>
                </div>
              </div>

              {/* Bar Chart Container */}
              <div className={styles.chart_wrapper}>
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={dailyData}
                      margin={{ top: 20, right: 10, left: -20, bottom: 20 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255, 255, 255, 0.05)"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="name"
                        stroke="#64748B"
                        tick={{ fill: '#94A3B8', fontSize: 11 }}
                        tickLine={false}
                        axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                      />
                      <YAxis
                        stroke="#64748B"
                        tick={{ fill: '#94A3B8', fontSize: 11 }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(val) => `${val === 0 ? '0' : val + 'K'}`}
                        domain={[-10, 0]}
                      />
                      <Tooltip
                        cursor={{ fill: 'rgba(12, 192, 223, 0.05)' }}
                        contentStyle={{
                          background: '#081830',
                          border: '1px solid #0cc0df',
                          borderRadius: '8px',
                          color: '#fff',
                        }}
                        formatter={(val) => [`${val}K ETH`, 'Net Inflow']}
                      />
                      <Bar dataKey="value" maxBarSize={36} radius={[0, 0, 4, 4]}>
                        {dailyData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.value < 0 ? '#ff4d4d' : '#0cc0df'}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>

          {/* Right Chart Box */}
          <div className="col-lg-6">
            <div className={styles.chart_card}>
              <div className={styles.card_header}>
                <div className={styles.header_left}>
                  <div className={styles.icon_badge}>
                    <LineChartIcon />
                  </div>
                  <div>
                    <h3 className={styles.header_title}>
                      Total Ethereum Spot ETF Net Inflow
                    </h3>
                    <p className={styles.header_subtitle}>
                      <CalendarIcon /> Last update(UTC) : 2026-09-30
                    </p>
                  </div>
                </div>

                <div className={styles.header_controls}>
                  <div className={styles.currency_switcher}>
                    <button
                      onClick={() => setCurrencyRight('ETH')}
                      className={`${styles.switch_btn} ${
                        currencyRight === 'ETH' ? styles.switch_active : ''
                      }`}
                    >
                      ETH
                    </button>
                    <button
                      onClick={() => setCurrencyRight('USD')}
                      className={`${styles.switch_btn} ${
                        currencyRight === 'USD' ? styles.switch_active : ''
                      }`}
                    >
                      USD
                    </button>
                  </div>

                  <select className={styles.filter_dropdown}>
                    <option value="all">All</option>
                    <option value="1y">1Y</option>
                    <option value="6m">6M</option>
                  </select>
                </div>
              </div>

              {/* Legend Bar */}
              <div className="d-flex justify-content-end mb-2">
                <div className={styles.legend_box}>
                  <div className={styles.legend_item}>
                    <span className={styles.legend_square_cyan}></span>
                    <span>Net Inflow</span>
                  </div>
                  <div className={styles.legend_item}>
                    <span className={styles.legend_square_yellow}></span>
                    <span>ETH Price</span>
                  </div>
                </div>
              </div>

              {/* Dual Composed Chart Container */}
              <div className={styles.chart_wrapper}>
                {isMounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={totalTrendData}
                      margin={{ top: 20, right: 10, left: -10, bottom: 20 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255, 255, 255, 0.05)"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="date"
                        stroke="#64748B"
                        tick={{ fill: '#94A3B8', fontSize: 10 }}
                        tickLine={false}
                        axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                      />
                      <YAxis
                        yAxisId="left"
                        stroke="#64748B"
                        tick={{ fill: '#94A3B8', fontSize: 10 }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(val) => `${val}K`}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#64748B"
                        tick={{ fill: '#94A3B8', fontSize: 10 }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(val) => `$${val}`}
                      />
                      <Tooltip
                        contentStyle={{
                          background: '#081830',
                          border: '1px solid #0cc0df',
                          borderRadius: '8px',
                          color: '#fff',
                        }}
                      />
                      <Bar yAxisId="left" dataKey="inflow" maxBarSize={12}>
                        {totalTrendData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.inflow >= 0 ? '#00e676' : '#ff4d4d'}
                          />
                        ))}
                      </Bar>
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="price"
                        stroke="#f59e0b"
                        strokeWidth={2}
                        dot={false}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
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

export default SpotEtf;
