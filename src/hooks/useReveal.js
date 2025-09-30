import { useEffect, useRef, useState } from 'react';

// Hook que agrega la clase 'fade-in-up' cuando el elemento entra en viewport
export default function useReveal(options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}
