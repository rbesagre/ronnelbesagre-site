'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/geo-explained', label: 'GEO Explained' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0E27]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Ronnel Besagre - Home">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)' }}>
              <span className="font-syne font-bold text-[#0A0E27] text-sm">RB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-bold text-white text-sm leading-none">Ronnel Besagre</span>
              <span className="text-[#00A8FF] text-[10px] leading-none tracking-widest uppercase font-inter font-medium">GEO · AI · AIDC · NLP</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-inter text-[#B0B8C8] hover:text-white transition-colors rounded-md hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
            >
              Get Free Audit
            </Link>
            <button
              className="md:hidden p-2 text-[#B0B8C8] hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden glass-effect border-t border-white/5 pb-4">
            <ul className="flex flex-col gap-1 pt-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-2.5 text-sm text-[#B0B8C8] hover:text-white hover:bg-white/5 rounded-md transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 px-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-sm py-2.5"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Free Audit
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
