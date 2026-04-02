import React from 'react';
import useReveal from '../hooks/useReveal';
import '../styles/preparacion.css';

export default function PreparacionFisica() {
  const textReveal = useReveal();
  const imgReveal = useReveal();

  return (
    <section className="preparacion-fisica" id="preparacion">
      <div className="container">
        
        <div className="section-header">
          <h2>Preparación Física</h2>
          <p>Entrenamiento de alto rendimiento</p>
        </div>

        <div className="preparacion-content">
          
          {/* Columna de Texto */}
          <div 
            ref={textReveal.ref} 
            className={`preparacion-text ${textReveal.visible ? 'fade-in-up' : ''}`}
          >
            <h3>Exigencia al Máximo Nivel</h3>
            <p>
              Estamos comprometidos con la exigencia en el campo de juego. 
              Por eso, en la AADC contamos con un <strong>Licenciado especializado en Alto Rendimiento</strong> que diagrama y supervisa la evolución de cada colegiado.
            </p>
            
            <ul className="preparacion-list">
              <li>
                <div>
                  <strong>Entrenamiento Específico</strong>
                  <p>Rutinas diseñadas para la explosividad, cambios de ritmo y resistencia que exige el arbitraje.</p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Evaluaciones Periódicas</strong>
                  <p>Mediciones de rendimiento físico y test de velocidad para asegurar el nivel óptimo.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna de Imagen */}
          <div 
            ref={imgReveal.ref} 
            className={`preparacion-image-wrapper ${imgReveal.visible ? 'fade-in-up' : ''}`}
          >
            <div className="preparacion-image">
              {/* IMPORTANTE: Reemplaza "profesor_fisico.jpg" con la foto real de tu profe */}
              <img 
                src={`${process.env.PUBLIC_URL}/assets/grid/facu_valdez.webp`} 
                alt="Profesor de Preparación Física AADC" 
                loading="lazy"
              />
              
              {/* Tarjeta flotante sobre la imagen */}
              <div className="profesor-badge">
                <span className="badge-title">Prof. a cargo</span>
                <span className="badge-name">Facundo Valdez</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}