import Image from "next/image";
import Link from "next/link";
import styles from "./corporate.module.css";

const features = [
  { title: "Token Overview", copy: "Multichain token used in the Group’s liquidity operations ", image: "/images/corporate/fo/fo5.png" },
  { title: "Private Equity", copy: "Private subscription for shares in UCBI Group Technologies  ", image: "/images/corporate/fo/fo2.png" },
  { title: "Advisory", copy: "Institutional advisory on digital assets and blockchain ", image: "/images/corporate/fo/fo3.png" },
  { title: "Markets", copy: "A network of partners across Europe Middle East and APAC", image: "/images/corporate/fo/fo4.png" },
];

export default function CorporateFeatures() {
  return (
    <section className={`${styles.page} ${styles.features}`} id="solutions">
      <div className={styles.featureGrid}>
        {features.map(({ title, copy, image }) => (
          <article className={styles.feature} key={title}>
            <Image className={styles.featureIcon} src={image} alt="" width={45} height={45} />
            <div><h3>{title}</h3><p>{copy}</p><Link className={styles.textLink} href="/#about">Learn more &nbsp; →</Link></div>
          </article>
        ))}
      </div>
    </section>
  );
}
