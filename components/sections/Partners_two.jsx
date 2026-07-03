import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import logo10 from "../../public/images/partners/10.png";
import logo12 from "../../public/images/partners/12.png";
// import logo2 from "../../public/images/partners/2.jpg";
// import logo3 from "../../public/images/partners/3.jpg";
// import logo3 from "../../public/images/partners/3.jpg";
import logo13 from "../../public/images/partners/13.png";
import logo14 from "../../public/images/partners/14.png";
import logo5 from "../../public/images/partners/5.png";
import logo7 from "../../public/images/partners/7.png";
import logo9 from "../../public/images/partners/9.png";
import kraken from "../../public/images/partners/k.png";
const Partners =  () => {
  
  return (
    <>
    <div className="partner_section">
        <div className="container  ">
          
                 <Marquee speed={60} gradient={false}>
                  <div className="partner_img">
                    <Link href="https://trustwallet.com/" target="_blank">
                    <Image className="img7"  src={logo7} alt="Partner Logo" /></Link> <span className="dline"> |</span>
                    <Link href="https://etherscan.io/token/0xb42b35deca033a23401a1a89007a39343a510d0a" target="_blank">
                    <Image className="img9"  src={logo9} alt="Partner Logo" /></Link> <span className="dline"> |</span>
                    <Link href="https://www.cyberscope.io/audits/ucbi" target="_blank">
                        <Image className="img13"  src={logo13} alt="Partner Logo" /></Link> <span className="dline"> |</span>
                        <Link href="https://finance.yahoo.com/quote/UCBI-USD/" target="_blank">
                       <Image className="img5"  src={logo5} alt="Partner Logo" /></Link>  <span className="dline"> |</span>
                       <Link href="https://www.coinbase.com/wallet" target="_blank">
                        <Image className="img10"  src={logo10} alt="Partner Logo" /></Link> <span className="dline"> |</span>
                        <Link href="https://www.kraken.com/" target="_blank">
                        <Image className="img12"  src={kraken} alt="Partner Logo" />
                        </Link> <span className="dline"> |</span>
                        <Link href="https://intel.arkm.com/" target="_blank">
                        <Image className="img12"  src={logo12} alt="Partner Logo" /></Link> <span className="dline"> |</span>
                       
                        <Link href="https://github.com/UCBI-Blockchain-Banking" target="_blank">
                        <Image className="img14"  src={logo14} alt="Partner Logo" />
                        </Link> <span className="dline"> |</span>
                        

                        <Link href="https://trustwallet.com/" target="_blank">
                    <Image className="img7"  src={logo7} alt="Partner Logo" /></Link> <span className="dline"> |</span>
                    <Link href="https://etherscan.io/token/0xb42b35deca033a23401a1a89007a39343a510d0a" target="_blank">
                    <Image className="img9"  src={logo9} alt="Partner Logo" /></Link> <span className="dline"> |</span>
                    <Link href="https://www.cyberscope.io/audits/ucbi" target="_blank">
                        <Image className="img13"  src={logo13} alt="Partner Logo" /></Link> <span className="dline"> |</span>
                        <Link href="https://finance.yahoo.com/quote/UCBI-USD/" target="_blank">
                       <Image className="img5"  src={logo5} alt="Partner Logo" /></Link>  <span className="dline"> |</span>
                       <Link href="https://www.coinbase.com/wallet" target="_blank">
                        <Image className="img10"  src={logo10} alt="Partner Logo" /></Link> <span className="dline"> |</span>
                        <Link href="https://www.kraken.com/" target="_blank">
                        <Image className="img12"  src={kraken} alt="Partner Logo" />
                        </Link> <span className="dline"> |</span>
                        <Link href="https://intel.arkm.com/" target="_blank">
                        <Image className="img12"  src={logo12} alt="Partner Logo" /></Link> <span className="dline"> |</span>
                        <Link href="https://github.com/UCBI-Blockchain-Banking" target="_blank">
                        <Image className="img14"  src={logo14} alt="Partner Logo" />
                        </Link> <span className="dline"> |</span>
                          
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