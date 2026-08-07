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
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`glow-card relative flex flex-col p-3 sm:p-8 ${
                p.featured
                  ? 'border-primary/60 shadow-[0_0_50px_hsl(var(--primary)/0.15)]'
                  : ''
              }`}
            >
              {p.featured && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-primary to-secondary px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-white sm:-top-3 sm:px-4 sm:py-1 sm:text-[10px]">
                  Most popular
                </span>
              )}
              <h3 className="font-heading text-xs font-semibold sm:text-xl">{p.name}</h3>
              <p className="mb-2 mt-1 text-[10px] text-muted-foreground sm:mb-6 sm:mt-2 sm:text-sm">
                {p.description}
              </p>
              <ul className="mb-3 flex-1 space-y-1.5 border-t border-border pt-2 sm:mb-8 sm:space-y-3 sm:pt-6">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-1.5 text-[10px] text-muted-foreground sm:gap-3 sm:text-sm"
                  >
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-accent sm:h-4 sm:w-4" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`${
                  p.featured ? 'btn-gradient' : 'btn-outline'
                } justify-center !px-2 !py-2 !text-xs sm:!px-7 sm:!py-3.5 sm:!text-sm`}
              >
                {p.cta} <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
