"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./CorporateBlogs.module.css";

const articles = [
  {
    category: "Markets",
    date: "Nov 05, 2026",
    title: "Ethereum and the future of institutional digital asset treasuries",
    excerpt: "Explore how institutions are approaching Ethereum as part of a long-term digital asset strategy.",
    image: "/images/corporate/section_img/eth.jfif",
    alt: "Ethereum displayed against a dark blue background",
  },
  {
    category: "Institutional",
    date: "Nov 03, 2026",
    title: "Building trusted infrastructure for digital asset markets",
    excerpt: "Institutional grade infrastructure is helping bring confidence and scale to a changing market.",
    image: "/images/corporate/section_img/about.jfif",
    alt: "Modern glass office towers viewed from below",
  },
  {
    category: "Regulation",
    date: "Oct 29, 2026",
    title: "Why governance matters in a global digital economy",
    excerpt: "Clear governance and thoughtful regulation support sustainable participation across markets.",
    image: "/images/corporate/section_img/commitment.jfif",
    alt: "Modern architecture representing global finance",
  },
];

export default function CorporateBlogs() {
  const trackRef = useRef(null);

  const move = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-news-card]");
    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
    track.scrollBy({ left: direction * ((card?.getBoundingClientRect().width || track.clientWidth) + gap), behavior: "smooth" });
  };

  return (
    <section className={styles.section} aria-labelledby="corporate-news-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Latest News</p>
          <h2 id="corporate-news-title">Insights<br />on the <em>Digital<br className={styles.mobileBreak} /> Asset Market</em></h2>
          <p className={styles.description}>Stay informed with the latest developments in digital assets, regulation and institutional adoption, sourced from leading global media.</p>
          <Link className={styles.allNews} href="/news">View all news <FiArrowRight aria-hidden="true" /></Link>
        </div>
        <div className={styles.news}>
          <div className={styles.controls}>
            <button type="button" aria-label="Previous articles" onClick={() => move(-1)}><FiArrowLeft /></button>
            <button type="button" aria-label="Next articles" onClick={() => move(1)}><FiArrowRight /></button>
          </div>
          <div className={styles.track} ref={trackRef}>
            {articles.map((article) => (
              <article className={styles.card} data-news-card key={article.category}>
                <Image className={styles.image} src={article.image} alt={article.alt} width={720} height={360} />
                <div className={styles.cardBody}>
                  <p className={styles.meta}>{article.category}<span />{article.date}</p>
                  <h3>{article.title}</h3>
                  <p className={styles.excerpt}>{article.excerpt}</p>
                  <Link className={styles.readMore} href="/news">Read more <FiArrowRight aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
