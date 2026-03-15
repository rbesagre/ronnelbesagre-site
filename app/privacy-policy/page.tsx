import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ronnel Besagre',
  description: 'Privacy Policy for ronnelbesagre.com — how we collect and use data.',
  alternates: { canonical: 'https://ronnelbesagre.com/privacy-policy' },
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="section-container max-w-3xl">
        <h1 className="font-syne font-bold text-4xl text-white mb-4">Privacy Policy</h1>
        <p className="text-[#B0B8C8] text-sm mb-10"><time dateTime="2026-03-15">Last updated: March 15, 2026</time></p>

        <div className="space-y-8 text-[#B0B8C8] leading-relaxed">
          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">1. Information We Collect</h2>
            <p>When you submit the contact form on ronnelbesagre.com, we collect: your name, email address, company name, website URL, selected service interest, and message content. This information is used solely to respond to your inquiry and provide requested services.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">2. How We Use Your Information</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>To respond to your contact form submission</li>
              <li>To provide the AI Visibility Audit or other requested services</li>
              <li>To send service-related communications (with your consent)</li>
              <li>To improve our services based on feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">3. Data Storage</h2>
            <p>Contact form submissions are stored in a Google Sheets CRM accessible only to Ronnel Besagre. We do not sell, rent, or share your personal information with third parties except where required by law.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">4. Cookies</h2>
            <p>This website uses minimal cookies for basic site functionality. We do not use advertising cookies or tracking pixels. Analytics, if implemented, will use privacy-respecting tools.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">5. AI Crawlers</h2>
            <p>This website explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and others) to index its content as part of our GEO (Generative Engine Optimization) strategy. No personal user data is shared with AI platforms.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">6. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of any personal data we hold about you. Contact us at <a href="mailto:rbesagre@gmail.com" className="text-[#00A8FF] hover:underline">rbesagre@gmail.com</a> to exercise these rights.</p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">7. Contact</h2>
            <p>For privacy-related inquiries: <a href="mailto:rbesagre@gmail.com" className="text-[#00A8FF] hover:underline">rbesagre@gmail.com</a><br />Ronnel Besagre, Johor Bahru, Malaysia</p>
          </section>
        </div>
      </div>
    </div>
  )
}
