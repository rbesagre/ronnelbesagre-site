import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/geo-explained', label: 'GEO Explained' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
]

const serviceLinks = [
  { href: '/services/seo-geo-consulting', label: 'SEO/GEO Consulting' },
  { href: '/services/ai-automation', label: 'AI Automation' },
  { href: '/services/aidc-expert', label: 'AIDC Expert – APAC' },
  { href: '/services/nlp-coaching', label: 'NLP Coaching' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1A2230] bg-[#0A0E27] overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 600px 300px at 50% 0%, rgba(0,168,255,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00A8FF, #00FF9D)' }}
              >
                <span className="font-syne font-bold text-[#0A0E27] text-sm">RB</span>
              </div>
              <span className="font-syne font-bold text-white text-sm">Ronnel Besagre</span>
            </Link>
            <p className="text-[#B0B8C8] text-sm leading-relaxed mb-5">
              Get Found. Stay Relevant. Rank Everywhere.
              <br />
              SEO · GEO · AI Automation · AIDC · NLP
            </p>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ronnelbesagredotcom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-[#1A2230] hover:border-[#00A8FF] hover:bg-[#00A8FF]/10 text-[#B0B8C8] hover:text-[#00A8FF] transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* GetOutLoop */}
              <a
                href="https://getoutloop.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GetOutLoop Agency"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-[#1A2230] hover:border-[#00FF9D] hover:bg-[#00FF9D]/10 text-[#B0B8C8] hover:text-[#00FF9D] transition-all duration-200 text-[10px] font-bold font-syne"
              >
                GL
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-syne font-semibold text-white text-sm mb-4 uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#B0B8C8] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-syne font-semibold text-white text-sm mb-4 uppercase tracking-widest">Services</h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#B0B8C8] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-syne font-semibold text-white text-sm mb-4 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href="mailto:rbesagre@gmail.com"
                  className="text-[#B0B8C8] hover:text-[#00A8FF] text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-[#00A8FF]">✉</span>
                  rbesagre@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+60174980981"
                  className="text-[#B0B8C8] hover:text-[#00A8FF] text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-[#00A8FF]">✆</span>
                  +60 174 980 981
                </a>
              </li>
              <li className="text-[#B0B8C8] text-sm flex items-start gap-2">
                <span className="text-[#00FF9D] mt-0.5">◎</span>
                <span>Johor Bahru, Malaysia<br />Serving APAC (MY · SG · PH)</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex btn-primary text-sm py-2 px-4 mt-5"
            >
              Get Free Audit
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A2230] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#B0B8C8] text-xs">
            © {new Date().getFullYear()} Ronnel Besagre. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy-policy" className="text-[#B0B8C8] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[#B0B8C8] hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-[#B0B8C8] flex items-center gap-1">
              <span className="text-[#00FF9D]">🔒</span> HTTPS Secured
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
