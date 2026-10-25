import { afterEach, expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Novedades from './Novedades';
import Navbar from './Navbar';
import NovedadesPagina from '../pages/NovedadesPagina';
import { novedades } from '../data/novedades';

const prueba = [
  { id: 'vieja', fecha: '2026-01-10', categoria: 'Cursos', titulo: 'Novedad vieja', resumen: 'Resumen viejo.' },
  { id: 'nueva', fecha: '2026-09-01', categoria: 'Designaciones', titulo: 'Novedad nueva', resumen: 'Resumen nuevo.',
    texto: 'Primer párrafo.\n\nSegundo párrafo.', link: { url: 'https://example.com', texto: 'Ver en Instagram' } },
  { id: 'media', fecha: '2026-05-20', titulo: 'Novedad media', resumen: 'Resumen medio.' },
  { id: 'otra', fecha: '2026-03-15', titulo: 'Novedad otra', resumen: 'Resumen otro.' },
];

afterEach(() => {
  novedades.length = 0;
});

test('sin novedades no hay sección ni enlace, y la página muestra el mensaje', () => {
  const { container } = render(<Novedades />);
  expect(container).toBeEmptyDOMElement();

  render(<Navbar />);
  expect(screen.queryByRole('link', { name: 'Novedades' })).not.toBeInTheDocument();
});

test('la página sin novedades invita a seguir en Instagram', () => {
  render(<NovedadesPagina />);
  expect(screen.getByText(/Todavía no hay novedades publicadas/)).toBeInTheDocument();
  const principal = screen.getByRole('main');
  expect(within(principal).getByRole('link', { name: 'Instagram' })).toHaveAttribute('href', 'https://www.instagram.com/aadep_cordoba/');
});

test('la sección muestra las 3 más recientes en orden y enlaza a la página', () => {
  novedades.push(...prueba);
  render(<Novedades />);
  const titulos = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
  expect(titulos).toEqual(['Novedad nueva', 'Novedad media', 'Novedad otra']);
  expect(screen.getAllByRole('link', { name: /Leer más/ })[0]).toHaveAttribute('href', '/novedades/#nueva');
  expect(screen.getByRole('link', { name: 'Ver todas las novedades' })).toHaveAttribute('href', '/novedades/');
});

test('con novedades el menú muestra el enlace, activo en la página', () => {
  novedades.push(...prueba);
  const { unmount } = render(<Navbar />);
  expect(screen.getByRole('link', { name: 'Novedades' })).toHaveAttribute('href', '#novedades');
  unmount();

  render(<Navbar pagina="novedades" />);
  const enlace = screen.getByRole('link', { name: 'Novedades' });
  expect(enlace).toHaveAttribute('href', '/novedades/');
  expect(enlace).toHaveClass('active');
});

test('la página muestra todas, con su ancla, el texto completo y el link', () => {
  novedades.push(...prueba);
  const { container } = render(<NovedadesPagina />);
  expect(container.querySelectorAll('article.novedad-completa')).toHaveLength(4);
  const nueva = container.querySelector('#nueva');
  expect(within(nueva).getByText('Segundo párrafo.')).toBeInTheDocument();
  expect(within(nueva).getByRole('link', { name: /Ver en Instagram/ })).toHaveAttribute('href', 'https://example.com');
  expect(within(nueva).getByText('1 de septiembre de 2026')).toBeInTheDocument();
});
