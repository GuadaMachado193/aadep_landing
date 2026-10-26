import React from 'react';
import { PUBLIC_URL } from '../publicUrl';

const ligas = [
  { id: 1, src: '/assets/ligas/LigaBeccarVarela.png', title: 'Liga Beccar Varela', subtitle: 'Fútbol Provincial' },
  { id: 2, src: '/assets/ligas/LigaBellvillense.png', title: 'Liga Bellvillense', subtitle: 'Fútbol Provincial' },
  { id: 3, src: '/assets/ligas/LigaColon.png', title: 'Liga Colón', subtitle: 'Fútbol Provincial' },
  { id: 4, src: '/assets/ligas/LigaCordobesa.png', title: 'Liga Cordobesa', subtitle: 'Fútbol Provincial' },
  { id: 5, src: '/assets/ligas/liga-indep.jpeg', title: 'Liga Independiente de Fútbol', subtitle: 'Fútbol Provincial' },
  { id: 6, src: '/assets/ligas/LigadelSur.png', title: 'Liga del Sur', subtitle: 'Fútbol Provincial' },
  { id: 7, src: '/assets/ligas/LigaVillamariense.png', title: 'Liga Villamariense', subtitle: 'Fútbol Provincial' },
  { id: 8, src: '/assets/ligas/LigaGeneralRoca.png', title: 'Liga General Roca', subtitle: 'Fútbol Provincial' },
  { id: 9, src: '/assets/ligas/torneo-regional-escudo.png', title: 'Torneo Regional Federal Amateur', subtitle: 'Fútbol Regional' },
];

// Carrusel continuo: la lista va dos veces seguidas y la animación la desplaza la mitad
// de su ancho, así el final empalma con el principio. La segunda copia es solo visual.
export default function Sponsors() {
  return (
    <section className="sponsors" id="liga">
      <div className="container">
        <div className="section-header">
          <h2>Ligas Representadas</h2>
          <p>Organizaciones deportivas que confían en nuestros árbitros</p>
        </div>
      </div>

      <div className="ligas-marquee">
        <ul className="ligas-track">
          {[...ligas, ...ligas].map((liga, i) => {
            const copia = i >= ligas.length;
            return (
              <li key={`${liga.id}-${i}`} className={copia ? 'ligas-copia' : undefined} aria-hidden={copia || undefined}>
                <img loading="lazy" src={PUBLIC_URL + liga.src} alt={copia ? '' : liga.title} title={liga.title} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
