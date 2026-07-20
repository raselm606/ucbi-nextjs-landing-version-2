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
                                    <p style={{width:'100% !important'}}>Business Model</p>
                                </div>
                            </div>

                            <p>UCBI provides secure and regulated private holding solutions for digital assets  We ensure the institutional grade custody comprehensive risk management and full compliance with the global standards giving our partners peace of mind & long term confidence</p>

                            {/* <div className="dif_items">
                                    <div className="difs_col">
                                    <ShieldIconPlus />
                                    <h6>Private & Regulated</h6>
                                    <p>Operated under strict legal and  compliance framework  </p>
                                </div>

                                <div className="difs_col">
                                    <LockIconPlus />
                                    <h6>Private & Regulated</h6>
                                    <p>Operated under strict legal and  compliance framework  </p>
                                </div>

                                 
                            </div> */}

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
                                    <p style={{width:'100% !important'}}>Strategic Treasury </p>
                                </div>
                            </div>

                            <p> Through Ethereum based treasury strategies and the UCBI optimizes capital allocation liquidity and yield generation Our disciplined approach helps institutions and partners build sustainable financial growth in the evolving digital economy </p>

                            {/* <div className="w_dif_items">
                          <div className="w_difs_col">
                            <LiquidityIcon />
                            <h6>Liquidity Management</h6>
                            <p>Optimizing liqudity across digital assets and markets </p>
                          </div>
                          <div className="w_difs_col">
                            <YieldIcon />
                            <h6>Yield Generation</h6>
                            <p>Maximizing returns through diversified strategies </p>
                          </div>
                        </div> */}

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