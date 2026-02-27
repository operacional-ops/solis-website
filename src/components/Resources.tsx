import React from 'react'
import { RESOURCES } from '../utils/constants'

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-badge">Conteúdo</span>
          <h2 className="section-title mt-4">CONHECIMENTO QUE TRANSFORMA</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((resource, index) => (
            <a
              key={resource.id}
              href={resource.href}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300 text-center no-underline"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{resource.icon}</div>
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
              <span className="text-primary-500 font-semibold text-sm">
                {resource.type === 'blog' ? 'Acessar blog' :
                 resource.type === 'webinar' ? 'Inscrever-se' :
                 resource.type === 'ebook' ? 'Baixar grátis' : 'Acessar central'}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
