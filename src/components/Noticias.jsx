import React, { useRef } from 'react';
import useReveal from '../hooks/useReveal';
import '../styles/noticia.css';

export default function Noticias() {
  const scrollRef = useRef(null);

  // Misma función de "Bucle Infinito" que usamos en Ligas
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      const scrollAmount = 300; // Distancia del desplazamiento

      if (direction === 'left') {
        if (scrollLeft === 0) {
          current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="noticias-destacadas" id="noticias">
      <div className="container">
        <div className="section-header">
          <h2>Nuestros Árbitros</h2>
          <p>Conoce a los profesionales que forman parte de nuestra asociación</p>
        </div>

        {/* Agregamos el wrapper relativo para posicionar flechas */}
        <div className="carousel-wrapper" style={{ position: 'relative' }}>
          
          {/* Botón Izquierda */}
          <button className="scroll-btn left" onClick={() => scroll('left')}>
            &#10094;
          </button>

          {/* Agregamos la ref={scrollRef} al contenedor */}
          <div className="noticias-grid" ref={scrollRef}>
            <NoticiaCard featured src={process.env.PUBLIC_URL + '/assets/seccion-arbitros.JPG'} alt="Árbitros" />
            <NoticiaCard flex src={process.env.PUBLIC_URL + '/assets/lipari-grid.jpg'} alt="Árbitro con bandera" />
            <NoticiaCard src={process.env.PUBLIC_URL + '/assets/guadap.jpg'} alt="Árbitro sacando tarjeta" />
            <NoticiaCard src={process.env.PUBLIC_URL + '/assets/alejo3.jpg'} alt="Nuevos árbitros en AFA" />
            <NoticiaCard src={process.env.PUBLIC_URL + '/assets/imagen-grid3.jpg'} alt="Árbitro sacando tarjeta" />
             <NoticiaCard src={process.env.PUBLIC_URL + '/assets/pablo_billy.jpg'} alt="Árbitro sacando tarjeta" />
             <NoticiaCard src={process.env.PUBLIC_URL + '/assets/pre_temporada.png'} alt="Árbitro sacando tarjeta" />
             <NoticiaCard src={process.env.PUBLIC_URL + '/assets/eve_arbitro.png'} alt="Árbitro sacando tarjeta" />
             <NoticiaCard src={process.env.PUBLIC_URL + '/assets/imagen-grid.jpg'} alt="Árbitro sacando tarjeta" />  

          </div>

          {/* Botón Derecha */}
          <button className="scroll-btn right" onClick={() => scroll('right')}>
            &#10095;
          </button>
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
