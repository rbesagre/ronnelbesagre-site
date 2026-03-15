import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What is GEO? Complete Guide to Generative Engine Optimization 2026',
  description:
    'GEO (Generative Engine Optimization) explained — what it is, how AI systems cite content, GEO vs SEO vs AEO comparison, and 8-step implementation guide for 2026.',
  alternates: { canonical: 'https://ronnelbesagre.com/geo-explained' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is GEO optimization?', acceptedAnswer: { '@type': 'Answer', text: 'GEO optimization is the process of structuring your content, technical setup, and brand presence so that AI platforms like ChatGPT, Perplexity, and Google Gemini retrieve and cite your business in their generated responses.' } },
    { '@type': 'Question', name: 'How is GEO different from SEO?', acceptedAnswer: { '@type': 'Answer', text: 'SEO targets Google\'s blue-link ranking algorithm. GEO targets AI citation systems — the underlying models that decide what to include in AI-generated answers.' } },
    { '@type': 'Question', name: 'What is llms.txt?', acceptedAnswer: { '@type': 'Answer', text: 'llms.txt is an emerging standard file placed at yourdomain.com/llms.txt that provides AI systems with a structured navigation guide for your website — similar to sitemap.xml but designed for LLM comprehension.' } },
    { '@type': 'Question', name: 'How long does GEO take to work?', acceptedAnswer: { '@type': 'Answer', text: 'Basic technical improvements show within 2-4 weeks. Consistent AI citations typically appear within 3-6 months. Full topical authority typically requires 6-12 months.' } },
    { '@type': 'Question', name: 'What AI platforms does GEO target?', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPT (OpenAI), Perplexity AI, Claude (Anthropic), Google AI Overviews (Gemini), Microsoft Copilot (Bing), and Apple Intelligence.' } },
    { '@type': 'Question', name: 'What is Share of AI Voice?', acceptedAnswer: { '@type': 'Answer', text: 'Share of AI Voice (SAV) is a GEO metric measuring what percentage of relevant AI-generated responses mention your brand vs. competitors — the AI equivalent of Share of Voice in traditional marketing.' } },
    { '@type': 'Question', name: 'What is a good GEO score?', acceptedAnswer: { '@type': 'Answer', text: 'Using standard GEO audit frameworks, 65+ is considered a passing score with meaningful AI visibility. 80+ indicates strong AI search presence. Below 50 means significant gaps in AI discoverability.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is GEO? The Complete Guide to Generative Engine Optimization (2026)',
  description: 'Complete guide to GEO: what it is, how AI systems cite content, and how to optimize for ChatGPT, Perplexity, Claude & Google AI Overviews.',
  datePublished: '2026-03-15',
  dateModified: '2026-03-15',
  author: { '@type': 'Person', '@id': 'https://ronnelbesagre.com/#ronnel', name: 'Ronnel Besagre', url: 'https://ronnelbesagre.com/about' },
  publisher: { '@type': 'Person', '@id': 'https://ronnelbesagre.com/#ronnel' },
  url: 'https://ronnelbesagre.com/geo-explained',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ronnelbesagre.com/geo-explained' },
  keywords: ['GEO', 'Generative Engine Optimization', 'AI search', 'AI visibility', 'ChatGPT ranking'],
}

const geoVsTable = [
  { dim: 'What it targets', seo: 'Google blue-link rankings', geo: 'AI citation in LLM responses', aeo: 'Featured snippets / answer boxes' },
  { dim: 'Primary goal', seo: 'Traffic from organic rankings', geo: 'Brand mentions in AI answers', aeo: 'Position-zero / voice answers' },
  { dim: 'Key signals', seo: 'Backlinks, keywords, authority', geo: 'E-E-A-T, content density, entity clarity', aeo: 'Question-answer structure, structured data' },
  { dim: 'Key platforms', seo: 'Google, Bing', geo: 'ChatGPT, Perplexity, Claude, Gemini', aeo: 'Google, Siri, Alexa, voice search' },
  { dim: 'Timeframe', seo: '3–6 months', geo: '3–9 months', aeo: '4–8 weeks for snippets' },
  { dim: 'Best metric', seo: 'Organic traffic, keyword rankings', geo: 'AI citation frequency, Share of AI Voice', aeo: 'Featured snippet capture rate' },
]

const geoStats = [
  { stat: '26%', desc: 'of Google searches now show AI Overviews above the fold' },
  { stat: '100M+', desc: 'weekly ChatGPT users asking purchasing-intent questions' },
  { stat: '10M+', desc: 'daily Perplexity queries — most without clicking any result' },
  { stat: '3–5x', desc: 'more inbound for businesses cited in AI search vs those that don\'t appear' },
  { stat: '65%', desc: 'zero-click search rate — users get answers without visiting your site' },
]

const geoSteps = [
  { num: '01', title: 'Audit AI Crawler Access', desc: 'Check robots.txt. Ensure GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and Bingbot are allowed to crawl your entire site.' },
  { num: '02', title: 'Create llms.txt', desc: 'Build a structured content map at yourdomain.com/llms.txt. List your key pages, services, and educational resources with clear descriptions for AI systems.' },
  { num: '03', title: 'Implement JSON-LD Schemas', desc: 'Add Organization/Person, FAQPage, Article, Service, and BreadcrumbList schemas. This helps AI systems identify entities and extract key facts reliably.' },
  { num: '04', title: 'Optimize E-E-A-T Signals', desc: 'Add author bios, credentials, publication dates, and citations. Both Google and AI systems prefer content from verifiable, credentialed experts.' },
  { num: '05', title: 'Create Citation-Optimized Content', desc: 'Write definition blocks, comparison tables, numbered lists, and answer-format sections. AI systems prefer high information density per sentence.' },
  { num: '06', title: 'Build Brand Authority', desc: 'Get cited in directories, industry publications, and social platforms. The more your brand is mentioned on authoritative external sites, the more confident AI systems are in citing you.' },
  { num: '07', title: 'Monitor AI Citations', desc: 'Test manually in ChatGPT, Perplexity, Claude, and Gemini. Track your Share of AI Voice monthly using tools like Peec AI or Promptmonitor.' },
  { num: '08', title: 'Measure & Iterate', desc: 'Update content quarterly. AI systems favor recently updated content with visible dateModified signals. Continuous iteration compounds your GEO authority over time.' },
]

const faqs = [
  { q: 'What is GEO optimization?', a: 'GEO optimization is the process of structuring your content, technical setup, and brand presence so that AI platforms like ChatGPT, Perplexity, and Google Gemini retrieve and cite your business in their generated responses.' },
  { q: 'How is GEO different from SEO?', a: 'SEO targets Google\'s blue-link ranking algorithm. GEO targets AI citation systems — the underlying models that decide what to include in AI-generated answers.' },
  { q: 'What is llms.txt?', a: 'llms.txt is an emerging standard file placed at yourdomain.com/llms.txt that provides AI systems with a structured navigation guide for your website — similar to sitemap.xml but designed for LLM comprehension.' },
  { q: 'How long does GEO take to work?', a: 'Basic technical improvements show within 2-4 weeks. Consistent AI citations typically appear within 3-6 months. Full topical authority typically requires 6-12 months.' },
  { q: 'What AI platforms does GEO target?', a: 'ChatGPT (OpenAI), Perplexity AI, Claude (Anthropic), Google AI Overviews (Gemini), Microsoft Copilot (Bing), and Apple Intelligence.' },
  { q: 'Do I need GEO if my SEO is already good?', a: 'Yes. Good SEO does not guarantee AI citations. GEO requires additional signals: AI crawler access, entity clarity, E-E-A-T author markup, and structured data that standard SEO tools don\'t check.' },
  { q: 'What is Share of AI Voice?', a: 'Share of AI Voice (SAV) is a GEO metric measuring what percentage of relevant AI-generated responses mention your brand vs. competitors — the AI equivalent of Share of Voice in traditional marketing.' },
  { q: 'What is a good GEO score?', a: 'Using standard GEO audit frameworks, 65+ is considered a passing score with meaningful AI visibility. 80+ indicates strong AI search presence. Below 50 means significant gaps in AI discoverability.' },
]

export default function GEOExplainedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* HERO */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10 max-w-3xl">
          <div className="flex flex-wrap gap-3 mb-6 text-xs text-[#B0B8C8]">
            <span className="glass-card px-3 py-1 rounded-full">15 min read</span>
            <span className="glass-card px-3 py-1 rounded-full">By <Link href="/about" className="text-[#00A8FF] hover:underline">Ronnel Besagre</Link></span>
            <time className="glass-card px-3 py-1 rounded-full" dateTime="2026-03-15">Updated March 2026</time>
          </div>
          <p className="label-tag mb-4">The Definitive Guide</p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
            What is GEO? The Complete Guide to Generative Engine Optimization
          </h1>
          <p className="text-[#B0B8C8] text-base leading-relaxed">
            Everything you need to know about GEO — what it is, how AI search citation works, and how to implement it step by step.
          </p>
        </div>
      </section>

      {/* DEFINITION BLOCK */}
      <section className="section-padding bg-[#0D1429]" aria-labelledby="geo-definition">
        <div className="section-container max-w-3xl">
          <div
            className="rounded-2xl p-7 md:p-10"
            style={{ background: 'rgba(0,168,255,0.05)', border: '1px solid rgba(0,168,255,0.25)' }}
          >
            <p className="label-tag mb-3" id="geo-definition">GEO Definition</p>
            <h2 className="font-syne font-bold text-xl text-white mb-4">What is Generative Engine Optimization?</h2>
            <p className="text-[#B0B8C8] leading-relaxed">
              <strong className="text-white">GEO (Generative Engine Optimization)</strong> is the systematic process of optimizing website content, technical infrastructure, and brand signals so that AI-powered search platforms — including ChatGPT, Perplexity, Claude, Google AI Overviews, and Microsoft Copilot — can retrieve, understand, and cite your business in their generated responses. GEO operates on fundamentally different principles than traditional SEO: rather than targeting ranking positions, GEO targets citation frequency and brand authority within AI-generated answers.
            </p>
          </div>
        </div>
      </section>

      {/* GEO VS SEO VS AEO TABLE */}
      <section className="section-padding" aria-labelledby="comparison-heading">
        <div className="section-container max-w-4xl">
          <p className="label-tag mb-3">Key Differences</p>
          <h2 id="comparison-heading" className="font-syne font-bold text-3xl text-white mb-8">
            GEO vs SEO vs AEO
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[#1A2230]">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#1A2230]">
                  <th className="text-left p-4 text-[#B0B8C8] text-xs font-semibold uppercase tracking-wider font-inter">Dimension</th>
                  <th className="text-left p-4 text-[#00A8FF] text-xs font-semibold uppercase tracking-wider">SEO</th>
                  <th className="text-left p-4 text-[#00FF9D] text-xs font-semibold uppercase tracking-wider">GEO</th>
                  <th className="text-left p-4 text-[#B0B8C8] text-xs font-semibold uppercase tracking-wider">AEO</th>
                </tr>
              </thead>
              <tbody>
                {geoVsTable.map((row, i) => (
                  <tr key={row.dim} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="p-4 text-[#B0B8C8] text-sm font-semibold">{row.dim}</td>
                    <td className="p-4 text-[#B0B8C8] text-sm">{row.seo}</td>
                    <td className="p-4 text-white text-sm font-medium">{row.geo}</td>
                    <td className="p-4 text-[#B0B8C8] text-sm">{row.aeo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY GEO MATTERS */}
      <section className="section-padding bg-[#0D1429]" aria-labelledby="why-geo">
        <div className="section-container max-w-4xl">
          <p className="label-tag mb-3">The Data</p>
          <h2 id="why-geo" className="font-syne font-bold text-3xl text-white mb-8">
            Why GEO Matters in 2026
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {geoStats.map((item) => (
              <div key={item.stat} className="glass-card p-5">
                <div className="font-syne font-bold text-3xl gradient-text mb-2">{item.stat}</div>
                <p className="text-[#B0B8C8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#B0B8C8] text-xs mt-5">Sources: Sparktoro, Semrush, Perplexity.ai press releases, 2025–2026.</p>
        </div>
      </section>

      {/* 8-STEP IMPLEMENTATION */}
      <section className="section-padding" aria-labelledby="implementation-heading">
        <div className="section-container max-w-3xl">
          <p className="label-tag mb-3">Implementation Guide</p>
          <h2 id="implementation-heading" className="font-syne font-bold text-3xl text-white mb-8">
            How to Implement GEO: 8-Step Guide
          </h2>
          <ol className="space-y-6">
            {geoSteps.map((step) => (
              <li key={step.num} className="glass-card p-6 flex items-start gap-5">
                <span className="font-syne font-bold text-2xl gradient-text shrink-0">{step.num}</span>
                <div>
                  <h3 className="font-syne font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[#B0B8C8] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#0D1429]" aria-labelledby="faq-heading">
        <div className="section-container max-w-3xl">
          <p className="label-tag mb-3">FAQ</p>
          <h2 id="faq-heading" className="font-syne font-bold text-3xl text-white mb-8">
            Frequently Asked Questions About GEO
          </h2>
          <dl className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="glass-card p-6">
                <dt className="font-syne font-bold text-white mb-3">{q}</dt>
                <dd className="text-[#B0B8C8] text-sm leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="section-padding" aria-labelledby="learn-more">
        <div className="section-container max-w-3xl">
          <h2 id="learn-more" className="font-syne font-bold text-2xl text-white mb-6">Learn More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/services/seo-geo-consulting', label: 'SEO/GEO Consulting Service' },
              { href: '/blog/what-is-geo-generative-engine-optimization', label: 'GEO Beginner\'s Guide (Blog)' },
              { href: '/blog/seo-vs-geo-vs-aeo-difference', label: 'SEO vs GEO vs AEO (Blog)' },
              { href: '/contact', label: 'Get Free AI Visibility Audit' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glass-card p-4 text-sm text-[#00A8FF] hover:text-white hover:border-white/15 transition-all"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
