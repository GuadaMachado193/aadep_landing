import React from 'react';
import useReveal from '../hooks/useReveal';
import '../styles/noticia.css';

export default function Noticias() {
  return (
    <section className="noticias-destacadas" id="noticias">
      <div className="container">
        <div className="section-header">
          <h2>Nuestros Árbitros</h2>
          <p>Conoce a los profesionales que forman parte de nuestra asociación</p>
        </div>
        <div className="noticias-grid">
          <NoticiaCard featured src="/assets/seccion-arbitros.jpg" alt="Árbitros" />
          <NoticiaCard flex src="/assets/lipari-grid.JPG" alt="Árbitro con bandera" />
          <NoticiaCard src="/assets/guadap.jpg" alt="Árbitro sacando tarjeta" />
          <NoticiaCard src="/assets/alejo3.jpg" alt="Nuevos árbitros en AFA" />
          <NoticiaCard src="/assets/imagen-grid3.jpg" alt="Árbitro sacando tarjeta" />
        </div>
      </div>
    </section>
  );
}

function NoticiaCard({ featured = false, src, alt }) {
  const { ref, visible } = useReveal();
  const classes = `noticia-card${featured ? ' featured' : ''}${visible ? ' fade-in-up' : ''}`;
  return (
    <article ref={ref} className={classes}>
      <div className="noticia-image">
        <img loading="lazy" src={src} alt={alt} />
      </div>
    </article>
  );
}
