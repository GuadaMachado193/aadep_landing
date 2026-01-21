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
          <NoticiaCard featured src={process.env.PUBLIC_URL + '/assets/seccion-arbitros.JPG'} alt="Árbitros" />
          <NoticiaCard flex src={process.env.PUBLIC_URL + '/assets/lipari-grid.jpg'} alt="Árbitro con bandera" />
          <NoticiaCard src={process.env.PUBLIC_URL + '/assets/fulo2.png.jpeg'} alt="Árbitro sacando tarjeta" />
          <NoticiaCard src={process.env.PUBLIC_URL + '/assets/alejo3.jpg'} alt="Nuevos árbitros en AFA" />
          <NoticiaCard src={process.env.PUBLIC_URL + '/assets/imagen-grid3.jpg'} alt="Árbitro sacando tarjeta" />
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
