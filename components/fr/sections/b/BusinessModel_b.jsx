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
                                    <span>Holding Privée</span>
                                    <p style={{width:'100% !important'}}>Modèle économique</p>
                                </div>
                            </div>

                            <p>UCBI propose des solutions sécurisées de holding privée et de gestion stratégique de trésorerie pour les actifs numériques en combinant une gestion d’actifs de niveau institutionnel des dispositifs complets de contrôle des risques et une gouvernance axée sur la conformité avec des solutions structurées  
</p>

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
                            Livre blanc
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
                                    <span>Trésorerie Ethereum</span>
                                    <p style={{width:'100% !important'}}>Trésorerie stratégique </p>
                                </div>
                            </div>

                            <p> Grâce à des stratégies de trésorerie fondées sur Ethereum UCBI optimise l’allocation du capital la liquidité et la génération de rendement notre approche disciplinée aide les institutions et les partenaires à construire une croissance financière durable dans une économie numérique en pleine évolution </p>

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
                            Devenir membre
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