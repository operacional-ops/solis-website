import React, { useState } from 'react'
import { SEGMENTS } from '../utils/constants'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    segment: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você integra com seu backend ou CRM
    console.log('Form data:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-primary-700 via-primary-500 to-secondary-500">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div data-aos="fade-right" className="text-white">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              PRONTO PARA TRANSFORMAR SEU NEGÓCIO?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Fale com nossos especialistas e descubra como a SOLIS pode impulsionar seus resultados
            </p>
            <div className="space-y-4">
              {[
                '✅ Consultoria gratuita com especialista',
                '✅ Demo personalizada para seu segmento',
                '✅ Proposta sem compromisso',
                '✅ Implementação em até 90 dias',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/90">
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">
                Fale com um especialista
              </h3>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Mensagem enviada!</h4>
                  <p className="text-gray-600">Em breve um especialista entrará em contato.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Empresa *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Sua empresa"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail corporativo *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@empresa.com.br"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Segmento *</label>
                    <select
                      name="segment"
                      required
                      value={formData.segment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 text-sm text-gray-700"
                    >
                      <option value="">Selecione seu segmento</option>
                      {SEGMENTS.map((s) => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors text-sm uppercase tracking-wide"
                  >
                    QUERO FALAR COM UM ESPECIALISTA
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Ao enviar, você concorda com nossa{' '}
                    <a href="/privacy" className="text-primary-500 hover:underline">Política de Privacidade</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
