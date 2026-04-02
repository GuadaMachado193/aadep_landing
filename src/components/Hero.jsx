import React from 'react';
import '../styles/hero.css';

export default function Hero() {
  const handleScroll = (e, selector) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-image">
        <img 
          src={`${process.env.PUBLIC_URL}/assets/grid/aadc_2026.webp`} 
          alt="Árbitros en acción" 
          className="hero-bg" 
        />
        {/* Cambiamos el overlay para que sea un viñeteado y un oscurecimiento inferior */}
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-glass-panel">
          
          {/* NUEVO: Logo de la asociación agregado encima del título */}
          <div className="hero-logo-wrapper">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/aadep-logo.png`} /* Cambia esto por la ruta real de tu logo */
              alt="Logo AADC" 
              className="hero-logo" 
            />
          </div>
          
          {/* Título actualizado y posicionado debajo del logo */}
          <h1 className="hero-title">ASOCIACIÓN DE ÁRBITROS DEPORTIVOS DE CÓRDOBA</h1>
          
          <p className="hero-subtitle">
            Profesionalización, ética y excelencia en el arbitraje deportivo
          </p>
          
          <div className="hero-actions">
            <a href="#curso" className="btn btn-primary" onClick={(e) => handleScroll(e, '#curso')}>
              Inscríbete al Curso
            </a>
            <a href="#nosotros" className="btn btn-outline-light" onClick={(e) => handleScroll(e, '#nosotros')}>
              Conoce más
            </a>
          </div>
          
          <div className="hero-trust">Respaldada por ligas de toda la provincia</div>
        </div>
      </div>

      <a href="#liga" className="scroll-cue" onClick={(e) => handleScroll(e, '#liga')} aria-label="Ver ligas">
        <span className="chevron"></span>
      </a>
    </section>
  );
}