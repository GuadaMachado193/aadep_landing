import React from 'react';
import PartidoCard from './PartidoCard';
import { partidosSeparados } from '../data/partidos';
import '../styles/novedades.css';
import '../styles/partidos.css';

// Sección de la landing: 3 partidos, primero los próximos y después los últimos jugados
export default function Partidos() {
  const { proximos, anteriores } = partidosSeparados();
  const ultimos = [...proximos, ...anteriores].slice(0, 3);
  if (ultimos.length === 0) return null;

  return (
    <section className="partidos" id="designaciones">
      <div className="container">
        <div className="section-header">
          <h2>Designaciones y resultados</h2>
          <p>Los partidos dirigidos por árbitros de AADEP</p>
        </div>
        <div className="novedades-grid">
          {ultimos.map((partido) => (
            <PartidoCard key={partido.id} partido={partido} />
          ))}
        </div>
        <div className="novedades-ver-todas">
          <a href="/designaciones/" className="btn btn-primary">Ver todos los partidos</a>
        </div>
      </div>
    </section>
  );
}
