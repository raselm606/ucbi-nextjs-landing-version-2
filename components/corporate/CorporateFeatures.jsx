import Image from "next/image";
import Link from "next/link";
import styles from "./corporate.module.css";

const features = [
  { title: "Holding Token", copy: "Token Holding Participation in Strategic Ethereum Treasury Accumulation ", image: "/images/corporate/ucbi_blue_bold.jfif" },
  { title: "Investment", copy: "Private equity ventures and strategic opportunities", image: "/images/corporate/fo/fo2.png" },
  { title: "Advisory", copy: "KYC AML and risk management within international standards", image: "/images/corporate/fo/fo3.png" },
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
