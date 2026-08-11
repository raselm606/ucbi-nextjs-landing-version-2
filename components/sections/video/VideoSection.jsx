'use client';

import { useState } from 'react';
import styles from './VideoSection.module.css';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // 🌐 Direct HD Global Network Video
  const networkVideoUrl = "https://cdn.pixabay.com/video/2019/04/20/22907-331828854_large.mp4";

  return (
    <section className={styles.videoSection}>
      <div className="container cline">
        
        {/* 🎯 Centered Header Block (Exact Screenshot Fit) */}
        <div className={styles.headerBlock}>
          <div className={styles.kickerBadge}>
            <span className={styles.kickerDot}></span>
            <span>INSTITUTIONAL MEDIA</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Explore UCBI Holding & <br /> Digital Asset Treasury Strategy
          </h2>

          <div className={styles.titleDivider}></div>

          <p className={styles.sectionSubtitle}>
            Watch our official video presentation on private equity crypto-finance, <br />
            Ethereum accumulation, and institutional digital asset architecture.
          </p>
        </div>

        {/* Main Video Card */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={styles.videoCard}>
              <div className={styles.videoContainer}>
                
                {!isPlaying && (
                  <div 
                    className={styles.videoOverlay} 
                    onClick={() => setIsPlaying(true)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={styles.playBtn}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className={styles.videoTagline}>
                      Click to Watch Global Network Overview
                    </span>
                  </div>
                )}

                <video
                  src={networkVideoUrl}
                  controls={isPlaying}
                  autoPlay={isPlaying}
                  playsInline
                  loop
                  className={styles.iframeVideo}
                  poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
                >
                  Your browser does not support video playback.
                </video>

              </div>

              {/* Bottom Meta Bar */}
              <div className={styles.videoInfoBar}>
                <div className={styles.videoBadge}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>Global Blockchain Infrastructure & Connected Nodes</span>
                </div>
                <div className={styles.videoStats}>
                  <span>Quality: <strong style={{ color: '#fff' }}>4K Ultra HD</strong></span>
                  <span className="mx-2">•</span>
                  <span>Edition: <strong style={{ color: '#fff' }}>2026 World Network</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}