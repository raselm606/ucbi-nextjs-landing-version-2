import Partners from "@/components/sections/Partners_two";
import Button from "@/components/ui/Button";
import Image from "next/image";
import b1 from "../../../../public/images/b/b1.png";
import b2 from "../../../../public/images/b/b2.png";
import b3 from "../../../../public/images/b/b3.png";

import btc_coin from '../../../../public/images/btc_coin.png';
import eth_coin from '../../../../public/images/eth_coin.png';
import ucbi_coin from '../../../../public/images/ucbi_coin.png';
import styles from "./css/Hero.module.css";
import {
  ArrowIcon
} from "./HeroIcons";
const HeroSection_b = () => {
  return (
    <>
     <section className={styles.heroSection}>
      <div className="container cline">
        <div className="row align-items-center min-vh-100">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className={styles.heroContent}>
              <span className={styles.heroLabel}>
                UCBI GROUP TECHNOLOGIES
              </span>

              <div className={styles.labelLine}></div>

              <h1 className={styles.heroTitle}>
                Infrastructure Blockchain &  <br/> Trésorerie d’Actifs Numériques
              </h1>

              <p className={styles.heroText}>
                Infrastructure blockchain privée, stratégie de trésorerie Ethereum et solutions institutionnelles en actifs numériques destinées à des partenaires sélectionnés et à des actionnaires engagés sur le long terme.
              </p>

              <div className="d-flex align-items-center gap-3 flex-wrap mt-4">
                <Button href="#about" className={styles.primaryBtn}>
                  Découvrir UCBI
                 <span className={styles.btnIcon}>
                    <ArrowIcon />
                  </span>
                </Button>

                <Button data-bs-toggle="modal"   href="#submit-a-request" className={styles.secondaryBtn}>
                  Soumettre une demande privée
                  <span className={styles.btnIcon}>
                    <ArrowIcon />
                  </span>
                </Button>
              </div>

              <div className={styles.featureBox}>
                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>
                     <span className={styles.featureSvg}>
                    {/* <ShieldIcon /> */}
                    <Image src={b1} alt="b1"/>
                  </span>
                  </span>
                  <span>Holding Privée</span>
                </div>

                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>
                     <span className={styles.featureSvg}>
                    {/* <EthereumIcon /> */}
                     <Image src={b2} alt="b2"/>
                  </span>
                  </span>
                  <span>Trésorerie Ethereum</span>
                </div>

                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>
                     <span className={styles.featureSvg}>
                    {/* <BlockIcon /> */}
                     <Image src={b3} alt="b3"/>
                  </span>
                  </span>
                  <span>Infrastructure Blockchain</span>
                </div>
              </div>
              <p className="mt-3" style={{color: 'rgb(0 199 237)', fontSize:'12px'}}>Capital Privé - Jusqu'à 10% de dividendes potentiels </p>
            </div>
          </div>

          <div className="offset-lg-1 col-lg-5"  >
                      <div className="hero_image" >
                        <Image className="ucbi_coin" src={ucbi_coin}  alt="hero_image" priority/>
                        <Image className="eth_coin" src={eth_coin}  alt="hero_image" priority/>
                        <Image className="btc_coin" src={btc_coin}  alt="hero_image" priority/>
                      </div>
                    </div>

          {/* Right Image */}
          {/* <div className="col-lg-6">
            <div className={styles.heroImageWrap}>
              <div className={styles.glowCircle}></div>

              <Image
                src={ucbi_hero}
                alt="UCBI Blockchain Infrastructure"
                className={styles.heroImage}
              />
            </div>
          </div> */}

          {/* <div className="col-lg-5">
            <div className="styles heroVisual">
               <div className={styles.visualBg}></div>
              <div className={styles.particleDots}></div>

              <div className={styles.orbitOne}></div>
              <div className={styles.orbitTwo}></div> 

               <div className={styles.floorGrid}></div> 
               <div className={styles.floorGlow}></div>
              <div className={styles.floorRing}></div>
              <div className={styles.floorRingTwo}></div>
              <div className={styles.floorShadow}></div> 

            <Image
                src={ucbi_hero}
                alt="Blockchain Treasury"
                className={styles.heroImage}
              /> 
            </div>
          </div> */}
          <Partners />

        </div>
      </div>

      
    </section>
    </>
  )
}

export default HeroSection_b