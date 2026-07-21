import { AlertTriangle, ArrowRight, CheckCircle2, XCircle } from 'lucide-react'
import Reveal from './Reveal'

// Challenge/transformation content from the reference site
const painPoints = [
  'Manual processes limiting growth',
  'Lack of AI expertise in-house',
  'Inefficient & slow workflows',
  'Rising operational costs',
  'Difficulty scaling technology',
]

const transformations = [
  { before: 'Manual data entry & reporting', after: 'Automated data pipelines' },
  { before: 'Siloed departments', after: 'Unified intelligent systems' },
  { before: 'Reactive decision making', after: 'Predictive analytics' },
  { before: 'Slow customer response', after: 'AI-powered instant support' },
  { before: 'High operational overhead', after: 'Optimized lean operations' },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-eyebrow mb-4">The Challenge</p>
            <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
              Why Businesses Struggle to{' '}
              <span className="gradient-text">Adopt AI.</span>
            </h2>
          </div>
        </div>
        </Reveal>

        <Reveal delay={100}>
        <div className="mb-16 flex flex-wrap gap-3">
          {painPoints.map((p) => (
            <span
              key={p}
              className="flex items-center gap-2.5 rounded-full border border-border bg-muted/60 px-5 py-3 text-sm text-muted-foreground"
            >
              <AlertTriangle className="h-4 w-4 text-destructive" />
              {p}
            </span>
          ))}
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="glow-card overflow-hidden">
          <div className="grid divide-y divide-border md:grid-cols-[1fr_60px_1fr] md:divide-y-0">
            <div className="p-8">
              <h3 className="mb-6 font-heading text-lg font-semibold text-muted-foreground">
                Without Aurona AI
              </h3>
              <ul className="space-y-4">
                {transformations.map((t) => (
                  <li
                    key={t.before}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <XCircle className="h-4 w-4 shrink-0 text-destructive/70" />
                    {t.before}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden items-center justify-center md:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                <ArrowRight className="h-5 w-5 text-white" />
              </span>
            </div>

            <div className="border-l-0 bg-primary/5 p-8 md:border-l md:border-border">
              <h3 className="mb-6 font-heading text-lg font-semibold text-primary">
                With Aurona AI
              </h3>
              <ul className="space-y-4">
                {transformations.map((t) => (
                  <li
                    key={t.after}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    {t.after}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
