import { partnetData } from "@/lib/mock-data/partner";
import Image from "next/image";
import Marquee from "react-fast-marquee";



const Partners =  () => {
  
  return (
    <>
    <div className="partner_section">
        <div className="container cline ">
          
                 <Marquee speed={60} gradient={false}>
                    {partnetData.map((item, index) => (
                    <div className="partner_img" key={item.id}>
                        <Image  src={item.logo} alt="Partner Logo" width={100} height={50}/>
                    </div>
                    ))}
                    
                  </Marquee>
                
                
            
        </div>
    </div>
    </>
  )
}

export default Partners