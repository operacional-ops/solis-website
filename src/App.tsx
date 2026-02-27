import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ClientsCarousel from './components/ClientsCarousel'
import VideoSection from './components/VideoSection'
import Solutions from './components/Solutions'
import FunctionalAreas from './components/FunctionalAreas'
import Segments from './components/Segments'
import Differentials from './components/Differentials'
import Cases from './components/Cases'
import Partners from './components/Partners'
import Resources from './components/Resources'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Numbers from './components/Numbers'
import Footer from './components/Footer'
import './styles/globals.css'

export default function App() {
  useEffect(() => {
    // Inicializar AOS
    // @ts-ignore
    if (typeof AOS !== 'undefined') {
      // @ts-ignore
      AOS.init({ duration: 800, once: true, offset: 100 })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Header / Navegação */}
      <Header />

      <main>
        {/* 2. Hero com Carrossel */}
        <Hero />

        {/* 3. Logos de Clientes */}
        <ClientsCarousel />

        {/* 4. Vídeo Institucional */}
        <VideoSection />

        {/* 5. Soluções Principais */}
        <Solutions />

        {/* 6. Áreas Funcionais com Tabs */}
        <FunctionalAreas />

        {/* 7. Segmentos Atendidos */}
        <Segments />

        {/* 8. Diferenciais SOLIS */}
        <Differentials />

        {/* 9. Cases de Sucesso */}
        <Cases />

        {/* 10. Ecossistema de Parceiros */}
        <Partners />

        {/* 11. Recursos e Conteúdo */}
        <Resources />

        {/* 12. Depoimentos */}
        <Testimonials />

        {/* 13. CTA Principal */}
        <CTA />

        {/* 14. Números da SOLIS */}
        <Numbers />
      </main>

      {/* 15. Footer */}
      <Footer />
    </div>
  )
}
