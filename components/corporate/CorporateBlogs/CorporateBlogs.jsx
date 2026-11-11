"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CorporateBlogs.module.css";

const articles = [
  {
    category: "Markets",
    date: "05 Nov  2026",
    title: "Ethereum and the future of institutional digital asset treasuries",
    excerpt: "Explore how institutions are approaching Ethereum as part of a long-term digital asset strategy",
    image: "/images/corporate/section_img/eth.jfif",
    alt: "Ethereum displayed against a dark blue background",
  },
  {
    category: "Institutional",
    date: "03 Nov 2026",
    title: "Building trusted infrastructure for digital asset markets",
    excerpt: "Institutional grade infrastructure is helping bring confidence and scale to a changing market",
    image: "/images/corporate/section_img/about.jfif",
    alt: "Modern glass office towers viewed from below",
  },
  {
    category: "Regulation",
    date: "29 Oct 2026",
    title: "Why governance matters in a global digital economy",
    excerpt: "Clear governance and thoughtful regulation support sustainable participation across markets",
    image: "/images/corporate/section_img/commitment.jfif",
    alt: "Modern architecture representing global finance",
  },
];

export default function CorporateBlogs() {
  const swiperRef = useRef(null);

  const move = (direction) => {
    if (direction < 0) swiperRef.current?.slidePrev();
    else swiperRef.current?.slideNext();
  };

  return (
    <section className={styles.section} aria-labelledby="corporate-news-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Latest News</p>
          <h2 id="corporate-news-title">Insights<br />on the <em>Digital<br className={styles.mobileBreak} /> Asset Market</em></h2>
          <p style={{textAlign:'justify'}} className={styles.description}>Stay informed with our UCBI for  the latest developments in digital assets regulation and institutional adoption sourced from leading global media</p>
          <Link className={styles.allNews} href="/news">View all news <FiArrowRight aria-hidden="true" /></Link>
        </div>
        <div className={styles.news}>
          <div className={styles.controls}>
            <button type="button" aria-label="Previous articles" onClick={() => move(-1)}><FiArrowLeft /></button>
            <button type="button" aria-label="Next articles" onClick={() => move(1)}><FiArrowRight /></button>
          </div>
          <Swiper
            className={styles.track}
            modules={[A11y]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            slidesPerView={2.35}
            spaceBetween={14}
            speed={500}
            watchOverflow
            breakpoints={{
              0: { slidesPerView: 1.08, spaceBetween: 12 },
              701: { slidesPerView: 1.8, spaceBetween: 14 },
              1101: { slidesPerView: 2.35, spaceBetween: 14 },
            }}
          >
            {articles.map((article) => (
              <SwiperSlide key={article.category} className={styles.slide}>
                <article className={styles.card}>
                  <Image className={styles.image} src={article.image} alt={article.alt} width={720} height={360} />
                  <div className={styles.cardBody}>
                    <p className={styles.meta}>{article.category}<span />{article.date}</p>
                    <h3>{article.title}</h3>
                    <p className={styles.excerpt}>{article.excerpt}</p>
                    <Link className={styles.readMore} href="/news">Read more <FiArrowRight aria-hidden="true" /></Link>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
