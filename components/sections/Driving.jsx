'use client';
import { drivingData } from "@/lib/mock-data/driving";
import Image from "next/image";
const Driving = () => {
  return (
    <>
        <div className="driving_section ">
            <div className="container cline">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-3">
                        <div className="driving_img text-center">
                            <Image src={drivingData.img} alt="Driving Image" height={100} width={550} />
                        </div>
                    </div>
                    <div className="offset-lg-2 offset-md-1 col-md-5 col-lg-5">
                        <div className="driving_content">
                            <h2 className="section_title_dark" style={{fontSize:'34px', fontWeight:'44px'}}>
                                <span style={{color:'#0cc0df', fontSize:'34px'}}> Strategic </span> <br/> and Institutional Positioning
                            </h2>
                            <p className="section_paragraph_dark t1_width">
                                <strong>UCBI</strong>’s mission is to support the responsible structured, and sustainable development of digital financial infrastructure through a long-term approach grounded in strong governance principles operating as a strategic holding company <strong>UCBI</strong> focuses on the integration of blockchain-based and the distributed technologies within robust organizational frameworks this ensures full alignment with regulatory requirements operational resilience and the highest institutional standards through disciplined governance prudent capital structuring and comprehensive risk management <strong>UCBI</strong> seeks to foster sustainable growth while maintaining a controlled private and secure operating environment this model enables technological innovation while preserving stability compliance and long-term stakeholder confidence
                            </p>
                        </div>
                    </div>

                    
                </div>


                
            </div>
            
            

        </div>

        <div className="counter_area_setion">
            <div className="container cline_white">
                <div className="row">
                    <div className="col-lg-4 line_right  ">
                        <div className="big_text_number text-center extra_line_whtiepaper_left">
                            <p>on-chain marketcap  :</p>
                            <span>$167727</span>
                        </div>
                    </div>
                    <div className="col-lg-4 line_right  ">
                        <div className="big_text_number text-center">
                            <p>Total Supply  :</p>
                            <span>12 M</span>
                        </div>
                    </div>
                    <div className="col-lg-4  ">
                        <div className="big_text_number text-center extra_line_whtiepaper_right">
                            <p>Share-holders :</p>
                            <span>359</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Driving