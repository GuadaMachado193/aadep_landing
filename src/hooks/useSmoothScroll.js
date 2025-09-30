// Simple helper to smooth scroll to an element by selector with offset
export function scrollToSelector(selector, offset = 80) {
  const el = document.querySelector(selector);
  if (el) {
    const top = el.offsetTop - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export function scrollToHash(hash, offset = 80) {
  if (!hash || hash[0] !== '#') return;
  scrollToSelector(hash, offset);
}
