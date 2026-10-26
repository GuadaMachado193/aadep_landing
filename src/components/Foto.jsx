import React from 'react';
import fotos from '../fotos.json';
import { PUBLIC_URL } from '../publicUrl';

// <img> con srcset y medidas tomadas de src/fotos.json (lo genera `npm run imagenes`).
// `src` es la ruta dentro de public/, por ejemplo '/assets/guadap.webp'.
export default function Foto({ src, sizes, alt, ...rest }) {
  const info = fotos[src];
  if (!info) return <img src={PUBLIC_URL + src} alt={alt} {...rest} />;

  const base = PUBLIC_URL + src.replace(/\.[^.]+$/, '');
  const srcSet = info.variantes
    .map((ancho) => `${base}-${ancho}.webp ${ancho}w`)
    .concat(`${PUBLIC_URL}${src} ${info.w}w`)
    .join(', ');

  return (
    <img
      src={PUBLIC_URL + src}
      srcSet={srcSet}
      sizes={sizes}
      width={info.w}
      height={info.h}
      alt={alt}
      {...rest}
    />
  );
}
