import styles from "./KeyFigures.module.css";

const figures = [
  { value: "3", label: "Strategic\nPillars" },
  { value: "5+", label: "Global\nMarkets" },
  { value: "10+", label: "Institutional\nPartners" },
];

export default function KeyFigures() {
  return <section className={styles.section} aria-labelledby="figures-title">
    <div className={styles.inner}>
      <div className={styles.intro}><p className={styles.eyebrow}>Key Figures</p><h2 id="figures-title">Building Institutional<br />Solutions for a <em>Digital World</em></h2><p>UCBI develops and operates institutional solutions for the digital asset economy with a focus on infrastructure regulated access and strategic investment opportunities</p></div>
      <div className={styles.figures}>{figures.map((item) => <div className={styles.figure} key={item.value}><strong>{item.value}</strong><span>{item.label}</span><i /></div>)}</div>
    </div>
  </section>;
}
