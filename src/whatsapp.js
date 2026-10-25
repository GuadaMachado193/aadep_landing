// WhatsApp de AADEP: lo usan el botón flotante y la página del curso
export const WHATSAPP_NUMERO = '5493515728947';

export function linkWhatsapp(mensaje) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}
