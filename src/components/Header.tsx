import React, { useState, useEffect } from 'react'
import { NAV_MENU } from '../utils/constants'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span
            className={`text-2xl font-heading font-bold tracking-tight ${
              isScrolled ? 'text-primary-500' : 'text-white'
            }`}
          >
            SOLIS
          </span>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_MENU.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              {/* Dropdown */}
              {activeDropdown === item.label && item.submenu && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {item.submenu.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            className={`px-5 py-2.5 text-sm font-semibold rounded-md border-2 transition-all ${
              isScrolled
                ? 'border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-primary-500'
            }`}
          >
            FALE COM ESPECIALISTA
          </button>
          <button className="px-5 py-2.5 text-sm font-semibold rounded-md bg-primary-500 text-white hover:bg-primary-700 transition-colors">
            ÁREA DO CLIENTE
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <div className={`w-5 h-0.5 mb-1 transition-all ${isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
          <div className={`w-5 h-0.5 mb-1 transition-all ${isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
          <div className={`w-5 h-0.5 transition-all ${isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container py-4">
            {NAV_MENU.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-gray-700 font-medium border-b border-gray-100 hover:text-primary-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <button className="w-full py-3 border-2 border-primary-500 text-primary-500 rounded-md font-semibold hover:bg-primary-500 hover:text-white transition-all">
                FALE COM ESPECIALISTA
              </button>
              <button className="w-full py-3 bg-primary-500 text-white rounded-md font-semibold hover:bg-primary-700 transition-colors">
                ÁREA DO CLIENTE
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
