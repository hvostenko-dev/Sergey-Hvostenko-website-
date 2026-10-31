import React, { useState, useEffect, useCallback, useRef } from 'react';

const STORAGE_KEY = 'sergey_a11y_prefs';

const defaultPrefs = {
  fontSize: 'normal', // 'normal' | 'medium' | 'large'
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  readableFont: false,
  reduceMotion: false,
  bigCursor: false,
};

export default function AccessibilityWidget({ t, isRtl }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefs, setPrefs] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...defaultPrefs, ...JSON.parse(saved) } : defaultPrefs;
    } catch {
      return defaultPrefs;
    }
  });

  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  // Apply classes to document.body whenever prefs change
  useEffect(() => {
    const cl = document.body.classList;

    // Font size
    cl.remove('a11y-font-md', 'a11y-font-lg');
    if (prefs.fontSize === 'medium') cl.add('a11y-font-md');
    if (prefs.fontSize === 'large') cl.add('a11y-font-lg');

    // Toggles
    prefs.highContrast ? cl.add('a11y-high-contrast') : cl.remove('a11y-high-contrast');
    prefs.grayscale ? cl.add('a11y-grayscale') : cl.remove('a11y-grayscale');
    prefs.highlightLinks ? cl.add('a11y-highlight-links') : cl.remove('a11y-highlight-links');
    prefs.readableFont ? cl.add('a11y-readable-font') : cl.remove('a11y-readable-font');
    prefs.reduceMotion ? cl.add('a11y-reduce-motion') : cl.remove('a11y-reduce-motion');
    prefs.bigCursor ? cl.add('a11y-big-cursor') : cl.remove('a11y-big-cursor');

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // Storage error ignored
    }
  }, [prefs]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const updatePref = useCallback((key, val) => {
    setPrefs((prev) => ({ ...prev, [key]: val }));
  }, []);

  const handleReset = useCallback(() => {
    setPrefs(defaultPrefs);
  }, []);

  const activeCount =
    (prefs.fontSize !== 'normal' ? 1 : 0) +
    (prefs.highContrast ? 1 : 0) +
    (prefs.grayscale ? 1 : 0) +
    (prefs.highlightLinks ? 1 : 0) +
    (prefs.readableFont ? 1 : 0) +
    (prefs.reduceMotion ? 1 : 0) +
    (prefs.bigCursor ? 1 : 0);

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        className={`a11y-widget-trigger ${activeCount > 0 ? 'has-active' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={t.a11yBtnLabel}
        title={t.a11yBtnLabel}
      >
        <span className="a11y-trigger-icon" aria-hidden="true">
          {/* Universal Accessibility / Wheelchair / Human Symbol */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
          </svg>
        </span>
        <span className="a11y-trigger-label" aria-hidden="true">
          {isRtl ? 'נגישות' : 'A11y'}
        </span>
        {activeCount > 0 && (
          <span className="a11y-badge-count" aria-label={`${activeCount} active settings`}>
            {activeCount}
          </span>
        )}
      </button>

      {/* Accessible Modal Overlay & Drawer */}
      {isOpen && (
        <div
          className="a11y-backdrop"
          onClick={() => setIsOpen(false)}
          role="presentation"
        >
          <div
            ref={modalRef}
            className="a11y-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-panel-title"
            onClick={(e) => e.stopPropagation()}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="a11y-panel-header">
              <div className="a11y-header-info">
                <div className="a11y-title-row">
                  <span className="a11y-icon-badge" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
                    </svg>
                  </span>
                  <h2 id="a11y-panel-title" className="a11y-title">
                    {t.a11yTitle}
                  </h2>
                </div>
                <p className="a11y-subtitle">{t.a11ySubtitle}</p>
              </div>

              <button
                type="button"
                className="a11y-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label={t.a11yClose}
              >
                ✕
              </button>
            </div>

            {/* Body of Options */}
            <div className="a11y-panel-body">
              {/* Text Size Scale */}
              <div className="a11y-group">
                <div className="a11y-group-header">
                  <span className="a11y-group-title">{t.a11yTextSize}</span>
                </div>
                <div className="a11y-size-buttons" role="group" aria-label={t.a11yTextSize}>
                  <button
                    type="button"
                    className={`a11y-size-btn ${prefs.fontSize === 'normal' ? 'active' : ''}`}
                    onClick={() => updatePref('fontSize', 'normal')}
                    aria-pressed={prefs.fontSize === 'normal'}
                  >
                    {t.a11yNormal}
                  </button>
                  <button
                    type="button"
                    className={`a11y-size-btn ${prefs.fontSize === 'medium' ? 'active' : ''}`}
                    onClick={() => updatePref('fontSize', 'medium')}
                    aria-pressed={prefs.fontSize === 'medium'}
                  >
                    {t.a11yMedium}
                  </button>
                  <button
                    type="button"
                    className={`a11y-size-btn ${prefs.fontSize === 'large' ? 'active' : ''}`}
                    onClick={() => updatePref('fontSize', 'large')}
                    aria-pressed={prefs.fontSize === 'large'}
                  >
                    {t.a11yLarge}
                  </button>
                </div>
              </div>

              {/* Toggles Grid */}
              <div className="a11y-toggles-grid">
                {/* High Contrast */}
                <div
                  className={`a11y-toggle-card ${prefs.highContrast ? 'active' : ''}`}
                  onClick={() => updatePref('highContrast', !prefs.highContrast)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      updatePref('highContrast', !prefs.highContrast);
                    }
                  }}
                  aria-pressed={prefs.highContrast}
                >
                  <div className="a11y-toggle-content">
                    <strong className="a11y-toggle-label">{t.a11yHighContrast}</strong>
                    <span className="a11y-toggle-desc">{t.a11yHighContrastDesc}</span>
                  </div>
                  <div className="a11y-switch" aria-hidden="true">
                    <span className="a11y-switch-thumb" />
                  </div>
                </div>

                {/* Grayscale Mode */}
                <div
                  className={`a11y-toggle-card ${prefs.grayscale ? 'active' : ''}`}
                  onClick={() => updatePref('grayscale', !prefs.grayscale)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      updatePref('grayscale', !prefs.grayscale);
                    }
                  }}
                  aria-pressed={prefs.grayscale}
                >
                  <div className="a11y-toggle-content">
                    <strong className="a11y-toggle-label">{t.a11yGrayscale}</strong>
                    <span className="a11y-toggle-desc">{t.a11yGrayscaleDesc}</span>
                  </div>
                  <div className="a11y-switch" aria-hidden="true">
                    <span className="a11y-switch-thumb" />
                  </div>
                </div>

                {/* Highlight Links */}
                <div
                  className={`a11y-toggle-card ${prefs.highlightLinks ? 'active' : ''}`}
                  onClick={() => updatePref('highlightLinks', !prefs.highlightLinks)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      updatePref('highlightLinks', !prefs.highlightLinks);
                    }
                  }}
                  aria-pressed={prefs.highlightLinks}
                >
                  <div className="a11y-toggle-content">
                    <strong className="a11y-toggle-label">{t.a11yHighlightLinks}</strong>
                    <span className="a11y-toggle-desc">{t.a11yHighlightLinksDesc}</span>
                  </div>
                  <div className="a11y-switch" aria-hidden="true">
                    <span className="a11y-switch-thumb" />
                  </div>
                </div>

                {/* Readable Font */}
                <div
                  className={`a11y-toggle-card ${prefs.readableFont ? 'active' : ''}`}
                  onClick={() => updatePref('readableFont', !prefs.readableFont)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      updatePref('readableFont', !prefs.readableFont);
                    }
                  }}
                  aria-pressed={prefs.readableFont}
                >
                  <div className="a11y-toggle-content">
                    <strong className="a11y-toggle-label">{t.a11yReadableFont}</strong>
                    <span className="a11y-toggle-desc">{t.a11yReadableFontDesc}</span>
                  </div>
                  <div className="a11y-switch" aria-hidden="true">
                    <span className="a11y-switch-thumb" />
                  </div>
                </div>

                {/* Reduce Motion */}
                <div
                  className={`a11y-toggle-card ${prefs.reduceMotion ? 'active' : ''}`}
                  onClick={() => updatePref('reduceMotion', !prefs.reduceMotion)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      updatePref('reduceMotion', !prefs.reduceMotion);
                    }
                  }}
                  aria-pressed={prefs.reduceMotion}
                >
                  <div className="a11y-toggle-content">
                    <strong className="a11y-toggle-label">{t.a11yReduceMotion}</strong>
                    <span className="a11y-toggle-desc">{t.a11yReduceMotionDesc}</span>
                  </div>
                  <div className="a11y-switch" aria-hidden="true">
                    <span className="a11y-switch-thumb" />
                  </div>
                </div>

                {/* Big Cursor */}
                <div
                  className={`a11y-toggle-card ${prefs.bigCursor ? 'active' : ''}`}
                  onClick={() => updatePref('bigCursor', !prefs.bigCursor)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      updatePref('bigCursor', !prefs.bigCursor);
                    }
                  }}
                  aria-pressed={prefs.bigCursor}
                >
                  <div className="a11y-toggle-content">
                    <strong className="a11y-toggle-label">{t.a11yBigCursor}</strong>
                    <span className="a11y-toggle-desc">{t.a11yBigCursorDesc}</span>
                  </div>
                  <div className="a11y-switch" aria-hidden="true">
                    <span className="a11y-switch-thumb" />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="a11y-panel-footer">
              <button
                type="button"
                className="a11y-reset-btn"
                onClick={handleReset}
                disabled={activeCount === 0}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                <span>{t.a11yReset}</span>
              </button>

              <button
                type="button"
                className="btn btn-gold btn-sm"
                onClick={() => setIsOpen(false)}
              >
                {t.a11yClose}
              </button>
            </div>

            <div className="a11y-statement-bar">
              <span className="a11y-standard-badge">WCAG 2.1 AA / IS 5568</span>
              <p className="a11y-statement-text">{t.a11yStatement}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
