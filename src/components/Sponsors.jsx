import React, { useRef } from 'react';
import useReveal from '../hooks/useReveal';
import { scrollConLoop } from './Noticias';

const publicUrl = process.env.PUBLIC_URL || '';

const ligas = [
  { id: 1, src: '/assets/ligas/LigaBeccarVarela.png', title: 'Liga Beccar Varela', subtitle: 'Fútbol Provincial' },
  { id: 2, src: '/assets/ligas/LigaBellvillense.png', title: 'Liga Bellvillense', subtitle: 'Fútbol Provincial' },
  { id: 3, src: '/assets/ligas/LigaColon.png', title: 'Liga Colón', subtitle: 'Fútbol Provincial' },
  { id: 4, src: '/assets/ligas/LigaCordobesa.png', title: 'Liga Cordobesa', subtitle: 'Fútbol Provincial' },
  { id: 5, src: '/assets/ligas/liga-indep.jpeg', title: 'Liga Independiente de Fútbol', subtitle: 'Fútbol Provincial' },
  { id: 6, src: '/assets/ligas/LigadelSur.png', title: 'Liga del Sur', subtitle: 'Fútbol Provincial' },
  { id: 7, src: '/assets/ligas/LigaVillamariense.png', title: 'Liga Villamariense', subtitle: 'Fútbol Provincial' },
  { id: 8, src: '/assets/ligas/LigaGeneralRoca.png', title: 'Liga General Roca', subtitle: 'Fútbol Provincial' },
  { id: 9, src: '/assets/ligas/torneo-regional.png', title: 'Torneo Regional Federal Amateur', subtitle: 'Fútbol Regional' },
];

export default function Sponsors() {
  const scrollRef = useRef(null);

  return (
    <section className="sponsors" id="liga">
      <div className="container">
        <div className="section-header">
          <h2>Ligas Representadas</h2>
          <p>Organizaciones deportivas que confían en nuestros árbitros</p>
        </div>

        <div className="carousel-wrapper">
          <button
            className="scroll-btn left"
            aria-label="Ver ligas anteriores"
            onClick={() => scrollConLoop(scrollRef.current, 'left')}
          >
            &#10094;
          </button>

          <div className="ligas-grid" ref={scrollRef}>
            {ligas.map((liga) => (
              <SponsorCard
                key={liga.id}
                src={publicUrl + liga.src}
                title={liga.title}
                subtitle={liga.subtitle}
              />
            ))}
          </div>

          <button
            className="scroll-btn right"
            aria-label="Ver ligas siguientes"
            onClick={() => scrollConLoop(scrollRef.current, 'right')}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

function SponsorCard({ src, title, subtitle }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={'sponsor-item' + (visible ? ' fade-in-up' : '')}>
      <img loading="lazy" src={src} alt={title} />
      <div className="sponsor-info">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
