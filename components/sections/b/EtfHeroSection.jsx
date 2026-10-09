import Partners from "@/components/sections/Partners_two";
import Button from "@/components/ui/Button";
import Image from "next/image";
import btc_coin from '../../../public/images/btc_coin.png';
import eth_coin from '../../../public/images/eth_coin.png';
import ucbi_coin from '../../../public/images/ucbi_coin.png';
import styles from "./css/Hero.module.css";
import {
  ArrowIcon
} from "./HeroIcons";

const EtfFundIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <path d="M8 3.8h10.8L25 10v17.2a1.8 1.8 0 0 1-1.8 1.8H8a1.8 1.8 0 0 1-1.8-1.8V5.6A1.8 1.8 0 0 1 8 3.8Z" fill="#06275E" stroke="#0787E8" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M18.5 4v5a1.5 1.5 0 0 0 1.5 1.5h4.8" fill="#0A3F83" stroke="#10C8F4" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="m15.5 12-3.2 4.3 3.2 1.8 3.2-1.8-3.2-4.3Zm-3.2 5.1 3.2 5 3.2-5-3.2 1.8-3.2-1.8Z" fill="#12BDEB" stroke="#57E3FA" strokeWidth=".8" strokeLinejoin="round" />
    <path d="M10 24h4M18 24h4" stroke="#168FE8" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const InflowsIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <path d="M6 25V19M13 25V14M20 25V9" stroke="#0AAFE4" strokeWidth="2.2" strokeLinecap="round" />
    <path d="m7 13 6-4 5 1 7-6M20 4h5v5" fill="none" stroke="#56E5F5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 27h22" stroke="#1264B7" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const InstitutionalIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <path d="m4.5 11 11.5-6.5L27.5 11v2H4.5z" fill="#073B70" stroke="#09C6E7" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M8 15v9M13.3 15v9M18.7 15v9M24 15v9" stroke="#55DDF1" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 26h22M7 29h18" stroke="#168AE0" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="16" cy="9" r="1.2" fill="#59E6F7" />
  </svg>
);

const EtfHeroSection = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container cline">
          <div className="row align-items-center min-vh-100">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className={styles.heroContent}>
                <span className={styles.heroLabel}>
                  UCBI ETHEREUM ETF ANALYTICS
                </span>

                <div className={styles.labelLine}></div>

                <h1 className={styles.heroTitle}>
                  Ethereum Spot ETF Insights & <br/> Real-Time Market Flows
                </h1>

                <p className={styles.heroText}>
                  Comprehensive Ethereum ETF tracking institutional inflow analysis <br />
                  and transparent digital asset market data tailored for investors <br />
                  and long term market participants
                </p>

                <div className="d-flex align-items-center gap-3 flex-wrap mt-4">
                  <Button href="#etf-flows" className={styles.primaryBtn}>
                    Explore ETF Flows
                    <span className={styles.btnIcon}>
                      <ArrowIcon />
                    </span>
                  </Button>

                  <Button href="#top-exchanges" className={styles.secondaryBtn}>
                    View Top Exchanges
                    <span className={styles.btnIcon}>
                      <ArrowIcon />
                    </span>
                  </Button>
                </div>

                <div className={styles.featureBox}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>
                      <span className={styles.featureSvg} aria-hidden="true">
                        <EtfFundIcon />
                      </span>
                    </span>
                    <span>Ethereum Spot ETFs</span>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>
                      <span className={styles.featureSvg} aria-hidden="true">
                        <InflowsIcon />
                      </span>
                    </span>
                    <span>Real-Time Inflows</span>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>
                      <span className={styles.featureSvg} aria-hidden="true">
                        <InstitutionalIcon />
                      </span>
                    </span>
                    <span>Institutional Analytics</span>
                  </div>
                </div>
                <p className="mt-3" style={{color: 'rgb(0 199 237)', fontSize:'12px'}}>
                  Institutional Data — Real-time tracking of top Ethereum ETF issuers & AUM
                </p>
              </div>
            </div>

            <div className="offset-lg-1 col-lg-5">
              <div className="hero_image">
                <Image className="ucbi_coin" src={ucbi_coin} alt="hero_image" priority/>
                <Image className="eth_coin" src={eth_coin} alt="hero_image" priority/>
                <Image className="btc_coin" src={btc_coin} alt="hero_image" priority/>
              </div>
            </div>

            <Partners />
          </div>
        </div>
      </section>
    </>
  );
};

export default EtfHeroSection;
