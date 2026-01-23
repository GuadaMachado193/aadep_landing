import React, { useState } from 'react';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', tema: '', mensaje: '' });
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(false); // Nuevo estado para deshabilitar botón mientras envía

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => { // Hacemos la función asíncrona
    e.preventDefault();
    
    // 1. Validación local
    const required = ['nombre', 'email', 'tema', 'mensaje'];
    const ok = required.every(k => form[k] && form[k].trim() !== '');
    
    if (!ok) {
      setNotice({ type: 'error', msg: 'Por favor, completa todos los campos requeridos.' });
      return;
    }

    // 2. Activamos modo "Cargando"
    setLoading(true);
    setNotice(null);

    try {
      // 3. Enviamos los datos a Formspree usando FETCH
      const response = await fetch("https://formspree.io/f/mkojojye", {  // <--- ¡PEGA TU LINK AQUÍ!
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      // 4. Verificamos si se envió bien
      if (response.ok) {
        setNotice({ type: 'success', msg: '¡Mensaje enviado correctamente! Te contactaremos pronto.' });
        setForm({ nombre: '', email: '', telefono: '', tema: '', mensaje: '' }); // Limpiar formulario
      } else {
        // Si falló (ej: error en el servidor)
        setNotice({ type: 'error', msg: 'Hubo un problema al enviar el mensaje. Intenta nuevamente.' });
      }
    } catch (error) {
      // Si falló la conexión (internet)
      setNotice({ type: 'error', msg: 'Error de conexión. Verifica tu internet.' });
    } finally {
      setLoading(false); // Desactivamos modo "Cargando"
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
                  <p>Estados Unidos 2840,<br/>Córdoba, Argentina</p>
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
                <div className="mb-3" style={{
                  background: notice.type === 'success' ? '#10b981' : '#ef4444',
                  color: 'white', padding: '0.75rem 1rem', borderRadius: 8
                }}>
                  {notice.msg}
                </div>
              )}
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input type="text" name="nombre" placeholder="Nombre completo" value={form.nombre} onChange={onChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={onChange} />
                </div>
                <div className="form-group">
                  <select name="tema" value={form.tema} onChange={onChange} required>
                    <option value="">Selecciona un tema</option>
                    <option value="afiliacion">Afiliación</option>
                    <option value="capacitacion">Capacitación</option>
                    <option value="eventos">Eventos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="mensaje" placeholder="Tu mensaje" rows="5" value={form.mensaje} onChange={onChange} required></textarea>
                </div>
                
                {/* Botón que cambia texto cuando está cargando */}
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