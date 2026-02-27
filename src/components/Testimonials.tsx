import React, { useState, useEffect } from 'react'
import { TESTIMONIALS } from '../utils/constants'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const testimonial = TESTIMONIALS[current]

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-badge">Depoimentos</span>
          <h2 className="section-title mt-4">O QUE NOSSOS CLIENTES DIZEM</h2>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 text-center" data-aos="fade-up">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
            "{testimonial.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
              {testimonial.avatar}
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.position}</div>
              <div className="text-sm text-primary-500 font-medium">{testimonial.company}</div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                index === current ? 'w-8 bg-primary-500' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
