"use client";

import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CorporateBlogs.module.css";

const withoutDotsAndCommas = (text = "") => text.replace(/[.,]/g, " ").replace(/\s+/g, " ").trim();

export default function CorporateBlogs({ articles = [] }) {
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
          <p className={styles.description}>Stay informed on digital asset markets with timely reports on regulatory change and institutional investment developments worldwide</p>
            <a className={styles.allNews} href="https://www.coindesk.com/business" target="_blank" rel="noopener noreferrer">View all news <FiArrowRight aria-hidden="true" /></a>
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
              <SwiperSlide key={article.guid || article.url} className={styles.slide}>
                <article className={styles.card}>
                  {article.image ? <img className={styles.image} src={article.image} alt={article.title} /> : <div className={styles.imagePlaceholder} aria-hidden="true" />}
                  <div className={styles.cardBody}>
                    <p className={styles.meta}>{article.category || "News"}<span />{article.published_date}</p>
                    <h3>{withoutDotsAndCommas(article.title)}</h3>
                    <p className={styles.excerpt}>{withoutDotsAndCommas(article.description)}</p>
                    <a className={styles.readMore} href={article.url} target="_blank" rel="noopener noreferrer">Read more <FiArrowRight aria-hidden="true" /></a>
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
