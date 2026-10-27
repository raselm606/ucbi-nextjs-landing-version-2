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
    <path d="M16 3.5 27.5 10v12L16 28.5 4.5 22V10L16 3.5Z" fill="#06275E" stroke="#0787E8" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="m16 7.2 7.8 4.4v8.8L16 24.8l-7.8-4.4v-8.8L16 7.2Z" fill="#0A3F83" stroke="#10C8F4" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="m16 9.5 4.8 6.3-4.8 2.7-4.8-2.7L16 9.5Zm-4.8 7.5 4.8 7.2 4.8-7.2-4.8 2.7-4.8-2.7Z" fill="#12BDEB" stroke="#57E3FA" strokeWidth=".8" strokeLinejoin="round" />
  </svg>
);

const InflowsIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <circle cx="17" cy="16" r="10.5" fill="#06275E" stroke="#0AAFE4" strokeWidth="1.7" />
    <path d="M17 9.5v6.8l4.6 2.8" fill="none" stroke="#56E5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12h5M3 16h4M4 20h5" stroke="#0787E8" strokeWidth="1.7" strokeLinecap="round" />
    <path d="m7 9 2 3-2 3" fill="none" stroke="#10C8F4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InstitutionalIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <path d="m8 9 7 5m2 0 7-5M8 23l7-5m2 0 7 5" fill="none" stroke="#168AE0" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="7" cy="8" r="3.2" fill="#073B70" stroke="#09C6E7" strokeWidth="1.5" />
    <circle cx="25" cy="8" r="3.2" fill="#073B70" stroke="#09C6E7" strokeWidth="1.5" />
    <circle cx="7" cy="24" r="3.2" fill="#073B70" stroke="#09C6E7" strokeWidth="1.5" />
    <circle cx="25" cy="24" r="3.2" fill="#073B70" stroke="#09C6E7" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="5.2" fill="#06275E" stroke="#55DDF1" strokeWidth="1.7" />
    <path d="M14 18v-4h4v4m-4-2h4" fill="none" stroke="#56E5F5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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
