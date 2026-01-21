import React, { useEffect, useState } from 'react';
import { scrollToHash } from '../hooks/useSmoothScroll';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);

      // ScrollSpy
      const sections = Array.from(document.querySelectorAll('section[id]'));
      const scrollPos = window.scrollY + 100; // offset for navbar
      let current = 'home';
      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        const top = window.scrollY + rect.top;
        if (scrollPos >= top) {
          current = sec.id;
        }
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
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
              <img src={process.env.PUBLIC_URL + '/assets/aadep-logo.png'} alt="Logo AADEP" className="logo" />
            </a>
          </div>

          <ul className={'nav-links' + (open ? ' active' : '')}>
            <li><a className={activeId==='home'? 'active':''} href="#home" onClick={onNavClick}>Inicio</a></li>
            <li><a className={activeId==='noticias'? 'active':''} href="#noticias" onClick={onNavClick}>Árbitros</a></li>
            <li><a className={activeId==='nosotros'? 'active':''} href="#nosotros" onClick={onNavClick}>Nosotros</a></li>
            <li><a className={activeId==='curso'? 'active':''} href="#curso" onClick={onNavClick}>Curso de Árbitros</a></li>
            <li><a className={activeId==='comision'? 'active':''} href="#comision" onClick={onNavClick}>Comisión Directiva</a></li>
            <li><a className={activeId==='contacto'? 'active':''} href="#contacto" onClick={onNavClick}>Contacto</a></li>
          </ul>


          <button className={'menu-toggle' + (open ? ' active' : '')} aria-label="Menú" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
