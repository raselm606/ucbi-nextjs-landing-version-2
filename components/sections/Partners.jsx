import Image from "next/image";
import Marquee from "react-fast-marquee";
import logo1 from "../../public/images/partners/1.jpg";
import logo2 from "../../public/images/partners/2.jpg";
import logo3 from "../../public/images/partners/3.jpg";
import logo4 from "../../public/images/partners/4.jpg";
import logo5 from "../../public/images/partners/5.jpg";
import logo6 from "../../public/images/partners/6.jpg";
import logo7 from "../../public/images/partners/7.jpg";
import logo8 from "../../public/images/partners/8.jpg";
const Partners =  () => {
  
  return (
    <>
    <div className="partner_section">
        <div className="container cline ">
          
                 <Marquee speed={60} gradient={false}>
                  <div className="partner_img">
                        <Image className="img1"  src={logo1} alt="Partner Logo" width={228} height={57}/>
                        <Image  className="img2"  src={logo2} alt="Partner Logo" width={131} height={51}/>
                        <Image  className="img3"  src={logo3} alt="Partner Logo" width={111} height={44}/>
                        <Image className="img4"  src={logo4} alt="Partner Logo" width={58} height={58}/>
                        <Image className="img5"  src={logo5} alt="Partner Logo" width={106} height={39}/>
                        <Image className="img6"  src={logo6} alt="Partner Logo" width={119} height={46}/>
                        <Image className="img7"  src={logo7} alt="Partner Logo" width={103} height={52}/>
                        <Image className="img8"  src={logo8} alt="Partner Logo" width={197} height={41}/>
                    </div>

                    {/* {partnetData.map((item, index) => (
                    <div className="partner_img" key={item.id}>
                        <Image  src={item.logo} alt="Partner Logo" width={100} height={50}/>
                    </div>
                    ))} */}
                    
                  </Marquee>
                
                
            
        </div>
    </div>
    </>
  )
}

export default Partners