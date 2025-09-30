import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>AADEP OFICIAL</h3>
            <p>Av. Principal 123<br/>Córdoba, Argentina</p>
            <p><strong>Teléfono:</strong> +54 351 1234567</p>
            <p><strong>Email:</strong> aadepoficial@gmail.com</p>
          </div>

          <div className="footer-links">
            <h4>Links rápidos</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
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
          <p>&copy; 2024 <strong>AADEP OFICIAL</strong> - Todos los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  );
}
