import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Automation Specialist | n8n, LLM & Workflow Automation',
  description:
    'Ronnel Besagre builds intelligent AI automation workflows with n8n, Claude, GPT-4, and voice AI agents. Reduce operational costs by 70%. Serving APAC businesses.',
  alternates: { canonical: 'https://ronnelbesagre.com/services/ai-automation' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ronnelbesagre.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ronnelbesagre.com/services' },
    { '@type': 'ListItem', position: 3, name: 'AI Automation', item: 'https://ronnelbesagre.com/services/ai-automation' },
  ],
}

const techStack = ['n8n', 'Claude API', 'GPT-4 / GPT-4o', 'Google Gemini API', 'Supabase', 'Make.com', 'Telegram Bot API', 'Google Sheets API', 'WhatsApp Business API', 'Voice AI Agents']

export default function AIAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-[#B0B8C8]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#00FF9D]">AI Automation</li>
            </ol>
          </nav>
          <p className="label-tag mb-4" style={{ color: '#00FF9D' }}>AI Automation</p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5 max-w-3xl">
            AI Automation: Build Intelligent Workflows That Work While You Sleep
          </h1>
          <p className="text-[#B0B8C8] max-w-2xl text-base leading-relaxed mb-8">
            Using n8n, Claude, GPT-4, and voice AI agents, I build automation pipelines that handle repetitive tasks, route leads, send notifications, and integrate your business tools — reducing operational costs by 70%+.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-3">Discuss Your Automation Needs</Link>
        </div>
      </section>

      <section className="section-padding bg-[#0D1429]" aria-labelledby="automation-deliverables">
        <div className="section-container max-w-3xl">
          <p className="label-tag mb-3">What I Build</p>
          <h2 id="automation-deliverables" className="font-syne font-bold text-3xl text-white mb-8">Automation Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '⚡', title: 'n8n Workflows', desc: 'Custom automation pipelines connecting your business tools — CRM, email, Telegram, Google Sheets, and APIs.' },
              { icon: '💬', title: 'Smart Chatbots', desc: 'AI-powered customer service and lead qualification chatbots using Claude or GPT-4 with your business context.' },
              { icon: '🎙️', title: 'Voice AI Agents', desc: 'Automated voice response systems for appointment scheduling, FAQ handling, and customer support.' },
              { icon: '🔗', title: 'LLM API Integrations', desc: 'Custom integrations between Claude, GPT-4, Gemini APIs and your existing business applications.' },
              { icon: '📊', title: 'Document AI', desc: 'Automated document processing, extraction, and routing using AI models — eliminating manual data entry.' },
              { icon: '🔔', title: 'Alert & Notification Systems', desc: 'Real-time Telegram/WhatsApp/email notification pipelines triggered by business events.' },
            ].map((item) => (
              <div key={item.title} className="glass-card p-5">
                <div className="text-2xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-syne font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-[#B0B8C8] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="tech-stack-heading">
        <div className="section-container max-w-3xl">
          <h2 id="tech-stack-heading" className="font-syne font-bold text-2xl text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="glass-card px-4 py-2 text-sm text-[#B0B8C8] rounded-full border-[#1A2230]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0D1429]" aria-labelledby="ai-faq">
        <div className="section-container max-w-3xl">
          <h2 id="ai-faq" className="font-syne font-bold text-2xl text-white mb-7">Common Questions</h2>
          <dl className="space-y-6">
            {[
              { q: 'What is n8n?', a: 'n8n is an open-source workflow automation platform — similar to Zapier but more powerful and self-hostable. It connects 400+ apps and APIs with a visual drag-and-drop editor.' },
              { q: 'How much can automation save my business?', a: 'Most clients see 40-70% reduction in time spent on repetitive tasks within the first month. ROI typically becomes visible within 4-8 weeks of deployment.' },
              { q: 'Do I need technical knowledge to use the automations?', a: 'No. I build the workflows so they run automatically. Your team interacts with simple interfaces (Telegram messages, form submissions, Google Sheets) — no technical knowledge needed.' },
            ].map(({ q, a }) => (
              <div key={q}>
                <dt className="font-syne font-semibold text-white mb-2">{q}</dt>
                <dd className="text-[#B0B8C8] text-sm leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="auto-cta">
        <div className="section-container text-center">
          <h2 id="auto-cta" className="font-syne font-bold text-3xl text-white mb-4">Ready to Automate?</h2>
          <p className="text-[#B0B8C8] mb-8 max-w-md mx-auto">Tell me which repetitive tasks are costing your team time. I&apos;ll map out an automation workflow in our first call.</p>
          <Link href="/contact" className="btn-primary px-8 py-3">Book a Free Discovery Call</Link>
        </div>
      </section>
    </>
  )
}
