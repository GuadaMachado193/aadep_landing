import { useEffect, useRef, useState } from 'react';

export default function useCountUp({ target = 0, duration = 2000, start = false, suffix = '' }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const from = 0;
    const to = target;
    const animate = (t) => {
      if (!startRef.current) startRef.current = t;
      const elapsed = t - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(from + (to - from) * progress);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [start, target, duration]);

  return `${value}${suffix}`;
}
