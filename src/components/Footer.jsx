import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>AADEP OFICIAL</h3>
            <p>Estados Unidos 2840 <br/>Córdoba, Argentina</p>
            <p><strong>Teléfono:</strong> 351-3905917</p>
            <p><strong>Teléfono:</strong> 351-5728947</p>
            <p><strong>Email:</strong> aadep.cba@gmail.com</p>
          </div>

          <div className="footer-links">
            <h4>Links rápidos</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#nosotros">Árbitros</a></li>
              <li><a href="#curso">Curso de Árbitros</a></li>
              <li><a href="#comision">Comisión Directiva</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#noticias">Noticias</a></li>
              <li><a href="#afiliacion">Afiliarse</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Nuestras redes sociales</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">Facebook</a>
              <a href="#" className="social-link" aria-label="Instagram">Instagram</a>
              <a href="#" className="social-link" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 <strong>Asociación de Árbitros deportivos Córdoba</strong> - Todos los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  );
}
