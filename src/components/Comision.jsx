import React from 'react';
import useReveal from '../hooks/useReveal';

export default function Comision() {
  return (
    <section className="comision" id="comision">
      <div className="container">
        <div className="section-header">
          <h2>Comisión Directiva</h2>
          <p>Conoce a los líderes que dirigen nuestra asociación</p>
        </div>
        <div className="comision-grid">
          <MiembroCard src="/assets/matias_ezequiel_billone.jpg" nombre="Matías Ezequiel Billone Carpio" cargo="Presidente" />
          <MiembroCard src="/assets/comision-sosa.jpg" nombre="Leandro Andrés Sosa Abrile" cargo="Tesorero" />
          <MiembroCard src="/assets/alba-comision.jpg" nombre="Alba Noemi León" cargo="Vocal Titular" />
        </div>
      </div>
    </section>
  );
}

function MiembroCard({ src, nombre, cargo }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={'miembro-card' + (visible ? ' fade-in-up' : '')}>
      <div className="miembro-image">
        <img loading="lazy" src={src} alt={nombre} />
        <div className="miembro-overlay"></div>
      </div>
      <div className="miembro-info">
        <h3>{nombre}</h3>
        <p className="miembro-cargo">{cargo}</p>
      </div>
    </div>
  );
}
