import Partnerblack from "./Partnerblack/Partnerblack";
import styles from "./corporate.module.css";

const PartnersCP = () => {
  return (
    <section className={`${styles.page} ${styles.partners}`} aria-label="Our partners">
      <span className={styles.partnerLabel}>OUR PARTNERS</span>
      <div className={styles.partnerContent}>
        <Partnerblack />
      </div>
    </section>
  );
}

export default PartnersCP
