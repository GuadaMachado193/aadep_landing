// Ruta base de los archivos de /public, sin barra final ('' en desarrollo, '.' en el build)
export const PUBLIC_URL = import.meta.env.BASE_URL.replace(/\/$/, '');
