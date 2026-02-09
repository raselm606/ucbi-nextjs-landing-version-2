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
import logo9 from "../../public/images/partners/9.png";
const Partners =  () => {
  
  return (
    <>
    <div className="partner_section">
        <div className="container cline ">
          
                 <Marquee speed={60} gradient={false}>
                  <div className="partner_img">
                        <Image className="img1"  src={logo1} alt="Partner Logo" />
                        <Image  className="img2"  src={logo2} alt="Partner Logo" />
                        <Image  className="img3"  src={logo3} alt="Partner Logo" />
                        <Image className="img4"  src={logo4} alt="Partner Logo" />
                        <Image className="img5"  src={logo5} alt="Partner Logo" />
                        <Image className="img6"  src={logo6} alt="Partner Logo" />
                        <Image className="img7"  src={logo7} alt="Partner Logo" />
                        <Image className="img8"  src={logo8} alt="Partner Logo" />
                        <Image className="img9"  src={logo9} alt="Partner Logo" />

                        <Image className="img1"  src={logo1} alt="Partner Logo" />
                        <Image  className="img2"  src={logo2} alt="Partner Logo" />
                        <Image  className="img3"  src={logo3} alt="Partner Logo" />
                        <Image className="img4"  src={logo4} alt="Partner Logo" />
                        <Image className="img5"  src={logo5} alt="Partner Logo" />
                        <Image className="img6"  src={logo6} alt="Partner Logo" />
                        <Image className="img7"  src={logo7} alt="Partner Logo" />
                        <Image className="img8"  src={logo8} alt="Partner Logo" />
                        <Image className="img9"  src={logo9} alt="Partner Logo" />
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