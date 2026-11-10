import { FiSettings, FiTarget, FiUsers } from "react-icons/fi";
import styles from "./ApproachVision.module.css";

const principles = [
  { Icon: FiTarget, title: "Institutional Focus", copy: "Long-term value creation" },
  { Icon: FiSettings, title: "Expertise", copy: "Finance technology and regulatory knowledge" },
  { Icon: FiUsers, title: "Global Perspective", copy: "Opportunities across key markets" },
];

export default function ApproachVision() {
  return <section className={styles.section} aria-labelledby="vision-title">
    <div className={styles.imagePlaceholder} role="img" aria-label="Boardroom image placeholder" />
    <div className={styles.content}><p className={styles.eyebrow}>Our Approach</p><h2 id="vision-title">Long-Term Vision<br />and <em>Sustainable Growth</em></h2><p className={styles.copy}>UCBI combines institutional discipline deep market expertise and advanced technology to create long-term value in the digital asset economy</p>
      <div className={styles.principles}>{principles.map(({Icon,title,copy})=><article className={styles.principle} key={title}><Icon aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div>
  </section>;
}
