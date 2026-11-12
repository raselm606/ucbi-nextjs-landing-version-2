import Link from "next/link";
import CorporateMembershipForm from "./CorporateMembershipForm";
import styles from "./corporate.module.css";

export default function HeroSection() {
  return (
    <section className={`${styles.page} ${styles.hero}`}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopyColumn}>
          <p className={styles.eyebrow}>Institutional &nbsp; | &nbsp; Private &nbsp; | &nbsp; Global</p>
          <h1 className={styles.heroTitle}>Institutional Access<br />to <span className={styles.accent}>Digital Assets</span></h1>
          <p className={styles.heroCopy}>UCBI is a blockchain private equity holding providing institutional-grade infrastructure <br /> market access and advisory in digital assets</p>
          <div className={styles.heroActions}>
            <button className={styles.primaryButton} type="button" data-bs-toggle="modal" data-bs-target="#corporate-membership-modal">Submit Inquiry <span aria-hidden="true">→</span></button>
            <Link className={styles.secondaryButton} href="#">Acquire UCBI</Link>
          </div>
        </div>
        <CorporateMembershipForm />
      </div>
    </section>
  );
}
