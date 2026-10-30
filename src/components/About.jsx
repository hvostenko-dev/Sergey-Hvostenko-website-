import React from 'react';

export default function About({ t }) {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left column: Bio & Philosophy */}
          <div className="about-bio">
            <span className="section-kicker">{t.aboutKicker}</span>
            <h2 className="section-title">{t.aboutTitle}</h2>

            <div className="about-mini-profile">
              <img
                src="/assets/sergey-portrait.jpg"
                alt="Сергей Хвостенко"
                className="about-mini-avatar"
                loading="lazy"
              />
              <div>
                <strong>{t.portraitName}</strong>
                <p>{t.aboutMiniSub}</p>
              </div>
            </div>

            <div className="bio-text">
              <p dangerouslySetInnerHTML={{ __html: t.bioP1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.bioP2 }} />
              <p dangerouslySetInnerHTML={{ __html: t.bioP3 }} />
            </div>

            {/* Software & Tools Arsenal */}
            <div className="skills-box">
              <h3 className="skills-title">{t.skillsHeading}</h3>
              <div className="skills-tags">
                <span className="skill-chip highlight">Unreal Engine 5</span>
                <span className="skill-chip highlight">Lumion 2024</span>
                <span className="skill-chip highlight">3ds Max</span>
                <span className="skill-chip highlight">ZBrush</span>
                <span className="skill-chip highlight">AI Video & Image Gen</span>
                <span className="skill-chip">Rhino</span>
                <span className="skill-chip">SketchUp</span>
                <span className="skill-chip">TopoGun</span>
                <span className="skill-chip">SpeedTree</span>
                <span className="skill-chip">Adobe Photoshop</span>
                <span className="skill-chip">Corel Painter</span>
                <span className="skill-chip">Adobe After Effects</span>
                <span className="skill-chip">DaVinci Resolve</span>
                <span className="skill-chip">Poser</span>
                <span className="skill-chip">{t.skillFineArt}</span>
              </div>
            </div>
          </div>

          {/* Right column: Career Timeline */}
          <div className="about-timeline">
            <h3 className="timeline-heading">{t.timelineHeading}</h3>
            <div className="timeline-list">
              <div className="timeline-item">
                <span className="timeline-year">{t.tlNowYear}</span>
                <h4 className="timeline-role">{t.tlNowRole}</h4>
                <p className="timeline-org">EFFY KWINA Architecture Design · Mar Design (2015–2019)</p>
                <p className="timeline-desc">{t.tlNowDesc}</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-year">2014 — 2018</span>
                <h4 className="timeline-role">{t.tlFenixRole}</h4>
                <p className="timeline-org">Fenix-Soft</p>
                <p className="timeline-desc">{t.tlFenixDesc}</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-year">2013 — 2018</span>
                <h4 className="timeline-role">{t.tlRinRole}</h4>
                <p className="timeline-org">Rin Games (продюсирование Alawar) & Absolutist (2013–2015)</p>
                <p className="timeline-desc">{t.tlRinDesc}</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-year">2008 — 2013</span>
                <h4 className="timeline-role">{t.tlButterflyRole}</h4>
                <p className="timeline-org">Butterfly iSoft</p>
                <p className="timeline-desc">{t.tlButterflyDesc}</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-year">2003 — 2008</span>
                <h4 className="timeline-role">{t.tlInteriorRole}</h4>
                <p className="timeline-org">{t.tlInteriorOrg}</p>
                <p className="timeline-desc">{t.tlInteriorDesc}</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-year">1989 — 2003</span>
                <h4 className="timeline-role">{t.tlEduRole}</h4>
                <p className="timeline-org">{t.tlEduOrg}</p>
                <p className="timeline-desc">{t.tlEduDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
