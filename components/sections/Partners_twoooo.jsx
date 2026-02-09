import { siteConfig } from "@/lib/config/site";
import Image from "next/image";
import Marquee from "react-fast-marquee";

async function getPartners() {
  const res = await fetch(`${siteConfig.baseUrl}/api/partner-api`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch partners data");
  }

  return res.json();
}

const Partners = async () => {
  const { posts } = await getPartners();
  
  return (
    <>
    <div className="partner_section">
        <div className="container cline ">
          
                 <Marquee speed={60} gradient={false}>
                    {posts.map((item, index) => (
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