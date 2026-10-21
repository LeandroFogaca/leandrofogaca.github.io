import React from 'react';
import { projects } from '../data/portfolioData';
import { IconArrowUpRight, IconGithub } from './Icons';

export default function Projects() {
  return (
    <section className="section-block">
      <div className="section-head">
        <h2 className="section-heading">Projetos Pessoais</h2>
        <a
          href="https://github.com/LeandroFogaca?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="link-muted"
        >
          Ver todos no GitHub <IconArrowUpRight size={14} />
        </a>
      </div>

      <div className="project-simple-list">
        {projects.map((project) => (
          <article key={project.id} className="project-item">
            <div className="project-top-line">
              <h3 className="project-name">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-anchor"
                >
                  {project.title}
                  <IconArrowUpRight size={14} className="icon-arrow" />
                </a>
              </h3>
              <span className="project-tag-clean">{project.categoryLabel}</span>
            </div>

            <p className="project-summary">{project.description}</p>

            <div className="project-tech-line">
              {project.techs.map((t, idx) => (
                <span key={idx} className="tech-badge-simple">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
