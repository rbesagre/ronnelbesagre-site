import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ | SEO, GEO & AI Visibility Questions Answered',
  description:
    'Common questions about GEO, SEO, AI visibility, AI automation, and Ronnel Besagre\'s consulting services — answered clearly.',
  alternates: { canonical: 'https://ronnelbesagre.com/faq' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is GEO (Generative Engine Optimization)?', acceptedAnswer: { '@type': 'Answer', text: 'GEO is the practice of optimizing your website so that AI platforms like ChatGPT, Perplexity, and Google Gemini can retrieve, understand, and cite your business in their AI-generated responses.' } },
    { '@type': 'Question', name: 'What is the difference between SEO, GEO, and AEO?', acceptedAnswer: { '@type': 'Answer', text: 'SEO optimizes for Google blue-link results. GEO optimizes for AI citations in platforms like ChatGPT and Perplexity. AEO optimizes for featured snippets and position-zero results. All three are complementary.' } },
    { '@type': 'Question', name: 'How long does GEO take to show results?', acceptedAnswer: { '@type': 'Answer', text: 'Technical improvements show within 2-4 weeks. Consistent AI citations typically appear within 3-6 months. Full topical authority takes 6-12 months.' } },
    { '@type': 'Question', name: 'Does Ronnel Besagre serve clients outside Malaysia?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ronnel serves businesses across APAC including Malaysia, Singapore, Philippines, and beyond. All services are available remotely worldwide.' } },
    { '@type': 'Question', name: 'What is included in the free AI Visibility Audit?', acceptedAnswer: { '@type': 'Answer', text: 'The free audit includes: AI crawler access analysis, structured data assessment, E-E-A-T evaluation, content citability score, and a prioritized action plan. No credit card required.' } },
  ],
}

const faqs = [
  {
    category: 'About GEO',
    questions: [
      { q: 'What is GEO (Generative Engine Optimization)?', a: 'GEO is the practice of optimizing your website so AI platforms like ChatGPT, Perplexity, Claude, and Google Gemini can retrieve, understand, and cite your business in their AI-generated responses — rather than just Google blue-link rankings.' },
      { q: 'How is GEO different from SEO?', a: 'SEO targets Google\'s ranking algorithm. GEO targets AI citation systems — fundamentally different mechanisms. GEO requires additional signals: AI crawler access, entity clarity, llms.txt, and structured data that standard SEO tools don\'t address.' },
      { q: 'What AI platforms does GEO target?', a: 'ChatGPT (OpenAI), Perplexity AI, Claude (Anthropic), Google AI Overviews (Gemini), Microsoft Copilot (Bing), and Apple Intelligence.' },
      { q: 'What is Share of AI Voice?', a: 'Share of AI Voice (SAV) is a GEO metric measuring what percentage of relevant AI-generated responses mention your brand vs. competitors — the AI equivalent of Share of Voice in traditional marketing.' },
      { q: 'What is a good GEO score?', a: '65+ is a passing score with meaningful AI visibility. 80+ indicates strong AI search presence. Below 50 means significant discoverability gaps.' },
    ],
  },
  {
    category: 'Services',
    questions: [
      { q: 'What services does Ronnel Besagre offer?', a: 'Four core services: (1) SEO/GEO Consulting — rank in Google AND AI search. (2) AI Automation — n8n workflows, chatbots, voice AI agents. (3) AIDC Expert Advisory — barcode, RFID, ID card systems for APAC. (4) NLP Coaching — Triple ABNLP certified coaching for individuals and teams.' },
      { q: 'What is included in the free AI Visibility Audit?', a: 'The free audit covers: AI crawler access analysis (robots.txt review), structured data assessment, E-E-A-T signal evaluation, content citability score, brand mention check across AI platforms, and a prioritized action plan. No credit card required.' },
      { q: 'What is n8n?', a: 'n8n is an open-source workflow automation platform — similar to Zapier but more powerful and self-hostable. It connects 400+ apps and APIs with a visual drag-and-drop editor. Ronnel builds custom n8n workflows for APAC businesses.' },
      { q: 'Does Ronnel serve clients outside Malaysia?', a: 'Yes. Ronnel serves businesses across APAC including Malaysia, Singapore, Philippines, and beyond. All services are available remotely worldwide.' },
    ],
  },
  {
    category: 'Process & Timeline',
    questions: [
      { q: 'How long does GEO take to show results?', a: 'Technical improvements (AI crawler access, structured data) show within 2-4 weeks. Consistent AI citations appear within 3-6 months. Full topical authority typically takes 6-12 months.' },
      { q: 'How do you measure GEO success?', a: 'Through: citation frequency (how often AI platforms mention your brand), Share of AI Voice vs. competitors, referral traffic from AI platforms, and AI Visibility Score. Monthly GEO performance reports are included in ongoing engagements.' },
      { q: 'What is the process for working with Ronnel?', a: 'Step 1: Free audit to understand your current state. Step 2: Strategy session to prioritize action items. Step 3: Implementation of GEO technical fixes, content optimization, and schema markup. Step 4: Monthly monitoring and reporting.' },
    ],
  },
  {
    category: 'Pricing & Results',
    questions: [
      { q: 'Is the AI Visibility Audit really free?', a: 'Yes, completely free. No credit card, no commitment. I do this because it clearly demonstrates the GEO gaps — and once you see your score, the path forward is obvious.' },
      { q: 'What results can I expect from GEO optimization?', a: 'Based on typical client patterns: GEO Technical score improves from near-zero to 12+/15 within 2-4 weeks of technical implementation. AI citations begin appearing within 3-6 months. Combined SEO+GEO audit scores typically jump 20-35 points within 90 days of a full optimization sprint.' },
      { q: 'What kind of ROI does AI Automation deliver?', a: 'Most clients see 40-70% reduction in time spent on repetitive tasks within the first month. ROI typically becomes visible within 4-8 weeks of deployment.' },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10 text-center">
          <p className="label-tag mb-4">Got Questions?</p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-[#B0B8C8] max-w-xl mx-auto">
            Answers to common questions about GEO, SEO, AI automation, AIDC, NLP, and working with Ronnel Besagre.
          </p>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="faq-sections">
        <div className="section-container max-w-3xl">
          <h2 id="faq-sections" className="sr-only">All FAQ Categories</h2>
          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="font-syne font-bold text-xl text-[#00A8FF] mb-6 pb-2 border-b border-[#1A2230]">
                  {section.category}
                </h2>
                <dl className="space-y-6">
                  {section.questions.map(({ q, a }) => (
                    <div key={q} className="glass-card p-6">
                      <dt className="font-syne font-bold text-white mb-3">{q}</dt>
                      <dd className="text-[#B0B8C8] text-sm leading-relaxed">{a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0D1429]" aria-labelledby="faq-cta">
        <div className="section-container text-center">
          <h2 id="faq-cta" className="font-syne font-bold text-3xl text-white mb-4">Still Have Questions?</h2>
          <p className="text-[#B0B8C8] mb-8 max-w-md mx-auto">Reach out directly — I respond within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-3">Contact Ronnel</Link>
            <Link href="/geo-explained" className="btn-secondary px-8 py-3">Read GEO Guide →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
