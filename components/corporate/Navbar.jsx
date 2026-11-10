import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/corporate/logo.png";
import styles from "./corporate.module.css";

const links = ["Home", "About",  "Markets", "Advisory", "ETF", "Blog", "Contact"];

export default function CorporateNavbar() {
  return (
    <header className={`${styles.page} ${styles.navbar}`}>
      <nav className={styles.navInner} aria-label="Main navigation">
        <Link className={styles.brand} href="/" aria-label="UCBI home">
          <Image src={Logo} width={130} height={44} alt="UCBI Banking" priority />
        </Link>
        <ul className={styles.navLinks}>
          {links.map((label, index) => (
            <li key={label}><Link className={index === 0 ? styles.active : ""} href={index === 0 ? "/" : `/#${label.toLowerCase()}`}>{label}</Link></li>
          ))}
        </ul>
        <div className={styles.navActions}>
          <details className={styles.language}>
            <summary aria-label="Select language">
              <svg className={styles.languageIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3.5 9h17M3.5 15h17M12 3c2.3 2.4 3.5 5.4 3.5 9s-1.2 6.6-3.5 9c-2.3-2.4-3.5-5.4-3.5-9S9.7 5.4 12 3Z" />
              </svg>
              <span>EN</span>
              <svg className={styles.languageCaret} viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="m1 1.5 5 5 5-5" /></svg>
            </summary>
            <div className={styles.languageMenu} aria-label="Languages">
              <Link href="/corporate" hrefLang="en" lang="en" aria-current="page">EN</Link>
              <Link href="/fr" hrefLang="fr" lang="fr">FR</Link>
            </div>
          </details>
          <Link className={styles.memberButton} href="https://dashboard.ucbibanking.io" target="_blank" rel="noreferrer">Member Access <span aria-hidden="true">→</span></Link>
        </div>
      </nav>
    </header>
  );
}
