import React from 'react';
import NovedadCard from './NovedadCard';
import { novedadesOrdenadas } from '../data/novedades';
import '../styles/novedades.css';

// Las 3 novedades más recientes. Sin novedades cargadas la sección no se muestra.
export default function Novedades() {
  const ultimas = novedadesOrdenadas().slice(0, 3);
  if (ultimas.length === 0) return null;

  return (
    <section className="novedades" id="novedades">
      <div className="container">
        <div className="section-header">
          <h2>Novedades</h2>
          <p>Lo último de la asociación: designaciones, cursos y actividades</p>
        </div>
        <div className="novedades-grid">
          {ultimas.map((novedad) => (
            <NovedadCard key={novedad.id} novedad={novedad} />
          ))}
        </div>
        <div className="novedades-ver-todas">
          <a href="/novedades/" className="btn btn-primary">Ver todas las novedades</a>
        </div>
      </div>
    </section>
  );
}
