import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'
import { sitemap } from '../data/sitemap'

const navSections = sitemap.map((s) => ({
  slug: s.slug,
  label: s.label,
}))

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
              <Link
                key={section.slug}
                to={`/${section.slug}`}
                className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {section.label}
              </Link>
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
                <Link
                  key={section.slug}
                  to={`/${section.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {section.label}
                </Link>
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
