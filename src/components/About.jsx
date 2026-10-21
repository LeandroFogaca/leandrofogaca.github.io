import React from 'react';
import { IconCpu, IconCode, IconLayers } from './Icons';

export default function About() {
  const pillars = [
    {
      icon: <IconCpu size={24} />,
      title: "Hardware, IoT & Embarcados",
      description:
        "Projetos integrando Arduino, microcontroladores, conexão Bluetooth e portas seriais para aquisição de telemetria e controle em tempo real.",
    },
    {
      icon: <IconCode size={24} />,
      title: "Aplicações Web & Desktop",
      description:
        "Desenvolvimento de interfaces ágeis com React, Vue e Electron para transformar dados brutos de sensores em painéis visuais intuitivos.",
    },
    {
      icon: <IconLayers size={24} />,
      title: "Automação & Padrão IEC 61131-3",
      description:
        "Bagagem prática no chão de fábrica e manutenção industrial, dominando lógica de controle e linguagens da norma internacional de automação.",
    },
  ];

  return (
    <section id="sobre" className="section-padding">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Trajetória Multidisciplinar</span>
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            A convergência entre a precisão da engenharia industrial e a agilidade do desenvolvimento de software.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-narrative">
            <p className="narrative-paragraph">
              Minha história na tecnologia começou no universo técnico: atuei como eletricista de manutenção no SENAI e especializei-me em Mecatrônica Industrial pelo UNISAL. Esse contato direto com máquinas, painéis elétricos, sensores e atuadores me deu uma visão prática e profunda sobre como as coisas funcionam no mundo real.
            </p>
            <p className="narrative-paragraph">
              Ao aprofundar-me na automação e programação de controladores sob a norma <strong>IEC 61131-3</strong>, o interesse pelo universo do software cresceu exponencialmente. Decidi expandir os horizontes ingressando no <strong>Bacharelado em Engenharia de Computação na UNIVESP</strong> e graduando-me também em <strong>Processos Gerenciais pela UNASP</strong>.
            </p>
            <p className="narrative-paragraph">
              Hoje atuo com paixão conectando hardware a software: criando desde firmwares e protocolos seriais em C/C++ até aplicações desktop em Electron, interfaces responsivas em React/Vue e rotinas automatizadas em Python e JavaScript.
            </p>
          </div>

          <div className="about-pillars">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <div className="pillar-content">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
