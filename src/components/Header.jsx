import React, { useState, useEffect } from 'react';

export default function Header({ lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape or resize
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`} id="top">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Sergey Hvostenko Home" onClick={handleLinkClick}>
          <span className="brand-mark">SH</span>
          <span className="brand-divider"></span>
          <span className="brand-name">{t.brandName}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="main-nav" aria-label="Primary Navigation">
          <a href="#portfolio" className="nav-link">{t.navPortfolio}</a>
          <a href="#pillars" className="nav-link">{t.navDirections}</a>
          <a href="#about" className="nav-link">{t.navAbout}</a>
          <a href="#games" className="nav-link">{t.navGames}</a>
          <a href="#contact" className="nav-link">{t.navContact}</a>
        </nav>

        {/* Header Actions (Language & Contact button) */}
        <div className="header-actions">
          <div className="lang-switcher" role="group" aria-label="Language Selector">
            <button
              type="button"
              className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
              onClick={() => setLang('ru')}
              aria-pressed={lang === 'ru'}
            >
              RU
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'he' ? 'active' : ''}`}
              onClick={() => setLang('he')}
              aria-pressed={lang === 'he'}
            >
              עב
            </button>
          </div>

          <a href="#contact" className="btn btn-gold btn-sm header-cta-desktop" onClick={handleLinkClick}>
            {t.headerCta}
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>
        </div>

        {/* Mobile Quick Nav Pills Bar */}
        <nav className="mobile-nav-bar" aria-label="Mobile Quick Navigation">
          <a href="#portfolio" className="mobile-nav-pill">{t.navPortfolio}</a>
          <a href="#pillars" className="mobile-nav-pill">{t.navDirections}</a>
          <a href="#about" className="mobile-nav-pill">{t.navAbout}</a>
          <a href="#games" className="mobile-nav-pill">{t.navGames}</a>
          <a href="#contact" className="mobile-nav-pill">{t.navContact}</a>
        </nav>
      </div>

      {/* Mobile Drawer Overlay & Panel */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div className={`mobile-drawer-panel ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="mobile-drawer-header">
          <span className="brand-mark">SH</span>
          <button
            type="button"
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <a href="#portfolio" className="mobile-drawer-link" onClick={handleLinkClick}>
            <span className="drawer-link-num">01</span>
            <span>{t.navPortfolio}</span>
          </a>
          <a href="#pillars" className="mobile-drawer-link" onClick={handleLinkClick}>
            <span className="drawer-link-num">02</span>
            <span>{t.navDirections}</span>
          </a>
          <a href="#about" className="mobile-drawer-link" onClick={handleLinkClick}>
            <span className="drawer-link-num">03</span>
            <span>{t.navAbout}</span>
          </a>
          <a href="#games" className="mobile-drawer-link" onClick={handleLinkClick}>
            <span className="drawer-link-num">04</span>
            <span>{t.navGames}</span>
          </a>
          <a href="#contact" className="mobile-drawer-link" onClick={handleLinkClick}>
            <span className="drawer-link-num">05</span>
            <span>{t.navContact}</span>
          </a>
        </nav>

        <div className="mobile-drawer-footer">
          <div className="mobile-drawer-lang">
            <span className="drawer-section-title">Язык / Language:</span>
            <div className="lang-switcher">
              <button
                type="button"
                className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
                onClick={() => setLang('ru')}
              >
                RU
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === 'he' ? 'active' : ''}`}
                onClick={() => setLang('he')}
              >
                עב
              </button>
            </div>
          </div>

          <a href="#contact" className="btn btn-gold btn-full" onClick={handleLinkClick}>
            {t.headerCta}
          </a>
        </div>
      </div>
    </header>
  );
}
