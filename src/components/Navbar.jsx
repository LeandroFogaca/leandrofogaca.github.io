import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { IconGithub, IconLinkedin } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Monogram */}
        <a href="#" className="navbar-brand">
          <span className="navbar-monogram">LF</span>
          <span className="navbar-name">{personalInfo.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar-nav desktop-only" aria-label="Navegação principal">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions & Socials */}
        <div className="navbar-actions desktop-only">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            title="Perfil no GitHub"
            aria-label="GitHub"
          >
            <IconGithub size={19} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            title="Perfil no LinkedIn"
            aria-label="LinkedIn"
          >
            <IconLinkedin size={19} />
          </a>
          <a href="#contato" className="btn-contact-pill">
            Falar Comigo
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger-line ${mobileMenuOpen ? 'open-1' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer mobile-only">
          <ul className="mobile-menu-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-footer">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <IconGithub size={18} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <IconLinkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
