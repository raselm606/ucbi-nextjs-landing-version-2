import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styles from "./StrategicTreasury.module.css";

export default function StrategicTreasury() {
  return <section className={styles.section} aria-labelledby="treasury-title">
    <div className={styles.imagePlaceholder} role="img" aria-label="Ethereum treasury image placeholder" />
    <div className={styles.overlay} />
    <div className={styles.content}><p className={styles.eyebrow}>Strategic Treasury</p><h2 id="treasury-title">Ethereum at the Core<br />of <em>Our Strategy</em></h2><p>Ethereum is a strategic component of our digital asset treasury supporting our long-term vision through its institutional adoption robust infrastructure and growing ecosystem</p><Link href="/etf" className={styles.button}>Learn more about our ETF <FiArrowRight /></Link></div>
  </section>;
}
