import React, { useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import '../styles/noticia.css';

// 1. ORGANIZAMOS LAS FOTOS AQUÍ PARA NO REPETIR CÓDIGO
const listaFotos = [
  { id: 1, src: '/assets/seccion-arbitros.webp', alt: 'Árbitros AADEP', featured: true },
  { id: 2, src: '/assets/lipari-grid.jpg', alt: 'Árbitro bajo la lluvia', featured: false },
  { id: 3, src: '/assets/guadap.jpg', alt: 'Árbitro cobrando fuera de juego', featured: false },
  { id: 4, src: '/assets/alejo3.jpg', alt: 'Referee de negro', featured: false },
  { id: 5, src: '/assets/imagen-grid3.jpg', alt: 'Partido Liga Cordobesa', featured: false },
  { id: 6, src: '/assets/grid/pablo_billy.webp', alt: 'Terna Arbitral', featured: false },
  { id: 7, src: '/assets/grid/pre_temporada.webp', alt: 'Pretemporada', featured: false },
  { id: 8, src: '/assets/grid/eve_arbitro.webp', alt: 'Arbitraje Femenino', featured: false },
  { id: 9, src: '/assets/grid/cordoba_grid.webp', alt: 'Árbitros en acción', featured: false },
  { id: 10, src: '/assets/grid/aadc_grid.webp', alt: 'Árbitros entrando en calor', featured: false },
  { id: 11, src: '/assets/grid/alba_grid.webp', alt: 'Árbitro Mujer', featured: false },
  { id: 12, src: '/assets/grid/albert_grid.webp', alt: 'Reunión de árbitros', featured: false },
  { id: 13, src: '/assets/grid/leiria.webp', alt: 'Árbitro en partido de inferiores', featured: false },
  { id: 14, src: '/assets/grid/atorri_grid.webp', alt: 'Árbitro en partido nocturno', featured: false },
  { id: 15, src: '/assets/grid/baldassi_grid.webp', alt: 'Baldassi hijo', featured: false },
  { id: 16, src: '/assets/grid/david_grid.webp', alt: 'Árbitro de noche', featured: false },
  { id: 17, src: '/assets/grid/gonzales_grid.webp', alt: 'Árbitro con silbato', featured: false },
  { id: 18, src: '/assets/grid/kevin_grid.webp', alt: 'Árbitro con silbato', featured: false },
  { id: 19, src: '/assets/grid/leguizamon_grid.webp', alt: 'Árbitro corriendo', featured: false },
  { id: 20, src: '/assets/grid/lopez_grid.webp', alt: 'Árbitro con compañia', featured: false },
  { id: 21, src: '/assets/grid/mario_grid.webp', alt: 'Árbitro cobra fuera de juego', featured: false },
  { id: 22, src: '/assets/grid/marzzoli_grid.webp', alt: 'Árbitro curso de arbitraje', featured: false },
  { id: 23, src: '/assets/grid/nelson_grid.webp', alt: 'Árbitro pelota', featured: false },
  { id: 24, src: '/assets/grid/nn_grid.webp', alt: 'Árbitro futbol', featured: false },
  { id: 25, src: '/assets/grid/nn2_grid.webp', alt: 'Árbitro en cancha', featured: false },
  { id: 26, src: '/assets/grid/vilca_grid.webp', alt: 'Árbitro con asistentes', featured: false },
  { id: 27, src: '/assets/grid/fede_grid.webp', alt: 'Árbitro saca tarjeta roja', featured: false },
  { id: 28, src: '/assets/grid/lipari_grid.webp', alt: 'Árbitro tira moneda al aire', featured: false },
  { id: 29, src: '/assets/grid/rivadera_grid.webp', alt: 'Árbitro sonriendo', featured: false },
  { id: 30, src: '/assets/grid/altamirano_grid.webp', alt: 'Árbitro saque inicial', featured: false },
  { id: 31, src: '/assets/grid/valdez_grid.webp', alt: 'Árbitro corriendo', featured: false },
  { id: 32, src: '/assets/grid/coltrito_grid.webp', alt: 'Árbitro cobra falta', featured: false },

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
          <p>Conoce a algunos de los profesionales que forman parte de nuestra asociación</p>
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