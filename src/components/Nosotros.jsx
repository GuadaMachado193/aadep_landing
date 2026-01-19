import React, { useEffect, useRef, useState } from 'react';
import useCountUp from '../hooks/useCountUp';
import useReveal from '../hooks/useReveal';
import '../styles/nosotros.css'
// Si tienes iconos instalados (como lucide-react o fontawesome) úsalos.
// Aquí usaré un SVG inline simple para la flecha.

export default function Nosotros() {
  const [visible, setVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Nuevo estado para el texto
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setVisible(true);
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="nosotros" id="nosotros" ref={sectionRef}>
      <div className="container">
        <div className="nosotros-content">
          <div className="nosotros-text">
            <div className="section-header">
              <h2>Sobre AADEP</h2>
              <h3>Quienes Somos</h3>
              
              {/* Contenedor del texto colapsable */}
              <div className={`text-wrapper ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <p>La Asociación de Árbitros Deportivos de Córdoba nace en 2015, marcando el comienzo de una nueva etapa de profesionalización del arbitraje en la provincia. Su creación tuvo como objetivo institucionalizar un servicio que, durante más de 20 años, se había brindado de manera ininterrumpida en las diversas ligas de Córdoba, así como en los torneos federales y las categorías superiores del fútbol argentino.</p>
                <p>Formado por árbitros, ex árbitros y dirigentes, la asociación tiene como objetivo no solo brindar un servicio formal y profesional sino además proyectar árbitros a nivel nacional manteniendo siempre el compromiso de formar buenas personas.</p>
                
                {/* Degradado: Solo se muestra si NO está expandido */}
                {!isExpanded && <div className="text-gradient-overlay"></div>}
              </div>

              {/* Botón para expandir/colapsar */}
              <button className="read-more-btn" onClick={toggleExpand}>
                {isExpanded ? 'Leer menos' : 'Leer más'}
                <svg 
                  className={`arrow-icon ${isExpanded ? 'rotated' : ''}`} 
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            <div className="nosotros-info">
              <InfoItem title="Misión">
                Formar árbitros profesionales de excelencia para el fútbol cordobés, promoviendo la ética, la justicia deportiva y el desarrollo profesional continuo.
              </InfoItem>
              <InfoItem title="Visión">
                Brindar un servicio arbitral profesional, institucionalizado y de calidad en todas las competencias de Córdoba y el país.
              </InfoItem>
              <InfoItem title="Valores">
                <ul className="valores-list">
                  <li><strong>Disciplina:</strong> Altos estándares de preparación</li>
                  <li><strong>Compromiso:</strong> Responsabilidad y dedicación</li>
                  <li><strong>Integridad:</strong> Honestidad y transparencia</li>
                  <li><strong>Respeto:</strong> Valorar a todos por igual</li>
                  <li><strong>Excelencia:</strong> Mejora continua</li>
                </ul>
              </InfoItem>
            </div>

            <Stats visible={visible} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ... El resto de tus componentes (Stats, InfoItem, StatCard) siguen igual ...
function Stats({ visible }) {
  const afiliados = useCountUp({ target: 70, duration: 1500, start: visible, suffix: '+' });
  const experiencia = useCountUp({ target: 10, duration: 1200, start: visible });
  const ligas = useCountUp({ target: 8, duration: 1200, start: visible });

  return (
    <div className="nosotros-stats">
      <StatCard number={visible ? afiliados : '0'} label="Árbitros Afiliados" />
      <StatCard number={visible ? experiencia : '0'} label="Años de Experiencia" />
      <StatCard number={visible ? ligas : '0'} label="Ligas Representadas" />
    </div>
  );
}

function InfoItem({ title, children }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={'info-item' + (visible ? ' fade-in-up' : '')}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function StatCard({ number, label }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={'stat-card' + (visible ? ' fade-in-up' : '')}>
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}