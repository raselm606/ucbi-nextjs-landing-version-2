import Link from "next/link";
import CorporateMembershipForm from "../corporate/CorporateMembershipForm";
import styles from "../corporate/corporate.module.css";

export default function EtfHeroSection() {
  return (
    <section className={`${styles.page} ${styles.hero}`}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopyColumn}>
          <p className={styles.eyebrow}>Institutional &nbsp; | &nbsp; Ethereum Spot &nbsp; | &nbsp; Real-Time Flows</p>
          <h1 className={styles.heroTitle}>Ethereum Spot ETF Insights <br /><span className={styles.accent}>Real-Time Market Flows</span></h1>
          <p className={styles.heroCopy}>
            Track spot Ethereum ETFs and analyse institutional fund <br /> flows alongside clear digital asset market data</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#etf-flows">Explore ETF Flows <span aria-hidden="true">→</span></Link>
            <Link className={styles.secondaryButton} href="#top-exchanges">View Live Market <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <CorporateMembershipForm />
      </div>
    </section>
  );
}
