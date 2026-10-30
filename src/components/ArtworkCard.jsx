import React from 'react';

export default function ArtworkCard({ work, index, lang, t, onOpen }) {
  const title = (work.title && work.title[lang]) || (work.title && work.title.en) || '';
  const subtitle = (work.subtitle && work.subtitle[lang]) || (work.subtitle && work.subtitle.en) || '';
  const catLabel = t[`catLabel_${work.category}`] || work.category;
  const isVideo = work.mediaType === 'video';

  // Ensure image path starts with /
  const imageSrc = work.localImage.startsWith('/') ? work.localImage : `/${work.localImage}`;

  return (
    <article
      className="work-card"
      tabIndex={0}
      role="button"
      aria-label={title}
      onClick={() => onOpen(index)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(index);
        }
      }}
    >
      <div className="work-thumb">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          decoding="async"
        />
        {isVideo && (
          <>
            <span className="video-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t.videoBadgeText}
            </span>
            <div className="play-overlay">
              <div className="play-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="work-info">
        <span className="work-cat-tag">{catLabel}</span>
        <h3 className="work-title">{title}</h3>
        <p className="work-subtitle">{subtitle}</p>
      </div>
    </article>
  );
}
