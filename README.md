# AADEP — Landing

Sitio de la Asociación de Árbitros Deportivos de Córdoba ([aadep.com.ar](https://aadep.com.ar)). React 19 + [Vite](https://vite.dev).

Requiere Node.js 20.19 o superior.

## Comandos

- `npm install`: instala las dependencias.
- `npm start`: servidor de desarrollo en [http://localhost:3000](http://localhost:3000).
- `npm run demo`: igual que `npm start`, pero con novedades de ejemplo para ver el diseño mientras
  `src/data/novedades.js` esté vacío. Nunca llegan al sitio publicado.
- `npm run build`: genera el sitio en `build/` (lo que publica Netlify).
- `npm run preview`: sirve el build localmente para revisarlo antes de publicar.
- `npm test`: corre los tests con Vitest.
- `npm run imagenes`: regenera las versiones livianas de las fotos (después de agregar o cambiar una).

## Datos del curso

Fecha, modalidad, horarios, costo, link de inscripción, programa y preguntas frecuentes están en
`src/data/curso.js`. Se completan ahí y se publica de nuevo. Un dato vacío se muestra como
"A confirmar" y una lista vacía oculta su sección.

## Designaciones y resultados

Cada partido se carga en `src/data/partidos.js` (el archivo explica cada campo y trae un ejemplo). Los
próximos y los últimos jugados aparecen en la landing, y todos en `/designaciones/`. Cuando se juega un
partido, completar `resultado`.

## Novedades

Las noticias de la asociación se cargan en `src/data/novedades.js` (el archivo explica cada campo y trae un ejemplo). Las 3 más
recientes aparecen en la landing y todas en `/novedades/`. Mientras la lista esté vacía, la sección
y el enlace "Novedades" del menú no se muestran. Si una novedad lleva foto nueva, después de
subirla a `public/assets/` correr `npm run imagenes`.

## Estructura

- `index.html`: la landing (meta tags, Google Analytics, fuentes).
- `curso/index.html`, `novedades/index.html`, `designaciones/index.html`: las páginas `/curso/`, `/novedades/` y `/designaciones/`, con sus propios meta tags.
- `public/assets/`: imágenes y logos, servidos tal cual.
- `src/components/`: una sección de la landing por archivo.
- `src/pages/`: páginas aparte de la landing (`CursoPagina.jsx`, `NovedadesPagina.jsx`, `DesignacionesPagina.jsx`).
- `src/data/`: contenido editable (curso, novedades y partidos).
- `src/styles/`: estilos por sección; `main.css` tiene las variables de color.
- `src/publicUrl.js`: ruta base para las imágenes de `public/`.

El sitio usa rutas absolutas (`base: '/'` en `vite.config.js`), así que tiene que publicarse en la
raíz del dominio, como aadep.com.ar.
