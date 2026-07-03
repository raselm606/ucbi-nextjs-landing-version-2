import Partners from "@/components/sections/Partners_two";
import Button from "@/components/ui/Button";
import Image from "next/image";
import b1 from "../../../public/images/b/b1.png";
import b2 from "../../../public/images/b/b2.png";
import b3 from "../../../public/images/b/b3.png";
import styles from "./Hero.module.css";
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
                Blockchain Infrastructure  & <br/> Digital Asset Treasury
              </h1>

              <p className={styles.heroText}>
                Private blockchain infrastructure Ethereum treasury  strategy <br />
                and institutional digital asset solutions for selected partners <br />
                and long-term shareholders
              </p>

              <div className="d-flex align-items-center gap-3 flex-wrap mt-4">
                <Button href="#about" className={styles.primaryBtn}>
                  Explore UCBI
                 <span className={styles.btnIcon}>
                    <ArrowIcon />
                  </span>
                </Button>

                <Button href="#request" className={styles.secondaryBtn}>
                  Submit Private Request
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
                  <span>Private Holding</span>
                </div>

                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>
                     <span className={styles.featureSvg}>
                    {/* <EthereumIcon /> */}
                     <Image src={b2} alt="b2"/>
                  </span>
                  </span>
                  <span>Ethereum Treasury</span>
                </div>

                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>
                     <span className={styles.featureSvg}>
                    {/* <BlockIcon /> */}
                     <Image src={b3} alt="b3"/>
                  </span>
                  </span>
                  <span>Blockchain Infrastructure</span>
                </div>
              </div>
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