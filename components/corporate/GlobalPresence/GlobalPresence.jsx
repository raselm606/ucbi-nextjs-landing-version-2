"use client";

import { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import styles from "./GlobalPresence.module.css";

const regions = [
  { name: "UK", x: "41%", y: "30%", delay: "0s" },
  { name: "Europe", x: "52.5%", y: "24%", delay: "0.35s" },
  { name: "Middle East", x: "67%", y: "40%", delay: "0.7s" },
  { name: "APAC", x: "83%", y: "62%", delay: "1.05s" },
];

function DottedWorldMap() {
  return (
    <svg className={styles.worldMap} viewBox="0 0 800 380" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="world-dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.55" fill="#b8c6d5" />
        </pattern>
        <clipPath id="world-land">
          <path d="M58 83 86 53 129 42 153 52 175 45 202 62 223 69 237 96 221 111 195 114 185 132 163 135 151 159 129 169 122 194 101 198 90 177 76 165 68 139 50 127 44 106Z" />
          <path d="m173 183 23 8 15 22-7 21 16 22-7 22-18 19-4 29-13 30-13-15 1-31-12-27 5-28-11-26 7-25Z" />
          <path d="m351 76 25-17 33 4 14 15-8 16-24 4-9 18-23-4-14-15Z" />
          <path d="m367 126 24-13 34 6 22 25-6 24-15 25-8 33-18 36-17 21-13-18 2-30-14-29 3-23-11-23Z" />
          <path d="m420 76 34-24 49-7 33 13 35-6 44 15 44-2 36 18 48 3 22 20-11 18-39 5-18 18-36-6-14 17-39-4-15 18-29 2-12 20-31-5-8-21-22-10-15-23-29-6-12-20-29 3-18-17-31 1-20-14Z" />
          <path d="m592 194 24-12 32 8 20 17-8 19-22 10-17 20-23-9-13-20Z" />
          <path d="m682 274 29-9 32 8 21 18-13 18-32 2-24-12-22-10Z" />
          <path d="m318 119 12-9 9 11-6 14-10 4Z" />
        </clipPath>
      </defs>
      <rect width="800" height="380" fill="url(#world-dots)" clipPath="url(#world-land)" />
    </svg>
  );
}

export default function   GlobalPresence() {
  const modalRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    const video = videoRef.current;
    if (!modal || !video) return;

    const playVideo = () => {
      video.src = "https://www.youtube-nocookie.com/embed/tbBN3FEzyKg?autoplay=1&controls=1&rel=0&iv_load_policy=3&playsinline=1&loop=1&playlist=tbBN3FEzyKg";
    };
    const stopVideo = () => {
      video.src = "";
    };

    modal.addEventListener("shown.bs.modal", playVideo);
    modal.addEventListener("hidden.bs.modal", stopVideo);
    return () => {
      modal.removeEventListener("shown.bs.modal", playVideo);
      modal.removeEventListener("hidden.bs.modal", stopVideo);
    };
  }, []);

  return (
    <section className={styles.section} aria-labelledby="global-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Global Presence</p>
          <h2 id="global-title">A Network Across<br /><em>Key Markets</em></h2>
          <p>UCBI operates through a network of partners and representatives across Europe the Middle East and APAC supporting institutional access and development opportunities</p>
          <button className={styles.button} type="button" data-bs-toggle="modal" data-bs-target="#corporate-film-modal">
            View Corporate Film <FiArrowRight />
          </button>
        </div>

        <div className={styles.map} role="img" aria-label="Dotted world map showing UCBI's global regions">
          <DottedWorldMap />
          {regions.map((region) => (
            <div className={styles.marker} key={region.name} style={{ left: region.x, top: region.y, "--pulse-delay": region.delay }}>
              <i />
              <span>{region.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="modal fade" id="corporate-film-modal" ref={modalRef} tabIndex="-1" aria-labelledby="corporate-film-title" aria-hidden="true">
        <div className={`modal-dialog modal-dialog-centered modal-xl ${styles.videoDialog}`}>
          <div className={`modal-content ${styles.videoContent}`}>
            <div className={styles.videoHeader}>
              <div>
                <h2 className={styles.videoTitle} id="corporate-film-title">UCBI Corporate Film</h2>
                <p className={styles.videoSubtitle}>UCBI Group Technologies · Corporate Overview</p>
              </div>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close video" />
            </div>
            <div className={styles.videoFrame}>
              <iframe ref={videoRef} title="UCBI Corporate Film" src="" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
