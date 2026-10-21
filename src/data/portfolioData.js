export const personalInfo = {
  name: "Leandro Fogaça",
  role: "Engenharia de Computação & Automação Industrial",
  headline: "Conectando o mundo físico dos equipamentos industriais à inteligência do software moderno.",
  location: "Brasil",
  company: "Tetra Pak",
  avatar: "./Picture.jpg",
  github: "https://github.com/LeandroFogaca",
  linkedin: "https://www.linkedin.com/in/leandrofogaca/",
  email: "leandro.fogaca@gmail.com", // can be customized or copied
  status: "Aberto a projetos e desafios tecnológicos",
  shortBio:
    "Com sólida bagagem iniciada na manutenção elétrica e mecatrônica industrial, especializei-me na convergência entre hardware e software. Hoje curso Engenharia de Computação na UNIVESP, desenvolvendo desde interfaces desktop e web de alta performance até sistemas embarcados, IoT e automação industrial orientada a padrões internacionais (IEC 61131-3).",
};

export const stats = [
  { label: "Formação & Trajetória", value: "Industrial → Dev" },
  { label: "Foco Principal", value: "IoT & Software" },
  { label: "Repositórios Públicos", value: "9+ Projetos" },
  { label: "Padrão de Automação", value: "IEC 61131-3" },
];

export const skillCategories = [
  {
    title: "Linguagens de Programação",
    description: "Linguagens utilizadas em automação, embarcados, backend e frontend.",
    skills: [
      { name: "JavaScript (ES6+)", level: "Avançado", icon: "code" },
      { name: "TypeScript", level: "Intermediário", icon: "code" },
      { name: "Python", level: "Intermediário", icon: "terminal" },
      { name: "C / C++", level: "Intermediário", icon: "cpu" },
      { name: "HTML5 & CSS3", level: "Avançado", icon: "code" },
      { name: "Structured Text (IEC 61131-3)", level: "Avançado", icon: "cpu" },
    ],
  },
  {
    title: "Frontend & Aplicações Desktop",
    description: "Criação de interfaces responsivas, telemetrias e apps desktop.",
    skills: [
      { name: "React", level: "Prático", icon: "code" },
      { name: "Vue.js", level: "Prático", icon: "code" },
      { name: "Electron", level: "Prático", icon: "code" },
      { name: "Vite", level: "Prático", icon: "code" },
      { name: "Tailwind / CSS Moderno", level: "Prático", icon: "code" },
    ],
  },
  {
    title: "IoT, Embarcados & Hardware",
    description: "Comunicação serial, microcontroladores e telemetria de sensores.",
    skills: [
      { name: "Arduino & Microcontroladores", level: "Avançado", icon: "cpu" },
      { name: "Comunicação Serial / RS232 / UART", level: "Avançado", icon: "cpu" },
      { name: "Bluetooth & Wireless IoT", level: "Prático", icon: "cpu" },
      { name: "Sensores & Transmissores", level: "Avançado", icon: "cpu" },
      { name: "Automação Residencial & Industrial", level: "Especialista", icon: "cpu" },
    ],
  },
  {
    title: "Engenharia & Ferramentas",
    description: "Metodologias, controle de versão e ambientes de desenvolvimento.",
    skills: [
      { name: "Git & GitHub", level: "Diário", icon: "code" },
      { name: "GitHub Actions / CI-CD", level: "Prático", icon: "code" },
      { name: "Linux / Shell Script", level: "Intermediário", icon: "terminal" },
      { name: "GeoJSON & Análise de Dados", level: "Prático", icon: "terminal" },
      { name: "Inglês Técnico", level: "Avançado", icon: "terminal" },
    ],
  },
];

export const projects = [
  {
    id: "iot-smart-home",
    title: "IoT Casa Inteligente",
    category: "iot",
    categoryLabel: "IoT & Embarcados",
    description:
      "Sistema de automação residencial com controle de maquete via aplicativo móvel e comunicação Bluetooth, permitindo acionamento e supervisão de cargas elétricas, iluminação e sensores em tempo real.",
    highlights: [
      "Integração Bluetooth para comunicação bidirecional de baixa latência",
      "Controle de relés e atuadores com proteção de carga",
      "Desenvolvido como projeto de conclusão de curso com validação prática",
    ],
    techs: ["C++", "Arduino", "Bluetooth", "IoT", "Eletrônica"],
    githubUrl: "https://github.com/LeandroFogaca/Projeto-IOT-Casa-Inteligente",
    featured: true,
  },
  {
    id: "read-serialport-electron",
    title: "SerialPort Reader Desktop",
    category: "desktop",
    categoryLabel: "Desktop & Ferramentas",
    description:
      "Aplicação desktop multiplataforma construída em Electron para leitura, filtragem e diagnóstico de dados transmitidos pela porta serial de microcontroladores Arduino e equipamentos industriais.",
    highlights: [
      "Monitoramento contínuo de fluxo de bytes em tempo real",
      "Detecção dinâmica de portas seriais conectadas ao sistema operacional",
      "Interface gráfica intuitiva para agilizar testes e depuração de hardware",
    ],
    techs: ["Electron", "JavaScript", "Node.js", "SerialPort", "Desktop"],
    githubUrl: "https://github.com/LeandroFogaca/read_serialport_electron",
    featured: true,
  },
  {
    id: "serial-monitor-vue",
    title: "Serial Monitor UI",
    category: "desktop",
    categoryLabel: "Frontend & Telemetria",
    description:
      "Interface visual moderna e responsiva construída em Vue.js focada em telemetria e supervisão de periféricos seriais, permitindo visualização organizada dos logs e comandos enviados/recebidos.",
    highlights: [
      "Renderização reativa com Vue.js de alta velocidade",
      "Design focado em legibilidade de dados seriais e comandos",
      "Pronto para integração com Web Serial API e gateways IoT",
    ],
    techs: ["Vue.js", "JavaScript", "HTML5", "CSS3", "Serial API"],
    githubUrl: "https://github.com/LeandroFogaca/serial_monitor",
    featured: true,
  },
  {
    id: "pi-eng-computacao",
    title: "Plataforma de Engenharia (PI VI)",
    category: "software",
    categoryLabel: "Engenharia de Software",
    description:
      "Repositório central do Projeto Integrador VI do curso de Engenharia de Computação da UNIVESP, aplicando boas práticas de modelagem de software, TypeScript e arquitetura moderna.",
    highlights: [
      "Desenvolvimento em equipe com controle de versão estruturado",
      "Tipagem estrita e arquitetura escalável com TypeScript",
      "Solução orientada à resolução de problemas acadêmicos e comunitários",
    ],
    techs: ["TypeScript", "Engenharia de Software", "UNIVESP", "Node.js"],
    githubUrl: "https://github.com/LeandroFogaca/PJI610-DRP04-A2026S2-T001",
    featured: false,
  },
  {
    id: "dataset-polos-univesp",
    title: "Dataset Georreferenciado Polos UNIVESP",
    category: "data",
    categoryLabel: "Dados & GIS",
    description:
      "Estruturação e disponibilização da base de dados geográfica com a localização precisa dos polos da Universidade Virtual do Estado de São Paulo (UNIVESP) no formato padronizado GeoJSON.",
    highlights: [
      "Padronização em formato GeoJSON para consumo direto em bibliotecas de mapas (Leaflet, Mapbox)",
      "Coordenadas e metadados estruturados para visualização territorial",
      "Facilita análises espaciais e integração com plataformas educacionais",
    ],
    techs: ["GeoJSON", "GIS", "Data Processing", "Open Data"],
    githubUrl: "https://github.com/LeandroFogaca/dataset-polos-univesp",
    featured: false,
  },
  {
    id: "page-to-daily-report",
    title: "Daily Report Optimizer",
    category: "software",
    categoryLabel: "Produtividade & Web",
    description:
      "Ferramenta web leve e minimalista desenvolvida para simplificar e padronizar o preenchimento de apontamentos e relatórios técnicos diários, reduzindo retrabalho e aumentando a precisão dos dados.",
    highlights: [
      "Fluxo simplificado com preenchimento rápido de atividades",
      "Layout clean e adaptado para uso ágil no dia a dia",
      "Geração formatada de relatórios para compartilhamento",
    ],
    techs: ["JavaScript", "HTML5", "CSS3", "Produtividade"],
    githubUrl: "https://github.com/LeandroFogaca/page-to-daily-report",
    featured: false,
  },
];

export const timeline = [
  {
    period: "Em andamento",
    title: "Bacharelado em Engenharia de Computação",
    institution: "UNIVESP — Universidade Virtual do Estado de São Paulo",
    description:
      "Formação com foco em algoritmos, arquitetura de computadores, sistemas distribuídos, banco de dados, engenharia de software e desenvolvimento de projetos integradores práticos.",
    badge: "Graduação",
  },
  {
    period: "Carreira Industrial",
    title: "Atuação Técnica & Automação Industrial",
    institution: "Tetra Pak & Setor Industrial",
    description:
      "Experiência com manutenção industrial especializada, sistemas elétricos, automação, comandos, supervisão de linhas de produção e programação de controladores segundo a norma IEC 61131-3.",
    badge: "Indústria",
  },
  {
    period: "Formação Complementar",
    title: "Graduação em Processos Gerenciais",
    institution: "UNASP — Centro Universitário Adventista de São Paulo",
    description:
      "Desenvolvimento de competências em gestão de processos, planejamento estratégico, visão de negócios, liderança e otimização de fluxos operacionais.",
    badge: "Gestão",
  },
  {
    period: "Formação Técnica",
    title: "Técnico em Mecatrônica",
    institution: "UNISAL — Centro Universitário Salesiano de São Paulo",
    description:
      "Integração entre mecânica de precisão, eletrônica analógica/digital, automação com CLPs, pneumática, hidráulica e sensores industriais.",
    badge: "Mecatrônica",
  },
  {
    period: "Fundação Técnica",
    title: "Eletricista de Manutenção",
    institution: "SENAI",
    description:
      "Bases sólidas em instalações elétricas industriais, máquinas elétricas, comandos, painéis elétricos e segurança em instalações de alta e baixa tensão.",
    badge: "Elétrica",
  },
];
