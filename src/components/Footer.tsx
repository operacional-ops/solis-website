import React from 'react'
import { FOOTER_COLUMNS } from '../utils/constants'

const SOCIAL_LINKS = [
  { platform: 'LinkedIn', icon: 'in', href: 'https://linkedin.com/company/solis' },
  { platform: 'Instagram', icon: '📷', href: 'https://instagram.com/solis' },
  { platform: 'YouTube', icon: '▶️', href: 'https://youtube.com/@solis' },
  { platform: 'Facebook', icon: 'f', href: 'https://facebook.com/solis' },
  { platform: 'X (Twitter)', icon: '𝕏', href: 'https://x.com/solis' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-2xl font-heading font-bold text-white">SOLIS</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Tecnologia empresarial que transforma negócios
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-primary-500 hover:text-white transition-all text-sm font-bold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm">
            WhatsApp: <a href="https://wa.me/5511987654321" className="text-white/60 hover:text-white transition-colors">(11) 98765-4321</a>
          </div>
          <div className="text-white/40 text-sm">
            E-mail: <a href="mailto:contato@solis.com.br" className="text-white/60 hover:text-white transition-colors">contato@solis.com.br</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 SOLIS Tecnologia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {[
              { label: 'Política de Privacidade', href: '/privacy' },
              { label: 'Termos de Uso', href: '/terms' },
              { label: 'LGPD', href: '/lgpd' },
              { label: 'Cookies', href: '/cookies' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/30 text-xs hover:text-white/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
