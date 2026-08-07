import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import type { SitemapSection } from '../../data/sitemap'

export default function OverviewPage({
  section,
  layout = 'grid',
}: {
  section: SitemapSection
  layout?: 'grid' | 'scroll'
}) {
  return (
    <section className="relative overflow-hidden pb-24 pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="section-eyebrow mb-4">{section.eyebrow}</p>
              <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
                {section.heading}
              </h1>
            </div>
            <p className="max-w-md text-muted-foreground lg:justify-self-end">
              {section.description}
            </p>
          </div>
        </Reveal>

        {layout === 'scroll' ? (
          <Reveal delay={100}>
            <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4">
              {section.children.map((child, i) => (
                <div
                  key={child.slug}
                  id={child.slug}
                  className="glow-card flex w-[280px] shrink-0 scroll-mx-6 snap-start flex-col justify-between p-6"
                >
                  <div>
                    <span className="mb-3 block font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mb-2 font-heading text-xl font-semibold">
                      {child.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {child.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ) : (
          <Reveal delay={100}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.children.map((child) => (
                <Link
                  key={child.slug}
                  to={`/${section.slug}/${child.slug}`}
                  className="glow-card group flex flex-col justify-between p-6"
                >
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-semibold transition-colors group-hover:text-primary">
                      {child.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {child.description}
                    </p>
                  </div>
                  <span className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal delay={150}>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-muted/30 p-8">
            <div>
              <h2 className="font-heading text-2xl font-bold">
                Not sure where to start?
              </h2>
              <p className="mt-1 text-muted-foreground">
                Talk to our team and we'll point you to the right fit.
              </p>
            </div>
            <Link to="/contact" className="btn-gradient">
              Book a Consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
