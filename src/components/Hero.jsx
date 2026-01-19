import React from 'react';

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
        <img src={process.env.PUBLIC_URL +'../assets/foto_pablo.jpg'} alt="Árbitros en acción" className="hero-bg" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">Asociación de Árbitros Deportivos de Córdoba</div>
        <h1 className="hero-title">Formando árbitros para el Fútbol cordobés</h1>
        <p className="hero-subtitle">Profesionalización, ética y excelencia en el arbitraje deportivo</p>
        <div className="hero-actions">
          <a href="#curso" className="btn btn-primary btn-lg" onClick={(e) => handleScroll(e, '#curso')}>Inscríbete al Curso</a>
          <a href="#nosotros" className="btn btn-outline-light btn-lg" onClick={(e) => handleScroll(e, '#nosotros')}>Conoce más</a>
        </div>
        <div className="hero-trust">Respaldada por ligas de toda la provincia</div>

        <a href="#liga" className="scroll-cue" onClick={(e) => handleScroll(e, '#liga')} aria-label="Ver ligas">
          <span className="chevron"></span>
        </a>
      </div>
    </section>
  );
}
