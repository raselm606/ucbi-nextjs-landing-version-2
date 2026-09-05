import Image from "next/image"
import ad1 from "../../../public/images/ad1.png"
import ad2 from "../../../public/images/ad2.png"
import ad3 from "../../../public/images/ad3.png"
const Advancing =  () => { 

  return (
    <>
    <div className="advancing_section" id="treasury-management">
        <div className="container cline line_left line_right top_left_l">
            <div className="row">
                <div className="col-lg-4">
                    <div className="advancing_content">
                        <span>Notre orientation</span>
                        <h2>
                           Progresser grâce à <br/> une croissance structurée
                        </h2>
                        <p>Nous nous engageons à construire des bases solides et à favoriser une croissance durable grâce à une stratégie claire des partenariats solides et une excellence institutionnelle</p>
                         {/* <Image src={adv} alt="adv" height={100} width={100}/>   */}
                    </div>
                    
                </div>

                <div className="offset-lg-2 col-lg-6">

                    <div className="adsec_area">
                        <div className="img_ara">
                            <Image src={ad1} alt="" />
                        </div>

                        <div className="advancing_para">
                            <h5 >Gestion de trésorerie</h5>
                            <p >La gestion de trésorerie repose sur une allocation diversifiée du capital et des stratégies de liquidité visant à optimiser les rendements ajustés au risque dans un cadre institutionnel fondé sur la discipline afin de favoriser une performance résiliente et la création de valeur pour les actionnaires dans des conditions de marché dynamiques</p>
                        </div>

                    </div>
                   
                   <div className="adsec_area">
                        <div className="img_ara">
                            <Image src={ad2} alt="" />
                        </div>
                   
                        <div className="advancing_para">
                            <h5 >Renforcement institutionnel</h5>
                            <p >Le renforcement du cadre institutionnel repose sur l’excellence de la gouvernance et la cohérence opérationnelle grâce à la mise en place de contrôles robustes des risques d’une culture de conformité et d’un alignement stratégique nous favorisons la résilience à long terme la confiance des parties prenantes et la création de valeur durable</p>
                        </div>
                    </div>

                    <div className="adsec_area">
                        <div className="img_ara">
                            <Image src={ad3} alt="" />
                        </div>
                   
                        <div className="advancing_para">
                            <h5 >Partenariats et expansion mondiale</h5>
                            <p >Les partenariats internationaux offrent l’échelle nécessaire pour développer des solutions innovantes et étendre notre écosystème nous investissons dans des collaborations stratégiques soutenons une croissance durable dans le monde réel et accélérons l’adoption des solutions blockchain dans un cadre en constante transformation</p>
                        </div>
                    </div>
                  
                     
                </div>


            </div>
        </div>
    </div>
    </>
  )
}

export default Advancing