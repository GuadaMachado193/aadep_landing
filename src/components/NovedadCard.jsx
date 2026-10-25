import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Foto from './Foto';
import { formatearFecha } from '../fechas';

// Tarjeta de una novedad. En la landing muestra el resumen y enlaza a /novedades/#id;
// con `completa` (página /novedades/) muestra también el texto y el link externo.
export default function NovedadCard({ novedad, completa = false, destacada = false }) {
  const { id, fecha, categoria, titulo, resumen, texto, foto, fotoAlt, link } = novedad;
  const parrafos = completa && texto ? texto.split(/\n\s*\n/) : [];
  const clases = ['novedad-card', completa && 'novedad-completa', destacada && 'novedad-destacada'];

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
          {categoria && <span className="novedad-categoria">{categoria}</span>}
          <time dateTime={fecha}>{formatearFecha(fecha)}</time>
        </div>
        {completa ? <h2>{titulo}</h2> : <h3>{titulo}</h3>}
        <p className="novedad-resumen">{resumen}</p>
        {parrafos.map((p) => (
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
          <a className="novedad-link" href={`/novedades/#${id}`}>
            Leer más <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            <span className="visually-hidden">: {titulo}</span>
          </a>
        )}
      </div>
    </article>
  );
}
