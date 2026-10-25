// Envía un evento a Google Analytics (gtag se carga en index.html).
// Solo en producción, para que las pruebas en localhost no cuenten como visitas reales.
// No mandar datos personales (nombre, email, teléfono) en los parámetros.
export function trackEvent(nombre, parametros = {}) {
  if (!import.meta.env.PROD || typeof window.gtag !== 'function') return;
  window.gtag('event', nombre, parametros);
}
