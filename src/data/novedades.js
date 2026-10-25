import { novedadesDemo } from './novedades-demo';

// Novedades de AADEP: designaciones, cursos, resultados, actividades.
// Las usan la sección Novedades de la landing (las 3 más recientes) y la página /novedades/ (todas).
//
// Para publicar una novedad: agregar un objeto a la lista y volver a publicar el sitio.
// El orden no importa: se muestran de la más reciente a la más vieja según `fecha`.
// Mientras la lista esté vacía, la sección y el enlace "Novedades" del menú no aparecen.
//
// Campos:
// - id:       identificador único, en minúsculas y con guiones (se usa en el link /novedades/#id)
// - fecha:    'AAAA-MM-DD'
// - categoria: por ejemplo 'Designaciones', 'Cursos', 'Resultados', 'Institucional'
// - titulo:   una línea
// - resumen:  una o dos oraciones; es lo que se ve en la landing
// - texto:    opcional, el detalle completo para la página; párrafos separados por una línea en blanco
// - foto:     opcional, ruta dentro de public/, por ejemplo '/assets/novedades/pretemporada-2027.webp'
//             (después de agregar una foto, correr `npm run imagenes`)
// - fotoAlt:  descripción de la foto
// - link:     opcional, { url: 'https://...', texto: 'Ver en Instagram' }
//
// Ejemplo:
// {
//   id: 'pretemporada-2027',
//   fecha: '2027-02-15',
//   categoria: 'Institucional',
//   titulo: 'Arrancó la pretemporada',
//   resumen: 'Más de 60 árbitros participaron de la primera jornada de entrenamiento.',
//   foto: '/assets/grid/pre_temporada.webp',
//   fotoAlt: 'Árbitros entrenando en la cancha',
// },
export const novedades = [];

// `npm run demo` (solo en localhost): si no hay novedades cargadas, muestra las de ejemplo de
// novedades-demo.js para ver el diseño. En el sitio publicado esta condición es siempre falsa.
if (import.meta.env.VITE_DEMO_NOVEDADES === 'true' && novedades.length === 0) {
  novedades.push(...novedadesDemo);
}

// Copia ordenada de la más reciente a la más vieja
export function novedadesOrdenadas() {
  return [...novedades].sort((a, b) => b.fecha.localeCompare(a.fecha));
}
