import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el título del hero y las secciones principales', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: /asociación de árbitros deportivos de córdoba/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Ligas Representadas' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Preparación Física' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Mi Portal' })).toHaveAttribute('href', 'https://portal.aadep.com.ar');
});
