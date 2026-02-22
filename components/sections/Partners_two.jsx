import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import logo1 from "../../public/images/partners/1.jpg";
import logo10 from "../../public/images/partners/10.png";
import logo11 from "../../public/images/partners/11.png";
import logo12 from "../../public/images/partners/12.jpg";
// import logo2 from "../../public/images/partners/2.jpg";
// import logo3 from "../../public/images/partners/3.jpg";
// import logo3 from "../../public/images/partners/3.jpg";
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
                        <Link href="https://tothemoon.com/trading/UCBI_USDC" target="_blank"> 
                        <Image className="img1"  src={logo1} alt="Partner Logo" /> </Link>
                        {/* <Image  className="img2"  src={logo2} alt="Partner Logo" />
                        <Image  className="img3"  src={logo3} alt="Partner Logo" /> */}

                       <Link href="http://perrier-immo.com/" target="_blank"> 
                       <Image className="img4"  src={logo4} alt="Partner Logo" /> </Link> 
                       <Link href="https://finance.yahoo.com/quote/UCBI-USD/" target="_blank">
                       <Image className="img5"  src={logo5} alt="Partner Logo" /></Link> 
                        <Link href="https://web3.okx.com/fr/token/ethereum/0x2adba23cf1252de095aced801e758b369ec10426" target="_blank">
                        <Image className="img6"  src={logo6} alt="Partner Logo" /></Link>
                        <Link href="https://trustwallet.com/" target="_blank">
                        <Image className="img7"  src={logo7} alt="Partner Logo" /></Link>
                        <Link href="https://metamask.io/" target="_blank">
                        <Image className="img8"  src={logo8} alt="Partner Logo" /></Link>
                        <Link href="https://etherscan.io/token/0x2adba23cf1252de095aced801e758b369ec10426" target="_blank">
                        <Image className="img9"  src={logo9} alt="Partner Logo" /></Link>
                        <Link href="https://www.coinbase.com/wallet" target="_blank">
                        <Image className="img10"  src={logo10} alt="Partner Logo" /></Link>
                        <Link href="https://intel.arkm.com/" target="_blank">
                        <Image className="img12"  src={logo12} alt="Partner Logo" /></Link>
                        <Link href="https://coinmarketcap.com/currencies/ucbi-banking/" target="_blank">
                        <Image className="img11"  src={logo11} alt="Partner Logo" /></Link>

                        
                        <Link href="https://web3.okx.com/fr/token/ethereum/0x2adba23cf1252de095aced801e758b369ec10426" target="_blank">
                        <Image className="img6"  src={logo6} alt="Partner Logo" /></Link>
                        <Link href="https://trustwallet.com/" target="_blank">
                        <Image className="img7"  src={logo7} alt="Partner Logo" /></Link>



                        <Link href="https://tothemoon.com/trading/UCBI_USDC" target="_blank"> 
                        <Image className="img1"  src={logo1} alt="Partner Logo" /> </Link>
                         {/*<Image  className="img2"  src={logo2} alt="Partner Logo" /> 
                        <Image  className="img3"  src={logo3} alt="Partner Logo" />*/}
                        <Link href="http://perrier-immo.com/" target="_blank"> 
                       <Image className="img4"  src={logo4} alt="Partner Logo" /> </Link> 
                       <Link href="https://finance.yahoo.com/quote/UCBI-USD/" target="_blank">
                       <Image className="img5"  src={logo5} alt="Partner Logo" /></Link> 
                        <Link href="https://web3.okx.com/fr/token/ethereum/0x2adba23cf1252de095aced801e758b369ec10426" target="_blank">
                        <Image className="img6"  src={logo6} alt="Partner Logo" /></Link>
                        <Link href="https://trustwallet.com/" target="_blank">
                        <Image className="img7"  src={logo7} alt="Partner Logo" /></Link>
                        <Link href="https://metamask.io/" target="_blank">
                        <Image className="img8"  src={logo8} alt="Partner Logo" /></Link>
                        <Link href="https://etherscan.io/token/0x2adba23cf1252de095aced801e758b369ec10426" target="_blank">
                        <Image className="img9"  src={logo9} alt="Partner Logo" /></Link>
                        <Link href="https://www.coinbase.com/wallet" target="_blank">
                        <Image className="img10"  src={logo10} alt="Partner Logo" /></Link>
                        <Link href="https://intel.arkm.com/" target="_blank">
                        <Image className="img12"  src={logo12} alt="Partner Logo" /></Link>
                        <Link href="https://coinmarketcap.com/currencies/ucbi-banking/" target="_blank">
                        <Image className="img11"  src={logo11} alt="Partner Logo" /></Link>

                        
                        <Link href="https://web3.okx.com/fr/token/ethereum/0x2adba23cf1252de095aced801e758b369ec10426" target="_blank">
                        <Image className="img6"  src={logo6} alt="Partner Logo" /></Link>
                        <Link href="https://trustwallet.com/" target="_blank">
                        <Image className="img7"  src={logo7} alt="Partner Logo" /></Link>
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