import React from 'react'
import { MAIN_SOLUTIONS } from '../utils/constants'

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-badge">Plataforma Completa</span>
          <h2 className="section-title mt-4">PLATAFORMA COMPLETA PARA TODA SUA OPERAÇÃO</h2>
          <p className="section-subtitle">
            Soluções integradas que conectam pessoas, processos e dados em um ecossistema inteligente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {MAIN_SOLUTIONS.map((solution, index) => (
            <div
              key={solution.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6"
                style={{ backgroundColor: `${solution.color}15` }}
              >
                {solution.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {solution.description}
              </p>
              <a
                href={solution.href}
                className="inline-flex items-center gap-1 font-semibold text-sm transition-colors"
                style={{ color: solution.color }}
              >
                {solution.cta}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-md hover:bg-primary-500 hover:text-white transition-all text-sm uppercase tracking-wide"
          >
            VER TODAS AS SOLUÇÕES
          </a>
        </div>
      </div>
    </section>
  )
}
