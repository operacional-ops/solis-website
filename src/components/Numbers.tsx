import React, { useState, useEffect, useRef } from 'react'
import { NUMBERS } from '../utils/constants'

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function NumberCard({ metric }: { metric: typeof NUMBERS[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const numericValue = typeof metric.value === 'number' ? metric.value : 0
  const count = useCountUp(numericValue, 2000, started)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center" data-aos="fade-up">
      <div className="text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
        {typeof metric.value === 'string'
          ? metric.value
          : `${metric.prefix}${count.toLocaleString('pt-BR')}${metric.suffix}`}
      </div>
      <div className="text-white/60 text-base">{metric.label}</div>
    </div>
  )
}

export default function Numbers() {
  return (
    <section id="numbers" className="py-24 bg-primary-700">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white">SOLIS EM NÚMEROS</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {NUMBERS.map((metric) => (
            <NumberCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  )
}
