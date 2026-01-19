import React, { useEffect, useRef, useState } from 'react';
import useCountUp from '../hooks/useCountUp';
import useReveal from '../hooks/useReveal';

export default function Nosotros() {
  const [visible, setVisible] = useState(false);
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

  return (
    <section className="nosotros" id="nosotros" ref={sectionRef}>
      <div className="container">
        <div className="nosotros-content">
          <div className="nosotros-text">
            <div className="section-header">
              <h2>Sobre AADEP</h2>
              <h3>Quienes Somos</h3>
              <p>La Asociación de Árbitros Deportivos de Córdoba nace en 2015, marcando el comienzo de una nueva etapa de profesionalización del arbitraje en la provincia. Su creación tuvo como objetivo institucionalizar un servicio que, durante más de 20 años, se había brindado de manera ininterrumpida en las diversas ligas de Córdoba, así como en los torneos federales y las categorías superiores del fútbol argentino.</p>
              <p>Formado por árbitros, ex árbitros y dirigentes, la asociación tiene como objetivo no solo brindar un servicio formal y profesional sino además proyectar árbitros a nivel nacional manteniendo siempre el compromiso de formar buenas personas.</p>
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

function Stats({ visible }) {
  const afiliados = useCountUp({ target: 150, duration: 1500, start: visible, suffix: '+' });
  const experiencia = useCountUp({ target: 9, duration: 1200, start: visible });
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
