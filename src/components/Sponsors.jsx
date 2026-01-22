import React from 'react';
import useReveal from '../hooks/useReveal';

// Sección Ligas (manteniendo clases .sponsors y .sponsor-item para reutilizar estilos)
export default function Sponsors() {
  return (
    <section className="sponsors" id="liga">
      <div className="container">
        <div className="section-header">
          <h2>Ligas Representadas</h2>
          <p>Organizaciones deportivas que confían en nuestros árbitros</p>
        </div>

        <div className="ligas-grid">
  <SponsorCard ... />
          <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/LigaBeccarVarela.png'} title="Liga Beccar Varela" subtitle="Fútbol Provincial" />
          <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/LigaBellvillense.png'} title="Liga Bellvillense" subtitle="Fútbol Provincial" />
          <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/LigaColon.png'} title="Liga Colón" subtitle="Fútbol Provincial" />
          <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/LigaCordobesa.png'} title="Liga Cordobesa" subtitle="Fútbol Provincial" />
          <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/liga-indep.jpeg'} title="Liga Independiente de Fútbol" subtitle="Fútbol Provincial" />
          <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/LigadelSur.png'} title="Liga del Sur" subtitle="Fútbol Provincial" />
          <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/LigaVillamariense.png'} title="Liga Villamariense" subtitle="Fútbol Provincial" />
          <SponsorCard src={process.env.PUBLIC_URL + '/assets/ligas/torneo-regional.png'} title="Torneo Regional Federal Amateur" subtitle="Fútbol Regional" />
        </div>
      </div>
    </section>
  );
}

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
