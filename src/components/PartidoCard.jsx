import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Foto from './Foto';
import { formatearFecha } from '../fechas';

function Dato({ rol, children }) {
  return (
    <>
      <dt>{rol}</dt>
      <dd>{children}</dd>
    </>
  );
}

// Tarjeta de un partido. En la landing muestra lo principal y enlaza a /designaciones/#id;
// con `completa` (página /designaciones/) muestra también todo el equipo arbitral y los detalles.
export default function PartidoCard({ partido, completa = false, destacada = false }) {
  const {
    id, fecha, fechaEsPublicacion, torneo, instancia, local, visitante, resultado,
    arbitro, asistentes, cuarto, equipo, estadio, hora, nota, foto, fotoAlt, link,
  } = partido;
  const clases = ['novedad-card', 'partido-card', completa && 'novedad-completa', destacada && 'novedad-destacada'];
  const lugar = [estadio, hora].filter(Boolean).join(', ');
  const hayDatos = arbitro || (completa && (asistentes || cuarto || equipo || lugar));

  return (
    <article className={clases.filter(Boolean).join(' ')} id={completa ? id : undefined}>
      {foto && (
        <div className="novedad-foto">
          <Foto
            src={foto}
            sizes={completa ? '(max-width: 768px) 92vw, 320px' : '(max-width: 768px) 92vw, 380px'}
            alt={fotoAlt || ''}
            loading="lazy"
          />
        </div>
      )}
      <div className="novedad-cuerpo">
        <div className="novedad-meta">
          <span className="novedad-categoria">{resultado ? 'Resultado' : 'Designación'}</span>
          <time dateTime={fecha}>
            {fechaEsPublicacion ? `Publicado el ${formatearFecha(fecha)}` : formatearFecha(fecha)}
          </time>
        </div>
        <p className="partido-torneo">
          {torneo}
          {instancia && ` · ${instancia}`}
        </p>
        <h3 className="partido-equipos">
          {local} <span className="partido-vs">vs</span> {visitante}
        </h3>
        {resultado && <p className="partido-resultado">{resultado}</p>}

        {hayDatos && (
          <dl className="partido-datos">
            {arbitro && <Dato rol="Árbitro">{arbitro}</Dato>}
            {completa && asistentes && <Dato rol="Asistentes">{asistentes.join(' y ')}</Dato>}
            {completa && cuarto && <Dato rol="Cuarto árbitro">{cuarto}</Dato>}
            {completa && equipo && <Dato rol="Equipo arbitral">{equipo.join(', ')}</Dato>}
            {completa && lugar && <Dato rol="Lugar">{lugar}</Dato>}
          </dl>
        )}
        {nota?.split(/\n\s*\n/).map((p) => (
          <p key={p.slice(0, 40)} className="novedad-texto">
            {p}
          </p>
        ))}

        {completa && link && (
          <a className="novedad-link" href={link.url} target="_blank" rel="noopener noreferrer">
            {link.texto} <ExternalLink size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        )}
        {!completa && (
          <a className="novedad-link" href={`/designaciones/#${id}`}>
            Ver detalle <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            <span className="visually-hidden">: {local} vs {visitante}</span>
          </a>
        )}
      </div>
    </article>
  );
}
