"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import Logo from "../../../public/images/corporate/logo.png";
import fr from '../../../public/images/france.png';
import uk from '../../../public/images/uk.png';
import navStyles from "../corporate.module.css";
import styles from "./CorporateFooter.module.css";

const groups = [
  { title: "Company", links: [
    { label: "Blockchain", href: "https://etherscan.io/token/0xb42b35deca033a23401a1a89007a39343a510d0a", target: "_blank" },
    { label: "Submit Inquiry", href: "#corporate-membership-modal", modal: true },
    { label: "Advisory Services", href: "#corporate-membership-modal", modal: true },
    { label: "Become a Member", href: "https://advisory.ucbibanking.io", target: "_blank" },
  ] },
  { title: "Resources", offset: 1, links: [
    { label: "Yahoo Finance", href: "https://finance.yahoo.com/quote/UCBI-USD/", target: "_blank" },
    { label: "Coinmarketcap", href: "https://coinmarketcap.com/currencies/ucbi-banking/", target: "_blank" },
    { label: "Blockchain Explorer", href: "https://etherscan.io/token/0xb42b35deca033a23401a1a89007a39343a510d0a", target: "_blank" },
  ] },
  { title: "Contact", offset: 2, links: [
    { label: "Contact@ucbibanking.io", href: "mailto:contact@ucbibanking.io" },
    { label: "Monday to Friday at 9am to 6pm" },
  ] },
];

const legalLinks = [
  ["Terms & Conditions", "https://doc.ucbibanking.io/ucbi_terms_condition"],
  ["Privacy Policy", "https://doc.ucbibanking.io/ucbi_terms_condition"],
  ["Press Kit", "https://doc.ucbibanking.io/#"],
];

export default function CorporateFooter() {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const subscribe = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setNotice("");
    try {
      const response = await fetch("https://api.ucbibanking.io/api/ucbi_subscriber", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data?.msg || "Unable to subscribe right now.");
      setNotice(data?.msg || "Subscribed successfully.");
      setEmail("");
    } catch (error) {
      setNotice(error?.message || "Unable to subscribe right now.");
    } finally {
      setSubmitting(false);
    }
  };

  return <footer className={styles.footer}>
    <div className={styles.main}>
      <div className={styles.brand}>
        <Link href="/" className={styles.logo} aria-label="UCBI Banking home"><Image src={Logo} width={120} height={40} alt="UCBI Banking" /></Link>
        <p style={{textAlign:'justify', textJustify:'inter-character'}}>Our UCBI blockchain private equity holding providing institutional-grade infrastructure market access and the advisory in digital assets</p>
        <div className={styles.socials}>
          <a target="_blank" href="https://www.linkedin.com/company/ucbi-banking/" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a target="_blank" href="https://x.com/UCBI_Holding" aria-label="X"><FaXTwitter /></a>
          <a target="_blank" href="https://www.youtube.com/@UCBI_Banking" aria-label="YouTube"><FaYoutube /></a> 
        </div>
      </div>
      {groups.map((group) => <nav className={styles.linkGroup} key={group.title} aria-label={group.title}>
        <h2>{group.title}</h2>
        <div className={styles.groupItems}>
          {Array.from({ length: group.offset || 0 }, (_, index) => <span className={styles.menuSpacer} aria-hidden="true" key={`spacer-${index}`} />)}
          {group.links.map(({ label, href, target, modal }) => href
            ? <a href={href} key={label} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} data-bs-toggle={modal ? "modal" : undefined}>{label}</a>
            : <span key={label}>{label}</span>)}
        </div>
      </nav>)}
      <div className={styles.newsletter}>
        <h2>Stay Informed</h2>
        <p>Receive our latest insights and market updates</p>
        <form className={styles.form} onSubmit={subscribe}>
          <label className={styles.visuallyHidden} htmlFor="corporate-footer-email">Your email address</label>
          <input id="corporate-footer-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" required />
          <button type="submit" disabled={submitting} aria-label="Subscribe"><FiArrowRight /></button>
        </form>
        {notice ? <p className={styles.notice} role="status">{notice}</p> : <p className={styles.privacy}>
          &nbsp; </p>}

          <p className="mb-1"><Link href="tel:+442034456388"  >+44 20 34 45 63 88 
                            <Image style={{width:"12px", height: "13px", marginTop:'-3px', marginLeft:'6px'}} src={uk} alt="uk"/></Link></p>

                            <p  className="mb-1"><Link  href="tel:+33184160139"  >+33 18 41 60 13 9 
                  <Image style={{width: "12px", height: "13px", marginTop:'-3px', marginLeft: "6px"}} src={fr} alt="france"/> </Link></p>
      </div>
    </div>
    <div className={styles.bottom}>
      <p>&copy; 2026 UCBI Group Technologies Ltd All rights reserved | Trading as UCBI Banking | Registered in England & Wales No 16774681</p>
      <nav className={styles.legal} aria-label="Legal">{legalLinks.map(([label, href]) => <a href={href} key={label} target="_blank" rel="noopener noreferrer">{label}</a>)}</nav>
      <details className={`${navStyles.language} ${styles.footerLanguage}`}>
        <summary aria-label="Select language">
          <svg className={navStyles.languageIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3.5 9h17M3.5 15h17M12 3c2.3 2.4 3.5 5.4 3.5 9s-1.2 6.6-3.5 9c-2.3-2.4-3.5-5.4-3.5-9S9.7 5.4 12 3Z" /></svg>
          <span>EN</span>
          <svg className={navStyles.languageCaret} viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="m1 1.5 5 5 5-5" /></svg>
        </summary>
        <div className={`${navStyles.languageMenu} ${styles.footerLanguageMenu}`} aria-label="Languages"><Link href="/corporate" hrefLang="en" lang="en" aria-current="page">EN</Link><Link href="/fr" hrefLang="fr" lang="fr">FR</Link></div>
      </details>
    </div>
  </footer>;
}
