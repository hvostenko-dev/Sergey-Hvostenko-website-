import React, { useState, useEffect, useRef } from 'react';

export default function Lightbox({
  work,
  isOpen,
  onClose,
  onPrev,
  onNext,
  lang,
  t,
  isRtl,
}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Reset video play state when current artwork changes
  useEffect(() => {
    setIsVideoPlaying(false);
    setIframeLoaded(false);
  }, [work]);

  // Lock body scroll and listen for keydown
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        if (isRtl) onNext();
        else onPrev();
      } else if (e.key === 'ArrowRight') {
        if (isRtl) onPrev();
        else onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext, isRtl]);

  if (!isOpen || !work) return null;

  const title = (work.title && work.title[lang]) || (work.title && work.title.en) || '';
  const subtitle = (work.subtitle && work.subtitle[lang]) || (work.subtitle && work.subtitle.en) || '';
  const catLabel = t[`catLabel_${work.category}`] || work.category;
  const isVideo = work.mediaType === 'video';
  const imageSrc = work.localImage.startsWith('/') ? work.localImage : `/${work.localImage}`;

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 45; // min swipe distance in px

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped Left
        if (isRtl) onPrev();
        else onNext();
      } else {
        // Swiped Right
        if (isRtl) onNext();
        else onPrev();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="lightbox open"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="lightbox-backdrop" onClick={onClose} />

      <div
        className="lightbox-content"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Закрыть (Esc)"
        >
          ×
        </button>

        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          onClick={isRtl ? onNext : onPrev}
          aria-label="Предыдущая работа"
        >
          ‹
        </button>

        <button
          type="button"
          className="lightbox-nav lightbox-next"
          onClick={isRtl ? onPrev : onNext}
          aria-label="Следующая работа"
        >
          ›
        </button>

        {/* Artwork Stage */}
        <div className="lightbox-stage">
          {isVideo && work.embedUrl ? (
            <div className="video-theater-wrapper">
              <div className="video-poster-box">
                {!isVideoPlaying ? (
                  <>
                    <img
                      src={imageSrc}
                      alt={title}
                      className="video-theater-poster"
                    />
                    <div className="video-poster-overlay">
                      <div className="video-badge-pill">
                        <span className="video-dot"></span>
                        <span>{t.cinemaBadge || 'Архитектурный видео-тур · 1080p Full HD'}</span>
                      </div>

                      <button
                        type="button"
                        className="video-hero-play-btn"
                        onClick={() => setIsVideoPlaying(true)}
                        aria-label="Запустить видео"
                      >
                        <svg viewBox="0 0 24 24" width="38" height="38" fill="currentColor">
                          <polygon points="6 3 20 12 6 21 6 3" />
                        </svg>
                      </button>

                      <div className="video-poster-details">
                        <span className="video-poster-tech">
                          {t.videoSpecs || '1920×1080 Full HD · 60fps · Unreal Engine 5 / AI Motion'}
                        </span>
                      </div>

                      <div className="video-theater-actions">
                        <button
                          type="button"
                          className="btn btn-gold btn-sm"
                          onClick={() => setIsVideoPlaying(true)}
                        >
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <polygon points="6 3 20 12 6 21 6 3" />
                          </svg>
                          <span>{t.btnPlayCinema || 'Запустить видео'}</span>
                        </button>

                        <a
                          href={work.flickrUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-sm"
                        >
                          <span>{t.btnFlickrHd || 'Смотреть в 1080p на Flickr ↗'}</span>
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="video-iframe-slot">
                    {!iframeLoaded && (
                      <div className="video-loading-indicator">
                        <div className="spinner"></div>
                        <span>Загрузка видеоплеера...</span>
                      </div>
                    )}
                    <iframe
                      src={work.embedUrl}
                      title={title}
                      allowFullScreen
                      allow="autoplay; fullscreen"
                      onLoad={() => setIframeLoaded(true)}
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <img
              src={imageSrc}
              alt={title}
              loading="eager"
            />
          )}
        </div>

        {/* Lightbox Meta Bar */}
        <div className="lightbox-meta">
          <div className="lightbox-meta-text">
            <span className="lightbox-cat">{catLabel}</span>
            <h3 className="lightbox-title">{title}</h3>
            <p className="lightbox-sub">{subtitle}</p>
          </div>
          <div className="lightbox-meta-actions">
            <a
              href={work.flickrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <span>{t.openOnFlickr}</span> ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
