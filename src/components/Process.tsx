import { TrendingUp } from 'lucide-react'
import Reveal from './Reveal'

const steps = [
  {
    number: '01.',
    title: 'Understand your business',
    text: 'We map your workflows, data landscape, and objectives to find the highest-impact AI opportunities.',
  },
  {
    number: '02.',
    title: 'Design the AI strategy',
    text: 'Data-driven strategies to identify opportunities, reduce risk, and set a clear roadmap for intelligent automation.',
  },
  {
    number: '03.',
    title: 'Deploy & scale results',
    text: 'We build, deploy, and continuously improve AI agents and platforms that deliver measurable long-term growth.',
  },
]

export default function Process() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Stat visual (Brevon "Business Increase 3X") */}
        <Reveal className="h-full">
        <div className="glow-card relative flex h-full flex-col justify-center overflow-hidden p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/20 blur-[100px]" />
          <TrendingUp className="mb-6 h-10 w-10 text-accent" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Business increase
          </p>
          <div className="mt-3 font-heading text-8xl font-bold">
            3<span className="gradient-text">X</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Average operational efficiency gain our clients see after adopting
            intelligent automation.
          </p>
        </div>
        </Reveal>

        <Reveal delay={120}>
        <div>
          <p className="section-eyebrow mb-4">Our working process</p>
          <h2 className="mb-10 font-heading text-4xl font-bold md:text-5xl">
            A Streamlined Process{' '}
            <span className="gradient-text">For Success.</span>
          </h2>

          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.number} className="flex gap-6">
                <span className="font-mono text-lg font-semibold text-primary">
                  {s.number}
                </span>
                <div className="border-b border-border pb-8">
                  <h3 className="mb-2 font-heading text-xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
