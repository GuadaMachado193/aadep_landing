import { afterEach, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import CursoPagina from './CursoPagina';
import { curso } from '../data/curso';
import { formatearFecha } from '../fechas';

const original = structuredClone({ ...curso, beneficios: [], requisitos: [] });
afterEach(() => {
  Object.assign(curso, {
    proximaFecha: original.proximaFecha,
    modalidad: original.modalidad,
    inscripcionUrl: original.inscripcionUrl,
    programa: original.programa,
    preguntas: original.preguntas,
  });
});

test('sin datos muestra "A confirmar", oculta Programa y Preguntas e inscribe por WhatsApp', () => {
  render(<CursoPagina />);
  expect(screen.getByRole('heading', { level: 1, name: 'Curso de Árbitros de Fútbol' })).toBeInTheDocument();
  const datos = screen.getByRole('region', { name: 'Datos del curso' });
  expect(within(datos).getAllByText('A confirmar')).toHaveLength(6);
  expect(screen.queryByRole('heading', { name: 'Programa' })).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Preguntas frecuentes' })).not.toBeInTheDocument();
  for (const boton of screen.getAllByRole('link', { name: 'Inscribirme' })) {
    expect(boton.getAttribute('href')).toMatch(/^https:\/\/wa\.me\/5493515728947\?text=/);
  }
});

test('con datos cargados muestra fecha, programa, preguntas y el formulario', () => {
  Object.assign(curso, {
    proximaFecha: '2027-03-06',
    modalidad: 'Presencial',
    inscripcionUrl: 'https://forms.gle/ejemplo',
    programa: [{ titulo: 'Reglas de juego', detalle: 'Las 17 reglas.' }],
    preguntas: [{ pregunta: '¿Necesito experiencia?', respuesta: 'No.' }],
  });
  render(<CursoPagina />);
  expect(screen.getAllByText('6 de marzo de 2027').length).toBeGreaterThan(0);
  expect(screen.getByText('Presencial')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Programa' })).toBeInTheDocument();
  expect(screen.getByText('¿Necesito experiencia?')).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'Inscribirme' })[0]).toHaveAttribute('href', 'https://forms.gle/ejemplo');
});

test('formatearFecha convierte AAAA-MM-DD a texto y tolera vacíos', () => {
  expect(formatearFecha('2027-03-06')).toBe('6 de marzo de 2027');
  expect(formatearFecha('')).toBe('');
  expect(formatearFecha('6/3/2027')).toBe('');
});
