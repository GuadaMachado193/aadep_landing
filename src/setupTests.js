// jest-dom agrega matchers para el DOM, como toBeInTheDocument()
// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

// jsdom no implementa IntersectionObserver (lo usan useReveal, el Navbar y Nosotros)
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = IntersectionObserverMock;
