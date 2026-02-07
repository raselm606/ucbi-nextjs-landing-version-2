import Button from "@/components/ui/Button";
import Image from "next/image";
import btc_coin from '../../public/images/btc_coin.png';
import eth_coin from '../../public/images/eth_coin.png';
import ucbi_coin from '../../public/images/ucbi_coin.svg';
const HeroSection = () => {
  return (
    <>
    <div className="hero_section mt-4">
      <div className="container cline section_padding_180">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-3">
            <div className="hero_content">
              <h1 className="hero_title" >
                <strong style={{color: '#0CC0DF'}}>UCBI</strong> <br /> Blockchain Data Banking
                </h1>
              <p className="hero_paragraph" >Union of Cryptocurrencies and Blockchain International</p>
              <div className="hero_button" >
                <Button href="#" variant="primary">Trading</Button>
              </div>
            </div>
          </div>
          <div className="offset-lg-2 col-lg-5"  >
            <div className="hero_image" >
              <Image className="ucbi_coin" src={ucbi_coin}  alt="hero_image" priority/>
              <Image className="eth_coin" src={eth_coin}  alt="hero_image" priority/>
              <Image className="btc_coin" src={btc_coin}  alt="hero_image" priority/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroSection