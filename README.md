# AADEP — Landing

Sitio de la Asociación de Árbitros Deportivos de Córdoba ([aadep.com.ar](https://aadep.com.ar)). React 19 + [Vite](https://vite.dev).

Requiere Node.js 20.19 o superior.

## Comandos

- `npm install`: instala las dependencias.
- `npm start`: servidor de desarrollo en [http://localhost:3000](http://localhost:3000).
- `npm run build`: genera el sitio en `build/` (lo que publica Netlify).
- `npm run preview`: sirve el build localmente para revisarlo antes de publicar.
- `npm test`: corre los tests con Vitest.
- `npm run imagenes`: regenera las versiones livianas de las fotos (después de agregar o cambiar una).

## Datos del curso

Fecha, modalidad, horarios, costo, link de inscripción, programa y preguntas frecuentes están en
`src/data/curso.js`. Se completan ahí y se publica de nuevo. Un dato vacío se muestra como
"A confirmar" y una lista vacía oculta su sección.

## Estructura

- `index.html`: la landing (meta tags, Google Analytics, fuentes).
- `curso/index.html`: la página `/curso/`, con sus propios meta tags.
- `public/assets/`: imágenes y logos, servidos tal cual.
- `src/components/`: una sección de la landing por archivo.
- `src/pages/`: páginas aparte de la landing (`CursoPagina.jsx`).
- `src/styles/`: estilos por sección; `main.css` tiene las variables de color.
- `src/publicUrl.js`: ruta base para las imágenes de `public/`.

El sitio usa rutas absolutas (`base: '/'` en `vite.config.js`), así que tiene que publicarse en la
raíz del dominio, como aadep.com.ar.
