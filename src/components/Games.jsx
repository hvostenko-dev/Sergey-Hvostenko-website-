import React from 'react';

export default function Games({ t }) {
  const games = [
    {
      year: '2010',
      title: 'Gourmania 2: Great Expectations',
      pub: 'Alawar / Big Fish Games',
      role: t.gameRoleConcept,
    },
    {
      year: '2012',
      title: 'Natural Threat: Ominous Shores',
      pub: 'Alawar / Big Fish Games',
      role: t.gameRoleArtDir,
    },
    {
      year: '2013',
      title: 'Natural Threat 2',
      pub: 'Rin Games / Big Fish Games',
      role: t.gameRoleArtDir,
    },
    {
      year: '2013',
      title: 'Zeus Defense',
      pub: 'iOS / App Store (Alawar)',
      role: t.gameRoleArtDir,
    },
    {
      year: '2014',
      title: 'Fantastic Team (Fantastic Runner)',
      pub: 'Rin Games (Google Play)',
      role: t.gameRoleArtDir,
    },
    {
      year: '2015',
      title: 'Twilight Town & Time Gap',
      pub: 'Absolutist Games',
      role: t.gameRoleConceptLead,
    },
    {
      year: '2014–2018',
      title: t.gameFenixTitle,
      pub: 'Fenix-Soft (Strategy)',
      role: t.gameRoleConceptLead,
    },
  ];

  return (
    <section className="games-section" id="games">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">{t.gamesKicker}</span>
          <h2 className="section-title">{t.gamesTitle}</h2>
          <p className="section-subtitle">{t.gamesSubtitle}</p>
        </div>

        <div className="games-grid">
          {games.map((g, idx) => (
            <div key={idx} className="game-card">
              <span className="game-year">{g.year}</span>
              <h3 className="game-title">{g.title}</h3>
              <p className="game-pub">{g.pub}</p>
              <p className="game-role">{g.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
