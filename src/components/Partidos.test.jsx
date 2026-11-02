import { afterAll, beforeEach, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Partidos from './Partidos';
import DesignacionesPagina from '../pages/DesignacionesPagina';
import { partidos, partidosSeparados } from '../data/partidos';

const prueba = [
  { id: 'jugado', fecha: '2026-10-25', torneo: 'Copa', local: 'A', visitante: 'B', resultado: '1 a 1',
    arbitro: 'Ana Pérez', asistentes: ['Luz Díaz', 'Sol Ruiz'], cuarto: 'Eva Gil' },
  { id: 'proximo', fecha: '2026-11-20', torneo: 'Copa', local: 'C', visitante: 'D', arbitro: 'Ana Pérez' },
  { id: 'lejano', fecha: '2026-12-20', torneo: 'Copa', local: 'E', visitante: 'F' },
  { id: 'publicado', fecha: '2026-11-25', fechaEsPublicacion: true, torneo: 'Copa', local: 'G', visitante: 'H' },
];

// Cada test carga sus partidos; al final se restauran los reales
const reales = [...partidos];
beforeEach(() => {
  partidos.splice(0, partidos.length, ...prueba);
});
afterAll(() => {
  partidos.splice(0, partidos.length, ...reales);
});

test('separa próximos y anteriores según la fecha, el resultado y si la fecha es de publicación', () => {
  const { proximos, anteriores } = partidosSeparados(new Date(2026, 10, 2));
  expect(proximos.map((p) => p.id)).toEqual(['proximo', 'lejano']);
  expect(anteriores.map((p) => p.id)).toEqual(['publicado', 'jugado']);
});

test('un partido de hoy sigue siendo próximo hasta que tenga resultado', () => {
  const { proximos } = partidosSeparados(new Date(2026, 10, 20));
  expect(proximos.map((p) => p.id)).toContain('proximo');
});

test('la sección de la landing se oculta sin partidos', () => {
  partidos.length = 0;
  const { container } = render(<Partidos />);
  expect(container).toBeEmptyDOMElement();
});

test('la tarjeta de la landing enlaza al detalle y la página muestra el equipo arbitral completo', () => {
  const { unmount } = render(<Partidos />);
  expect(screen.getAllByRole('link', { name: /Ver detalle/ })).toHaveLength(3);
  unmount();

  const { container } = render(<DesignacionesPagina />);
  const jugado = container.querySelector('#jugado');
  expect(within(jugado).getByText('1 a 1')).toBeInTheDocument();
  expect(within(jugado).getByText('Luz Díaz y Sol Ruiz')).toBeInTheDocument();
  expect(within(jugado).getByText('Eva Gil')).toBeInTheDocument();
  expect(within(container.querySelector('#publicado')).getByText(/^Publicado el/)).toBeInTheDocument();
});
