import { FiArrowRight } from "react-icons/fi";
import styles from "./Commitment.module.css";

export default function Commitment() {
  return <section className={styles.section} aria-labelledby="commitment-title">
    <div className={styles.imagePlaceholder} role="img" aria-label="Modern architecture image placeholder" />
    <div className={styles.overlay}/>
    <div className={styles.content}><p className={styles.eyebrow}>Our Commitment</p><h2 id="commitment-title">Bridging Traditional Finance<br />and the <em>Digital Asset Economy</em></h2><p>We work with institutional partners to develop secure regulated and innovative solutions for the future of finance</p><button className={styles.button} type="button" data-bs-toggle="modal" data-bs-target="#corporate-membership-modal">Get in touch <FiArrowRight /></button></div>
  </section>;
}
