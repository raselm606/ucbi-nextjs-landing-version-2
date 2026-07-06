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
                <div className="col-lg-5">
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
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Scaleable