import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el título del hero y las secciones principales', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: /asociación de árbitros deportivos de córdoba/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Ligas Representadas' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Preparación Física' })).toBeInTheDocument();
  // El botón "Mi Portal" se quitó del menú
  expect(screen.queryByRole('link', { name: 'Mi Portal' })).not.toBeInTheDocument();
});
