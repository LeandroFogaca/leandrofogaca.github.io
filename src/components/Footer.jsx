import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="simple-footer">
      <div className="footer-content">
        <p>© {currentYear} {personalInfo.name}</p>
        <div className="footer-links-clean">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span className="dot-divider">•</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="dot-divider">•</span>
          <a href={`mailto:${personalInfo.email}`}>
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}
