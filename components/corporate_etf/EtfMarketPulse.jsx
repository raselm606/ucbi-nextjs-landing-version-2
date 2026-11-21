import styles from './EtfMarketPulse.module.css';

const highlights = [
  { value: '11', label: 'Tracked ETF products', detail: 'Daily ETF flow data for each tracked issuer' },
  { value: 'ETH / USD', label: 'Flexible reporting', detail: 'Switch between ether and dollar values' },
  { value: 'Daily', label: 'Capital flow view', detail: 'See inflows outflows and net totals' },
];

export default function EtfMarketPulse() {
  return (
    <section className={styles.pulse} aria-labelledby="etf-market-pulse-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>ETF MARKET PULSE</p>
          <h2 id="etf-market-pulse-title">
            Follow the capital <span>behind Ethereum</span>
          </h2>
          <p className={styles.copy}>
           Monitor daily net flows for spot Ethereum ETFs by issuer and across all tracked funds
          </p>
        </div>
        <div className={styles.highlights}>
          {highlights.map(({ value, label, detail }, index) => (
            <article className={styles.item} key={label}>
              <span className={styles.index}>0{index + 1}</span>
              <strong className={styles.value}>{value}</strong>
              <h3>{label}</h3>
              <p>{detail}</p>
              <span className={styles.accent} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
