import React from 'react';
import { timeline } from '../data/portfolioData';

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

  return (
    <>
      {/* Experience & Education */}
      <section className="section-block">
        <h2 className="section-heading">Formação & Trajetória</h2>
        <div className="simple-timeline">
          {timeline.map((item, idx) => (
            <div key={idx} className="timeline-row">
              <div className="timeline-meta">
                <span className="timeline-period-clean">{item.period}</span>
              </div>
              <div className="timeline-info">
                <h3 className="timeline-title-clean">{item.title}</h3>
                <p className="timeline-place-clean">{item.institution}</p>
                <p className="timeline-desc-clean">{item.description}</p>
              </div>
            </div>
          ))}
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
