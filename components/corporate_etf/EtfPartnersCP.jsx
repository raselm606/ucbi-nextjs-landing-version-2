import Partnerblack from "../corporate/Partnerblack/Partnerblack";
import styles from "../corporate/corporate.module.css";

const EtfPartnersCP = () => {
  return (
    <section className={`${styles.page} ${styles.partners}`} aria-label="Our partners">
      <span className={styles.partnerLabel}>OUR PARTNERS</span>
      <div className={styles.partnerContent}>
        <Partnerblack />
      </div>
    </section>
  );
};

export default EtfPartnersCP;
