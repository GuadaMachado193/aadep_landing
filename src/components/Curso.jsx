import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

export default function Curso() {
  const [showBeneficios, setShowBeneficios] = useState(false);
  const infoReveal = useReveal();
  const ctaReveal = useReveal();

  return (
    <section className="curso-arbitros" id="curso">
      <div className="container">
        <div className="section-header">
          <h2>Curso de Árbitros</h2>
          <p>Forma parte de la próxima generación de árbitros cordobeses</p>
        </div>
        <div className="curso-content">
          <div ref={infoReveal.ref} className={"curso-info" + (infoReveal.visible ? ' fade-in-up' : '')}>
            <div className="curso-details">
              <h3>¿Por qué ser árbitro?</h3>
              <p>Ser árbitro es más que dirigir un partido de fútbol. Es ser parte fundamental del deporte, garantizando la justicia y la equidad en cada encuentro. En AADEP te brindamos la formación integral necesaria para convertirte en un profesional del arbitraje.</p>

              <div className="curso-beneficios">
                <button id="abrirBeneficios" className="btn btn-secondary" type="button" onClick={() => setShowBeneficios(v => !v)}>
                  {showBeneficios ? 'Ocultar beneficios' : 'Ver beneficios del curso'}
                </button>
                <div id="beneficiosDetails" className={"beneficios-content" + (showBeneficios ? ' active' : '')}>
                  <h4>Beneficios del curso:</h4>
                  <ul>
                    <li>📚 Formación teórica completa en reglas de juego</li>
                    <li>🏃‍♂️ Entrenamiento físico y técnico especializado</li>
                    <li>🎯 Práctica en partidos reales de diferentes categorías</li>
                    <li>👥 Networking con árbitros experimentados</li>
                    <li>📋 Certificación oficial reconocida por la AFA</li>
                    <li>💼 Oportunidades laborales en ligas cordobesas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="curso-requisitos">
              <h4>Requisitos para inscribirse:</h4>
              <ul>
                <li>✅ Edad mínima: 16 años</li>
                <li>✅ Educación secundaria en curso o completa</li>
                <li>✅ Buena condición física</li>
                <li>✅ Disponibilidad para entrenamientos</li>
                <li>✅ Compromiso con la ética deportiva</li>
              </ul>
            </div>
          </div>

          <div ref={ctaReveal.ref} className={"curso-cta" + (ctaReveal.visible ? ' fade-in-up' : '')}>
            <div className="curso-image">
              <img loading="lazy" src={process.env.PUBLIC_URL + '/assets/valor_mision.jpg'} alt="Árbitros AADEP Córdoba" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
