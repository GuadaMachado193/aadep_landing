import { useEffect, useState } from 'react';

// Al llegar a una página con /pagina/#id el navegador busca el ancla antes de que React
// dibuje la lista, así que el scroll y el resaltado se hacen acá, una vez montada.
export function useAnclaDestacada() {
  const [destacada, setDestacada] = useState(null);

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const elemento = id && document.getElementById(id);
    if (!elemento) return;
    elemento.scrollIntoView();
    setDestacada(id);
  }, []);

  return destacada;
}
