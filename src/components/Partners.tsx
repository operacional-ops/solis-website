import React from 'react'
import { PARTNERS } from '../utils/constants'

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-badge">Ecossistema</span>
          <h2 className="section-title mt-4">CRESÇA COM NOSSO ECOSSISTEMA</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PARTNERS.map((partner, index) => (
            <div
              key={partner.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all"
            >
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                {partner.title}
              </h3>
              <p className="text-gray-600 mb-6">{partner.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {partner.logos.map((logo) => (
                  <span
                    key={logo}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-600"
                  >
                    {logo}
                  </span>
                ))}
              </div>
              <a
                href={partner.cta.href}
                className="inline-flex items-center gap-1 text-primary-500 font-semibold text-sm hover:gap-2 transition-all"
              >
                {partner.cta.text}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
