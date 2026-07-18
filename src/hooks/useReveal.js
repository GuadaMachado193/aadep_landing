import { useEffect, useRef, useState } from 'react';

const DEFAULT_OPTIONS = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

// Hook que agrega la clase 'fade-in-up' cuando el elemento entra en viewport
export default function useReveal({ threshold, rootMargin } = DEFAULT_OPTIONS) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold ?? DEFAULT_OPTIONS.threshold,
        rootMargin: rootMargin ?? DEFAULT_OPTIONS.rootMargin,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // Dependencias primitivas: el observer no se recrea por referencias nuevas de objetos
  }, [threshold, rootMargin, visible]);

  return { ref, visible };
}
