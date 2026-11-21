import Link from "next/link";
import styles from "../corporate/corporate.module.css";

const steps = [
  { number: "01", title: "Spot Ethereum ETFs", copy: "Track spot Ethereum ETFs from leading issuers in real time" },
  { number: "02", title: "Real-Time ETF Flows", copy: "Track net inflows and outflows across spot Ethereum ETFs" },
  { number: "03", title: "Institutional Analytics", copy: "Synchronized pricing data refreshed every 30 seconds" },
];

export default function EtfOurApproach() {
  return (
    <section className={`${styles.page} ${styles.approach}`} id="about">
      <div className={styles.approachGrid}>
        <div className={styles.approachIntro}>
          <p className={styles.eyebrow}>ETF Approach</p>
          <h2 className={styles.approachTitle}>Institutional Transparency<br />Across Spot Markets</h2>
          <p style={{ textAlign: "justify", fontSize: "12px" }} className={styles.approachCopy}>
            Real-time tracking of US Ethereum Spot ETFs with market insights tailored for investors</p>
          <Link className={styles.textLink} href="#etf-flows">Discover ETF flows &nbsp; →</Link>
        </div>
        {steps.map(({ number, title, copy }) => (
          <article className={styles.approachItem} key={number}>
            <p className={styles.step}>{number}</p><h3>{title}</h3><p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
