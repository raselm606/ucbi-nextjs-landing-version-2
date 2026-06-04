import styles from "./BusinessAdvisorySection.module.css";

export default function BusinessAdvisorySection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Card */}
          <div className={`${styles.card} ${styles.darkCard}`}>
            <div className={styles.content}>
              <span className={styles.tag}>Private Investment Structure</span>

              <h3>Business Model</h3>

              <p>
                UCBI Business Model provides a well-structured overview of the
                Ethereum-focused treasury and private investment platform. It
                outlines the diversified allocation governance framework and
                risk principles supporting disciplined multi-asset growth,
                long-term sustainability, and institutional alignment.
              </p>

              <a href="#" className={`${styles.btn} ${styles.cyanBtn}`}>
                <DownloadIcon />
                <span>Download </span>
              </a>
            </div>
          </div>

          {/* Center Visual */}
          <div className={styles.centerVisual}>
            <div className={styles.verticalLine}></div>
            <div className={styles.glowDot}></div>
          </div>

          {/* Right Card */}
          <div className={`${styles.card} ${styles.lightCard}`}>
            <div className={styles.content}>
              <span className={styles.tag}>Strategic Advisory</span>

              <h3>Partnership Advisory</h3>

              <p>
                Strategy advisory services are provided to partners and
                shareholders through formal appointments and structured
                engagements. Our advisory scope covers treasury structuring,
                blockchain integration, corporate finance strategy, and
                long-term development delivered within a strictly private and
                confidential framework.
              </p>

              <a href="#" className={`${styles.btn} ${styles.navyBtn}`}>
                <AdvisoryIcon />
                <span>Request </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10L12 15L17 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 20H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AdvisoryIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 18V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 15L10.5 12.5L13 14.5L16.5 9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9.5H16.5V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}