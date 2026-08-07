import {
  ArrowUpRight,
  Bot,
  Cloud,
  Compass,
  GraduationCap,
  Rocket,
  ShieldCheck,
} from 'lucide-react'
import Reveal from './Reveal'

// Service catalog from the reference site (neural-ai-1.base44.app),
// laid out as Brevon's numbered feature rows.
const services = [
  {
    number: '001.',
    icon: Compass,
    title: 'AI Consulting',
    text: 'Develop AI roadmaps, identify opportunities, and align AI initiatives with business goals.',
  },
  {
    number: '002.',
    icon: Cloud,
    title: 'AI as a Service (AIaaS)',
    text: 'Access fully managed AI services to accelerate innovation and automation.',
  },
  {
    number: '003.',
    icon: Bot,
    title: 'AI Agents & Automation',
    text: 'Deploy autonomous AI agents to automate workflows and business processes.',
  },
  {
    number: '004.',
    icon: GraduationCap,
    title: 'Workforce Upskilling',
    text: 'Digital skills, customized learning, emerging technologies training, and continuous skill development.',
  },
  {
    number: '005.',
    icon: ShieldCheck,
    title: 'AI Governance & Compliance',
    text: 'Build trusted AI systems with strong governance frameworks, compliance standards, and ethical safeguards.',
  },
  {
    number: '006.',
    icon: Rocket,
    title: 'AI Product Development',
    text: 'Design and build AI-powered SaaS products and enterprise applications.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Split header (Brevon layout) */}
        <Reveal>
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="section-eyebrow mb-4">Our Services</p>
              <h2 className="font-heading text-3xl font-bold leading-tight md:text-5xl">
                End-to-End <span className="gradient-text">AI Solutions.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground lg:justify-self-end">
              From strategy to deployment, we deliver comprehensive AI
              solutions that drive measurable business outcomes.
            </p>
          </div>
        </Reveal>

        {/* Numbered rows (Brevon layout) */}
        <Reveal delay={100}>
          <div className="divide-y divide-border border-y border-border">
            {services.map((s) => (
              <a
                key={s.number}
                href="#contact"
                className="group grid grid-cols-[auto_auto_1fr] items-center gap-x-3 gap-y-1 py-4 transition-colors hover:bg-muted/40 md:grid-cols-[90px_auto_1fr_1.1fr_auto] md:gap-x-8 md:gap-y-6 md:py-9 md:px-6"
              >
                <span className="font-mono text-xs text-muted-foreground md:text-lg">
                  {s.number}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 transition-colors group-hover:from-primary/25 group-hover:to-secondary/25 md:h-12 md:w-12">
                  <s.icon className="h-4 w-4 text-primary md:h-6 md:w-6" />
                </span>
                <h3 className="font-heading text-base font-semibold transition-colors group-hover:text-primary md:text-2xl">
                  {s.title}
                </h3>
                <p className="col-span-3 text-xs leading-relaxed text-muted-foreground md:col-span-1 md:text-sm">
                  {s.text}
                </p>
                <span className="col-span-3 mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground md:col-span-1 md:mt-0 md:h-12 md:w-12">
                  <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
