// '2027-03-06' → '6 de marzo de 2027'. Devuelve '' si la fecha está vacía o mal escrita.
export function formatearFecha(iso) {
  const partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!partes) return '';
  const fecha = new Date(Number(partes[1]), Number(partes[2]) - 1, Number(partes[3]));
  return fecha.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
}
