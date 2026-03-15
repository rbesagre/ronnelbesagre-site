'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', website: '', service: '', message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('YOUR_N8N_WEBHOOK_URL_HERE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'ronnelbesagre.com/contact',
        }),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', website: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClass = "w-full bg-white/5 border border-[#1A2230] rounded-xl px-4 py-3 text-white text-sm placeholder-[#B0B8C8]/50 focus:outline-none focus:border-[#00A8FF]/50 transition-colors"
  const labelClass = "block text-xs font-semibold uppercase tracking-wider text-[#B0B8C8] mb-2"

  return (
    <>
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10 text-center">
          <p className="label-tag mb-4">Start Here</p>
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-white mb-5">
            Get Your Free AI Visibility Audit
          </h1>
          <p className="text-[#B0B8C8] max-w-xl mx-auto text-base">
            Fill out the form below and I&apos;ll personally review your AI visibility gaps within 24 hours. No credit card. No commitment.
          </p>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="contact-heading">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Form */}
            <div className="md:col-span-3">
              <h2 id="contact-heading" className="font-syne font-bold text-2xl text-white mb-6">Send Your Request</h2>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address *</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className={labelClass}>Company</label>
                    <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} placeholder="Your company" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="website" className={labelClass}>Website URL</label>
                    <input id="website" name="website" type="url" value={formData.website} onChange={handleChange} placeholder="https://yourwebsite.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className={labelClass}>Service Interest</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className={`${inputClass} bg-[#0D1429]`}>
                    <option value="">Select a service...</option>
                    <option value="seo-geo-consulting">SEO / GEO Consulting</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="aidc-expert">AIDC Expert Advisory</option>
                    <option value="nlp-coaching">NLP Coaching</option>
                    <option value="ai-visibility-audit">AI Visibility Audit (Free)</option>
                    <option value="not-sure">Not sure — help me decide</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Tell me about your goals, challenges, or questions..." className={`${inputClass} resize-vertical`} />
                </div>

                {status === 'success' && (
                  <div className="rounded-xl p-4 text-sm" style={{ background: 'rgba(0,255,157,0.08)', border: '1px solid rgba(0,255,157,0.25)', color: '#00FF9D' }}>
                    ✓ Request received! I&apos;ll be in touch within 24 hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className="rounded-xl p-4 text-sm" style={{ background: 'rgba(255,100,100,0.08)', border: '1px solid rgba(255,100,100,0.25)', color: '#ff6464' }}>
                    Error sending. Please email <a href="mailto:rbesagre@gmail.com" className="underline">rbesagre@gmail.com</a> directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center py-3 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send My Request →'}
                </button>
                <p className="text-center text-xs text-[#B0B8C8]/60">
                  Free audit · 24-hour response · No credit card required
                </p>
              </form>
            </div>

            {/* Contact info sidebar */}
            <aside className="md:col-span-2 space-y-5">
              <div className="glass-card p-6">
                <h2 className="font-syne font-bold text-white mb-5">Direct Contact</h2>
                <ul className="space-y-4">
                  <li>
                    <p className="text-xs text-[#B0B8C8] uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:rbesagre@gmail.com" className="text-[#00A8FF] hover:underline text-sm">rbesagre@gmail.com</a>
                  </li>
                  <li>
                    <p className="text-xs text-[#B0B8C8] uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                    <a href="tel:+60174980981" className="text-white text-sm hover:text-[#00A8FF]">+60 174 980 981</a>
                  </li>
                  <li>
                    <p className="text-xs text-[#B0B8C8] uppercase tracking-wider mb-1">Location</p>
                    <p className="text-white text-sm">Johor Bahru, Malaysia<br /><span className="text-[#B0B8C8]">Serving APAC (MY · SG · PH)</span></p>
                  </li>
                  <li>
                    <p className="text-xs text-[#B0B8C8] uppercase tracking-wider mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/ronnelbesagredotcom" target="_blank" rel="noopener noreferrer" className="text-[#00A8FF] hover:underline text-sm">linkedin.com/in/ronnelbesagredotcom</a>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-5">
                <h3 className="font-syne font-bold text-white text-sm mb-3">Response Time</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FF9D]">✓</span>
                  <span className="text-[#B0B8C8] text-sm">I respond within 24 hours</span>
                </div>
              </div>

              <div className="glass-card p-5">
                <h3 className="font-syne font-bold text-white text-sm mb-3">What Happens Next?</h3>
                <ol className="space-y-2">
                  {['I review your request and website', 'Initial AI visibility check (24 hours)', 'Free audit report + strategy call', 'Prioritized action plan delivered'].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#B0B8C8]">
                      <span className="gradient-text font-bold shrink-0">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
