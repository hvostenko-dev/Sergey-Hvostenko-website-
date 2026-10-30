import React from 'react';

export default function Hero({ t, onOpenWorkById }) {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow-badge">
            <span className="dot"></span>
            <span>{t.heroLocation}</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-main">{t.heroTitleMain}</span>
            <span className="hero-title-sub">{t.heroTitleSub}</span>
          </h1>

          <p className="hero-lead">{t.heroLead}</p>

          <blockquote className="hero-quote">
            <p>{t.heroQuoteText}</p>
          </blockquote>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-gold">
              <span>{t.heroBtnExplore}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#about" className="btn btn-outline">
              {t.heroBtnBio}
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">30+</span>
              <span className="stat-label">{t.statYears}</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">4</span>
              <span className="stat-label">{t.statDomains}</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">7+</span>
              <span className="stat-label">{t.statGames}</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">92</span>
              <span className="stat-label">{t.statWorks}</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Showcase with Master Portrait */}
        <div className="hero-visual">
          <div className="artist-showcase">
            <div className="artist-portrait-wrap">
              <img
                src="/assets/sergey-portrait.jpg"
                alt="Сергей Хвостенко (Sergey Hvostenko)"
                className="artist-portrait-img"
              />
              <div className="artist-badge-pill">
                <span className="status-dot"></span>
                <span>{t.portraitRole}</span>
              </div>
            </div>
            <div className="artist-portrait-meta">
              <div className="portrait-meta-title">
                <strong>{t.portraitName}</strong>
                <span className="portrait-loc">{t.statusAvailable}</span>
              </div>
              <span className="portrait-sub">{t.portraitCredentials}</span>
            </div>
          </div>

          {/* 3 Featured Works Mini-Strip */}
          <div className="hero-works-strip">
            <div
              className="bento-card strip-card"
              role="button"
              tabIndex={0}
              onClick={() => onOpenWorkById('51621553489')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenWorkById('51621553489');
                }
              }}
            >
              <img src="/assets/works/51621553489.jpg" alt="Yellow Nostalgia — Sergey Hvostenko" />
              <div className="bento-caption">
                <span className="bento-tag">{t.tagFineArt}</span>
                <strong>Yellow Nostalgia</strong>
              </div>
            </div>

            <div
              className="bento-card strip-card"
              role="button"
              tabIndex={0}
              onClick={() => onOpenWorkById('54121574698')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenWorkById('54121574698');
                }
              }}
            >
              <img src="/assets/works/54121574698.jpg" alt="Studio Effy Kwina Unreal Engine 5 Render" />
              <div className="bento-caption">
                <span className="bento-tag">Unreal Engine 5</span>
                <strong>{t.bentoArchTitle}</strong>
              </div>
            </div>

            <div
              className="bento-card strip-card"
              role="button"
              tabIndex={0}
              onClick={() => onOpenWorkById('26058499803')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenWorkById('26058499803');
                }
              }}
            >
              <img src="/assets/works/26058499803.jpg" alt="3D Character ZBrush Concept" />
              <div className="bento-caption">
                <span className="bento-tag">ZBrush 3D</span>
                <strong>{t.bento3dTitle}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
