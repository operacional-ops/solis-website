import React, { useState } from 'react'
import { FUNCTIONAL_AREAS } from '../utils/constants'

export default function FunctionalAreas() {
  const [activeTab, setActiveTab] = useState(FUNCTIONAL_AREAS[0].id)
  const activeArea = FUNCTIONAL_AREAS.find((a) => a.id === activeTab)!

  return (
    <section id="areas" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-badge">Funcionalidades</span>
          <h2 className="section-title mt-4">TECNOLOGIA PARA CADA ÁREA DO SEU NEGÓCIO</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FUNCTIONAL_AREAS.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              className={`px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === area.id
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:text-primary-500 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              {area.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Features List */}
            <div className="p-10 border-r border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                {activeArea.name}
              </h3>
              <ul className="space-y-4">
                {activeArea.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={`/solutions#${activeArea.id}`}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors text-sm"
              >
                Saiba mais sobre {activeArea.name}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Visual */}
            <div className="p-10 bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-6">
                  {activeArea.id === 'financial' ? '💰' :
                   activeArea.id === 'people' ? '👥' :
                   activeArea.id === 'supply' ? '📦' :
                   activeArea.id === 'sales' ? '📈' :
                   activeArea.id === 'bi' ? '📊' : '🏭'}
                </div>
                <p className="text-gray-600 text-lg font-medium">{activeArea.name}</p>
                <p className="text-gray-500 text-sm mt-2">Módulo SOLIS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
