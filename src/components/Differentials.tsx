import React from 'react'
import { DIFFERENTIALS } from '../utils/constants'

export default function Differentials() {
  return (
    <section id="differentials" className="py-24 bg-gray-950 text-white">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Nossos Diferenciais
          </span>
          <h2 className="text-4xl font-heading font-bold text-white">POR QUE ESCOLHER A SOLIS?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((diff, index) => (
            <div
              key={diff.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{diff.icon}</div>
              <div className="inline-block bg-primary-500/20 text-primary-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {diff.badge}
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-3">{diff.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
