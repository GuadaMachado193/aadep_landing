// Datos del Curso de Árbitros. Los usan la sección Curso de la landing y la página /curso/.
//
// Para actualizar: completar los campos y volver a publicar el sitio.
// - Un texto vacío ('') se muestra como "A confirmar".
// - Una lista vacía ([]) oculta su sección en la página.
import { Activity, Award, BookOpen, Briefcase, Target, Users } from 'lucide-react';

export const curso = {
  // Fecha de inicio en formato AAAA-MM-DD, por ejemplo '2027-03-06'
  proximaFecha: '',
  // Por ejemplo: 'Presencial', 'Virtual' o 'Mixta (teoría virtual, práctica presencial)'
  modalidad: '',
  // Por ejemplo: '8 meses'
  duracion: '',
  // Por ejemplo: 'Sábados de 9 a 13 h'
  horarios: '',
  // Por ejemplo: 'Estados Unidos 2840, Córdoba'
  lugar: '',
  // Por ejemplo: 'Matrícula $ 20.000 y cuota mensual $ 15.000'
  costo: '',

  // Link al formulario de inscripción (Google Forms u otro).
  // Si queda vacío, el botón "Inscribirme" abre WhatsApp con un mensaje listo.
  inscripcionUrl: '',

  // Contenidos del curso, en orden. Ejemplo:
  // { titulo: 'Reglas de juego', detalle: 'Las 17 reglas de la IFAB y su interpretación.' }
  programa: [],

  // Preguntas frecuentes. Ejemplo:
  // { pregunta: '¿Necesito experiencia previa?', respuesta: 'No, el curso empieza desde cero.' }
  preguntas: [],

  beneficios: [
    { Icono: BookOpen, texto: 'Formación teórica completa en reglas de juego' },
    { Icono: Activity, texto: 'Entrenamiento físico y técnico especializado' },
    { Icono: Target, texto: 'Práctica en partidos reales de diferentes categorías' },
    { Icono: Users, texto: 'Networking con árbitros experimentados' },
    { Icono: Award, texto: 'Certificación oficial reconocida por la AFA' },
    { Icono: Briefcase, texto: 'Oportunidades laborales en ligas cordobesas' },
  ],

  requisitos: [
    'Edad mínima: 16 años',
    'Educación secundaria en curso o completa',
    'Buena condición física',
    'Disponibilidad para entrenamientos',
    'Compromiso con la ética deportiva',
  ],
};

// '2027-03-06' → '6 de marzo de 2027'. Devuelve '' si la fecha está vacía o mal escrita.
export function formatearFecha(iso) {
  const partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!partes) return '';
  const fecha = new Date(Number(partes[1]), Number(partes[2]) - 1, Number(partes[3]));
  return fecha.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
}
