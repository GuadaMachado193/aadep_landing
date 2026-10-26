// Ruta base de los archivos de /public, sin barra final ('' mientras base sea '/' en vite.config.js)
export const PUBLIC_URL = import.meta.env.BASE_URL.replace(/\/$/, '');
