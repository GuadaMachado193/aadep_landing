import React, { useEffect, useRef, useState } from 'react';
import useCountUp from '../hooks/useCountUp';
import useReveal from '../hooks/useReveal';
import '../styles/nosotros.css';

export default function Nosotros() {
  const [visible, setVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('mision'); 
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
            
            {/* Header de la sección */}
            <div className="section-header">
              <h2>Sobre AADEP</h2>
              <h3>Quienes Somos</h3>

              <div className={`text-wrapper ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <p>La Asociación de Árbitros Deportivos de Córdoba nace en 2015, marcando el comienzo de una nueva etapa de profesionalización del arbitraje en la provincia. Su creación tuvo como objetivo institucionalizar un servicio que, durante más de 20 años, se había brindado de manera ininterrumpida en las diversas ligas de Córdoba, así como en los torneos federales y las categorías superiores del fútbol argentino.</p>
                <p>Formado por árbitros, ex árbitros y dirigentes, la asociación tiene como objetivo no solo brindar un servicio formal y profesional sino además proyectar árbitros a nivel nacional manteniendo siempre el compromiso de formar buenas personas.</p>
              </div>

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

            {/* --- SECCIÓN PESTAÑAS (TABS) --- */}
            <div style={{ width: '100%' }}>
              <div className="tabs-container">
                
                {/* Botonera */}
                <div className="tabs-header">
                  <button 
                    className={`tab-btn ${activeTab === 'mision' ? 'active' : ''}`}
                    onClick={() => setActiveTab('mision')}
                  >
                    Misión
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
                    onClick={() => setActiveTab('vision')}
                  >
                    Visión
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'valores' ? 'active' : ''}`}
                    onClick={() => setActiveTab('valores')}
                  >
                    Valores
                  </button>
                </div>

                {/* --- CONTENIDO (SOLUCIÓN DISPLAY TOGGLE) --- */}
                {/* Renderizamos TODO, pero ocultamos con CSS lo que no se usa */}
                <div className="tab-content" style={{ backgroundColor: '#fff', padding: '2rem' }}>
                  
                  {/* PESTAÑA MISIÓN */}
                  <div 
                    className="tab-pane" 
                    style={{ 
                      display: activeTab === 'mision' ? 'block' : 'none',
                      animation: 'none',
                      opacity: 1
                    }}
                  >
                    <h3 style={{ color: '#0b1f3a', marginBottom: '1rem' }}>Nuestra Misión</h3>
                    <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.6' }}>
                      Formar árbitros profesionales de excelencia para el fútbol cordobés, promoviendo la ética, la justicia deportiva y el desarrollo profesional continuo.
                    </p>
                  </div>

                  {/* PESTAÑA VISIÓN */}
                  <div 
                    className="tab-pane" 
                    style={{ 
                      display: activeTab === 'vision' ? 'block' : 'none',
                      animation: 'none',
                      opacity: 1
                    }}
                  >
                    <h3 style={{ color: '#0b1f3a', marginBottom: '1rem' }}>Nuestra Visión</h3>
                    <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.6' }}>
                      Brindar un servicio arbitral profesional, institucionalizado y de calidad en todas las competencias de Córdoba y el país.
                    </p>
                  </div>

                  {/* PESTAÑA VALORES */}
                  <div 
                    className="tab-pane" 
                    style={{ 
                      display: activeTab === 'valores' ? 'block' : 'none',
                      animation: 'none',
                      opacity: 1
                    }}
                  >
                    <h3 style={{ color: '#0b1f3a', marginBottom: '1rem' }}>Nuestros Valores</h3>
                    <ul className="valores-list" style={{ color: '#333', listStyle: 'none', padding: 0 }}>
                      <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}><strong>Disciplina:</strong> Altos estándares de preparación</li>
                      <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}><strong>Compromiso:</strong> Responsabilidad y dedicación</li>
                      <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}><strong>Integridad:</strong> Honestidad y transparencia</li>
                      <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}><strong>Respeto:</strong> Valorar a todos por igual</li>
                      <li style={{ padding: '0.5rem 0' }}><strong>Excelencia:</strong> Mejora continua</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
            {/* --- FIN SECCIÓN PESTAÑAS --- */}

            <Stats visible={visible} />
            
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats({ visible }) {
  const afiliados = useCountUp({ target: 80, duration: 1500, start: visible, suffix: '+' });
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

function StatCard({ number, label }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={'stat-card' + (visible ? ' fade-in-up' : '')}>
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}