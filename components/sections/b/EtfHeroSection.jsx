import Partners from "@/components/sections/Partners_two";
import Button from "@/components/ui/Button";
import Image from "next/image";
import b1 from "../../../public/images/b/b1.png";
import b2 from "../../../public/images/b/b2.png";
import b3 from "../../../public/images/b/b3.png";

import btc_coin from '../../../public/images/btc_coin.png';
import eth_coin from '../../../public/images/eth_coin.png';
import ucbi_coin from '../../../public/images/ucbi_coin.png';
import styles from "./css/Hero.module.css";
import {
  ArrowIcon
} from "./HeroIcons";

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
                  Comprehensive Ethereum ETF tracking, institutional inflow analysis <br />
                  and transparent digital asset market data tailored for investors <br />
                  and long-term market participants
                </p>

                <div className="d-flex align-items-center gap-3 flex-wrap mt-4">
                  <Button href="#etf-flows" className={styles.primaryBtn}>
                    Explore ETF Flows
                    <span className={styles.btnIcon}>
                      <ArrowIcon />
                    </span>
                  </Button>

                  <Button href="#etf-overview" className={styles.secondaryBtn}>
                    View Market Overview
                    <span className={styles.btnIcon}>
                      <ArrowIcon />
                    </span>
                  </Button>
                </div>

                <div className={styles.featureBox}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>
                      <span className={styles.featureSvg}>
                        <Image src={b1} alt="b1"/>
                      </span>
                    </span>
                    <span>Ethereum Spot ETFs</span>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>
                      <span className={styles.featureSvg}>
                        <Image src={b2} alt="b2"/>
                      </span>
                    </span>
                    <span>Real-Time Inflows</span>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureIcon}>
                      <span className={styles.featureSvg}>
                        <Image src={b3} alt="b3"/>
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
