import { useState } from 'react'
import { BrainCircuit, Server } from 'lucide-react'
import Reveal from './Reveal'

// Tech stack + partner logos from the reference site
const categories = [
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    icon: BrainCircuit,
    techs: [
      'OpenAI',
      'Claude',
      'Google Gemini',
      'LangChain',
      'LangGraph',
      'LlamaIndex',
      'Grok',
      'AutoGen',
      'Perplexity',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infrastructure',
    icon: Server,
    techs: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud',
      'Docker',
      'Kubernetes',
      'Terraform',
    ],
  },
]

// AWS, Azure, and OpenAI were removed from the simpleicons CDN,
// so those are served locally from public/icons/.
const partners = [
  { name: 'AWS', img: '/icons/amazonaws.svg' },
  { name: 'Google Cloud', img: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'Microsoft Azure', img: '/icons/microsoftazure.svg' },
  { name: 'OpenAI', img: '/icons/openai.svg' },
  { name: 'Anthropic', img: 'https://cdn.simpleicons.org/anthropic/ffffff' },
  { name: 'Snowflake', img: 'https://cdn.simpleicons.org/snowflake/29B5E8' },
  { name: 'Kubernetes', img: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'Terraform', img: 'https://cdn.simpleicons.org/terraform/7B42BC' },
]

export default function Technologies() {
  const [active, setActive] = useState('ai')
  const category = categories.find((c) => c.id === active)!

  return (
    <section
      id="technologies"
      className="border-y border-border/60 bg-muted/30 py-14 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-eyebrow mb-4">Tech Stack</p>
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-5xl">
              Our Technology Stack{' '}
              <span className="gradient-text">Expertise.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground lg:justify-self-end">
            We leverage best-in-class technologies to build scalable, secure,
            and future-ready solutions.
          </p>
        </div>
        </Reveal>

        <Reveal delay={100}>
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-heading text-sm font-medium transition-all duration-300 ${
                active === c.id
                  ? 'border border-primary/50 bg-primary/15 text-primary'
                  : 'border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              <c.icon className="h-4 w-4" />
              {c.label}
            </button>
          ))}
        </div>

        <div className="mb-16 flex flex-wrap gap-3">
          {category.techs.map((t) => (
            <span
              key={t}
              className="glow-card px-6 py-3 font-heading text-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        </Reveal>
        <Reveal delay={150}>
        <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by Industry Leaders &amp; Technology Partners
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {partners.map((p) => (
            <div
              key={p.name}
              className="glow-card flex flex-col items-center gap-2.5 px-7 py-4"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-8 w-8 object-contain opacity-60 transition-opacity hover:opacity-100"
              />
              <span className="text-xs font-medium text-muted-foreground">
                {p.name}
              </span>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
