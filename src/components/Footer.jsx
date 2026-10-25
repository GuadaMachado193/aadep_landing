import React from 'react';
import { novedades } from '../data/novedades';

// pagina="curso" | "novedades": fuera de la landing los enlaces vuelven a ella (/#seccion)
export default function Footer({ pagina }) {
  const base = pagina ? '/' : '';
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>AADEP</h3>
            <p>Estados Unidos 2840 <br/>Córdoba, Argentina</p>
            <p><strong>Teléfono:</strong> +54 351-5728947</p>
            <p><strong>Teléfono:</strong> +54 351-3905917</p>
            <p><strong>Email:</strong> aadep.cba@gmail.com</p>
          </div>

          <div className="footer-links">
            <h4>Links rápidos</h4>
            <ul>
              <li><a href={`${base}#home`}>Inicio</a></li>
              {novedades.length > 0 && <li><a href="/novedades/">Novedades</a></li>}
              <li><a href={`${base}#noticias`}>Árbitros</a></li>
              <li><a href={`${base}#nosotros`}>Nosotros</a></li>
              <li><a href="/curso/">Curso de Árbitros</a></li>
              <li><a href={`${base}#comision`}>Comisión Directiva</a></li>
              <li><a href={`${base}#contacto`}>Contacto</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Nuestras redes sociales</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100012370383824" className="social-link" aria-label="Facebook">Facebook</a>
              <a href="https://www.instagram.com/aadep_cordoba/" className="social-link" aria-label="Instagram">Instagram</a>
          
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 <strong>Asociación de Árbitros Deportivos de Córdoba</strong> - Todos los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  );
}
