import React from 'react';
import {
  CalendarDays,
  CircleCheck,
  Clock,
  Hourglass,
  MapPin,
  MonitorSmartphone,
  Wallet,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BotonWhatsapp from '../components/BotonWhatsapp';
import Foto from '../components/Foto';
import { curso } from '../data/curso';
import { formatearFecha } from '../fechas';
import { linkWhatsapp } from '../whatsapp';
import { trackEvent } from '../analytics';
import '../styles/hero.css';
import '../styles/curso-pagina.css';

// Página /curso/: todo el contenido sale de src/data/curso.js
export default function CursoPagina() {
  const fecha = formatearFecha(curso.proximaFecha);
  const inscripcion =
    curso.inscripcionUrl || linkWhatsapp('Hola, quiero inscribirme al Curso de Árbitros de AADEP.');
  const consulta = linkWhatsapp('Hola, quiero hacer una consulta sobre el Curso de Árbitros de AADEP.');

  const datos = [
    { Icono: CalendarDays, etiqueta: 'Inicio', valor: fecha },
    { Icono: MonitorSmartphone, etiqueta: 'Modalidad', valor: curso.modalidad },
    { Icono: Hourglass, etiqueta: 'Duración', valor: curso.duracion },
    { Icono: Clock, etiqueta: 'Días y horarios', valor: curso.horarios },
    { Icono: MapPin, etiqueta: 'Lugar', valor: curso.lugar },
    { Icono: Wallet, etiqueta: 'Costo', valor: curso.costo },
  ];

  const botones = (ubicacion) => (
    <div className="hero-actions">
      <a
        className="btn btn-primary"
        href={inscripcion}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('inscripcion_click', { ubicacion })}
      >
        Inscribirme
      </a>
      <a
        className="btn btn-outline-light"
        href={consulta}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('whatsapp_click', { ubicacion: `curso_${ubicacion}` })}
      >
        Consultar por WhatsApp
      </a>
    </div>
  );

  return (
    <>
      <Navbar pagina="curso" />

      <main>
        <section className="curso-hero">
          <div className="container curso-hero-grid">
            <div>
              <p className="curso-eyebrow">Escuela de árbitros AADEP</p>
              <h1 className="curso-hero-titulo">Curso de Árbitros de Fútbol</h1>
              <p className="curso-hero-bajada">
                Forma parte de la próxima generación de árbitros cordobeses
              </p>
              <p className="curso-fecha">
                <CalendarDays size={20} strokeWidth={2} aria-hidden="true" />
                Próximo inicio: <strong>{fecha || 'a confirmar'}</strong>
              </p>
              {botones('hero')}
            </div>
            <div className="curso-hero-foto">
              <Foto
                src="/assets/valor_mision.jpg"
                sizes="(max-width: 900px) 60vw, 320px"
                alt="Árbitros de AADEP en Córdoba"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section className="curso-datos" aria-labelledby="curso-datos-titulo">
          <div className="container">
            <h2 id="curso-datos-titulo" className="visually-hidden">Datos del curso</h2>
            <dl className="curso-datos-grid">
              {datos.map(({ Icono, etiqueta, valor }) => (
                <div key={etiqueta} className="curso-dato">
                  <Icono size={24} strokeWidth={2} aria-hidden="true" />
                  <dt>{etiqueta}</dt>
                  <dd className={valor ? '' : 'pendiente'}>{valor || 'A confirmar'}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="curso-sobre">
          <div className="container curso-sobre-grid">
            <div>
              <h2>¿Por qué ser árbitro?</h2>
              <p className="curso-texto">
                Ser árbitro es más que dirigir un partido de fútbol. Es ser parte fundamental del
                deporte, garantizando la justicia y la equidad en cada encuentro. En AADEP te
                brindamos la formación integral necesaria para convertirte en un profesional del
                arbitraje.
              </p>
              <h3>Qué te da el curso</h3>
              <ul className="icon-list curso-lista">
                {curso.beneficios.map(({ Icono, texto }) => (
                  <li key={texto}>
                    <Icono size={20} strokeWidth={2} aria-hidden="true" />
                    {texto}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="curso-requisitos-card">
              <h3>Requisitos para inscribirse</h3>
              <ul className="icon-list curso-lista">
                {curso.requisitos.map((texto) => (
                  <li key={texto}>
                    <CircleCheck size={20} strokeWidth={2} aria-hidden="true" />
                    {texto}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {curso.programa.length > 0 && (
          <section className="curso-programa">
            <div className="container">
              <div className="section-header">
                <h2>Programa</h2>
                <p>Lo que vas a ver durante el curso</p>
              </div>
              <ol className="curso-programa-lista">
                {curso.programa.map(({ titulo, detalle }) => (
                  <li key={titulo}>
                    <strong>{titulo}</strong>
                    {detalle && <p>{detalle}</p>}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {curso.preguntas.length > 0 && (
          <section className="curso-preguntas">
            <div className="container">
              <div className="section-header">
                <h2>Preguntas frecuentes</h2>
              </div>
              <div className="curso-preguntas-lista">
                {curso.preguntas.map(({ pregunta, respuesta }) => (
                  <details key={pregunta}>
                    <summary>{pregunta}</summary>
                    <p>{respuesta}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="curso-cta-final">
          <div className="container">
            <h2>¿Listo para empezar?</h2>
            <p>Escríbenos y te contamos todo sobre el próximo curso.</p>
            {botones('final')}
          </div>
        </section>
      </main>

      <Footer pagina="curso" />
      <BotonWhatsapp />
    </>
  );
}
