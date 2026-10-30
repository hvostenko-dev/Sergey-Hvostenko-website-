import React from 'react';
import ArtworkCard from './ArtworkCard';

export default function Portfolio({
  works,
  visibleWorks,
  currentFilter,
  setFilter,
  searchQuery,
  setSearchQuery,
  lang,
  t,
  onOpenLightbox,
}) {
  const counts = {
    featured: works.filter((w) => w.featured).length,
    all: works.length,
    fineart: works.filter((w) => w.category === 'fineart').length,
    archviz: works.filter((w) => w.category === 'archviz').length,
    concept3d: works.filter((w) => w.category === 'concept3d').length,
    aimotion: works.filter((w) => w.category === 'aimotion').length,
  };

  const tabs = [
    { key: 'featured', label: t.filterFeatured, count: counts.featured },
    { key: 'all', label: t.filterAll, count: counts.all },
    { key: 'fineart', label: t.filterFineArt, count: counts.fineart },
    { key: 'archviz', label: t.filterArchViz, count: counts.archviz },
    { key: 'concept3d', label: t.filterConcept3d, count: counts.concept3d },
    { key: 'aimotion', label: t.filterAiMotion, count: counts.aimotion },
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div className="portfolio-title-row">
            <div>
              <span className="section-kicker">{t.galleryKicker}</span>
              <h2 className="section-title">{t.galleryTitle}</h2>
            </div>
            <div className="search-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label={t.searchPlaceholder}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Очистить поиск"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Filter Controls with horizontal scroll support on mobile */}
          <div className="gallery-controls">
            <div className="filter-tabs-wrapper">
              <div className="filter-tabs" role="tablist" aria-label="Portfolio Categories">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={currentFilter === tab.key}
                    className={`filter-tab ${currentFilter === tab.key ? 'active' : ''}`}
                    onClick={() => setFilter(tab.key)}
                  >
                    <span>{tab.label}</span>
                    <span className="tab-badge">{tab.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {visibleWorks.length > 0 ? (
          <div className="gallery-grid" aria-live="polite">
            {visibleWorks.map((work, idx) => (
              <ArtworkCard
                key={work.id}
                work={work}
                index={idx}
                lang={lang}
                t={t}
                onOpen={onOpenLightbox}
              />
            ))}
          </div>
        ) : (
          <div className="gallery-empty-state">
            <p>Ничего не найдено по запросу «{searchQuery}»</p>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => {
                setSearchQuery('');
                setFilter('all');
              }}
            >
              Сбросить поиск
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
