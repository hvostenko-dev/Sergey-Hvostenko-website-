import React from 'react';

export default function Pillars({ t, onSelectPillar }) {
  const handlePillarClick = (category) => {
    onSelectPillar(category);
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pillars-section" id="pillars">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">{t.pillarsKicker}</span>
          <h2 className="section-title">{t.pillarsTitle}</h2>
          <p className="section-subtitle">{t.pillarsSubtitle}</p>
        </div>

        <div className="pillars-grid">
          <article
            className="pillar-card"
            role="button"
            tabIndex={0}
            onClick={() => handlePillarClick('fineart')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePillarClick('fineart');
              }
            }}
          >
            <div className="pillar-img-wrap">
              <img src="/assets/works/26934799180.jpg" alt="Fine Art Painting & Graphics" loading="lazy" />
              <span className="pillar-count">25 <span>{t.worksWord}</span></span>
            </div>
            <div className="pillar-body">
              <h3>{t.pillar1Title}</h3>
              <p>{t.pillar1Desc}</p>
              <span className="pillar-link">{t.pillarExplore}</span>
            </div>
          </article>

          <article
            className="pillar-card"
            role="button"
            tabIndex={0}
            onClick={() => handlePillarClick('archviz')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePillarClick('archviz');
              }
            }}
          >
            <div className="pillar-img-wrap">
              <img src="/assets/works/54432823812.jpg" alt="Architectural Visualization Unreal Engine & Lumion" loading="lazy" />
              <span className="pillar-count">27 <span>{t.worksWord}</span></span>
            </div>
            <div className="pillar-body">
              <h3>{t.pillar2Title}</h3>
              <p>{t.pillar2Desc}</p>
              <span className="pillar-link">{t.pillarExplore}</span>
            </div>
          </article>

          <article
            className="pillar-card"
            role="button"
            tabIndex={0}
            onClick={() => handlePillarClick('concept3d')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePillarClick('concept3d');
              }
            }}
          >
            <div className="pillar-img-wrap">
              <img src="/assets/works/26597245211.jpg" alt="3D Character & GameDev Concept Art" loading="lazy" />
              <span className="pillar-count">31 <span>{t.worksWord}</span></span>
            </div>
            <div className="pillar-body">
              <h3>{t.pillar3Title}</h3>
              <p>{t.pillar3Desc}</p>
              <span className="pillar-link">{t.pillarExplore}</span>
            </div>
          </article>

          <article
            className="pillar-card"
            role="button"
            tabIndex={0}
            onClick={() => handlePillarClick('aimotion')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePillarClick('aimotion');
              }
            }}
          >
            <div className="pillar-img-wrap">
              <img src="/assets/works/55370871827.jpg" alt="AI Video & Unreal Engine Animation" loading="lazy" />
              <span className="pillar-count">9 <span>{t.videosWord}</span></span>
            </div>
            <div className="pillar-body">
              <h3>{t.pillar4Title}</h3>
              <p>{t.pillar4Desc}</p>
              <span className="pillar-link">{t.pillarExplore}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
