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
export const novedades = [
  {
    id: 'designaciones-octubre-2026',
    fecha: '2026-10-24',
    categoria: 'Designaciones',
    titulo: 'Designaciones de la semana en el Federal A y el Regional Federal',
    resumen:
      'Árbitros de AADEP fueron designados para cuatro partidos de la Reválida del Federal A y del Torneo Regional Federal Amateur.',
    texto:
      'Torneo Federal A, Reválida: Sportivo LP vs Alvarado y Boca Unidos vs Gimnasia y Esgrima.\n\nTorneo Regional Federal Amateur: Juventud Unida vs Defensores de La Boca y Unión vs Desamparados.',
    foto: '/assets/novedades/designaciones-octubre-2026.webp',
    fotoAlt: 'Árbitro de AADEP con el auricular de comunicación, en la placa de designaciones',
    link: { url: 'https://www.instagram.com/aadep_cordoba/', texto: 'Ver las designaciones en Instagram' },
  },
  {
    id: 'final-federal-a-2026',
    fecha: '2026-10-23',
    categoria: 'Designaciones',
    titulo: 'Final por el ascenso del Federal A: Cipolletti vs San Martín',
    resumen:
      'Ezequiel Billone fue designado árbitro de la final por el ascenso del Torneo Federal A, el 25 de octubre en el Estadio Juan Pablo Francia.',
    texto:
      'La terna para la final la completan Carlos Viglietti, Joaquín Badano, Lucas Rodríguez y Antonella Pajón.\n\nEl partido se juega el sábado 25 de octubre a las 15 h en el Estadio Juan Pablo Francia.',
    foto: '/assets/novedades/final-federal-a-2026.webp',
    fotoAlt: 'Ezequiel Billone, árbitro de la final por el ascenso del Torneo Federal A',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/De2fSKnC9eg/', texto: 'Ver en Instagram' },
  },
  {
    id: 'pasantias-afa-2026',
    fecha: '2026-10-23',
    categoria: 'Institucional',
    titulo: 'Cuatro árbitros de AADEP renovaron su pasantía de AFA',
    resumen:
      'Santiago Gudiño, Matías López, Fabrizio Lipari y Emiliano Martino firmaron la renovación en la sede del Consejo Federal en La Rioja.',
    texto:
      'El 6 de octubre, en la sede Centro del Consejo Federal, en La Rioja, nuestros árbitros federales Santiago Gudiño, Matías López, Fabrizio Lipari y Emiliano Martino renovaron su pasantía de AFA y extendieron su vínculo con la casa madre de nuestro fútbol.\n\nEstuvieron presentes Javier Treuque (vicepresidente de AFA), Gabriel Godoy (secretario ejecutivo del CFFA), María Sylvia Jiménez (Mesa Ejecutiva de AFA y miembro FIFA), Sergio Pezzotta y Juan Pablo Pompey (UADA), Gabriel Chade (asistente internacional FIFA) y Miguel Sierralta (instructor FIFA y de AFA), entre otras autoridades. Nuestros asociados firmaron junto a colegas de Córdoba, La Rioja y Catamarca.\n\n¡Felicitaciones! La renovación ratifica su compromiso, su esfuerzo y su crecimiento en el arbitraje nacional.',
    foto: '/assets/novedades/pasantias-afa-2026.webp',
    fotoAlt: 'Los cuatro árbitros de AADEP de traje frente al cartel de la Sede Región Centro de AFA y el CFFA',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/De2PnzICDLw/', texto: 'Ver en Instagram' },
  },
  {
    id: 'mundial-potreros-pinto-2026',
    fecha: '2026-10-18',
    categoria: 'Institucional',
    titulo: 'AADEP en el Mundial de Potreros Pinto 2026',
    resumen:
      'Diecinueve árbitros de la asociación dirigieron más de 80 partidos en el torneo amateur más grande del país.',
    texto:
      'El Mundial de Potreros Pinto 2026 se jugó el 10, 11 y 12 de octubre en el Club Atlético Social Pinto, en Santiago del Estero, con 200 equipos.\n\nNuestros 19 árbitros dirigieron más de 80 partidos y representaron a la asociación con compromiso y profesionalismo. ¡Gracias por la convocatoria y por confiar en nuestro trabajo!',
    foto: '/assets/novedades/mundial-potreros-pinto-2026.webp',
    fotoAlt: 'Árbitros de AADEP con la bandera de la asociación en el Mundial de Potreros Pinto',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/Deplo-jFHsd/', texto: 'Ver en Instagram' },
  },
  {
    id: 'debut-lea-liga-profesional-2026',
    fecha: '2026-10-15',
    categoria: 'Designaciones',
    titulo: 'Debut en la Liga Profesional: Newell’s vs Central Córdoba',
    resumen: 'Lea debuta como árbitro en la Liga Profesional de AFA. ¡Felicitaciones!',
    foto: '/assets/novedades/debut-lea-liga-profesional-2026.webp',
    fotoAlt: 'Placa de designación para Newell’s vs Central Córdoba en la Liga Profesional',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/Dehsw-TC_SO/', texto: 'Ver en Instagram' },
  },
  {
    id: 'clasico-racing-independiente-2026',
    fecha: '2026-10-15',
    categoria: 'Designaciones',
    titulo: 'Hay clásico: Racing vs Independiente',
    resumen: 'Ezequiel "Billy" Billone fue designado para el clásico de Avellaneda en la Liga Profesional. ¡Felicitaciones, Billy!',
    foto: '/assets/novedades/clasico-racing-independiente-2026.webp',
    fotoAlt: 'Placa de designación para Racing vs Independiente en la Liga Profesional',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DefpKs-xx0u/', texto: 'Ver en Instagram' },
  },
  {
    id: 'dia-del-arbitro-2026',
    fecha: '2026-10-06',
    categoria: 'Institucional',
    titulo: 'Día del Árbitro: placa a 10 años de la Ley Provincial',
    resumen:
      'Acto en el Mural del Árbitro, en la Costanera Sur, con una placa conmemorativa en memoria de Diego, Marcos, Ignacio y Juan.',
    texto:
      'Invitamos a toda la comunidad arbitral a acompañarnos en un nuevo aniversario del Día del Árbitro y a descubrir una placa conmemorativa a 10 años de la Ley Provincial, en homenaje y en memoria de Diego, Marcos, Ignacio y Juan.\n\nEl acto fue el viernes 9 de octubre a las 17:45 en el Mural del Árbitro (Costanera Sur, frente a Capitalinas).',
    foto: '/assets/novedades/dia-del-arbitro-2026.webp',
    fotoAlt: 'Invitación al acto por el Día del Árbitro',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DeKA2qexe8J/', texto: 'Ver en Instagram' },
  },
  {
    id: 'premios-alumni-2026',
    fecha: '2026-09-17',
    categoria: 'Institucional',
    titulo: 'Ezequiel Billone, nominado a los Premios Alumni 2026',
    resumen:
      'Nuestro socio y presidente fue nominado como Árbitro Destacado del Federal A por la temporada 2025.',
    texto:
      'El fútbol de Córdoba vuelve a tener protagonismo en una de las ceremonias de reconocimiento más importantes del fútbol argentino. Ezequiel Billone, socio y presidente de AADEP, fue nominado a los Premios Alumni 2026 en la categoría Árbitro Destacado del Federal A, por la temporada 2025.\n\n¡Felicitaciones, Billy!',
    foto: '/assets/novedades/premios-alumni-2026.webp',
    fotoAlt: 'Ezequiel Billone con la camiseta de árbitro de AFA',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DdZtpHwKr6S/', texto: 'Ver en Instagram' },
  },
  {
    id: 'nuevos-arbitros-provinciales-2026',
    fecha: '2026-09-10',
    categoria: 'Formación',
    titulo: 'Siete nuevos Árbitros Provinciales',
    resumen:
      'Diego Bustamante, Benjamín Godoy, Lucas Gutiérrez, Luciano Mansilla, Francisco Marzolli, Federico Ruiz y Brian Trejo recibieron su diploma.',
    texto:
      'Después de dos años de compromiso, disciplina y dedicación, nuestros asociados recibieron su diploma en la colación de la 33.ª promoción de la Escuela de Árbitros "Carlos Boxler" de la Fundación Juguemos Limpio.\n\nLes deseamos el mayor de los éxitos en cada nuevo desafío. ¡A seguir sumando y dejando en alto a nuestra asociación!',
    foto: '/assets/novedades/nuevos-arbitros-provinciales-2026.webp',
    fotoAlt: 'Los nuevos árbitros provinciales con sus diplomas',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DdG5h3dRYSz/', texto: 'Ver en Instagram' },
  },
  {
    id: 'curso-fifa-rap-2026',
    fecha: '2026-09-02',
    categoria: 'Formación',
    titulo: 'Ezequiel Billone, en el Curso FIFA RAP Árbitros 2026',
    resumen:
      'Del 25 al 28 de agosto participó del curso en el predio de Ezeiza, junto a 27 jóvenes árbitros de la Primera Nacional y la Liga Profesional.',
    texto:
      'Durante las jornadas hubo evaluaciones físicas, mediciones antropométricas, trabajos de campo y testeos oficiales, a cargo de los instructores FIFA Juan P. Araya y Oscar Ruiz junto al director nacional de Arbitraje, Federico Beligoy. Billy cumplió con la totalidad de las pruebas.\n\n¡Felicitaciones! Un orgullo para la asociación y un logro merecido para su carrera.',
    foto: '/assets/novedades/curso-fifa-rap-2026.webp',
    fotoAlt: 'Ezequiel Billone con su certificado frente al cartel de FIFA',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DcyRxooRUu4/', texto: 'Ver en Instagram' },
  },
  {
    id: 'curso-arbitras-federales-2026',
    fecha: '2026-08-26',
    categoria: 'Formación',
    titulo: 'Curso de Desarrollo para Árbitras Federales',
    resumen:
      'Guadalupe Prunesti, Alba León y Mishqui de los Reyes representaron a AADEP en La Rioja, en la Sede Región Centro del CFFA.',
    texto:
      'El 25 y el 26 de agosto se dictaron jornadas de formación teórica, física y técnica a cargo del Departamento de Arbitraje Femenino, con Pablo Dóvalo, Juan Pablo Pompei, Estela Álvarez de Oliveira, Miguel Sierralta, Marcos Laterza y Gabriel Chade. El curso tuvo la supervisión de Gustavo Bassi, presidente del Departamento de Árbitros del Consejo Federal.\n\nSeguimos trabajando por el crecimiento de nuestras árbitras. ¡Felicitaciones!',
    foto: '/assets/novedades/curso-arbitras-federales-2026.webp',
    fotoAlt: 'Las tres árbitras de AADEP con camiseta celeste en la cancha',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DchZ1VcEehg/', texto: 'Ver en Instagram' },
  },
  {
    id: 'tres-arbitras-primera-division-2026',
    fecha: '2026-08-11',
    categoria: 'Institucional',
    titulo: 'Historia pura: tres árbitras dirigieron Primera División el mismo día',
    resumen:
      'Alba León, Mishqui de los Reyes y Guadalupe Prunesti fueron juezas principales en simultáneo en tres ligas del interior de Córdoba.',
    texto:
      'Liga Regional del Sur: Boca (Camilo Aldao) vs San Carlos (Los Surgentes), con Alba León como árbitra principal.\n\nLiga Independiente de Fútbol: Independiente (Oliva) vs San Lorenzo (Manfredi), con Mishqui de los Reyes.\n\nLiga Bellvillense de Fútbol: River (Bell Ville) vs Complejo Deportivo (Justiniano Posse), con Guadalupe Prunesti.\n\nCelebramos con orgullo este hecho histórico, que muestra el liderazgo, el profesionalismo y la vocación de nuestras socias y pone a la asociación a la vanguardia del arbitraje femenino.',
    foto: '/assets/novedades/tres-arbitras-primera-division-2026.webp',
    fotoAlt: 'Árbitras de AADEP dirigiendo partidos de Primera División',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/Db6JGhzxGQu/', texto: 'Ver en Instagram' },
  },
  {
    id: 'diplomas-arbitros-federales-2026',
    fecha: '2026-07-07',
    categoria: 'Formación',
    titulo: 'Seis socios recibieron su diploma de Árbitro Federal en AFA',
    resumen:
      'Benjamín Sanabria, Nahuel Gómez, Lautaro Tuninetti, Guadalupe Prunesti, Lautaro Sisterna y Lucas Giraudo ya son Árbitros Federales.',
    texto: '¡Orgullo institucional! Les deseamos el mayor de los éxitos en esta nueva etapa profesional.',
    foto: '/assets/novedades/diplomas-arbitros-federales-2026.webp',
    fotoAlt: 'Los nuevos árbitros federales de traje con sus diplomas',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/Dafi7T-RqN_/', texto: 'Ver en Instagram' },
  },
  {
    id: 'titulos-arbitro-federal-2026',
    fecha: '2026-05-27',
    categoria: 'Formación',
    titulo: 'Cinco socios aprobaron los exámenes de Árbitro Federal',
    resumen:
      'Lucas Giraudo, Guadalupe Prunesti, Lautaro Tuninetti, Nahuel Gómez y Benjamín Sanabria aprobaron los exámenes teóricos y físicos.',
    texto:
      'Detrás de este título hay días de entrenamiento, estudio y una vocación inquebrantable. Nos llena de orgullo ver a nuestros socios cumplir sus metas.\n\n¡Que sea solo el comienzo de un camino lleno de éxitos en esta profesión!',
    foto: '/assets/novedades/titulos-arbitro-federal-2026.webp',
    fotoAlt: 'Guadalupe Prunesti dirigiendo un partido',
    link: { url: 'https://www.instagram.com/aadep_cordoba/', texto: 'Ver las publicaciones en Instagram' },
  },
  {
    id: 'curso-federal-san-luis-2026',
    fecha: '2026-04-24',
    categoria: 'Formación',
    titulo: 'Último módulo del Curso Federal de Árbitros, en San Luis',
    resumen:
      'Seis árbitros de AADEP completaron el séptimo y último módulo del curso del Consejo Federal, en Villa Mercedes.',
    texto:
      'Felicitamos a Benjamín Sanabria, Nahuel Gómez, Lautaro Tuninetti, Lautaro Sisterna, Lucas Giraudo y Guadalupe Prunesti, que completaron las jornadas teóricas y prácticas. Terminados los módulos, el mes siguiente rindieron las instancias de evaluación para obtener su título.',
    foto: '/assets/novedades/curso-federal-san-luis-2026.webp',
    fotoAlt: 'Árbitros de AADEP en el Curso Federal en San Luis',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DXhJqrukYYt/', texto: 'Ver en Instagram' },
  },
  {
    id: 'nuevos-arbitros-provinciales-2025',
    fecha: '2025-11-21',
    categoria: 'Formación',
    titulo: 'Nueva camada de Árbitros Provinciales',
    resumen:
      'El 17 de noviembre, siete socios recibieron su diploma de la Escuela de Árbitros "Carlos Boxler".',
    texto:
      'Felicitamos a Joaquín Segovia, Rodrigo Cárdenas, Sebastián Juncos, Lautaro Martínez, Brian Puerta, Homero Moni y Claudia Bonaventura, que recibieron su diploma de manos de los instructores Julio y Aldo Quinteros.\n\nUn reconocimiento a su dedicación, su esfuerzo y su sentido de pertenencia. ¡Muchos éxitos en esta nueva etapa!',
    foto: '/assets/novedades/nuevos-arbitros-provinciales-2025.webp',
    fotoAlt: 'Los nuevos árbitros provinciales con sus diplomas y la bandera de AADEP',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DRTHa2vkQoz/', texto: 'Ver en Instagram' },
  },
  {
    id: 'pasantia-afa-2025',
    fecha: '2025-11-05',
    categoria: 'Institucional',
    titulo: 'Tres socios firmaron su primera pasantía con AFA',
    resumen:
      'Fabrizio Lipari, Matías López y Santiago Gudiño dieron un paso importante en sus carreras.',
    texto:
      'Como asociación nos llena de orgullo este primer gran paso, que esperamos sea el ejemplo para esta y las próximas generaciones. Seguimos formando árbitros, y principalmente personas, preparados para este tipo de desafíos.',
    foto: '/assets/novedades/pasantia-afa-2025.webp',
    fotoAlt: 'Fabrizio Lipari, Matías López y Santiago Gudiño en la sede de AFA',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DQsH38WEeug/', texto: 'Ver en Instagram' },
  },
  {
    id: 'final-copa-pais-2025',
    fecha: '2025-10-31',
    categoria: 'Finales',
    titulo: 'Final de la Copa País 2025: Liga Cañadense vs Liga Tandilense',
    resumen: 'Matías Billone Carpio fue el árbitro de la final única, en el estadio de Douglas Haig, en Pergamino.',
    texto:
      'Árbitro: Matías Billone Carpio. Asistentes: Matías González y Antonella Pajón. Cuarto árbitro: Christian Verna.\n\nDomingo 2 de noviembre a las 16 h, en el estadio de Douglas Haig (Pergamino, Buenos Aires).',
    foto: '/assets/novedades/final-copa-pais-2025.webp',
    fotoAlt: 'Matías Billone Carpio en la placa de la final de la Copa País 2025',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DQdEIY7ke0b/', texto: 'Ver en Instagram' },
  },
  {
    id: 'final-copa-cordoba-femenina-2025',
    fecha: '2025-12-06',
    categoria: 'Finales',
    titulo: 'Final de la Copa Córdoba Femenina: Instituto vs Belgrano',
    resumen: 'AADEP estuvo a cargo del arbitraje de la final de la Copa Córdoba Femenina, de la Liga Cordobesa de Fútbol.',
    foto: '/assets/novedades/final-copa-cordoba-femenina-2025.webp',
    fotoAlt: 'Las árbitras y las capitanas de Instituto y Belgrano antes de la final',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DR7mcIkEakS/', texto: 'Ver en Instagram' },
  },
  {
    id: 'final-liga-independiente-2025',
    fecha: '2025-12-05',
    categoria: 'Finales',
    titulo: 'Final de la Liga Independiente: Juventud Católica vs Luque',
    resumen: 'AADEP estuvo en la final de vuelta entre Juventud Católica (Río Segundo) y la Asociación Deportiva y Cultural Luque.',
    foto: '/assets/novedades/final-liga-independiente-2025.webp',
    fotoAlt: 'La terna arbitral y los capitanes antes de la final de la Liga Independiente',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DR5QHlOkdv9/', texto: 'Ver en Instagram' },
  },
  {
    id: 'final-liga-regional-sur-2025',
    fecha: '2025-12-18',
    categoria: 'Finales',
    titulo: 'Final de la Liga Regional del Sur: Newbery y Everton vs San Carlos',
    resumen: 'AADEP dirigió la final de vuelta entre Newbery y Everton (Cruz Alta) y San Carlos (Los Surgentes).',
    foto: '/assets/novedades/final-liga-regional-sur-2025.webp',
    fotoAlt: 'La terna arbitral de la final de la Liga Regional del Sur',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DSaXq5GEXq1/', texto: 'Ver en Instagram' },
  },
  {
    id: 'final-liga-beccar-varela-2025',
    fecha: '2025-11-27',
    categoria: 'Finales',
    titulo: 'Final de la Liga Beccar Varela 2025: Lambert vs Olimpo',
    resumen: 'AADEP estuvo en la final de vuelta entre Lambert (Monte Maíz) y Olimpo (Laborde).',
    foto: '/assets/novedades/final-liga-beccar-varela-2025.webp',
    fotoAlt: 'La terna arbitral y los capitanes antes de la final de la Liga Beccar Varela',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DRkxeTmkeEL/', texto: 'Ver en Instagram' },
  },
  {
    id: 'final-liga-beccar-varela-2026',
    fecha: '2026-08-20',
    categoria: 'Finales',
    titulo: 'Final de la Liga Beccar Varela 2026: Lambert vs Olimpo',
    resumen: 'Por segunda temporada seguida, AADEP dirigió la final de vuelta entre Lambert (Monte Maíz) y Olimpo (Laborde).',
    foto: '/assets/novedades/final-liga-beccar-varela-2026.webp',
    fotoAlt: 'La terna arbitral y los capitanes antes de la final de la Liga Beccar Varela 2026',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DcRfLVDie21/', texto: 'Ver en Instagram' },
  },
  {
    id: 'final-liga-roca-2026',
    fecha: '2026-08-04',
    categoria: 'Finales',
    titulo: 'Final de la Liga General Roca: Cultural del Campillo vs Recreativo Estrellas',
    resumen: 'AADEP dirigió la final de vuelta de la Liga General Roca.',
    foto: '/assets/novedades/final-liga-roca-2026.webp',
    fotoAlt: 'La terna arbitral y los capitanes antes de la final de la Liga General Roca',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/Dbot2tqRRGo/', texto: 'Ver en Instagram' },
  },
  {
    id: 'final-liga-regional-sur-primera-2026',
    fecha: '2026-07-08',
    categoria: 'Finales',
    titulo: 'Final de ida de la Liga Regional del Sur: Sporting vs Sportivo',
    resumen: 'AADEP dirigió la final de ida de Primera entre Sporting y Sportivo.',
    foto: '/assets/novedades/final-liga-regional-sur-primera-2026.webp',
    fotoAlt: 'La terna arbitral y los capitanes antes de la final de ida de Primera',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DajQ06_RrmX/', texto: 'Ver en Instagram' },
  },
  {
    id: 'final-liga-regional-sur-reserva-2026',
    fecha: '2026-07-08',
    categoria: 'Finales',
    titulo: 'Final de ida de Reserva en la Liga Regional del Sur: San Carlos vs Sportivo',
    resumen: 'AADEP dirigió la final de ida de Reserva entre San Carlos y Sportivo.',
    foto: '/assets/novedades/final-liga-regional-sur-reserva-2026.webp',
    fotoAlt: 'La terna arbitral y los capitanes antes de la final de ida de Reserva',
    link: { url: 'https://www.instagram.com/aadep_cordoba/p/DajLQoSRMZk/', texto: 'Ver en Instagram' },
  },
];

// `npm run demo` (solo en localhost): si no hay novedades cargadas, muestra las de ejemplo de
// novedades-demo.js para ver el diseño. En el sitio publicado esta condición es siempre falsa.
if (import.meta.env.VITE_DEMO_NOVEDADES === 'true' && novedades.length === 0) {
  novedades.push(...novedadesDemo);
}

// Copia ordenada de la más reciente a la más vieja
export function novedadesOrdenadas() {
  return [...novedades].sort((a, b) => b.fecha.localeCompare(a.fecha));
}
