import React from 'react';
import useReveal from '../hooks/useReveal';
import '../styles/comision.css';

export default function Comision() {
  // Base para recursos públicos: respetamos PUBLIC_URL por si la app se sirve
  // desde una subruta (ej. GitHub Pages). Evita 404 cuando se usan rutas absolutas.
  const publicUrl = process.env.PUBLIC_URL || '';
  return (
    <section className="comision" id="comision">
      <div className="container">
        
        <div className="section-header">
          <h2>Comisión Directiva</h2>
          <p>Conoce a los líderes que dirigen nuestra asociación</p>
        </div>

        <div className="comision-grid">
          {/* IMPORTANTE: Las rutas de las imágenes deben empezar con '/' 
             si la carpeta 'assets' está dentro de 'public'.
          */}
          <MiembroCard 
            src={`${publicUrl}/assets/matias_ezequiel_billone.jpg`}
            nombre="Matías Ezequiel Billone Carpio" 
            cargo="Presidente" 
            clase="presidente" 
          />
          <MiembroCard 
            src={`${publicUrl}/assets/comision-sosa.jpg`} 
            nombre="Leandro Andrés Sosa Abrile" 
            cargo="Tesorero" 
            clase="tesorero" 
          />
          <MiembroCard 
            src={`${publicUrl}/assets/alba-comision.jpg`} 
            nombre="Alba Noemi León" 
            cargo="Vocal Titular" 
            clase="vocal" 
          />
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
        {/* Aquí aplicamos la 'clase' (presidente, tesorero, etc) para que el CSS ajuste la foto */}
        <img 
          src={src} 
          alt={nombre} 
          className={clase} 
          loading="lazy"
          onError={(e) => {
            console.error("Error cargando imagen:", src);
            e.target.style.display = 'none'; // Oculta si falla
          }}
        />
        {/* El overlay es necesario para el efecto hover oscuro de tu CSS */}
        <div className="miembro-overlay"></div>
      </div>

      <div className="miembro-info">
        <h3>{nombre}</h3>
        <p className="miembro-cargo">{cargo}</p>
      </div>

    </div>
  );
}