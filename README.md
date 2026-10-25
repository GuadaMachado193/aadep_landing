# AADEP — Landing

Sitio de la Asociación de Árbitros Deportivos de Córdoba ([aadep.com.ar](https://aadep.com.ar)). React 19 + [Vite](https://vite.dev).

Requiere Node.js 20.19 o superior.

## Comandos

- `npm install`: instala las dependencias.
- `npm start`: servidor de desarrollo en [http://localhost:3000](http://localhost:3000).
- `npm run build`: genera el sitio en `build/` (lo que publica Netlify).
- `npm run preview`: sirve el build localmente para revisarlo antes de publicar.
- `npm test`: corre los tests con Vitest.

## Estructura

- `index.html`: la página base (meta tags, Google Analytics, fuentes).
- `public/assets/`: imágenes y logos, servidos tal cual.
- `src/components/`: una sección de la página por archivo.
- `src/styles/`: estilos por sección; `main.css` tiene las variables de color.
- `src/publicUrl.js`: ruta base para las imágenes de `public/`.
