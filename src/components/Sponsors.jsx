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

        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <SponsorCard src="/assets/ligas/LigaBeccarVarela.png" title="Liga Beccar Varela" subtitle="Fútbol Amateur" />
          <SponsorCard src="/assets/ligas/LigaBellvillense.png" title="Liga Bellvillense" subtitle="Fútbol Regional" />
          <SponsorCard src="/assets/ligas/LigaColon.png" title="Liga Colón" subtitle="Fútbol Profesional" />
          <SponsorCard src="/assets/ligas/LigaCordobesa.png" title="Liga Cordobesa" subtitle="Fútbol Provincial" />
          <SponsorCard src="/assets/ligas/LigaIndependiente.png" title="Liga Independiente de Fútbol" subtitle="Fútbol Provincial" />
          <SponsorCard src="/assets/ligas/LigadelSur.png" title="Liga del Sur" subtitle="Fútbol Provincial" />
          <SponsorCard src="/assets/ligas/LigaVillamariense.png" title="Liga Villamariense" subtitle="Fútbol Provincial" />
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
