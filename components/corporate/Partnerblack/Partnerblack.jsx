import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import styles from "./Partnerblack.module.css";

const partners = [
  { name: "YAHOO FINANCE", image: "/images/corporate/partners_black/yahoo.png", href: "#" },
  { name: "COINBASE", image: "/images/corporate/partners_black/coinbase.png", href: "#" },
  { name: "KRAKEN", image: "/images/corporate/partners_black/kraken.png", href: "#" },
  { name: "ETHERSCAN", image: "/images/corporate/partners_black/erc.png", href: "#" },
  { name: "ARKHAM", image: "/images/corporate/partners_black/akhram.png", href: "#" },
  { name: "GITHUB", image: "/images/corporate/partners_black/github.png", href: "#" },
  { name: "BLOCKCHAIN", image: "/images/corporate/partners_black/blockchain.png", href: "#" },
  { name: "TRUST WALLET", image: "/images/corporate/partners_black/trust.png", href: "#" },
  { name: "BSCSCAN", image: "/images/corporate/partners_black/bsc.png", href: "#" },
  { name: "BLOCKSPOT", image: "/images/corporate/partners_black/blockspot.png", href: "#" },
  { name: "CYBERSCOPE", image: "/images/corporate/partners_black/cyberscope.png", href: "#" },
];

const Partnerblack = () => (
  <div className={styles.partnerBlack}>
    <Marquee speed={60} gradient={false} pauseOnHover>
      <div className={styles.partnerTrack}>
        {[...partners, ...partners].map((partner, index) => (
          <span className={styles.partnerItem} key={`${partner.name}-${index}`}>
            <span className={styles.partnerIdentity}>
              <Link className={styles.partnerLink} href={partner.href} aria-label={partner.name}>
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
