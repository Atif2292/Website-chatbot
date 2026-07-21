import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2, Sparkles, X } from 'lucide-react'

// On-load lead capture popup, modeled on the reference site's
// "Get My Free Assessment" form (dummy — no backend yet).
export default function ConsultPopup() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '' })

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!open) return null

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email.trim()) return
    setSubmitted(true)
    setTimeout(() => setOpen(false), 2200)
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30'

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-[0_0_60px_hsl(var(--primary)/0.15)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Book a consultation"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-secondary/20 blur-[80px]" />
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close popup"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="p-10 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 font-heading text-xl font-bold">
              You're all set!
            </h3>
            <p className="text-sm text-muted-foreground">
              Our team will reach out shortly to schedule your free AI
              assessment.
            </p>
          </div>
        ) : (
          <div className="p-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Free AI Assessment
              </span>
            </div>
            <h3 className="mb-2 font-heading text-2xl font-bold leading-snug">
              Transform Your Business with the{' '}
              <span className="gradient-text">Power of AI</span>
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Book a consultation and get a free AI readiness assessment for
              your organization.
            </p>

            <form onSubmit={onSubmit} className="space-y-3">
              <input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={inputClass}
              />
              <input
                type="email"
                required
                placeholder="Work Email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className={inputClass}
              />
              <input
                placeholder="Company Name"
                value={form.company}
                onChange={(e) =>
                  setForm((f) => ({ ...f, company: e.target.value }))
                }
                className={inputClass}
              />
              <button
                type="submit"
                className="btn-gradient w-full justify-center !rounded-xl"
              >
                Get My Free Assessment <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-center text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              No thanks, I'll explore on my own
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
