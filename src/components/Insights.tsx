import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

// Insight posts from the reference site
const posts = [
  {
    type: 'AI Trends',
    title: 'The State of Enterprise AI Adoption in 2025',
    text: 'Comprehensive analysis of AI adoption patterns, emerging technologies, and strategic priorities for enterprise organizations.',
    color: 'text-primary',
    bg: 'from-primary/25',
  },
  {
    type: 'Technical Blog',
    title: 'Building Production-Ready RAG Applications',
    text: 'Deep-dive into retrieval-augmented generation architectures, vector databases, and optimization techniques.',
    color: 'text-secondary',
    bg: 'from-secondary/25',
  },
  {
    type: 'Industry Report',
    title: 'AI in Financial Services: Risk & Opportunity',
    text: 'How financial institutions are leveraging AI for fraud detection, risk assessment, and customer intelligence.',
    color: 'text-accent',
    bg: 'from-accent/25',
  },
  {
    type: 'Whitepaper',
    title: 'Autonomous AI Agents: The Next Frontier',
    text: 'Exploring multi-agent systems, tool-use patterns, and enterprise deployment strategies for AI agents.',
    color: 'text-primary',
    bg: 'from-primary/25',
  },
  {
    type: 'Case Study',
    title: 'How a Retail Giant Automated 80% of Operations',
    text: 'End-to-end journey of deploying AI-powered automation across supply chain, customer service, and inventory.',
    color: 'text-secondary',
    bg: 'from-secondary/25',
  },
  {
    type: 'Technology Guide',
    title: 'Choosing the Right LLM for Your Business',
    text: 'Comparative guide to GPT, Claude, Gemini, and open-source models for enterprise applications.',
    color: 'text-accent',
    bg: 'from-accent/25',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-eyebrow mb-4">Insights</p>
            <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
              Latest Thinking &amp;{' '}
              <span className="gradient-text">Resources.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground lg:justify-self-end">
            Trends, tips, and advice for smarter AI decisions.
          </p>
        </div>
        </Reveal>

        <Reveal delay={120}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="glow-card group flex flex-col overflow-hidden"
            >
              <div
                className={`relative h-36 overflow-hidden bg-gradient-to-br ${post.bg} via-muted to-muted`}
              >
                <span
                  className={`absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 font-mono text-[11px] uppercase tracking-wider backdrop-blur ${post.color}`}
                >
                  {post.type}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-3 font-heading text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.text}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
