'use client';

import { useMemo, useState } from 'react';
import styles from './SpotEtf.module.css';
import { useCryptoEtfData } from './CryptoEtfDataProvider';
import {
  ResponsiveContainer, BarChart, Bar, ComposedChart, Line, XAxis, YAxis,
  Tooltip, CartesianGrid, Cell,
} from 'recharts';

const CalendarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0cc0df" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

const LineChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const ChartBarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const asEthThousands = (amountUsdM, priceUsd) =>
  priceUsd > 0 ? Number(amountUsdM || 0) * 1000 / priceUsd : Number(amountUsdM || 0);
const asDisplayFlow = (amount, priceUsd, currency) =>
  currency === 'ETH' ? asEthThousands(amount, priceUsd) : Number(amount || 0);
const axisLabel = (value, currency) => currency === 'ETH'
  ? value.toLocaleString('en-US', { maximumFractionDigits: 1 }) + 'K'
  : (value < 0 ? '−' : '') + '$' + Math.abs(value).toLocaleString('en-US', { maximumFractionDigits: 0 }) + 'M';
const formatDate = (date) => new Date(date + 'T00:00:00Z').toLocaleDateString('en-US', {
  month: 'short', day: 'numeric', timeZone: 'UTC',
});

function FlowChartTooltip({ active, payload, currency = 'USD' }) {
  if (!active || !payload?.length) return null;

  const date = payload[0]?.payload?.date ?? payload[0]?.payload?.label ?? '';

  return (
    <div style={{ background: '#081830', border: '1px solid #0cc0df', borderRadius: 8, padding: '10px 12px' }}>
      <div style={{ color: '#fff', marginBottom: 6 }}>{date}</div>
      {payload.map((entry) => {
        const isPrice = entry.dataKey === 'price';
        const label = isPrice ? 'ETH price' : 'Net inflow';
        const value = isPrice
          ? '$' + Number(entry.value).toLocaleString('en-US', { maximumFractionDigits: 2 })
          : axisLabel(Number(entry.value), currency) + (currency === 'ETH' ? ' ETH' : '');

        return (
          <div key={entry.dataKey} style={{ color: '#fff' }}>
            {label}: <span style={{ color: isPrice ? '#fff' : '#0cc0df' }}>{value}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function SpotEtf() {
  const [currencyLeft, setCurrencyLeft] = useState('ETH');
  const [currencyRight, setCurrencyRight] = useState('ETH');
  const { data, error, loading } = useCryptoEtfData();
  const issuerFlows = data?.issuerFlows;
  const latestDate = issuerFlows?.at(-1)?.date ?? data?.flows?.at(-1)?.date;

  const dailyData = useMemo(() => {
    const rows = issuerFlows?.length ? issuerFlows : (data?.flows ?? []);
    return rows.map((row) => ({
      date: row.date,
      label: formatDate(row.date),
      value: asDisplayFlow(
        row.total ?? row.netFlowUsdM,
        row.ethPrice ?? row.priceUsd,
        currencyLeft,
      ),
    }));
  }, [data, issuerFlows, currencyLeft]);

  const trendData = useMemo(() => {
    const rows = issuerFlows?.length ? issuerFlows : (data?.flows ?? []);
    return rows.map((row) => ({
      date: row.date,
      inflow: asDisplayFlow(row.total ?? row.netFlowUsdM, row.ethPrice ?? row.priceUsd, currencyRight),
      price: row.ethPrice ?? row.priceUsd ?? null,
    }));
  }, [data, issuerFlows, currencyRight]);

  const priceText = data?.price
    ? 'ETH spot: $' + data.price.priceUsd.toLocaleString('en-US', { maximumFractionDigits: 2 }) +
      (data.price.change24hPct == null ? '' : ' (' + (data.price.change24hPct >= 0 ? '+' : '') + data.price.change24hPct + '% / 24h)')
    : error || (loading ? 'Loading ETH spot price…' : 'ETH spot price unavailable.');
  const hasHistoricalPrice = trendData.some((point) => point.price != null);

  return (
    <section className={styles.spot_etf_section}>
      <div className={'container cline ' + styles.section_padding_custom}>
        <div className="row align-items-start mb-4">
          <div className="col-lg-8">
            <span className={styles.sub_title}>MARKET INSIGHTS</span>
            <h2 className={styles.main_title}>Ethereum <span className={styles.cyan_text}>Spot ETF Net Inflow</span></h2>
            <p className={styles.description}>Compare daily fund flows and follow the relationship between Ethereum ETF activity and ETH price.</p>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className={styles.tagline_box}>
              <div className={styles.tagline_line} />
              <p className={styles.tagline_item}>INSTITUTIONAL FLOWS</p>
              <p className={styles.tagline_item}>FUND-LEVEL ACTIVITY</p>
              <p className={styles.tagline_item}>ETHEREUM ECOSYSTEM</p>
            </div>
          </div>
        </div>

        <div className="row gy-4 mb-4">
          <div className="col-lg-6">
            <div className={styles.chart_card}>
              <div className={styles.card_header}>
                <div className={styles.header_left}>
                  <div className={styles.icon_badge}><EthereumIcon /></div>
                  <div>
                    <h3 className={styles.header_title}>Daily Ethereum Spot ETF Net Inflow</h3>
                    <p className={styles.header_subtitle}><CalendarIcon /> {latestDate ? 'Latest update (UTC): ' + latestDate + ' · ' + dailyData.length + ' days' : 'Daily net flow'}</p>
                  </div>
                </div>
                <div className={styles.header_controls}>
                  <div className={styles.currency_switcher}>
                    {['ETH', 'USD'].map((unit) => (
                      <button key={unit} onClick={() => setCurrencyLeft(unit)} className={styles.switch_btn + ' ' + (currencyLeft === unit ? styles.switch_active : '')} aria-pressed={currencyLeft === unit}>{unit}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.chart_wrapper}>
                {dailyData.length ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyData} margin={{ top: 20, right: 10, left: -20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" vertical={false} />
                      <XAxis dataKey="label" stroke="#64748B" tick={{ fill: '#94A3B8', fontSize: 10 }} tickLine={false} axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }} minTickGap={14} />
                      <YAxis stroke="#64748B" tick={{ fill: '#94A3B8', fontSize: 11 }} tickLine={false} axisLine={false} tickFormatter={(value) => axisLabel(value, currencyLeft)} />
                      <Tooltip content={<FlowChartTooltip currency={currencyLeft} />} cursor={{ fill: 'rgba(12, 192, 223, 0.05)' }} />
                      <Bar dataKey="value" maxBarSize={18} radius={[3, 3, 0, 0]}>
                        {dailyData.map((entry) => <Cell key={entry.date} fill={entry.value >= 0 ? '#00e676' : '#ff4d4d'} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                ) : <div className={styles.header_subtitle} style={{ padding: '24px' }}>{error || (loading ? 'Loading ETF flows…' : 'No ETF flow data is available yet.')}</div>}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.chart_card}>
              <div className={styles.card_header}>
                <div className={styles.header_left}>
                  <div className={styles.icon_badge}><LineChartIcon /></div>
                  <div>
                    <h3 className={styles.header_title}>Total Ethereum Spot ETF Net Inflow</h3>
                    <p className={styles.header_subtitle}><CalendarIcon /> {data ? data.windowDays + '-day history · ' + priceText : priceText}</p>
                  </div>
                </div>
                <div className={styles.header_controls}>
                  <div className={styles.currency_switcher}>
                    {['ETH', 'USD'].map((unit) => (
                      <button key={unit} onClick={() => setCurrencyRight(unit)} className={styles.switch_btn + ' ' + (currencyRight === unit ? styles.switch_active : '')} aria-pressed={currencyRight === unit}>{unit}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-2">
                <div className={styles.legend_box}>
                  <div className={styles.legend_item}><span className={styles.legend_square_cyan} /><span>Net inflow</span></div>
                  {hasHistoricalPrice && <div className={styles.legend_item}><span className={styles.legend_square_yellow} /><span>ETH price</span></div>}
                </div>
              </div>
              <div className={styles.chart_wrapper}>
                {trendData.length ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={trendData} margin={{ top: 20, right: 10, left: -10, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" vertical={false} />
                      <XAxis dataKey="date" stroke="#64748B" tick={{ fill: '#94A3B8', fontSize: 10 }} tickLine={false} axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }} minTickGap={20} />
                      <YAxis yAxisId="left" stroke="#64748B" tick={{ fill: '#94A3B8', fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(value) => axisLabel(value, currencyRight)} />
                      {hasHistoricalPrice && <YAxis yAxisId="right" orientation="right" stroke="#64748B" tick={{ fill: '#94A3B8', fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(value) => '$' + value} />}
                      <Tooltip content={<FlowChartTooltip currency={currencyRight} />} />
                      <Bar yAxisId="left" dataKey="inflow" maxBarSize={14}>
                        {trendData.map((entry) => <Cell key={entry.date} fill={entry.inflow >= 0 ? '#00e676' : '#ff4d4d'} />)}
                      </Bar>
                      {hasHistoricalPrice && <Line yAxisId="right" type="monotone" dataKey="price" stroke="#f59e0b" strokeWidth={2} dot={false} connectNulls />}
                    </ComposedChart>
                  </ResponsiveContainer>
                ) : <div className={styles.header_subtitle} style={{ padding: '24px' }}>{error || (loading ? 'Loading flow history…' : 'No flow history is available yet.')}</div>}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom_card}>
          <div className="row align-items-center gy-4">
            <div className="col-lg-4 col-md-6"><div className={styles.feature_item}><div className={styles.feature_icon}><ChartBarIcon /></div><div><h4 className={styles.feature_title}>Institutional Capital</h4><p className={styles.feature_desc}>Track each issuer’s daily net creations and redemptions.</p></div></div></div>
            <div className="col-lg-4 col-md-6"><div className={styles.feature_item}><div className={styles.feature_icon}><EthereumIcon /></div><div><h4 className={styles.feature_title}>ETH Spot Price</h4><p className={styles.feature_desc}>{priceText}</p></div></div></div>
            <div className="col-lg-4 col-md-6"><div className={styles.feature_item}><div className={styles.feature_icon}><CalendarIcon /></div><div><h4 className={styles.feature_title}>Recent History</h4><p className={styles.feature_desc}>Daily ETF flows and ETH prices over the latest available month.</p></div></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
