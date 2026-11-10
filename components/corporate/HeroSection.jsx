import Link from "next/link";
import styles from "./corporate.module.css";

export default function HeroSection() {
  return (
    <section className={`${styles.page} ${styles.hero}`}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>Institutional &nbsp; | &nbsp; Regulated &nbsp; | &nbsp; Global</p>
        <h1 className={styles.heroTitle}>Institutional Access<br />to <span className={styles.accent}>Digital Assets</span></h1>
        <p className={styles.heroCopy}>UCBI is a blockchain private equity holding providing institutional-grade infrastructure, market access and advisory in digital assets.</p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} href="/#solutions">Submit Request <span aria-hidden="true">→</span></Link>
          <Link className={styles.secondaryButton} href="/#about">About UCBI</Link>
        </div>
      </div>
    </section>
  );
}
