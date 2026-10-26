import { afterEach, expect, test, vi } from 'vitest';
import { trackEvent } from './analytics';

afterEach(() => {
  vi.unstubAllEnvs();
  delete window.gtag;
});

test('envía el evento a gtag en producción', () => {
  vi.stubEnv('PROD', true);
  window.gtag = vi.fn();
  trackEvent('whatsapp_click', { ubicacion: 'boton_flotante' });
  expect(window.gtag).toHaveBeenCalledWith('event', 'whatsapp_click', { ubicacion: 'boton_flotante' });
});

test('no envía nada fuera de producción', () => {
  vi.stubEnv('PROD', false);
  window.gtag = vi.fn();
  trackEvent('whatsapp_click');
  expect(window.gtag).not.toHaveBeenCalled();
});
