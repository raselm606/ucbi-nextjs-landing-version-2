'use client';

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from 'react';
import imgcover from '../../../../public/images/video_cover.jpg';
import yahoof from '../../../../public/images/yahoo1.png';
import styles from './GrowthVideoSection.module.css';

export default function GrowthVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 🎥 ভিডিও প্লেয়ার নিয়ন্ত্রণ করার জন্য useRef
  const videoRef = useRef(null);

  // 🌐 public/video.mp4 ফাইলের জন্য Next.js রুট পাথ
  const videoUrl = "/video1.mp4";

  // ⚡ ১ ক্লিকেই সরাসরি প্লে করার ফাংশন
  const handlePlayVideo = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="goal_sectio line_top">
      <div className="container cline">
        <div className="row g-0 goal_big">
          <div className="col-lg-12">
            <div className="row g-0 align-items-stretch">
              
              {/* 👈 বাম পাশের অংশ */}
              <div className="col-lg-6">
                <div className="goal_content ggland bg_bb h-100">
                  <span>SOUTIEN À LONG TERME</span>
                  <h2>
                    Engagé à construire <br /> une croissance digitale durable
                  </h2>
                  <p className="section_paragraph_dark">
                    Opérant dans le cadre d’une structure d’investissement privée la holding soutient une stratégie de trésorerie Ethereum et une allocation diversifiée du capital multi actifs grâce à la participation des actionnaires
                  </p>
                  <div className="divider_lin"></div>
                  <div className="featured_o">
                    <p>Données de marché</p>
                    <Link target="_blank" href="https://finance.yahoo.com/quote/UCBI-USD/" className="fe_link">
                      <Image src={yahoof} alt="featured logos" />
                    </Link> 
                  </div>
                </div>
              </div>

              {/* 👉 ডান পাশের ভিডিও অংশ */}
              <div className="col-lg-6">
                <div className={styles.videoCardRight}>
                  <div className={styles.videoContainer}>

                    {/* কাস্টম থাম্বনেইল প্লে ওভারলে (১ ক্লিকে প্লে হবে) */}
                    {!isPlaying && (
                      <div 
                        className={styles.videoOverlay} 
                        onClick={handlePlayVideo}
                        role="button"
                        tabIndex={0}
                      >
                        <div className={styles.playBtn}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className={styles.videoTagline}>
                          Watch Institutional Presentation
                        </span>
                      </div>
                    )}

                    {/* HTML5 Video Element */}
                    <video
                      ref={videoRef}
                      src={videoUrl}
                      controls={isPlaying}
                      playsInline
                      loop 
                      className={styles.videoElement}
                      poster={imgcover}
                    >
                      Your browser does not support video playback.
                    </video>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}