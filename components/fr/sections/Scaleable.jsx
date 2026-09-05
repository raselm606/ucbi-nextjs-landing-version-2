import Button from '@/components/ui/Button';
import {
    ArrowIcon
} from "./b/HeroIcons";
const Scaleable = () => {
  return (
    <>
    <div className="scaleable_section">
        <div className="container cline">
            <div className="row">
                <div className="col-lg-6 mb-3 ">
                    <div className="scaleable_content">
                        <span>Trusted Infrastructure Enduring value</span> 
                        <h2 >
                           Secure & scalable digital infrastructure <br /> Built for long-term institutional use
                        </h2>
                        <p className="section_paragraph_white"  >
                          Partner with UCBI and gain exclusive access to innovative investment opportunites strategic insights and long-term value creation
                        </p>

                        

                        
                    </div>
                    <Button    href="tel:+33184160139" className="primaryBtn">
                                                        Call Our Team
                            <span className="btnIcon">
                                <ArrowIcon />
                            </span>
                        </Button>

                        <div className="divider_lin ggl"  style={{marginBottom:'0px !important'}}></div>
                    
                </div>
                {/* <div className="col-lg-5">
                    <div className="scaleable_content">
                        <h2 >
                            Secure & scalable digital infrastructure <br /> Built for long-term institutional use
                        </h2>
                        <p>Partner with UCBI and gain exclusive access to innovative investment opportunites strategic insights and long-term value creation</p> 
                         <Button data-bs-toggle="modal"   href="#submit-a-request" className="primaryBtn">
                                                         Get in Touch
                            <span className="btnIcon">
                                <ArrowIcon />
                            </span>
                        </Button>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Scaleable