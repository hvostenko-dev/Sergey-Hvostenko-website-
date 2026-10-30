import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Pillars from './components/Pillars';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Games from './components/Games';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

import { PORTFOLIO_WORKS } from './data/portfolioWorks';
import { I18N } from './data/translations';

export default function App() {
  const [lang, setLang] = useState('ru');
  const [filter, setFilter] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const isRtl = lang === 'he';
  const t = useMemo(() => I18N[lang] || I18N.ru, [lang]);

  // Sync document language and direction
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [lang, isRtl]);

  // Compute visible works pool
  const visibleWorks = useMemo(() => {
    let pool = [];
    if (filter === 'featured') {
      pool = PORTFOLIO_WORKS.filter((w) => w.featured);
    } else if (filter === 'all') {
      pool = [...PORTFOLIO_WORKS];
    } else {
      pool = PORTFOLIO_WORKS.filter((w) => w.category === filter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      pool = pool.filter((w) => {
        const tRu = (w.title && w.title.ru) || '';
        const tEn = (w.title && w.title.en) || '';
        const tHe = (w.title && w.title.he) || '';
        const sRu = (w.subtitle && w.subtitle.ru) || '';
        const sEn = (w.subtitle && w.subtitle.en) || '';
        const sHe = (w.subtitle && w.subtitle.he) || '';

        return (
          tRu.toLowerCase().includes(q) ||
          tEn.toLowerCase().includes(q) ||
          tHe.toLowerCase().includes(q) ||
          sRu.toLowerCase().includes(q) ||
          sEn.toLowerCase().includes(q) ||
          sHe.toLowerCase().includes(q)
        );
      });
    }

    return pool;
  }, [filter, searchQuery]);

  // Open artwork by ID (e.g., from Bento strip cards)
  const handleOpenWorkById = useCallback((id) => {
    const idx = visibleWorks.findIndex((w) => w.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    } else {
      // If not in current filter/search, switch to 'all' and clear search
      setFilter('all');
      setSearchQuery('');
      const allIdx = PORTFOLIO_WORKS.findIndex((w) => w.id === id);
      if (allIdx !== -1) {
        setLightboxIndex(allIdx);
      }
    }
  }, [visibleWorks]);

  const handleStepLightbox = useCallback((delta) => {
    if (!visibleWorks.length) return;
    setLightboxIndex((prevIdx) => {
      if (prevIdx === null) return 0;
      return (prevIdx + delta + visibleWorks.length) % visibleWorks.length;
    });
  }, [visibleWorks.length]);

  return (
    <>
      {/* Subtle ambient background glow */}
      <div className="ambient-glow glow-1" aria-hidden="true" />
      <div className="ambient-glow glow-2" aria-hidden="true" />

      {/* Site Header */}
      <Header lang={lang} setLang={setLang} t={t} />

      <main>
        {/* Hero Section */}
        <Hero t={t} onOpenWorkById={handleOpenWorkById} />

        {/* Marquee Ticker */}
        <Marquee />

        {/* 4 Creative Pillars */}
        <Pillars t={t} onSelectPillar={(cat) => setFilter(cat)} />

        {/* Interactive Portfolio Gallery */}
        <Portfolio
          works={PORTFOLIO_WORKS}
          visibleWorks={visibleWorks}
          currentFilter={filter}
          setFilter={setFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          lang={lang}
          t={t}
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
        />

        {/* About & Biography / CV */}
        <About t={t} />

        {/* Shipped Games & Art Direction */}
        <Games t={t} />

        {/* Contact & Inquiries */}
        <Contact t={t} />
      </main>

      {/* Footer */}
      <Footer t={t} />

      {/* Lightbox Modal */}
      <Lightbox
        work={lightboxIndex !== null ? visibleWorks[lightboxIndex] : null}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => handleStepLightbox(-1)}
        onNext={() => handleStepLightbox(1)}
        lang={lang}
        t={t}
        isRtl={isRtl}
      />
    </>
  );
}
