import React from 'react'
import { CLIENTS } from '../utils/constants'

export default function ClientsCarousel() {
  return (
    <section id="clients" className="py-12 bg-white border-b border-gray-100">
      <div className="container">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Empresas que lideram seus mercados escolhem a SOLIS
        </p>

        {/* Carrossel infinito via CSS */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-[scroll_30s_linear_infinite] w-max">
            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-12 px-6 flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 font-semibold text-sm hover:bg-primary-50 hover:text-primary-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
