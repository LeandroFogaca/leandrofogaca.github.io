import React, { useState } from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconCopy,
  IconCheck,
  IconArrowUpRight,
  IconMapPin,
  IconBriefcase,
} from './Icons';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-glow glow-1"></div>
      <div className="hero-bg-glow glow-2"></div>

      <div className="section-container hero-container">
        {/* Profile Card & Info */}
        <div className="hero-grid">
          <div className="hero-content">
            {/* Status Badge */}
            <div className="status-badge">
              <span className="status-dot"></span>
              <span className="status-text">{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Olá, sou <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            <p className="hero-subtitle">
              {personalInfo.role}
            </p>

            <p className="hero-description">
              {personalInfo.headline} Unindo vivência prática em automação e manutenção industrial à robustez da Engenharia de Computação, desenvolvendo soluções integradas de software, IoT e sistemas embarcados.
            </p>

            {/* Meta Tags (Location & Company) */}
            <div className="hero-meta">
              <span className="meta-item">
                <IconMapPin size={15} /> {personalInfo.location}
              </span>
              <span className="meta-separator">•</span>
              <span className="meta-item">
                <IconBriefcase size={15} /> Atuação: {personalInfo.company}
              </span>
            </div>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#projetos" className="btn-primary">
                Explorar Projetos <IconArrowUpRight size={16} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <IconLinkedin size={18} /> LinkedIn
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-ghost"
                title="Copiar endereço de e-mail"
              >
                {copied ? (
                  <>
                    <IconCheck size={16} className="text-emerald" /> E-mail Copiado!
                  </>
                ) : (
                  <>
                    <IconMail size={16} /> Copiar E-mail
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Profile Photo with Ambient Glow */}
          <div className="hero-portrait-wrapper">
            <div className="portrait-card">
              <div className="portrait-image-container">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="portrait-img"
                  onError={(e) => {
                    // Fallback to GitHub avatar if local image fails
                    e.currentTarget.src = "https://avatars.githubusercontent.com/u/27831619?v=4";
                  }}
                />
              </div>

              <div className="portrait-caption">
                <div className="caption-title">Leandro Fogaça</div>
                <div className="caption-sub">UNIVESP • Tetra Pak</div>
              </div>

              {/* Floating tech tags around photo */}
              <div className="floating-badge badge-top-right">
                <span className="badge-glow-dot"></span> IoT & C++
              </div>
              <div className="floating-badge badge-bottom-left">
                <span className="badge-glow-dot cyan"></span> React & Electron
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="hero-stats-row">
          {stats.map((item, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
