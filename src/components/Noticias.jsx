import React, { useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import '../styles/noticia.css';

// 1. ORGANIZAMOS LAS FOTOS AQUÍ PARA NO REPETIR CÓDIGO
const listaFotos = [
  { id: 1, src: '/assets/seccion-arbitros.JPG', alt: 'Árbitros AADEP', featured: true },
  { id: 2, src: '/assets/lipari-grid.jpg', alt: 'Árbitro con bandera', featured: false },
  { id: 3, src: '/assets/guadap.jpg', alt: 'Árbitro sacando tarjeta', featured: false },
  { id: 4, src: '/assets/alejo3.jpg', alt: 'Nuevos árbitros en AFA', featured: false },
  { id: 5, src: '/assets/imagen-grid3.jpg', alt: 'Partido Liga Cordobesa', featured: false },
  { id: 6, src: '/assets/pablo_billy.jpg', alt: 'Terna Arbitral', featured: false },
  { id: 7, src: '/assets/pre_temporada.png', alt: 'Pretemporada', featured: false },
  { id: 8, src: '/assets/eve_arbitro.png', alt: 'Arbitraje Femenino', featured: false },
  { id: 9, src: '/assets/arbitros_partido.jpg', alt: 'Árbitros en acción', featured: false },
  { id: 10, src: '/assets/arbitro_tarjeta.jpg', alt: 'Árbitro mostrando tarjeta', featured: false },
  { id: 11, src: '/assets/arbitro_bandera.jpg', alt: 'Árbitro con bandera de línea', featured: false },
  { id: 12, src: '/assets/arbitro_reunion.jpg', alt: 'Reunión de árbitros', featured: false },
  { id: 13, src: '/assets/arbitro_entrenamiento.jpg', alt: 'Árbitro en entrenamiento', featured: false },
  { id: 14, src: '/assets/arbitro_partido_nocturno.jpg', alt: 'Árbitro en partido nocturno', featured: false },
  { id: 15, src: '/assets/arbitro_femenino.jpg', alt: 'Árbitro femenino en acción', featured: false },
  // ... AQUÍ PUEDES AGREGAR TODAS LAS FOTOS QUE QUIERAS ...
];

export default function Noticias() {
  const scrollRef = useRef(null);
  const [mostrarGaleria, setMostrarGaleria] = useState(false); // Estado para abrir/cerrar

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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

        {/* --- CARRUSEL (Muestra solo las primeras 8 fotos o las que quieras) --- */}
        <div className="carousel-wrapper" style={{ position: 'relative' }}>
          <button className="scroll-btn left" onClick={() => scroll('left')}>&#10094;</button>
          
          <div className="noticias-grid" ref={scrollRef}>
            {listaFotos.slice(0, 8).map((foto) => (
              <NoticiaCard 
                key={foto.id} 
                featured={foto.featured} 
                src={process.env.PUBLIC_URL + foto.src} 
                alt={foto.alt} 
              />
            ))}
          </div>

          <button className="scroll-btn right" onClick={() => scroll('right')}>&#10095;</button>
        </div>

        {/* BOTÓN PARA ABRIR LA GALERÍA COMPLETA */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button 
            className="btn btn-primary" 
            onClick={() => setMostrarGaleria(true)}
          >
            Ver Galería Completa 📸
          </button>
        </div>

        {/* --- MODAL / GALERÍA FLOTANTE --- */}
        {mostrarGaleria && (
          <div className="galeria-modal" onClick={() => setMostrarGaleria(false)}>
            <div className="galeria-contenido" onClick={(e) => e.stopPropagation()}>
              <button className="cerrar-btn" onClick={() => setMostrarGaleria(false)}>×</button>
              <h3>Galería de Fotos</h3>
              <div className="galeria-grid-completa">
                {listaFotos.map((foto) => (
                  <div key={foto.id} className="foto-item">
                    <img loading="lazy" src={process.env.PUBLIC_URL + foto.src} alt={foto.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

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