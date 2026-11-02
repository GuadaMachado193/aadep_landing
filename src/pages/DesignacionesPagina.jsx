import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BotonWhatsapp from '../components/BotonWhatsapp';
import PartidoCard from '../components/PartidoCard';
import { partidosSeparados } from '../data/partidos';
import { useAnclaDestacada } from '../hooks/useAnclaDestacada';
import '../styles/novedades.css';
import '../styles/partidos.css';

function Grupo({ titulo, lista, destacada }) {
  if (lista.length === 0) return null;
  return (
    <div className="partidos-grupo">
      <h2>{titulo}</h2>
      <div className="novedades-lista-items">
        {lista.map((partido) => (
          <PartidoCard key={partido.id} partido={partido} completa destacada={partido.id === destacada} />
        ))}
      </div>
    </div>
  );
}

// Página /designaciones/: todos los partidos de src/data/partidos.js, separados en próximos y anteriores
export default function DesignacionesPagina() {
  const { proximos, anteriores } = partidosSeparados();
  const destacada = useAnclaDestacada();

  return (
    <>
      <Navbar pagina="designaciones" />

      <main>
        <section className="novedades-hero">
          <div className="container">
            <h1>Designaciones y resultados</h1>
            <p>Los partidos dirigidos por árbitros de la Asociación de Árbitros Deportivos de Córdoba.</p>
          </div>
        </section>

        <section className="novedades-lista">
          <div className="container">
            <Grupo titulo="Próximos partidos" lista={proximos} destacada={destacada} />
            <Grupo titulo="Partidos anteriores" lista={anteriores} destacada={destacada} />
          </div>
        </section>
      </main>

      <Footer pagina="designaciones" />
      <BotonWhatsapp />
    </>
  );
}
