import { Quote, Star } from 'lucide-react'
import Reveal from './Reveal'

const testimonials = [
  {
    quote:
      'Aurona AI deployed AI agents across our support workflows and cut resolution time by more than half. The team understood our enterprise constraints from day one.',
    name: 'Ellen Dezonee',
    role: 'Head of CX, SaaS Enterprise',
  },
  {
    quote:
      'Their data-driven approach helped us identify automation opportunities we had missed for years. The ROI on our first initiative was visible within a quarter.',
    name: 'Marcus Chen',
    role: 'CFO, Retail Enterprise',
  },
  {
    quote:
      'From strategy to deployment, the dedicated consulting team guided our AI transformation end to end. Reliable, transparent, and genuinely expert.',
    name: 'Sarah Whitfield',
    role: 'VP of Operations, Manufacturing',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
        <div className="mb-14">
          <p className="section-eyebrow mb-4">Client testimonials</p>
          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            Client Experiences Inspire{' '}
            <span className="gradient-text">Enterprise Trust.</span>
          </h2>
        </div>
        </Reveal>

        <Reveal delay={120}>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="glow-card flex flex-col p-8">
              <Quote className="mb-5 h-8 w-8 text-primary/60" />
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.quote}
              </p>
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
