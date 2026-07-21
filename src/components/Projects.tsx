import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

const projects = [
  {
    year: '[2026]',
    title: 'Enterprise Operations Automation',
    text: 'Deployed AI agents and workflow automation for a Fortune 500 manufacturing company.',
    index: '01',
  },
  {
    year: '[2026]',
    title: 'Intelligent Customer Support System',
    text: 'Built an intelligent support system with AI agents, RAG, and automated ticket resolution.',
    index: '02',
  },
  {
    year: '[2025]',
    title: 'Retail Supply Chain Intelligence',
    text: 'End-to-end AI-powered automation across supply chain, customer service, and inventory.',
    index: '03',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="overflow-hidden border-y border-border/60 bg-muted/30 py-24"
    >
      {/* Marquee strip (Brevon layout) */}
      <div className="mb-16 whitespace-nowrap">
        <div className="animate-marquee inline-flex">
          {Array.from({ length: 2 }).map((_, half) => (
            <span key={half} className="inline-flex">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="mx-6 font-heading text-3xl font-bold uppercase tracking-wide text-foreground/90"
                >
                  <span className="text-primary">[</span> Latest Projects{' '}
                  <span className="text-primary">]</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
        <div className="divide-y divide-border border-y border-border">
          {projects.map((p) => (
            <a
              key={p.index}
              href="#contact"
              className="group grid gap-4 py-10 transition-colors hover:bg-muted/40 md:grid-cols-[90px_1fr_1fr_60px] md:items-center md:gap-10 md:px-6"
            >
              <span className="font-mono text-sm text-accent">{p.year}</span>
              <h3 className="font-heading text-2xl font-semibold transition-colors group-hover:text-primary md:text-3xl">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.text}
              </p>
              <div className="flex items-center gap-3 md:flex-col md:items-end">
                <span className="font-mono text-sm text-muted-foreground">
                  {p.index}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </a>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
