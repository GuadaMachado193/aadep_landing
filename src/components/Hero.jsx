import React from 'react';
import { scrollToHash } from '../hooks/useSmoothScroll';
import '../styles/hero.css';

export default function Hero() {
  const onAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      scrollToHash(href, 80);
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/grid/aadc_2026.webp`}
          alt="Árbitros en acción"
          className="hero-bg"
          fetchPriority="high"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-glass-panel">
          <div className="hero-logo-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/assets/aadep-logo.png`}
              alt="Logo AADEP"
              className="hero-logo"
            />
          </div>

          <h1 className="hero-title">ASOCIACIÓN DE ÁRBITROS DEPORTIVOS DE CÓRDOBA</h1>

          <p className="hero-subtitle">
            Profesionalización, ética y excelencia en el arbitraje deportivo
          </p>

          <div className="hero-actions">
            <a href="#curso" className="btn btn-primary" onClick={onAnchorClick}>
              Inscríbete al Curso
            </a>
            <a href="#nosotros" className="btn btn-outline-light" onClick={onAnchorClick}>
              Conoce más
            </a>
          </div>

          <div className="hero-trust">Respaldada por ligas de toda la provincia</div>
        </div>
      </div>

      <a href="#liga" className="scroll-cue" onClick={onAnchorClick} aria-label="Ver ligas">
        <span className="chevron"></span>
      </a>
    </section>
  );
}
