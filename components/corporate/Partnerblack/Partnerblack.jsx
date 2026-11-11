import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from "./Partnerblack.module.css";

const partners = [
  { name: "YAHOO FINANCE", image: "/images/corporate/partners_black/yahoo.png", href: "https://finance.yahoo.com/quote/UCBI-USD/" },
  { name: "COINBASE", image: "/images/corporate/partners_black/coinbase.png", href: "https://www.coinbase.com/wallet" },
  { name: "KRAKEN", image: "/images/corporate/partners_black/kraken.png", href: "https://www.kraken.com/" },
  { name: "ETHERSCAN", image: "/images/corporate/partners_black/erc.png", href: "https://etherscan.io/token/0xb42b35deca033a23401a1a89007a39343a510d0a" },
  { name: "ARKHAM", image: "/images/corporate/partners_black/akhram.png", href: "https://intel.arkm.com/" },
  { name: "GITHUB", image: "/images/corporate/partners_black/github.png", href: "https://github.com/UCBI-Blockchain-Banking" },
  { name: "BLOCKCHAIN", image: "/images/corporate/partners_black/blockchain.png", href: "https://blockchain.com/" },
  { name: "TRUST WALLET", image: "/images/corporate/partners_black/trust.png", href: "https://trustwallet.com/" },
  { name: "BSCSCAN", image: "/images/corporate/partners_black/bsc.png", href: "https://bscscan.com/token/0xc888Dca9448D04F045Df801F5369348cDF67fb18" },
  { name: "BLOCKSPOT", image: "/images/corporate/partners_black/blockspot.png", href: "https://blockspot.io/coin/ucbi-holding-ucbi/" },
  { name: "CYBERSCOPE", image: "/images/corporate/partners_black/cyberscope.png", href: "https://www.cyberscope.io/audits/ucbi" },
];

const Partnerblack = () => (
  <div className={styles.partnerBlack}>
    <Marquee speed={60} gradient={false} pauseOnHover>
      <div className={styles.partnerTrack}>
        {[...partners, ...partners].map((partner, index) => (
          <span className={styles.partnerItem} key={`${partner.name}-${index}`}>
            <span className={styles.partnerIdentity}>
              <Link className={styles.partnerLink} href={partner.href} target="_blank" aria-label={partner.name}>
                <Image className={styles.partnerLogo} src={partner.image} alt="" width={30} height={30} />
                <span className={styles.partnerName}>{partner.name}</span>
              </Link>
            </span>
          </span>
        ))}
      </div>
    </Marquee>
  </div>
);

export default Partnerblack;
