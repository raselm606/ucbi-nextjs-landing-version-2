import Link from "next/link";
import styles from "./corporate.module.css";

const steps = [
  { number: "01", title: "Institutional Focus", copy: "Long-term value creation in digital assets" },
  { number: "02", title: "Expertise", copy: "Finance, technology and regulatory knowledge" },
  { number: "03", title: "Global Perspective", copy: "Opportunities across key markets" },
];

export default function OurApproach() {
  return (
    <section className={`${styles.page} ${styles.approach}`} id="about">
      <div className={styles.approachGrid}>
        <div className={styles.approachIntro}>
          <p className={styles.eyebrow}>Our Approach</p>
          <h2 className={styles.approachTitle}>Bridging Traditional Finance<br />and the Digital Asset Economy</h2>
          <p style={{ textAlign: "justify", fontSize: "12px" }} className={styles.approachCopy}>UCBI Group Technologies is shaping the future of institutional digital asset treasury management through strategic capital allocation Ethereum accumulation and blockchain innovation connecting traditional finance with decentralized financial infrastructure to support long term value creation sustainable growth and institutional excellence</p>
          <Link className={styles.textLink} href="/#about">Discover our approach &nbsp; →</Link>
        </div>
        {steps.map(({ number, title, copy }) => (
          <article className={styles.approachItem} key={number}>
            <p className={styles.step}>{number}</p><h3>{title}</h3><p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
