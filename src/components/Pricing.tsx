import { ArrowRight, Check } from 'lucide-react'
import Reveal from './Reveal'

// Engagement models from the reference site
const plans = [
  {
    name: 'Starter Consultation',
    description: 'Perfect for exploring AI opportunities.',
    features: [
      'AI Readiness Assessment',
      'Technology Landscape Review',
      'Strategic Recommendations',
      'Implementation Roadmap',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth Partnership',
    description: 'AI strategy combined with execution.',
    features: [
      'AI Strategy + Implementation',
      'Automation Initiatives',
      'Data Pipeline Development',
      'Dedicated Project Manager',
      'Monthly Progress Reviews',
    ],
    cta: 'Start Growing',
    featured: true,
  },
  {
    name: 'Enterprise Transformation',
    description: 'Complete AI modernization program.',
    features: [
      'Full AI Modernization',
      'Dedicated Consulting Team',
      'Custom AI Platform Build',
      'Enterprise Integration',
      '24/7 Support & Monitoring',
      'Continuous Optimization',
    ],
    cta: 'Contact Us',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-eyebrow mb-4">Engagement Models</p>
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-5xl">
              Flexible Ways to{' '}
              <span className="gradient-text">Work With Us.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground lg:justify-self-end">
            Flexible partnership structures designed to match your
            organization's needs and goals.
          </p>
        </div>
        </Reveal>

        <Reveal delay={120}>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`glow-card relative flex flex-col p-8 ${
                p.featured
                  ? 'border-primary/60 shadow-[0_0_50px_hsl(var(--primary)/0.15)]'
                  : ''
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold">{p.name}</h3>
              <p className="mb-6 mt-2 text-sm text-muted-foreground">
                {p.description}
              </p>
              <ul className="mb-8 flex-1 space-y-3 border-t border-border pt-6">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`${
                  p.featured ? 'btn-gradient' : 'btn-outline'
                } justify-center`}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
