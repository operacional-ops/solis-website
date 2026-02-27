import React, { useState } from 'react'
import { CASES } from '../utils/constants'

export default function Cases() {
  const [current, setCurrent] = useState(0)
  const visible = 3
  const total = CASES.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <section id="cases" className="py-24 bg-gray-50">
      <div className="container">
        <div className="flex items-end justify-between mb-16">
          <div data-aos="fade-right">
            <span className="section-badge">Cases de Sucesso</span>
            <h2 className="section-title mt-4">HISTÓRIAS DE TRANSFORMAÇÃO</h2>
            <p className="text-gray-600 max-w-lg">
              Veja como empresas de diferentes segmentos alcançaram resultados extraordinários com a SOLIS
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CASES.map((c, index) => (
            <div
              key={c.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="h-40 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-heading font-bold">{c.company}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-primary-50 text-primary-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {c.segment}
                </span>
                <h3 className="text-base font-semibold text-gray-900 mb-4 leading-snug">
                  {c.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-semibold text-green-600">{c.result}</span>
                </div>
                <a
                  href={c.href}
                  className="inline-flex items-center gap-1 text-primary-500 font-semibold text-sm hover:gap-2 transition-all"
                >
                  Ler case completo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/cases"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-md hover:bg-primary-500 hover:text-white transition-all text-sm uppercase tracking-wide"
          >
            VER TODOS OS CASES
          </a>
        </div>
      </div>
    </section>
  )
}
