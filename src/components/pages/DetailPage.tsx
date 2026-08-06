import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import type { SitemapChild, SitemapSection } from '../../data/sitemap'

export default function DetailPage({
  section,
  item,
}: {
  section: SitemapSection
  item: SitemapChild
}) {
  const related = section.children.filter((c) => c.slug !== item.slug).slice(0, 3)

  return (
    <section className="relative overflow-hidden pb-24 pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <Reveal>
          <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to={`/${section.slug}`} className="transition-colors hover:text-primary">
              {section.label}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{item.label}</span>
          </nav>

          <p className="section-eyebrow mb-4">{section.eyebrow}</p>
          <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-5xl">
            {item.label}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {item.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-gradient">
              Book a Consultation
            </Link>
            <Link to={`/${section.slug}`} className="btn-outline">
              Back to {section.label}
            </Link>
          </div>
        </Reveal>

        {related.length > 0 && (
          <Reveal delay={120}>
            <div className="mt-20">
              <h2 className="mb-6 font-heading text-2xl font-bold">
                Related in {section.label}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/${section.slug}/${r.slug}`}
                    className="glow-card group flex flex-col justify-between p-6"
                  >
                    <h3 className="mb-2 font-heading text-lg font-semibold transition-colors group-hover:text-primary">
                      {r.label}
                    </h3>
                    <span className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
