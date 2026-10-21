import React from 'react';
import { educationList, experienceList } from '../data/portfolioData';

export default function Experience() {
  const mainSkills = [
    'JavaScript',
    'TypeScript',
    'Python',
    'C / C++',
    'React',
    'Vue.js',
    'Electron',
    'Arduino & IoT',
    'IEC 61131-3',
    'Git',
    'Linux',
  ];

  // Pair education and experience chronologically
  const maxLen = Math.max(educationList.length, experienceList.length);
  const timelinePairs = Array.from({ length: maxLen }, (_, i) => ({
    edu: educationList[i] || null,
    exp: experienceList[i] || null,
  }));

  return (
    <>
      <section className="section-block">
        <h2 className="section-heading">Formação & Trajetória</h2>
        <p className="section-intro-text">
          Cronologia paralela: formação acadêmica à esquerda e vivência prática à direita.
        </p>

        <div className="single-line-timeline">
          {/* Column Headers */}
          <div className="timeline-headers-row">
            <div className="timeline-header-side left">
              <span className="timeline-header-icon">🎓</span>
              <span className="timeline-header-text">Formação</span>
            </div>
            <div className="timeline-header-divider"></div>
            <div className="timeline-header-side right">
              <span className="timeline-header-icon">💼</span>
              <span className="timeline-header-text">Experiência</span>
            </div>
          </div>

          {/* Central Line & Pairs */}
          <div className="timeline-spine-wrapper">
            <div className="central-spine-line"></div>

            <div className="timeline-split-rows">
              {timelinePairs.map((pair, idx) => (
                <div key={idx} className="timeline-split-row">
                  {/* Left: Formação */}
                  <div className="split-side split-left">
                    {pair.edu && (
                      <div className="timeline-card-clean">
                        <span className="entry-period">{pair.edu.period}</span>
                        <h4 className="entry-title">{pair.edu.title}</h4>
                        <span className="entry-institution">{pair.edu.institution}</span>
                        <p className="entry-desc">{pair.edu.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Central Node */}
                  <div className="split-center">
                    <div className="center-node-dot"></div>
                  </div>

                  {/* Right: Experiência */}
                  <div className="split-side split-right">
                    {pair.exp && (
                      <div className="timeline-card-clean">
                        <span className="entry-period">{pair.exp.period}</span>
                        <h4 className="entry-title">{pair.exp.role}</h4>
                        <span className="entry-institution">{pair.exp.company}</span>
                        <p className="entry-desc">{pair.exp.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills Inline */}
      <section className="section-block">
        <h2 className="section-heading">Tecnologias & Ferramentas</h2>
        <div className="skills-inline-list">
          {mainSkills.map((skill, idx) => (
            <span key={idx} className="skill-badge-minimal">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
