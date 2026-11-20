import Link from "next/link";
import styles from "../corporate/corporate.module.css";

const steps = [
  { number: "01", title: "Ethereum Spot ETFs", copy: "Real-time tracking of top issuers." },
  { number: "02", title: "Real-Time Inflows", copy: "Net creation and redemption flows." },
  { number: "03", title: "Institutional Analytics", copy: "Synchronized 30s pricing feeds." },
];

export default function EtfOurApproach() {
  return (
    <section className={`${styles.page} ${styles.approach}`} id="about">
      <div className={styles.approachGrid}>
        <div className={styles.approachIntro}>
          <p className={styles.eyebrow}>ETF Approach</p>
          <h2 className={styles.approachTitle}>Institutional Transparency<br />Across Spot Markets</h2>
          <p style={{ textAlign: "justify", fontSize: "12px" }} className={styles.approachCopy}>Real-time tracking of US Ethereum Spot ETFs with market insights tailored for investors.</p>
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
