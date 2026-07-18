import React, { useEffect, useRef, useState } from 'react';
import useCountUp from '../hooks/useCountUp';
import useReveal from '../hooks/useReveal';
import '../styles/nosotros.css';

const tabs = [
  {
    id: 'mision',
    label: 'Misión',
    titulo: 'Nuestra Misión',
    contenido:
      'Formar árbitros profesionales de excelencia para el fútbol cordobés, promoviendo la ética, la justicia deportiva y el desarrollo profesional continuo.',
  },
  {
    id: 'vision',
    label: 'Visión',
    titulo: 'Nuestra Visión',
    contenido:
      'Brindar un servicio arbitral profesional, institucionalizado y de calidad en todas las competencias de Córdoba y el país.',
  },
  {
    id: 'valores',
    label: 'Valores',
    titulo: 'Nuestros Valores',
    valores: [
      { nombre: 'Disciplina', detalle: 'Altos estándares de preparación' },
      { nombre: 'Compromiso', detalle: 'Responsabilidad y dedicación' },
      { nombre: 'Integridad', detalle: 'Honestidad y transparencia' },
      { nombre: 'Respeto', detalle: 'Valorar a todos por igual' },
      { nombre: 'Excelencia', detalle: 'Mejora continua' },
    ],
  },
];

export default function Nosotros() {
  const [visible, setVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('mision');
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="nosotros" id="nosotros" ref={sectionRef}>
      <div className="container">
        <div className="nosotros-content">
          <div className="nosotros-text">
            <div className="section-header">
              <h2>Sobre AADEP</h2>
              <h3>Quienes Somos</h3>

              <div className={`text-wrapper ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <p>
                  La Asociación de Árbitros Deportivos de Córdoba nace en 2015, marcando el
                  comienzo de una nueva etapa de profesionalización del arbitraje en la
                  provincia. Su creación tuvo como objetivo institucionalizar un servicio que,
                  durante más de 20 años, se había brindado de manera ininterrumpida en las
                  diversas ligas de Córdoba, así como en los torneos federales y las categorías
                  superiores del fútbol argentino.
                </p>
                <p>
                  Formado por árbitros, ex árbitros y dirigentes, la asociación tiene como
                  objetivo no solo brindar un servicio formal y profesional sino además
                  proyectar árbitros a nivel nacional manteniendo siempre el compromiso de
                  formar buenas personas.
                </p>
              </div>

              <button
                className="read-more-btn"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
              >
                {isExpanded ? 'Leer menos' : 'Leer más'}
                <svg
                  className={`arrow-icon ${isExpanded ? 'rotated' : ''}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            <div className="tabs-container">
              <div className="tabs-header" role="tablist" aria-label="Misión, visión y valores">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="tab-content">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    role="tabpanel"
                    className={`tab-pane ${activeTab === tab.id ? 'visible' : ''}`}
                  >
                    <h3 className="tab-pane-title">{tab.titulo}</h3>
                    {tab.contenido && <p className="tab-pane-text">{tab.contenido}</p>}
                    {tab.valores && (
                      <ul className="valores-list">
                        {tab.valores.map((v) => (
                          <li key={v.nombre}>
                            <strong>{v.nombre}:</strong> {v.detalle}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

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
