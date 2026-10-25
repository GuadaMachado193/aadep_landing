// Novedades de ejemplo para ver el diseño en localhost con `npm run demo`.
// Nunca se publican: solo se cargan en modo demo y cuando src/data/novedades.js está vacío.
export const novedadesDemo = [
  {
    id: 'ejemplo-1',
    fecha: '2026-10-20',
    categoria: 'Ejemplo',
    titulo: 'Ejemplo: novedad con foto, texto y link',
    resumen: 'Así se ve el resumen de una novedad: una o dos oraciones que cuentan lo principal.',
    texto:
      'En la página de novedades aparece también el texto completo, separado en párrafos.\n\nEste es un segundo párrafo de ejemplo.',
    foto: '/assets/grid/pre_temporada.webp',
    fotoAlt: 'Árbitros de AADEP en la cancha',
    link: { url: 'https://www.instagram.com/aadep_cordoba/', texto: 'Ver en Instagram' },
  },
  {
    id: 'ejemplo-2',
    fecha: '2026-09-05',
    categoria: 'Ejemplo',
    titulo: 'Ejemplo: novedad con foto',
    resumen: 'Una novedad con foto y resumen, sin texto adicional.',
    foto: '/assets/guadap.webp',
    fotoAlt: 'Árbitra asistente con la bandera en alto',
  },
  {
    id: 'ejemplo-3',
    fecha: '2026-08-12',
    categoria: 'Ejemplo',
    titulo: 'Ejemplo: novedad sin foto',
    resumen: 'Así se ve una novedad que no tiene foto.',
  },
];
