import Image from "next/image";
import Link from "next/link";
import goalImg from '../../public/images/goal2.jpg';
import yahoof from '../../public/images/yahoo1.png';
const GoalandEffort = () => {
  return (
    <>
    <div className="goal_sectio line_top">
        <div className="container cline">
            <div className="row g-0">
                <div className="col-lg-6 mb-3 ">
                    <div className="goal_content bg_bb">
                        <h2 className="section_title_dark" >
                            Long-term support <br /> for secure digital innovation
                        </h2>
                        <p   className="section_paragraph_dark">Operating within a private and confidential framework UCBI is structured as a holding company supporting selected digital and blockchain-related projects through private equity-style shareholding</p>

                        <div className="divider_lin"></div>

                        <div className="featured_o"  >
                            <p>Market Data:</p>
                            <Link href="#" className="fe_link"><Image src={yahoof} alt="featured logos"   /></Link> 
                             
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-3">
                    <div className="goal_im" >
                        <Image  src={goalImg} alt="goal image" width={600} height={400} />
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default GoalandEffort