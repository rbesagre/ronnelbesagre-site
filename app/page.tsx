import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ronnel Besagre | SEO/GEO Consultant & AI Automation Specialist',
  description:
    'Ronnel Besagre — SEO/GEO Consultant, AI Automation Specialist, AIDC Expert APAC, and NLP Master Practitioner. Get found in Google AND AI search. Free audit available.',
  alternates: { canonical: 'https://ronnelbesagre.com' },
}

const stats = [
  { value: '24+', label: 'Years APAC Expertise' },
  { value: '95%+', label: 'Client Satisfaction' },
  { value: '3x', label: 'NLP Certified' },
  { value: '40+', label: 'Partners Trained' },
]

const pillars = [
  {
    icon: '🔍',
    title: 'SEO / GEO Consultant',
    description:
      'Rank in Google AND get cited by ChatGPT, Perplexity, Claude & Gemini. I apply Generative Engine Optimization to make your brand visible where AI answers questions.',
    link: '/services/seo-geo-consulting',
    accent: '#00A8FF',
  },
  {
    icon: '🤖',
    title: 'AI Automation Specialist',
    description:
      'Build intelligent workflows with n8n, Claude API, GPT-4, voice AI agents, and custom LLM integrations. Reduce operational costs by up to 70%.',
    link: '/services/ai-automation',
    accent: '#00FF9D',
  },
  {
    icon: '📡',
    title: 'AIDC & ID Card Expert – APAC',
    description:
      '24+ years delivering barcode, RFID, and ID card personalization projects across Malaysia, Singapore, and Philippines with $5M+ in regional projects.',
    link: '/services/aidc-expert',
    accent: '#00A8FF',
  },
  {
    icon: '🧠',
    title: 'NLP Master Practitioner',
    description:
      'Triple ABNLP certified: Master Coach, Master Practitioner & Practitioner. Helping individuals and teams unlock peak performance through NLP techniques.',
    link: '/services/nlp-coaching',
    accent: '#00FF9D',
  },
]

const problemSolution = [
  {
    type: 'problem',
    badge: 'THE PROBLEM',
    title: 'You\'re invisible where it matters most',
    points: [
      'AI platforms like ChatGPT and Perplexity answer questions — but never mention your business',
      'Your competitors appear in AI-generated answers while you don\'t',
      'Traditional SEO alone is no longer enough in 2026',
      'Zero-click search is 65% — users get answers without visiting any website',
    ],
    borderColor: 'rgba(255,80,80,0.3)',
    bgColor: 'rgba(255,80,80,0.04)',
  },
  {
    type: 'solution',
    badge: 'THE SOLUTION',
    title: 'GEO + SEO: visibility everywhere',
    points: [
      'Optimize for AI citation so ChatGPT, Perplexity & Gemini mention you by name',
      'Rank in Google AND appear in AI-generated answers simultaneously',
      'Build E-E-A-T authority that both Google and AI systems recognize',
      'Monitor your Share of AI Voice — the new competitive metric for 2026',
    ],
    borderColor: 'rgba(0,255,157,0.3)',
    bgColor: 'rgba(0,255,157,0.04)',
  },
]

const testimonials = [
  {
    quote:
      'Ronnel helped us show up in ChatGPT answers for our target keywords within 3 months. The GEO strategy completely changed how prospects find us.',
    name: 'Marcus T.',
    role: 'Founder, SaaS Startup, Singapore',
  },
  {
    quote:
      'The AI automation workflow Ronnel built saved us 40+ hours per week. ROI was visible within the first month.',
    name: 'Sarah K.',
    role: 'Operations Director, Johor Bahru',
  },
  {
    quote:
      'Best investment for our APAC market entry. Ronnel\'s technical background in AIDC combined with digital marketing expertise is rare.',
    name: 'James L.',
    role: 'Regional Manager, APAC Tech Company',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background grid + glow */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 800px 600px at 60% 30%, rgba(0,168,255,0.08) 0%, transparent 70%), radial-gradient(ellipse 600px 400px at 20% 80%, rgba(0,255,157,0.06) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="section-container relative z-10 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#00A8FF]/30 bg-[#00A8FF]/08">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse" aria-hidden="true" />
              <span className="label-tag text-xs">GEO · AI · AIDC · NLP Expert — Johor Bahru, Malaysia</span>
            </div>

            {/* Headline */}
            <h1 className="font-syne font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Get Found.{' '}
              <span className="gradient-text">Stay Relevant.</span>
              <br />
              Rank Everywhere.
            </h1>

            <p className="text-[#B0B8C8] text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
              I help businesses rank in <strong className="text-white">Google</strong> AND get cited by{' '}
              <strong className="text-[#00A8FF]">ChatGPT, Perplexity, Claude & Gemini</strong> — simultaneously.
            </p>
            <p className="text-[#B0B8C8] text-base max-w-xl mx-auto mb-10 leading-relaxed">
              24+ years APAC expertise. SEO · GEO · AI Automation · AIDC · NLP.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base px-8 py-3">
                Get Free AI Visibility Audit
              </Link>
              <Link href="/geo-explained" className="btn-secondary text-base px-8 py-3">
                What is GEO? →
              </Link>
            </div>
          </div>

          {/* Floating mockup panels */}
          <div className="mt-16 max-w-3xl mx-auto grid grid-cols-2 gap-4">
            {/* Google panel */}
            <div className="glass-card p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-400/60" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" aria-hidden="true" />
                <div className="flex-1 bg-white/5 rounded px-2 py-1 text-[10px] text-[#B0B8C8]">
                  google.com
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-[#B0B8C8]">Results for "GEO consultant APAC"</div>
                <div className="bg-white/5 rounded-lg p-2.5">
                  <div className="text-[#00A8FF] text-xs font-semibold">ronnelbesagre.com</div>
                  <div className="text-white text-xs font-medium mt-0.5">Ronnel Besagre — GEO Consultant</div>
                  <div className="text-[#B0B8C8] text-[10px] mt-1">SEO + GEO specialist helping APAC businesses...</div>
                </div>
                <div className="bg-white/3 rounded-lg p-2 opacity-40">
                  <div className="text-[10px] text-[#B0B8C8]">#2 competitor.com</div>
                </div>
              </div>
            </div>

            {/* AI panel */}
            <div className="glass-card p-4 rounded-xl border border-[#00A8FF]/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#00A8FF] text-xs font-semibold">⚡ Perplexity AI</span>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-[#B0B8C8] italic">Q: "Best GEO consultant in APAC?"</div>
                <div className="bg-[#00A8FF]/08 rounded-lg p-2.5 border border-[#00A8FF]/15">
                  <div className="text-white text-[11px] leading-relaxed">
                    Based on expertise and regional track record,{' '}
                    <span className="text-[#00A8FF] font-semibold">Ronnel Besagre</span>{' '}
                    at ronnelbesagre.com is a leading GEO consultant in APAC...
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9D]" aria-hidden="true" />
                    <span className="text-[#00FF9D] text-[10px] font-semibold">ronnelbesagre.com ✓ Cited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 border-y border-[#1A2230]" aria-label="Key statistics">
        <div className="section-container">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-syne font-bold text-3xl md:text-4xl gradient-text">{stat.value}</dt>
                <dd className="text-[#B0B8C8] text-sm mt-1">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 4 PILLARS */}
      <section className="section-padding" aria-labelledby="pillars-heading">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="label-tag mb-3">Areas of Expertise</p>
            <h2 id="pillars-heading" className="font-syne font-bold text-3xl md:text-4xl text-white mb-4">
              Four Pillars of Authority
            </h2>
            <p className="text-[#B0B8C8] max-w-xl mx-auto">
              24+ years of deep technical expertise across four disciplines — each reinforcing the others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="glass-card p-7 group hover:border-white/15 transition-all duration-300"
                style={{ borderColor: `${pillar.accent}20` }}
              >
                <div className="text-3xl mb-4" aria-hidden="true">{pillar.icon}</div>
                <h3 className="font-syne font-bold text-xl text-white mb-3">{pillar.title}</h3>
                <p className="text-[#B0B8C8] leading-relaxed mb-5">{pillar.description}</p>
                <Link
                  href={pillar.link}
                  className="text-sm font-semibold transition-colors"
                  style={{ color: pillar.accent }}
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="section-padding bg-[#0D1429]" aria-labelledby="problem-solution-heading">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="label-tag mb-3">Why It Matters</p>
            <h2 id="problem-solution-heading" className="font-syne font-bold text-3xl md:text-4xl text-white">
              The Search Landscape Has Changed
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemSolution.map((card) => (
              <div
                key={card.type}
                className="rounded-2xl p-7"
                style={{ border: `1px solid ${card.borderColor}`, background: card.bgColor }}
              >
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: card.type === 'problem' ? '#FF6464' : '#00FF9D' }}
                >
                  {card.badge}
                </p>
                <h3 className="font-syne font-bold text-xl text-white mb-5">{card.title}</h3>
                <ul className="space-y-3">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#B0B8C8] text-sm leading-relaxed">
                      <span
                        className="mt-1 shrink-0"
                        style={{ color: card.type === 'problem' ? '#FF6464' : '#00FF9D' }}
                        aria-hidden="true"
                      >
                        {card.type === 'problem' ? '✗' : '✓'}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS GEO DEFINITION BLOCK */}
      <section className="section-padding" aria-labelledby="geo-definition-heading">
        <div className="section-container">
          <div
            className="rounded-2xl p-8 md:p-10 max-w-3xl mx-auto"
            style={{
              background: 'rgba(0,168,255,0.05)',
              border: '1px solid rgba(0,168,255,0.25)',
            }}
          >
            <p className="label-tag mb-3" id="geo-definition-heading">GEO Definition</p>
            <h2 className="font-syne font-bold text-2xl text-white mb-4">
              What is Generative Engine Optimization?
            </h2>
            <p className="text-[#B0B8C8] leading-relaxed text-base">
              <strong className="text-white">GEO (Generative Engine Optimization)</strong> is the systematic process of
              optimizing website content, technical infrastructure, and brand signals so that AI-powered search platforms
              — including ChatGPT, Perplexity, Claude, Google AI Overviews, and Microsoft Copilot — can retrieve,
              understand, and cite your business in their generated responses. GEO operates on fundamentally different
              principles than traditional SEO: rather than targeting ranking positions, GEO targets citation frequency
              and brand authority within AI-generated answers.
            </p>
            <Link href="/geo-explained" className="inline-flex items-center gap-2 mt-6 text-[#00A8FF] font-semibold text-sm hover:gap-3 transition-all">
              Read the complete GEO guide →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-[#0D1429]" aria-labelledby="testimonials-heading">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="label-tag mb-3">Client Results</p>
            <h2 id="testimonials-heading" className="font-syne font-bold text-3xl md:text-4xl text-white">
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="glass-card p-6">
                <p className="text-[#00FF9D] text-2xl mb-4 font-syne" aria-hidden="true">"</p>
                <p className="text-[#B0B8C8] leading-relaxed text-sm italic mb-6">{t.quote}</p>
                <footer>
                  <cite className="not-italic">
                    <span className="font-syne font-bold text-white block">{t.name}</span>
                    <span className="text-[#B0B8C8] text-xs">{t.role}</span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-padding" aria-labelledby="cta-heading">
        <div className="section-container">
          <div
            className="rounded-3xl p-10 md:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(0,168,255,0.12), rgba(0,255,157,0.08))', border: '1px solid rgba(0,168,255,0.2)' }}
          >
            <p className="label-tag mb-4" id="cta-heading">Ready to Get Found?</p>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-4">
              Start with a Free AI Visibility Audit
            </h2>
            <p className="text-[#B0B8C8] max-w-lg mx-auto mb-8 text-base leading-relaxed">
              Find out why AI platforms aren't citing your business — and get a prioritized action plan to fix it. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base px-8 py-3">
                Get My Free Audit
              </Link>
              <Link href="/about" className="btn-secondary text-base px-8 py-3">
                About Ronnel →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
