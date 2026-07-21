import { useState } from 'react'
import { CalendarClock, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'

// Placeholder Calendly link — swap for the real scheduling page once it exists.
const CALENDLY_URL = 'https://calendly.com/auronaai/consultation'
// Static-site form delivery (no backend) — routes submissions to this inbox.
const FORM_ENDPOINT = 'https://formsubmit.co/mohdatif2291@gmail.com'

const industries = [
  'SaaS & Technology',
  'Healthcare',
  'Financial Services',
  'Manufacturing',
  'Retail & E-Commerce',
  'Education',
  'Logistics',
  'Other',
]

const inputClass =
  'w-full rounded-xl border border-border bg-input px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    challenge: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) return

    setSending(true)
    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'New consultation request — Aurona AI' }),
      })
    } catch {
      // Non-fatal for the UI — the visitor still sees the confirmation.
    } finally {
      setSending(false)
      setSubmitted(true)
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border/60 py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-5xl">
              Ready to Accelerate Your{' '}
              <span className="gradient-text">AI Transformation?</span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              Partner with experts who turn AI opportunities into measurable
              business outcomes.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glow-card p-8 md:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-primary" />
                <h3 className="mb-2 font-heading text-2xl font-bold">
                  Consultation booked!
                </h3>
                <p className="text-muted-foreground">
                  Our AI experts will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-2 font-heading text-2xl font-bold">
                  Schedule Your Free Consultation
                </h3>
                <p className="mb-8 text-sm text-muted-foreground">
                  Fill in your details and our AI experts will get back to you
                  within 24 hours.
                </p>

                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={set('name')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Work Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={set('email')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={set('phone')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">
                        Company
                      </label>
                      <input
                        placeholder="Your Company"
                        value={form.company}
                        onChange={set('company')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Industry
                    </label>
                    <select
                      value={form.industry}
                      onChange={set('industry')}
                      className={`${inputClass} appearance-none ${
                        form.industry ? '' : 'text-muted-foreground'
                      }`}
                    >
                      <option value="">Select your industry</option>
                      {industries.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      What challenge are you looking to solve?
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your current challenge or AI initiative..."
                      value={form.challenge}
                      onChange={set('challenge')}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-gradient w-full justify-center !rounded-xl !py-4 disabled:opacity-60"
                  >
                    {sending ? 'Sending...' : 'Book a Consultation'}
                  </button>
                </form>

                <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="h-px flex-1 bg-border" />
                  or
                  <div className="h-px flex-1 bg-border" />
                </div>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-6 w-full justify-center !rounded-xl !py-4"
                >
                  <CalendarClock className="h-4 w-4 text-primary" />
                  Schedule directly via Calendly
                </a>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
