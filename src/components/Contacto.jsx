import React, { useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/mkojojye';

const FORM_INICIAL = { nombre: '', email: '', telefono: '', tema: '', mensaje: '' };

export default function Contacto() {
  const [form, setForm] = useState(FORM_INICIAL);
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const requeridos = ['nombre', 'email', 'tema', 'mensaje'];
    const ok = requeridos.every((k) => form[k] && form[k].trim() !== '');
    if (!ok) {
      setNotice({ type: 'error', msg: 'Por favor, completa todos los campos requeridos.' });
      return;
    }

    setLoading(true);
    setNotice(null);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setNotice({ type: 'success', msg: '¡Mensaje enviado correctamente! Te contactaremos pronto.' });
        setForm(FORM_INICIAL);
      } else {
        setNotice({ type: 'error', msg: 'Hubo un problema al enviar el mensaje. Intenta nuevamente.' });
      }
    } catch (error) {
      setNotice({ type: 'error', msg: 'Error de conexión. Verifica tu internet.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contacto" id="contacto">
      <div className="container">
        <div className="contacto-content">
          <div className="contacto-info">
            <div className="section-header">
              <h2>Contáctanos</h2>
              <p>Estamos aquí para ayudarte. Envíanos tu consulta.</p>
            </div>
            <div className="contacto-datos">
              <div className="contacto-item">
                <div className="contacto-icon">📍</div>
                <div className="contacto-text">
                  <h4>Nuestra Sede</h4>
                  <p>Estados Unidos 2840,<br />Córdoba, Argentina</p>
                </div>
              </div>
              <div className="contacto-item">
                <div className="contacto-icon">📧</div>
                <div className="contacto-text">
                  <h4>Email</h4>
                  <p>aadep.cba@gmail.com</p>
                </div>
              </div>
              <div className="contacto-item">
                <div className="contacto-icon">📱</div>
                <div className="contacto-text">
                  <h4>Teléfono</h4>
                  <p>+54 351 5728947</p>
                  <p>+54 351 3905917</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contacto-form">
            <div className="form-card">
              <h3>Envíanos un mensaje</h3>
              {notice && (
                <div className={`form-notice ${notice.type}`} role="alert">
                  {notice.msg}
                </div>
              )}
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="contacto-nombre" className="visually-hidden">Nombre completo</label>
                  <input id="contacto-nombre" type="text" name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={onChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="contacto-email" className="visually-hidden">Email</label>
                  <input id="contacto-email" type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="contacto-telefono" className="visually-hidden">Teléfono</label>
                  <input id="contacto-telefono" type="tel" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="contacto-tema" className="visually-hidden">Tema</label>
                  <select id="contacto-tema" name="tema" value={form.tema} onChange={onChange} required>
                    <option value="">Selecciona un tema</option>
                    <option value="afiliacion">Afiliación</option>
                    <option value="capacitacion">Capacitación</option>
                    <option value="eventos">Eventos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contacto-mensaje" className="visually-hidden">Tu mensaje</label>
                  <textarea id="contacto-mensaje" name="mensaje" placeholder="Tu mensaje" rows="5" value={form.mensaje} onChange={onChange} required></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
