import Link from "next/link";
import { FaEthereum } from "react-icons/fa";
import { FiArrowRight, FiLayers, FiShield } from "react-icons/fi";
import styles from "./AboutFramework.module.css";

const pillars = [
  { Icon: FiLayers, title: "Private Holding", copy: "A long-term investment holding integrating private equity digital assets and strategic capital allocation Focused on lasting institutional value" },
  { Icon: FaEthereum, title: "Ethereum Treasury", copy: "An institutional treasury strategy focused on Ethereum accumulation and long-term capital appreciation" },
  { Icon: FiShield, title: "Institutional Governance", copy: "A disciplined governance framework built on transparency financial integrity and sustainable value creation" },
];

export default function AboutFramework() {
  return (
    <section className={styles.section} aria-labelledby="framework-title">
      <div className={styles.intro}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>About UCBI <span /> Our Institutional Framework</p>
          <h1 id="framework-title">A Disciplined Approach<br />to <em>Digital Asset Infrastructure</em></h1>
          <p style={{ textAlign:'justify' }} className={styles.description}>UCBI Group Technologies Ltd operates as a private blockchain holding focused on digital asset infrastructure treasury and strategic private investments combining institutional expertise and long-term value creation</p>
          <Link className={styles.button} href="/contact">Learn more about UCBI <FiArrowRight /></Link>
        </div>
        <div className={styles.imagePlaceholder} role="img" aria-label="Building image placeholder" />
      </div>
      <div className={styles.pillars}>
        {pillars.map(({ Icon, title, copy }) => <article className={styles.pillar} key={title}>
          <Icon className={styles.icon} aria-hidden="true" />
          <div>
            <h2>{title}</h2>
          <p style={{textAlign:'justify'}}>{copy}</p>
          </div>
        </article>)}
      </div>
    </section>
  );
}
