import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO/GEO Consulting | Rank in Google & AI Search',
  description:
    'Ronnel Besagre\'s SEO/GEO consulting service. Get cited by ChatGPT, Perplexity, Claude & Gemini while ranking in Google. Free AI Visibility Audit included.',
  alternates: { canonical: 'https://ronnelbesagre.com/services/seo-geo-consulting' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO/GEO Consulting',
  serviceType: 'Search Engine Optimization and Generative Engine Optimization',
  description:
    'Ronnel Besagre\'s SEO/GEO consulting service optimizes your content, technical infrastructure, and brand signals for both Google rankings and AI search citations in ChatGPT, Perplexity, Claude, and Gemini.',
  provider: { '@id': 'https://ronnelbesagre.com/#ronnel' },
  areaServed: [{ '@type': 'Country', name: 'Malaysia' }, { '@type': 'Country', name: 'Singapore' }, { '@type': 'Country', name: 'Philippines' }],
  url: 'https://ronnelbesagre.com/services/seo-geo-consulting',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is GEO different from SEO?',
      acceptedAnswer: { '@type': 'Answer', text: 'SEO targets Google\'s blue-link ranking algorithm. GEO targets AI citation systems — the underlying models that decide what to include in AI-generated answers from ChatGPT, Perplexity, and Google AI Overviews.' },
    },
    {
      '@type': 'Question',
      name: 'How long does GEO take to show results?',
      acceptedAnswer: { '@type': 'Answer', text: 'Technical improvements (structured data, robots.txt, llms.txt) show within 2-4 weeks. Consistent AI citations typically appear within 3-6 months. Full topical authority takes 6-12 months.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need GEO if my SEO is already strong?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Good SEO does not guarantee AI citations. GEO requires additional signals: AI crawler access, entity clarity, E-E-A-T author markup, and structured data that standard SEO tools don\'t check.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ronnelbesagre.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ronnelbesagre.com/services' },
    { '@type': 'ListItem', position: 3, name: 'SEO/GEO Consulting', item: 'https://ronnelbesagre.com/services/seo-geo-consulting' },
  ],
}

export default function SEOGEOConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
              <li className="text-[#00A8FF]">SEO/GEO Consulting</li>
            </ol>
          </nav>
          <p className="label-tag mb-4">Primary Service</p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5 max-w-3xl">
            SEO + GEO Consulting: Rank in Google AND AI Search
          </h1>
          <p className="text-[#B0B8C8] max-w-2xl text-base leading-relaxed mb-8">
            Most SEO agencies optimize for Google only. I optimize for both — combining traditional SEO with Generative Engine Optimization (GEO) to get your business ranked in Google and cited by ChatGPT, Perplexity, Claude, and Gemini.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-3">Get Free GEO Audit</Link>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section className="section-padding bg-[#0D1429]" aria-labelledby="what-heading">
        <div className="section-container max-w-3xl">
          <div
            className="rounded-2xl p-7"
            style={{ background: 'rgba(0,168,255,0.05)', border: '1px solid rgba(0,168,255,0.2)' }}
          >
            <p className="label-tag mb-3" id="what-heading">What is SEO/GEO Consulting?</p>
            <p className="text-[#B0B8C8] leading-relaxed">
              <strong className="text-white">SEO/GEO Consulting</strong> is a combined approach that simultaneously optimizes your digital presence for (1) Google's ranking algorithm and (2) AI language models' citation systems. Traditional SEO targets keyword rankings. GEO targets the AI systems behind ChatGPT, Perplexity, Google AI Overviews, and Microsoft Copilot — ensuring they cite your business when users ask relevant questions.
            </p>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="section-padding" aria-labelledby="deliverables-heading">
        <div className="section-container max-w-3xl">
          <p className="label-tag mb-3">What You Get</p>
          <h2 id="deliverables-heading" className="font-syne font-bold text-3xl text-white mb-8">
            Full Deliverables
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'GEO technical audit (AI crawler access, robots.txt, llms.txt)',
              'Structured data implementation (7+ JSON-LD schema types)',
              'On-page SEO optimization (titles, meta, headings)',
              'E-E-A-T content audit and improvement plan',
              'Citation-optimized content creation (definitions, FAQs, tables)',
              'Keyword research and content gap analysis',
              'Monthly AI citation tracking report (ChatGPT, Perplexity, Claude, Gemini)',
              'Google Search Console setup and sitemap submission',
            ].map((item, i) => (
              <div key={i} className="glass-card p-4 flex items-start gap-3">
                <span className="text-[#00FF9D] mt-0.5 shrink-0" aria-hidden="true">✓</span>
                <span className="text-[#B0B8C8] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#0D1429]" aria-labelledby="faq-heading">
        <div className="section-container max-w-3xl">
          <h2 id="faq-heading" className="font-syne font-bold text-2xl text-white mb-7">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {[
              {
                q: 'How is GEO different from SEO?',
                a: 'SEO targets Google\'s blue-link ranking algorithm. GEO targets AI citation systems — the underlying models that decide what to include in AI-generated answers from ChatGPT, Perplexity, and Google AI Overviews.',
              },
              {
                q: 'How long does GEO take to show results?',
                a: 'Technical improvements (structured data, robots.txt, llms.txt) show within 2-4 weeks. Consistent AI citations typically appear within 3-6 months. Full topical authority takes 6-12 months.',
              },
              {
                q: 'Do I need GEO if my SEO is already strong?',
                a: 'Yes. Good SEO does not guarantee AI citations. GEO requires additional signals: AI crawler access, entity clarity, E-E-A-T author markup, and structured data that standard SEO tools don\'t check.',
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <dt className="font-syne font-semibold text-white mb-2">{q}</dt>
                <dd className="text-[#B0B8C8] text-sm leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="svc-cta">
        <div className="section-container text-center">
          <h2 id="svc-cta" className="font-syne font-bold text-3xl text-white mb-4">Start with a Free Audit</h2>
          <p className="text-[#B0B8C8] mb-8 max-w-md mx-auto">Get a clear picture of your current AI visibility gaps and a prioritized action plan — no credit card required.</p>
          <Link href="/contact" className="btn-primary px-8 py-3">Get Free Audit</Link>
        </div>
      </section>
    </>
  )
}
