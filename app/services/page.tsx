import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | SEO/GEO, AI Automation, AIDC, NLP',
  description:
    'Ronnel Besagre offers four core services: SEO/GEO Consulting, AI Automation, AIDC Expert Advisory, and NLP Coaching. Serving APAC clients from Johor Bahru, Malaysia.',
  alternates: { canonical: 'https://ronnelbesagre.com/services' },
}

const services = [
  {
    href: '/services/seo-geo-consulting',
    icon: '🔍',
    badge: 'Most Requested',
    badgeColor: '#00A8FF',
    title: 'SEO / GEO Consulting',
    description:
      'Rank in Google AND get cited by ChatGPT, Perplexity, Claude & Gemini. The complete visibility stack for 2026.',
    deliverables: [
      'GEO technical audit (AI crawler access, llms.txt, schemas)',
      'Keyword strategy + content citability optimization',
      'JSON-LD structured data implementation',
      'Monthly AI citation monitoring & reporting',
    ],
  },
  {
    href: '/services/ai-automation',
    icon: '🤖',
    badge: null,
    badgeColor: '#00FF9D',
    title: 'AI Automation',
    description:
      'Build intelligent n8n workflows, custom chatbots, voice AI agents, and LLM integrations to reduce operational costs by 70%+.',
    deliverables: [
      'n8n workflow design and deployment',
      'Custom chatbot + voice AI agent development',
      'Claude / GPT-4 / Gemini API integrations',
      'CRM + Google Sheets automation pipelines',
    ],
  },
  {
    href: '/services/aidc-expert',
    icon: '📡',
    badge: null,
    badgeColor: '#00A8FF',
    title: 'AIDC Expert – APAC Advisory',
    description:
      '24+ years of barcode, RFID, and ID card personalization expertise. Technical advisory for APAC deployments.',
    deliverables: [
      'Barcode and RFID system architecture review',
      'ID card personalization system consulting',
      'Vendor evaluation and RFP support',
      'APAC regional deployment planning',
    ],
  },
  {
    href: '/services/nlp-coaching',
    icon: '🧠',
    badge: 'Free Discovery Call',
    badgeColor: '#00FF9D',
    title: 'NLP Coaching',
    description:
      'Triple ABNLP certified (Master Coach, Master Practitioner, Practitioner). 1:1 and group NLP coaching for peak performance.',
    deliverables: [
      '1:1 NLP coaching sessions (90 min)',
      'Corporate NLP workshop facilitation',
      'Belief reprogramming and mindset coaching',
      'Team communication and leadership coaching',
    ],
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ronnel Besagre Services',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://ronnelbesagre.com${s.href}`,
    name: s.title,
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* HERO */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 700px 400px at 50% 0%, rgba(0,168,255,0.07) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div className="section-container relative z-10 text-center">
          <p className="label-tag mb-4">What I Do</p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5">
            Four Pillars of Expertise
          </h1>
          <p className="text-[#B0B8C8] max-w-2xl mx-auto text-base leading-relaxed">
            Each service is built on 24+ years of APAC technical expertise, applied to the challenges of 2026 — AI search visibility, automation, and personal peak performance.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding" aria-labelledby="services-heading">
        <div className="section-container">
          <h2 id="services-heading" className="sr-only">All Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <article
                key={service.href}
                className="glass-card p-7 flex flex-col group hover:border-white/12 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="text-3xl" aria-hidden="true">{service.icon}</div>
                  {service.badge && (
                    <span
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                      style={{ background: `${service.badgeColor}18`, color: service.badgeColor, border: `1px solid ${service.badgeColor}35` }}
                    >
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-syne font-bold text-xl text-white mb-3">{service.title}</h3>
                <p className="text-[#B0B8C8] text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 mb-7 flex-1">
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#B0B8C8]">
                      <span className="text-[#00FF9D] mt-0.5 shrink-0" aria-hidden="true">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                  style={{ color: service.badgeColor || '#00A8FF' }}
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-[#0D1429]" aria-labelledby="process-heading">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="label-tag mb-3">How It Works</p>
            <h2 id="process-heading" className="font-syne font-bold text-3xl text-white">
              Same Process, Every Service
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { num: '01', label: 'Free Audit', desc: 'Understand your current state' },
              { num: '02', label: 'Strategy', desc: 'Prioritized action roadmap' },
              { num: '03', label: 'Implement', desc: 'Execute with precision' },
              { num: '04', label: 'Monitor', desc: 'Track results and iterate' },
            ].map((step) => (
              <div key={step.num} className="glass-card p-5 text-center">
                <div className="font-syne font-bold text-3xl gradient-text mb-2">{step.num}</div>
                <div className="font-syne font-bold text-white text-sm mb-1">{step.label}</div>
                <div className="text-[#B0B8C8] text-xs">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" aria-labelledby="services-cta">
        <div className="section-container text-center">
          <h2 id="services-cta" className="font-syne font-bold text-3xl text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-[#B0B8C8] max-w-lg mx-auto mb-8">
            Start with a free AI Visibility Audit and I&apos;ll identify your highest-priority gaps across all four pillars.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-3 text-base">
            Get Free Audit
          </Link>
        </div>
      </section>
    </>
  )
}
