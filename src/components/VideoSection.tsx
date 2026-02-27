import React from 'react'

export default function VideoSection() {
  return (
    <section id="video" className="py-24 bg-gray-950 text-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div data-aos="fade-right">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Tecnologia Brasileira
            </span>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              TECNOLOGIA BRASILEIRA QUE TRANSFORMA NEGÓCIOS
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              A SOLIS nasceu da visão de democratizar a tecnologia empresarial no Brasil. Hoje, somos referência em inovação, conectando milhares de empresas à transformação digital com soluções inteligentes, seguras e desenvolvidas para a realidade brasileira.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Estamos presentes em todos os estados do país, atendendo desde startups até grandes corporações. Nossas soluções integram gestão, inteligência artificial, analytics e cloud computing para entregar resultados reais.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors text-sm uppercase tracking-wide"
            >
              CONHEÇA NOSSA HISTÓRIA
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Vídeo Thumbnail */}
          <div data-aos="fade-left" className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 aspect-video shadow-2xl">
              {/* Placeholder do vídeo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-lg font-semibold">Vídeo Institucional SOLIS</p>
                  <p className="text-sm text-white/70 mt-2">Clique para assistir</p>
                </div>
              </div>

              {/* Play Button */}
              <button
                className="absolute inset-0 flex items-center justify-center group"
                onClick={() => window.open('https://youtube.com', '_blank')}
                aria-label="Reproduzir vídeo"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 group-hover:scale-110 group-hover:bg-white/30 transition-all">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-bold text-primary-500">15.000+</div>
              <div className="text-sm text-gray-600">Empresas atendidas</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-primary-500 rounded-xl p-4 shadow-xl text-white">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm text-white/80">Anos de mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
