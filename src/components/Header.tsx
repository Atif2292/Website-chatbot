import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Menu, X, Zap } from 'lucide-react'
import { sitemap } from '../data/sitemap'

const navSections = sitemap.map((s) => ({
  slug: s.slug,
  label: s.label,
  children: s.children,
}))

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-border/60 bg-background/90 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex flex-col gap-1">
            <span className="flex items-center gap-3">
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
                <Zap className="h-10 w-10 fill-white text-white" />
              </span>
              <span className="font-heading text-2xl font-bold tracking-tight">
                Aurona AI
              </span>
            </span>
            <span className="pl-[92px] text-sm font-semibold text-primary">
              Transforming enterprises with the power of AI
            </span>
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
            {navSections.map((section) => (
              <div key={section.slug} className="group relative">
                <Link
                  to={`/${section.slug}`}
                  className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {section.label}
                  <ChevronDown className="h-3.5 w-3.5 shrink-0" />
                </Link>

                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-border bg-card p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {section.children.map((child) => (
                      <Link
                        key={child.slug}
                        to={`/${section.slug}/${child.slug}`}
                        className="block rounded-xl px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center lg:flex">
            <Link to="/contact" className="btn-gradient whitespace-nowrap !px-5 !py-2.5 !text-sm">
              Book a Consultation
            </Link>
          </div>

          <button
            className="rounded-md border border-border p-2 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="max-h-[calc(100vh-88px)] overflow-y-auto border-t border-border/60 bg-background/95 px-6 py-4 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {navSections.map((section) => (
                <div key={section.slug}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/${section.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="py-2.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {section.label}
                    </Link>
                    <button
                      onClick={() =>
                        setMobileExpanded((v) => (v === section.slug ? null : section.slug))
                      }
                      aria-label={`Toggle ${section.label} submenu`}
                      className="p-2.5 text-muted-foreground"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileExpanded === section.slug ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {mobileExpanded === section.slug && (
                    <div className="mb-2 flex flex-col gap-1 border-l border-border pl-4">
                      {section.children.map((child) => (
                        <Link
                          key={child.slug}
                          to={`/${section.slug}/${child.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-gradient mt-3 w-fit !px-6 !py-2.5"
              >
                Book a Consultation
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
