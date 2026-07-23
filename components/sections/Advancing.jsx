import Image from "next/image"
import ad1 from "../../public/images/ad1.png"
import ad2 from "../../public/images/ad2.png"
import ad3 from "../../public/images/ad3.png"
const Advancing =  () => { 

  return (
    <>
    <div className="advancing_section" id="treasury-management">
        <div className="container cline line_left line_right top_left_l">
            <div className="row">
                <div className="col-lg-4">
                    <div className="advancing_content">
                        <span>Our Focus</span>
                        <h2>
                           Advancing 
                          Through  <br /> Structured Growth
                        </h2>
                        <p>We are committed to building a solid foundation and driving sustainable growth through a clear stategy strong partnerships and institutional excellence</p>
                         {/* <Image src={adv} alt="adv" height={100} width={100}/>   */}
                    </div>
                    
                </div>

                <div className="offset-lg-2 col-lg-6">

                    <div className="adsec_area">
                        <div className="img_ara">
                            <Image src={ad1} alt="" />
                        </div>

                        <div className="advancing_para">
                            <h5 >Treasury Management</h5>
                            <p >Treasury management focuses on diversified capital allocation and liquidity strategies to optimization risk adjusted returns to institutional frameworks and discipline driven  ensure resilient performance and shareholder value creation in dynamic market conditions</p>
                        </div>

                    </div>
                   
                   <div className="adsec_area">
                        <div className="img_ara">
                            <Image src={ad2} alt="" />
                        </div>
                   
                        <div className="advancing_para">
                            <h5 >Strengthening Institutional</h5>
                            <p >Strengthening the institutional framework focuses on governance excellence and operational consistency by building the robust risk controls compliance culture and strategic alignment we ensure long term resilience stakeholder trust and sustainable value creation</p>
                        </div>
                    </div>

                    <div className="adsec_area">
                        <div className="img_ara">
                            <Image src={ad3} alt="" />
                        </div>
                   
                        <div className="advancing_para">
                            <h5 >Partnerships Global Expansion</h5>
                            <p >Global partnerships provide the scale to develop innovative solutions and expand our ecosystem we invest in strategic collaborations support sustainable real world growth and accelerate the adoption of blockchain solutions within a transformative framework</p>
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