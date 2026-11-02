import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BotonWhatsapp from '../components/BotonWhatsapp';
import NovedadCard from '../components/NovedadCard';
import { novedadesOrdenadas } from '../data/novedades';
import { useAnclaDestacada } from '../hooks/useAnclaDestacada';
import '../styles/novedades.css';

// Página /novedades/: todas las novedades de src/data/novedades.js, de la más reciente a la más vieja
export default function NovedadesPagina() {
  const lista = novedadesOrdenadas();
  const destacada = useAnclaDestacada();

  return (
    <>
      <Navbar pagina="novedades" />

      <main>
        <section className="novedades-hero">
          <div className="container">
            <h1>Noticias y novedades</h1>
            <p>Formación, cursos y actividades de la Asociación de Árbitros Deportivos de Córdoba.</p>
          </div>
        </section>

        <section className="novedades-lista">
          <div className="container">
            {lista.length > 0 ? (
              <div className="novedades-lista-items">
                {lista.map((novedad) => (
                  <NovedadCard key={novedad.id} novedad={novedad} completa destacada={novedad.id === destacada} />
                ))}
              </div>
            ) : (
              <p className="novedades-vacio">
                Todavía no hay novedades publicadas. Mientras tanto, síguenos en{' '}
                <a href="https://www.instagram.com/aadep_cordoba/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                .
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer pagina="novedades" />
      <BotonWhatsapp />
    </>
  );
}
