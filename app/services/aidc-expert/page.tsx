import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AIDC Expert APAC | Barcode, RFID & ID Card Systems Advisory',
  description:
    'Ronnel Besagre — 24+ years AIDC expertise across Malaysia, Singapore, Philippines. Barcode, RFID, and ID card personalization system advisory for APAC enterprises.',
  alternates: { canonical: 'https://ronnelbesagre.com/services/aidc-expert' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AIDC technology?',
      acceptedAnswer: { '@type': 'Answer', text: 'AIDC (Automatic Identification and Data Capture) is a category of technologies used to automatically identify objects and collect data without manual input. It includes barcodes, RFID, smart cards, biometrics, and ID card personalization systems — widely used in retail, logistics, healthcare, and government ID programs.' },
    },
    {
      '@type': 'Question',
      name: 'What AIDC services does Ronnel Besagre offer?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ronnel offers advisory for barcode system design (1D/2D), RFID architecture (UHF/HF/LF), ID card personalization (Matica, Zebra), APAC vendor evaluation, and technical support for multi-country deployments across Malaysia, Singapore, and Philippines.' },
    },
    {
      '@type': 'Question',
      name: 'Which APAC markets does Ronnel Besagre serve for AIDC projects?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ronnel has 24+ years of hands-on AIDC project experience across Malaysia, Singapore, Philippines, and broader Southeast Asia. He has delivered technical projects for enterprises in all three markets and supports remote engagements worldwide.' },
    },
  ],
}

export default function AIDCExpertPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-[#B0B8C8]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#00A8FF]">AIDC Expert – APAC</li>
            </ol>
          </nav>
          <p className="label-tag mb-4">24+ Years APAC Expertise</p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5 max-w-3xl">
            AIDC Expert – APAC: Barcode, RFID & ID Card Advisory
          </h1>
          <p className="text-[#B0B8C8] max-w-2xl text-base leading-relaxed mb-8">
            With 24+ years delivering AIDC (Automatic Identification and Data Capture) technology projects across Asia-Pacific, I provide expert advisory for barcode, RFID, and ID card personalization deployments in Malaysia, Singapore, Philippines, and broader SEA markets.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-3">Request Advisory Consultation</Link>
        </div>
      </section>

      <section className="section-padding bg-[#0D1429]" aria-labelledby="aidc-expertise">
        <div className="section-container max-w-3xl">
          <p className="label-tag mb-3">Areas of Expertise</p>
          <h2 id="aidc-expertise" className="font-syne font-bold text-3xl text-white mb-8">Technical Domains</h2>
          <div className="space-y-4">
            {[
              { title: 'Barcode Systems', desc: '1D/2D barcode design, printing solutions, handheld scanner integration, POS barcode systems, and GS1 compliance advisory across retail, logistics, and healthcare sectors.' },
              { title: 'RFID Technology', desc: 'RFID system architecture (UHF, HF, LF), reader integration, middleware design, and deployment planning for warehousing, asset tracking, and access control.' },
              { title: 'ID Card Personalization', desc: 'Matica and Zebra card printer configuration, secure card issuance systems, government ID card projects, corporate ID programs, and consumables management.' },
              { title: 'APAC Vendor Network', desc: 'Deep relationships with major AIDC vendors across APAC. Vendor-neutral evaluation to find the right solution for your requirements and budget.' },
              { title: 'Regional Deployment Support', desc: 'Hands-on technical expertise for multi-country APAC rollouts — having personally delivered projects in Malaysia, Singapore, Philippines, and SEA.' },
            ].map((item) => (
              <div key={item.title} className="glass-card p-5">
                <h3 className="font-syne font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-[#00A8FF]" aria-hidden="true">◈</span>
                  {item.title}
                </h3>
                <p className="text-[#B0B8C8] text-sm leading-relaxed pl-5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="aidc-track-record">
        <div className="section-container max-w-3xl text-center">
          <h2 id="aidc-track-record" className="font-syne font-bold text-3xl text-white mb-8">Track Record</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: '24+', label: 'Years APAC AIDC Experience' },
              { value: '$5M+', label: 'Regional Projects Contributed' },
              { value: '40+', label: 'Partners & Accounts Trained' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6">
                <div className="font-syne font-bold text-3xl gradient-text mb-2">{stat.value}</div>
                <div className="text-[#B0B8C8] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary px-8 py-3">Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0D1429]" aria-labelledby="aidc-faq">
        <div className="section-container max-w-3xl">
          <h2 id="aidc-faq" className="font-syne font-bold text-2xl text-white mb-7">Frequently Asked Questions</h2>
          <dl className="space-y-6">
            {[
              { q: 'What is AIDC technology?', a: 'AIDC (Automatic Identification and Data Capture) is a category of technologies used to automatically identify objects and collect data without manual input. It includes barcodes, RFID, smart cards, biometrics, and ID card personalization systems — widely used in retail, logistics, healthcare, and government ID programs.' },
              { q: 'What AIDC services do you offer?', a: 'I provide advisory for barcode system design (1D/2D), RFID architecture (UHF/HF/LF), ID card personalization (Matica, Zebra), APAC vendor evaluation, and technical support for multi-country deployments across Malaysia, Singapore, and Philippines.' },
              { q: 'Which APAC markets do you serve for AIDC projects?', a: 'I have 24+ years of hands-on AIDC project experience across Malaysia, Singapore, Philippines, and broader Southeast Asia. I have delivered technical projects for enterprises in all three markets and support remote engagements worldwide.' },
            ].map(({ q, a }) => (
              <div key={q}>
                <dt className="font-syne font-semibold text-white mb-2">{q}</dt>
                <dd className="text-[#B0B8C8] text-sm leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
