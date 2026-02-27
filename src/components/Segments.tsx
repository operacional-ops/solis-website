import React from 'react'
import { SEGMENTS } from '../utils/constants'

export default function Segments() {
  return (
    <section id="segments" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-badge">Segmentos</span>
          <h2 className="section-title mt-4">SOLUÇÕES ESPECIALIZADAS PARA SEU SEGMENTO</h2>
          <p className="section-subtitle">
            Expertise vertical com funcionalidades específicas para os desafios do seu mercado
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SEGMENTS.map((segment, index) => (
            <a
              key={segment.id}
              href={segment.href}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group flex flex-col items-center gap-4 p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 hover:shadow-lg transition-all duration-300 text-center no-underline"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {segment.icon}
              </span>
              <span className="font-semibold text-gray-800 group-hover:text-primary-500 transition-colors">
                {segment.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
