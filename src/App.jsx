import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-minimal-layout">
      <main className="content-container">
        <Header />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </div>
  );
}