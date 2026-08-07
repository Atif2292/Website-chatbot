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
    <section id="insights" className="border-t border-border/60 py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-eyebrow mb-4">Insights</p>
            <h2 className="font-heading text-3xl font-bold leading-tight md:text-5xl">
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
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="glow-card group flex flex-col overflow-hidden"
            >
              <div
                className={`relative h-16 overflow-hidden bg-gradient-to-br sm:h-36 ${post.bg} via-muted to-muted`}
              >
                <span
                  className={`absolute left-2 top-2 rounded-full bg-background/80 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-[11px] ${post.color}`}
                >
                  {post.type}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-3 sm:p-7">
                <h3 className="mb-1.5 font-heading text-xs font-semibold leading-snug transition-colors group-hover:text-primary sm:mb-3 sm:text-xl">
                  {post.title}
                </h3>
                <p className="mb-2 flex-1 text-[10px] leading-relaxed text-muted-foreground sm:mb-6 sm:text-sm">
                  {post.text}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary sm:gap-1.5 sm:text-sm"
                >
                  Read more <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
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
