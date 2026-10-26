import React, { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import Foto from './Foto';
import { curso } from '../data/curso';

const { beneficios, requisitos } = curso;

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
                  <ul className="icon-list">
                    {beneficios.map(({ Icono, texto }) => (
                      <li key={texto}>
                        <Icono size={20} strokeWidth={2} aria-hidden="true" />
                        {texto}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="curso-requisitos">
              <h4>Requisitos para inscribirse:</h4>
              <ul className="icon-list">
                {requisitos.map((texto) => (
                  <li key={texto}>
                    <CircleCheck size={20} strokeWidth={2} aria-hidden="true" />
                    {texto}
                  </li>
                ))}
              </ul>
            </div>

            <a href="/curso/" className="btn btn-primary curso-ver-mas">
              Ver toda la información del curso
            </a>
          </div>

          <div ref={ctaReveal.ref} className={"curso-cta" + (ctaReveal.visible ? ' fade-in-up' : '')}>
            <div className="curso-image">
              <Foto loading="lazy" src="/assets/valor_mision.jpg" sizes="200px" alt="Árbitros AADEP Córdoba" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
