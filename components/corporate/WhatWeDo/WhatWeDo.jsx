import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiBox, FiGlobe, FiTrendingUp } from "react-icons/fi";
import styles from "./WhatWeDo.module.css";

const services = [
  { image: "/images/corporate/fo/fo6.png", title: "Token Overview", copy: "Multichain token used in the Group’s liquidity operations" },
  { Icon: FiTrendingUp, title: "Investment", copy: "Private equity ventures and strategic opportunities Focused on long-term value creation" },
  { Icon: FiBox, title: "Advisory", copy: "Institutional advisory on digital assets and blockchain technologies" },
  { Icon: FiGlobe, title: "Markets", copy: "Access to global markets through a network of regulated partners" },
];

export default function WhatWeDo() {
  return <section className={styles.section} aria-labelledby="services-title">
    <div className={styles.inner}>
      <div className={styles.intro}><p className={styles.eyebrow}>What We Do</p><h2 id="services-title">A Complete Institutional<br /><em>Ecosystem</em></h2><p>UCBI provides a full range of institutional services across the digital asset value chain from infrastructure to investment opportunities</p><Link className={styles.button} href="/#solutions">Our Solutions <FiArrowRight /></Link></div>
      <div className={styles.services}>{services.map(({ Icon, image, title, copy }) => <article className={styles.service} key={title}>{image ? <Image className={styles.serviceImage} src={image} alt="UCBI" width={29} height={29} /> : <Icon aria-hidden="true" />}<div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </div>
  </section>;
}
