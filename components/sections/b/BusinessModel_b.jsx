import Button from "@/components/ui/Button";
import styles from "./css/BusinessModel.module.css";
import {
    ArrowIcon
} from "./HeroIcons";
const BusinessModel_b = () => {
  return (
    <>
        <div className="businesarea">
            <div className="container cline">
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div className={styles.bSectionArea}>
                            <div className={styles.top_b_area}>
                                 
                                <div className={styles.btext_area}>
                                    <span>Private Holding</span>
                                    <p>Secure Asset Holding</p>
                                </div>
                            </div>

                            <p>UCBI provides secure and regulated private holding solutions for digital assets  We ensure institutional grade custody comprehensive risk management and full compliance with global standards giving our partners peace of mind & long term confidence</p>

                            <Button  data-bs-toggle="modal"   href="#submit-a-request"   className={styles.primaryBtn}>
                            Learn More
                            <span className={styles.btnIcon}>
                                <ArrowIcon />
                            </span>
                            </Button>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                        <div className={`${styles.bSectionArea} ${styles.bSectionWhite}`}>
                            <div className={styles.top_b_area}>
                                 
                                <div className={styles.btext_area}>
                                    <span>Ethereum Treasury</span>
                                    <p>Strategic Treasury Management</p>
                                </div>
                            </div>

                            <p> Through Ethereum based treasury strategies UCBI optimizes capital allocation liquidity and yield generation Our disciplined approach helps institutions and partners build sustainable financial growth in the evolving digital economy </p>

                            <Button data-bs-toggle="modal"   href="#submit-a-request" className={styles.secondaryBtn}>
                            View More
                            <span className={styles.btnIcon}>
                                <ArrowIcon />
                            </span>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default BusinessModel_b