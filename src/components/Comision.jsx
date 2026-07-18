import React from 'react';
import useReveal from '../hooks/useReveal';
import '../styles/comision.css';

const publicUrl = process.env.PUBLIC_URL || '';

const miembros = [
  {
    id: 1,
    src: `${publicUrl}/assets/matias_ezequiel_billone.webp`,
    nombre: 'Matías Ezequiel Billone Carpio',
    cargo: 'Presidente',
    clase: 'presidente',
  },
  {
    id: 2,
    src: `${publicUrl}/assets/comision-sosa.jpg`,
    nombre: 'Leandro Andrés Sosa Abrile',
    cargo: 'Tesorero',
    clase: 'tesorero',
  },
  {
    id: 3,
    src: `${publicUrl}/assets/alba-comision.jpg`,
    nombre: 'Alba Noemi León',
    cargo: 'Vocal Titular',
    clase: 'vocal',
  },
];

export default function Comision() {
  return (
    <section className="comision" id="comision">
      <div className="container">
        <div className="section-header">
          <h2>Comisión Directiva</h2>
          <p>Conoce a los líderes que dirigen nuestra asociación</p>
        </div>

        <div className="comision-grid">
          {miembros.map((m) => (
            <MiembroCard key={m.id} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MiembroCard({ src, nombre, cargo, clase }) {
  const { ref, visible } = useReveal();

  return (
    <div ref={ref} className={`miembro-card ${visible ? 'fade-in-up' : ''}`}>
      <div className="miembro-image">
        <img
          src={src}
          alt={nombre}
          className={clase}
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="miembro-overlay"></div>
      </div>

      <div className="miembro-info">
        <h3>{nombre}</h3>
        <p className="miembro-cargo">{cargo}</p>
      </div>
    </div>
  );
}
