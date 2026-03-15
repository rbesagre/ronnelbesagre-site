import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Ronnel Besagre',
  description: 'Terms of Service for ronnelbesagre.com and consulting services.',
  alternates: { canonical: 'https://ronnelbesagre.com/terms-of-service' },
  robots: { index: false },
}

export default function TermsOfServicePage() {
  return (
    <div className="pt-28 pb-20">
      <div className="section-container max-w-3xl">
        <h1 className="font-syne font-bold text-4xl text-white mb-4">Terms of Service</h1>
        <p className="text-[#B0B8C8] text-sm mb-10"><time dateTime="2026-03-15">Last updated: March 15, 2026</time></p>

        <div className="space-y-8 text-[#B0B8C8] leading-relaxed">
          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing ronnelbesagre.com or engaging Ronnel Besagre&apos;s consulting services, you agree to these terms. If you do not agree, please do not use this website or services.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">2. Services</h2>
            <p>Ronnel Besagre provides consulting services in SEO/GEO optimization, AI automation, AIDC advisory, and NLP coaching. Specific deliverables and timelines are agreed upon in individual project scopes prior to commencement.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">3. Free AI Visibility Audit</h2>
            <p>The free AI Visibility Audit is provided as a no-obligation service. Results are based on publicly available information and automated analysis. No guarantees are made regarding specific outcomes from implementing audit recommendations.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">4. Intellectual Property</h2>
            <p>All content on ronnelbesagre.com — including articles, guides, and educational material — is the intellectual property of Ronnel Besagre. You may share excerpts with attribution but may not reproduce content in full without written permission.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">5. Limitation of Liability</h2>
            <p>SEO and GEO results depend on many factors outside our control (search algorithm changes, competitor actions, market conditions). We do not guarantee specific ranking positions or citation frequencies. Our liability is limited to the fees paid for services rendered.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">6. Governing Law</h2>
            <p>These terms are governed by the laws of Malaysia. Any disputes shall be resolved in the courts of Johor Bahru, Malaysia.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">7. Contact</h2>
            <p>For terms-related inquiries: <a href="mailto:rbesagre@gmail.com" className="text-[#00A8FF] hover:underline">rbesagre@gmail.com</a></p>
          </section>
        </div>
      </div>
    </div>
  )
}
