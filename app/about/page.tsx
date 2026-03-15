import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Ronnel Besagre | GEO & AI Automation Expert APAC',
  description:
    'Meet Ronnel Besagre — 24+ years APAC technology expertise, GEO pioneer, AI Automation Specialist, Triple NLP certified. Based in Johor Bahru, serving Malaysia, Singapore, Philippines.',
  alternates: { canonical: 'https://ronnelbesagre.com/about' },
}

const credentials = [
  {
    icon: '🧠',
    title: 'Triple NLP Certified',
    body: 'ABNLP Master Coach, Master Practitioner & Practitioner — certified by the American Board of NLP.',
  },
  {
    icon: '🤖',
    title: 'AI Automation Specialist',
    body: 'n8n, Claude API, GPT-4, Supabase, voice AI agents, custom LLM integrations. 70%+ operational cost reduction delivered.',
  },
  {
    icon: '🔍',
    title: 'GEO Pioneer',
    body: 'Early adopter of Generative Engine Optimization in APAC. Helping businesses get cited in ChatGPT, Perplexity & Gemini.',
  },
  {
    icon: '📡',
    title: 'AIDC & ID Card Expert',
    body: '$5M+ in regional projects across barcode, RFID, and ID card personalization systems across APAC.',
  },
  {
    icon: '🌏',
    title: 'APAC Regional Coverage',
    body: '24+ years delivering technical projects across Malaysia, Singapore, Philippines, and broader SEA markets.',
  },
  {
    icon: '⭐',
    title: '95%+ Client Satisfaction',
    body: 'Consistent CSAT maintained across 24+ years of client-facing technical and consulting work.',
  },
]

const timeline = [
  {
    period: '2025 – Present',
    role: 'GEO/SEO Consultant & AI Automation Specialist',
    org: 'Ronnel Besagre Consulting | GetOutLoop',
    location: 'Johor Bahru, Malaysia',
    color: '#00FF9D',
  },
  {
    period: '2024 – 2025',
    role: 'Project Management & Technical Manager APAC',
    org: 'Matica Group',
    location: 'APAC Region',
    color: '#00A8FF',
  },
  {
    period: '2019 – 2023',
    role: 'Technical Support Engineer – SEA',
    org: 'Matica Group',
    location: 'Singapore / SEA',
    color: '#00A8FF',
  },
  {
    period: '2014 – 2019',
    role: 'General Technical Manager',
    org: 'ALL ID Asia Pte Ltd',
    location: 'Singapore',
    color: '#00A8FF',
  },
  {
    period: '2008 – 2014',
    role: 'Technical Manager',
    org: 'Digital Scanning Corporation P/L',
    location: 'Singapore',
    color: '#00A8FF',
  },
  {
    period: '2000 – 2008',
    role: 'Technical Support Representative',
    org: 'Auto ID Philippines Inc',
    location: 'Manila, Philippines',
    color: '#B0B8C8',
  },
]

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://ronnelbesagre.com/#ronnel',
  name: 'Ronnel Besagre',
  url: 'https://ronnelbesagre.com/about',
  jobTitle: 'SEO/GEO Consultant & AI Automation Specialist',
  description:
    'Ronnel Besagre is a GEO pioneer and AI Automation Specialist with 24+ years of APAC technology expertise, specializing in SEO, Generative Engine Optimization, AI Automation, AIDC systems, and NLP coaching.',
  email: 'rbesagre@gmail.com',
  telephone: '+60174980981',
  address: { '@type': 'PostalAddress', addressLocality: 'Johor Bahru', addressCountry: 'MY' },
  knowsAbout: ['GEO', 'SEO', 'AI Automation', 'AIDC', 'RFID', 'ID Card Personalization', 'NLP Coaching', 'n8n'],
  sameAs: ['https://www.linkedin.com/in/ronnelbesagredotcom', 'https://getoutloop.com'],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* HERO */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 700px 500px at 50% 0%, rgba(0,168,255,0.07) 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="section-container relative z-10 text-center">
          <p className="label-tag mb-4">The Person Behind the Work</p>
          <h1 className="font-syne font-bold text-4xl md:text-6xl text-white mb-5 leading-tight">
            Ronnel Besagre
          </h1>
          <p className="font-syne text-lg text-[#00A8FF] mb-4">
            GEO/SEO Consultant · AI Automation Specialist · AIDC Expert · NLP Master Practitioner
          </p>
          <p className="text-[#B0B8C8] text-base max-w-2xl mx-auto leading-relaxed">
            24+ years building technical expertise across Asia-Pacific. Now applying that foundation to the future of
            search — helping businesses get found in both Google and AI search engines.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section-padding" aria-labelledby="story-heading">
        <div className="section-container max-w-3xl">
          <p className="label-tag mb-3">My Story</p>
          <h2 id="story-heading" className="font-syne font-bold text-3xl text-white mb-8">
            From Barcode Scanners to AI Citations
          </h2>
          <div className="space-y-5 text-[#B0B8C8] leading-relaxed text-base">
            <p>
              I spent 24 years building technical expertise across Asia-Pacific in AIDC technology — barcode systems,
              RFID, and ID card personalization. Through roles at Auto ID Philippines, Digital Scanning Corporation,
              ALL ID Asia, and Matica Group, I built a reputation for delivering complex technical projects across
              Malaysia, Singapore, Philippines, and broader APAC.
            </p>
            <p>
              In 2025, I made a decisive pivot into AI Automation — deploying smart chatbots, voice AI agents, n8n
              workflows, and custom LLM solutions for businesses. During this journey, I discovered a massive gap:
              businesses were obsessing over Google rankings while completely ignoring their visibility in AI search
              engines like ChatGPT, Perplexity, and Gemini.
            </p>
            <p>
              Today I combine traditional SEO with emerging GEO (Generative Engine Optimization) and AEO techniques,
              helping businesses get found not just in Google — but inside the AI conversations that are reshaping
              how customers discover solutions. I also run{' '}
              <a href="https://getoutloop.com" target="_blank" rel="noopener noreferrer" className="text-[#00A8FF] hover:underline">
                GetOutLoop
              </a>
              , my SEO+GEO agency serving APAC clients.
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section-padding bg-[#0D1429]" aria-labelledby="credentials-heading">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="label-tag mb-3">Credentials & Expertise</p>
            <h2 id="credentials-heading" className="font-syne font-bold text-3xl md:text-4xl text-white">
              What I Bring to the Table
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {credentials.map((cred) => (
              <div key={cred.title} className="glass-card p-6">
                <div className="text-2xl mb-3" aria-hidden="true">{cred.icon}</div>
                <h3 className="font-syne font-bold text-white text-base mb-2">{cred.title}</h3>
                <p className="text-[#B0B8C8] text-sm leading-relaxed">{cred.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="section-padding" aria-labelledby="timeline-heading">
        <div className="section-container max-w-3xl">
          <p className="label-tag mb-3">Career Journey</p>
          <h2 id="timeline-heading" className="font-syne font-bold text-3xl text-white mb-10">
            24+ Years Across APAC
          </h2>
          <ol className="relative pl-6" style={{ borderLeft: '2px solid #1A2230' }}>
            {timeline.map((item, i) => (
              <li key={i} className="mb-8 relative last:mb-0">
                <div
                  className="absolute -left-[25px] w-3 h-3 rounded-full border-2 border-[#0A0E27] top-1"
                  style={{ background: item.color }}
                  aria-hidden="true"
                />
                <time className="text-xs font-semibold tracking-wider uppercase" style={{ color: item.color }}>
                  {item.period}
                </time>
                <h3 className="font-syne font-bold text-white text-base mt-1">{item.role}</h3>
                <p className="text-[#B0B8C8] text-sm">{item.org} · {item.location}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* APAC COVERAGE */}
      <section className="section-padding bg-[#0D1429]" aria-labelledby="apac-heading">
        <div className="section-container text-center">
          <p className="label-tag mb-3">Geographic Coverage</p>
          <h2 id="apac-heading" className="font-syne font-bold text-3xl text-white mb-6">
            Serving APAC
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              { flag: '🇲🇾', label: 'Malaysia' },
              { flag: '🇸🇬', label: 'Singapore' },
              { flag: '🇵🇭', label: 'Philippines' },
              { flag: '🌏', label: 'Remote Worldwide' },
            ].map((loc) => (
              <div
                key={loc.label}
                className="glass-card px-5 py-2.5 rounded-full text-sm font-medium text-white flex items-center gap-2"
              >
                <span aria-hidden="true">{loc.flag}</span>
                {loc.label}
              </div>
            ))}
          </div>
          <p className="text-[#B0B8C8]">
            Based in Johor Bahru. Available onsite, hybrid, or remote.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" aria-labelledby="about-cta-heading">
        <div className="section-container">
          <div
            className="rounded-3xl p-10 md:p-14 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(0,168,255,0.10), rgba(0,255,157,0.07))',
              border: '1px solid rgba(0,168,255,0.2)',
            }}
          >
            <h2 id="about-cta-heading" className="font-syne font-bold text-3xl text-white mb-4">
              Work with Ronnel
            </h2>
            <p className="text-[#B0B8C8] max-w-lg mx-auto mb-8 leading-relaxed">
              Ready to get your business found in both Google and AI search? Start with a free AI Visibility Audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-3">
                Get Free Audit
              </Link>
              <a
                href="https://www.linkedin.com/in/ronnelbesagredotcom"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-3"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
