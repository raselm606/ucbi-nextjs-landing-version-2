'use client';

import { useEffect, useState } from 'react';
import styles from './EtfSectionChooser.module.css';

const destinations = [
  { id: 'kraken-ethereum-market', number: '01', category: 'LIVE TRADING', title: 'ETH Trading View', description: 'Live ETH/USD price, candlestick chart, volume and market stats from Kraken.', icon: '↗', featured: true },
  { id: 'etf-flow-section', number: '02', category: 'FUND ACTIVITY', title: 'Ethereum ETF Flows', description: 'Explore daily fund inflows and outflows across Ethereum spot ETFs.', icon: '⇄' },
  { id: 'spot-etf-section', number: '03', category: 'ETF MARKET', title: 'Spot ETF Data', description: 'Browse spot Ethereum ETF market data, issuers and performance.', icon: '◈' },
  { id: 'etf-overview', number: '04', category: 'MARKET INSIGHTS', title: 'ETF Overview', description: 'Compare key Ethereum ETF metrics in one place.', icon: '▤' },
  { id: 'top-exchanges', number: '05', category: 'GLOBAL MARKETS', title: 'Crypto Exchanges', description: 'See leading exchanges ranked by reported trading volume.', icon: '◎' },
];

export default function EtfSectionChooser() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);
  const chooseSection = (id) => {
    close();
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="etf-chooser-title" aria-describedby="etf-chooser-description">
        <button type="button" className={styles.close_button} onClick={close} aria-label="Close section chooser">×</button>
        <div className={styles.eyebrow}><span /> UCBI · ETHEREUM MARKET</div>
        <div className={styles.heading_row}>
          <div>
            <h2 id="etf-chooser-title">What would you like to <span>explore?</span></h2>
            <p id="etf-chooser-description">Choose a destination and we’ll take you straight there. You can explore the rest of the page anytime.</p>
          </div>
          <div className={styles.heading_mark} aria-hidden="true">Ξ</div>
        </div>

        <div className={styles.destination_grid}>
          {destinations.map((destination) => (
            <button type="button" key={destination.id} className={`${styles.destination_card} ${destination.featured ? styles.featured : ''}`} onClick={() => chooseSection(destination.id)}>
              <span className={styles.card_topline}>
                <span className={styles.card_icon}>{destination.icon}</span>
                <span className={styles.card_number}>{destination.number}</span>
              </span>
              <span className={styles.card_category}>{destination.category}</span>
              <span className={styles.card_title}>{destination.title}</span>
              <span className={styles.card_description}>{destination.description}</span>
              <span className={styles.card_action}>GO TO SECTION <span aria-hidden="true">↗</span></span>
            </button>
          ))}
        </div>

        <div className={styles.dialog_footer}>
          <span><i /> Live market data · ETF analytics · exchange insights</span>
          <button type="button" className={styles.browse_button} onClick={close}>Browse page from the top <span aria-hidden="true">↓</span></button>
        </div>
      </section>
    </div>
  );
}
