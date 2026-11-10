import Link from "next/link";
import { FiArrowRight, FiLayers, FiShield } from "react-icons/fi";
import { FaEthereum } from "react-icons/fa";
import styles from "./AboutFramework.module.css";

const pillars = [
  { Icon: FiLayers, title: "Private Holding", copy: "A long-term holding structure focused on digital assets and strategic investments." },
  { Icon: FaEthereum, title: "Ethereum Treasury", copy: "Strategic exposure to Ethereum as a core component of our digital asset treasury." },
  { Icon: FiShield, title: "Institutional Governance", copy: "A robust governance framework aligned with international standards and long-term value creation." },
];

export default function AboutFramework() {
  return (
    <section className={styles.section} aria-labelledby="framework-title">
      <div className={styles.intro}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>About UCBI <span /> Our Institutional Framework</p>
          <h1 id="framework-title">A Disciplined Approach<br />to <em>Digital Asset Infrastructure</em></h1>
          <p className={styles.description}>UCBI Group Technologies Ltd operates as a private blockchain holding focused on digital asset infrastructure, treasury and strategic investments, combining institutional expertise and long-term value creation.</p>
          <Link className={styles.button} href="/contact">Learn more about UCBI <FiArrowRight /></Link>
        </div>
        <div className={styles.imagePlaceholder} role="img" aria-label="Building image placeholder" />
      </div>
      <div className={styles.pillars}>
        {pillars.map(({ Icon, title, copy }) => <article className={styles.pillar} key={title}>
          <Icon className={styles.icon} aria-hidden="true" />
          <div><h2>{title}</h2><p>{copy}</p></div>
        </article>)}
      </div>
    </section>
  );
}
