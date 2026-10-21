import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  IconLinkedin,
  IconGithub,
  IconMail,
  IconCopy,
  IconCheck,
  IconArrowUpRight,
} from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contato" className="section-padding">
      <div className="section-container">
        <div className="contact-card">
          <div className="contact-glow"></div>

          <div className="contact-content">
            <span className="section-tag">Conectividade & Parcerias</span>
            <h2 className="contact-title">Vamos conversar sobre novos projetos?</h2>
            <p className="contact-desc">
              Seja para trocar ideias sobre soluções de software, integração de hardware e IoT, automação industrial ou novas oportunidades, fique à vontade para entrar em contato.
            </p>

            <div className="contact-actions-grid">
              {/* LinkedIn Primary */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn primary"
              >
                <div className="btn-icon-wrapper">
                  <IconLinkedin size={22} />
                </div>
                <div className="btn-text-wrapper">
                  <span className="btn-label">Conectar no LinkedIn</span>
                  <span className="btn-subtext">linkedin.com/in/leandrofogaca</span>
                </div>
                <IconArrowUpRight size={18} className="arrow-icon" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn secondary"
              >
                <div className="btn-icon-wrapper">
                  <IconGithub size={22} />
                </div>
                <div className="btn-text-wrapper">
                  <span className="btn-label">Acompanhar no GitHub</span>
                  <span className="btn-subtext">github.com/LeandroFogaca</span>
                </div>
                <IconArrowUpRight size={18} className="arrow-icon" />
              </a>

              {/* E-mail Copier */}
              <button
                onClick={handleCopy}
                className="contact-action-btn copy-btn"
                title="Clique para copiar e-mail"
              >
                <div className="btn-icon-wrapper">
                  {copied ? <IconCheck size={22} className="text-emerald" /> : <IconMail size={22} />}
                </div>
                <div className="btn-text-wrapper">
                  <span className="btn-label">
                    {copied ? 'E-mail copiado para a área de transferência!' : 'Copiar E-mail'}
                  </span>
                  <span className="btn-subtext">{personalInfo.email}</span>
                </div>
                <span className="copy-tag">{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
