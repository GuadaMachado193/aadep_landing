import React, { useRef } from 'react'; // <--- 1. Importante: agregar useRef
import useReveal from '../hooks/useReveal';

export default function Sponsors() {
  const scrollRef = useRef(null); // <--- 2. Creamos la referencia

  // Función para mover el scroll
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      // Mueve 300px a la izquierda o derecha
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="sponsors" id="liga">
      <div className="container">
        <div className="section-header">
          <h2>Ligas Representadas</h2>
          <p>Organizaciones deportivas que confían en nuestros árbitros</p>
        </div>

        {/* 3. Contenedor relativo para posicionar las flechas */}
        <div className="carousel-wrapper" style={{ position: 'relative' }}>
          
          {/* Botón Izquierda */}
          <button className="scroll-btn left" onClick={() => scroll('left')}>
            &#10094; {/* Código HTML para flecha izquierda */}
          </button>

          {/* Tu lista de siempre, agregando la prop ref={scrollRef} */}
          <div className="ligas-grid" ref={scrollRef}>
            <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/LigaBeccarVarela.png'} title="Liga Beccar Varela" subtitle="Fútbol Provincial" />
            <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/LigaBellvillense.png'} title="Liga Bellvillense" subtitle="Fútbol Provincial" />
            <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/LigaColon.png'} title="Liga Colón" subtitle="Fútbol Provincial" />
            <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/LigaCordobesa.png'} title="Liga Cordobesa" subtitle="Fútbol Provincial" />
            <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/liga-indep.jpeg'} title="Liga Independiente de Fútbol" subtitle="Fútbol Provincial" />
            <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/LigadelSur.png'} title="Liga del Sur" subtitle="Fútbol Provincial" />
            <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/LigaVillamariense.png'} title="Liga Villamariense" subtitle="Fútbol Provincial" />
            <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/torneo-regional.png'} title="Torneo Regional Federal Amateur" subtitle="Fútbol Regional" />
          </div>

          {/* Botón Derecha */}
          <button className="scroll-btn right" onClick={() => scroll('right')}>
            &#10095; {/* Código HTML para flecha derecha */}
          </button>
        </div>

      </div>
    </section>
  );
}

// ... El componente SponsorCard queda igual ...
function SponsorCard({ src, title, subtitle }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={"sponsor-item" + (visible ? ' fade-in-up' : '')}>
      <img loading="lazy" src={src} alt={title} />
      <div className="sponsor-info">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}