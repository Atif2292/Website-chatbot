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
                className="group grid gap-6 py-9 transition-colors hover:bg-muted/40 md:grid-cols-[90px_auto_1fr_1.1fr_auto] md:items-center md:gap-8 md:px-6"
              >
                <span className="font-mono text-lg text-muted-foreground">
                  {s.number}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 transition-colors group-hover:from-primary/25 group-hover:to-secondary/25">
                  <s.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="font-heading text-2xl font-semibold transition-colors group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
