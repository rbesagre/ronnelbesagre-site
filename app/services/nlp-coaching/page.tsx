import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NLP Coaching | Triple ABNLP Certified Master Coach',
  description:
    'Ronnel Besagre — Triple ABNLP Certified NLP Master Coach, Master Practitioner & Practitioner. 1:1 and corporate NLP coaching for peak performance, mindset, and communication.',
  alternates: { canonical: 'https://ronnelbesagre.com/services/nlp-coaching' },
}

export default function NLPCoachingPage() {
  return (
    <>
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-[#B0B8C8]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#00FF9D]">NLP Coaching</li>
            </ol>
          </nav>
          <p className="label-tag mb-4" style={{ color: '#00FF9D' }}>Triple ABNLP Certified</p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5 max-w-3xl">
            NLP Coaching: Unlock Peak Performance Through Neuro-Linguistic Programming
          </h1>
          <p className="text-[#B0B8C8] max-w-2xl text-base leading-relaxed mb-8">
            As a Triple ABNLP Certified NLP Master Coach, Master Practitioner & Practitioner, I help individuals and corporate teams break limiting beliefs, improve communication, and perform at their highest potential using evidence-based NLP techniques.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-3">Book a Free Discovery Call</Link>
        </div>
      </section>

      <section className="section-padding bg-[#0D1429]" aria-labelledby="credentials-heading">
        <div className="section-container max-w-3xl">
          <h2 id="credentials-heading" className="font-syne font-bold text-3xl text-white mb-8">Credentials</h2>
          <div className="space-y-4">
            {[
              { cert: 'ABNLP Master Coach Certification', body: 'American Board of NLP (ABNLP)', desc: 'The highest coaching designation from ABNLP — qualifying to coach individuals and teams at an advanced level using NLP frameworks.' },
              { cert: 'ABNLP Master NLP Practitioner Certification', body: 'American Board of NLP (ABNLP)', desc: 'Advanced NLP techniques including complex change work, advanced communication patterns, and deep NLP modeling skills.' },
              { cert: 'ABNLP NLP Practitioner Certification', body: 'American Board of NLP (ABNLP)', desc: 'Foundation NLP certification covering rapport, representational systems, anchoring, and core NLP principles.' },
            ].map((item) => (
              <div key={item.cert} className="glass-card p-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#00FF9D] text-lg shrink-0 mt-0.5" aria-hidden="true">🏆</span>
                  <div>
                    <h3 className="font-syne font-bold text-white mb-1">{item.cert}</h3>
                    <p className="text-[#00FF9D] text-xs mb-2">{item.body}</p>
                    <p className="text-[#B0B8C8] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="nlp-services">
        <div className="section-container max-w-3xl">
          <h2 id="nlp-services" className="font-syne font-bold text-3xl text-white mb-8">Coaching Offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: '👤', title: '1:1 NLP Coaching', desc: 'Personalized 90-minute sessions targeting specific outcomes: confidence, communication, goal achievement, or overcoming limiting beliefs.' },
              { icon: '🏢', title: 'Corporate Workshop', desc: 'Group NLP facilitation for teams — improving communication, leadership presence, team dynamics, and resilience.' },
              { icon: '🧩', title: 'Belief Reprogramming', desc: 'Targeted sessions to identify and neutralize limiting beliefs that are blocking personal or professional growth.' },
              { icon: '🎯', title: 'Goal Setting & Motivation', desc: 'NLP-based outcome setting using Well-Formed Conditions — creating compelling futures with clear action pathways.' },
            ].map((item) => (
              <div key={item.title} className="glass-card p-5">
                <div className="text-2xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-syne font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-[#B0B8C8] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary px-8 py-3">Book Discovery Call</Link>
          </div>
        </div>
      </section>
    </>
  )
}
