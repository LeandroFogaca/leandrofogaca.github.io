import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconMail, IconCheck } from './Icons';

export default function Header() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="profile-header">
      <div className="profile-intro">
        <div className="profile-photo-wrapper">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="profile-photo"
            onError={(e) => {
              e.currentTarget.src = "https://avatars.githubusercontent.com/u/27831619?v=4";
            }}
          />
        </div>

        <div className="profile-info">
          <h1 className="profile-name">{personalInfo.name}</h1>
          <p className="profile-headline">{personalInfo.role}</p>
          <p className="profile-location">Tetra Pak • UNIVESP • Brasil</p>

          <div className="profile-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <IconGithub size={16} /> GitHub
            </a>
            <span className="dot-divider">•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <IconLinkedin size={16} /> LinkedIn
            </a>
            <span className="dot-divider">•</span>
            <button
              onClick={handleCopyEmail}
              className="text-link btn-copy-inline"
              title="Copiar e-mail"
            >
              {copied ? (
                <>
                  <IconCheck size={14} /> E-mail copiado
                </>
              ) : (
                <>
                  <IconMail size={16} /> {personalInfo.email}
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="profile-bio">
        <p>
          Profissional com trajetória na manutenção elétrica e mecatrônica industrial, atualmente graduando em <strong>Engenharia de Computação pela UNIVESP</strong> e atuando na <strong>Tetra Pak</strong>.
        </p>
        <p>
          Foco na integração prática entre hardware e software: desde programação de controladores no padrão <strong>IEC 61131-3</strong> e projetos com <strong>Arduino / IoT</strong>, até aplicações desktop em <strong>Electron</strong> e interfaces modernas com <strong>JavaScript, TypeScript, React e Vue</strong>.
        </p>
      </div>
    </header>
  );
}
