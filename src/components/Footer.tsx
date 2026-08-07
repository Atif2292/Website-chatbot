import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { sitemap } from '../data/sitemap'

// Products has its 6 agents on one scrolling page rather than separate
// pages, so its links jump to an anchor on /products instead of /products/:slug.
function childHref(sectionSlug: string, childSlug: string) {
  return sectionSlug === 'products'
    ? `/products#${childSlug}`
    : `/${sectionSlug}/${childSlug}`
}

// Placeholder handles — swap for the real accounts once they exist.
const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/auronaai', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/auronaai', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/auronaai', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/auronaai', label: 'Facebook' },
]

// Footer columns driven by the same sitemap that powers the header nav.
const columns = sitemap.map((section) => ({
  heading: section.label,
  sectionSlug: section.slug,
  links: section.children.map((c) => ({ label: c.label, slug: c.slug })),
}))

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="md:col-span-2 lg:col-span-1">
          <Link to="/" className="mb-5 flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
              <Zap className="h-5 w-5 fill-white text-white" />
            </span>
            <span className="font-heading text-xl font-bold tracking-tight">
              Aurona AI
            </span>
          </Link>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Enterprise-grade AI consulting and technology solutions — scaling
            businesses through intelligent automation and custom AI agents.
          </p>

          <div className="mb-6 space-y-2 text-sm text-muted-foreground">
            <a
              href="tel:+916387745622"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              +91 63877 45622
            </a>
            <a
              href="mailto:mohdatif2291@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              mohdatif2291@gmail.com
            </a>
          </div>

          <div className="mb-6 flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <Link to="/contact" className="btn-gradient !px-6 !py-2.5 text-sm">
            Book a Consultation
          </Link>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h4 className="mb-5 font-heading text-sm font-semibold uppercase tracking-wider">
              <Link to={`/${col.sectionSlug}`} className="transition-colors hover:text-primary">
                {col.heading}
              </Link>
            </h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={childHref(col.sectionSlug, l.slug)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Aurona AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="transition-colors hover:text-primary">
              Privacy policy
            </Link>
            <Link to="/" className="transition-colors hover:text-primary">
              Terms &amp; conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
