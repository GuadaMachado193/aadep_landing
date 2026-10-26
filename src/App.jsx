import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import Noticias from './components/Noticias';
import Novedades from './components/Novedades';
import Nosotros from './components/Nosotros';
import Curso from './components/Curso';
import Comision from './components/Comision';
import Afiliacion from './components/Afiliacion';
import Contacto from './components/Contacto';
import BotonWhatsapp from './components/BotonWhatsapp';
import PreparacionFisica from './components/PreparacionFisica';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Sponsors />
        <Novedades />
        <Noticias />
        <Nosotros />
        <PreparacionFisica/>
        <Curso />
        <Comision />
        <Afiliacion />
        <Contacto />
      </main>
      <Footer />
      <BotonWhatsapp/>
    </div>
  );
}

export default App;
