import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { IconCode, IconCpu, IconTerminal } from './Icons';

export default function Skills() {
  const getIcon = (type) => {
    switch (type) {
      case 'cpu':
        return <IconCpu size={16} />;
      case 'terminal':
        return <IconTerminal size={16} />;
      default:
        return <IconCode size={16} />;
    }
  };

  return (
    <section id="habilidades" className="section-padding">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Competências & Ferramentas</span>
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">
            Stack tecnológica moldada para integrar automação industrial, hardware inteligente e sistemas de software.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-cat-header">
                <h3 className="skill-cat-title">{cat.title}</h3>
                <p className="skill-cat-desc">{cat.description}</p>
              </div>

              <div className="skills-items-wrapper">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-chip">
                    <span className="skill-icon">{getIcon(skill.icon)}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
