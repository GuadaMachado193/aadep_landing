import React, { useEffect, useState } from 'react';
import { scrollToHash } from '../hooks/useSmoothScroll';
import '../styles/navbar.css';

// URL del sistema de gestión de árbitros: reemplazar cuando esté desplegado
const PORTAL_URL = 'https://portal.aadep.com.ar';

const enlaces = [
  { id: 'home', label: 'Inicio' },
  { id: 'noticias', label: 'Árbitros' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'curso', label: 'Curso' },
  { id: 'comision', label: 'Comisión' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');

  // Sombra/fondo del navbar al hacer scroll (con requestAnimationFrame como throttle)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 100);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ScrollSpy con IntersectionObserver (sin cálculos en cada evento de scroll)
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Franja horizontal a la altura del navbar: la sección que la cruza es la activa
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);
  const onNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      scrollToHash(href, 80);
      closeMenu();
    }
  };

  return (
    <header>
      <nav className={'navbar' + (scrolled ? ' scrolled' : '')}>
        <div className="nav-container">
          <div className="logo-container">
            <a href="#home" onClick={onNavClick} aria-label="Ir al inicio">
              <img
                src={process.env.PUBLIC_URL + '/assets/aadep-logo.png'}
                alt="Logo AADEP"
                className="logo"
              />
            </a>
          </div>

          <ul id="nav-menu" className={'nav-links' + (open ? ' active' : '')}>
            {enlaces.map(({ id, label }) => (
              <li key={id}>
                <a
                  className={activeId === id ? 'active' : ''}
                  href={`#${id}`}
                  onClick={onNavClick}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PORTAL_URL}
                className="portal-btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Mi Portal
              </a>
            </li>
          </ul>

          <button
            className={'menu-toggle' + (open ? ' active' : '')}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
