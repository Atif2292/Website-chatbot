import { useEffect, useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Insights', href: '#insights' },
  { label: 'About Us', href: '#about' },
]

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
          {/* Logo enlarged ~2x pending the official logo file */}
          <a href="#home" className="flex flex-col gap-1">
            <span className="flex items-center gap-3">
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary">
                <Zap className="h-10 w-10 fill-white text-white" />
              </span>
              <span className="font-heading text-2xl font-bold tracking-tight">
                Aurona AI
              </span>
            </span>
            <span className="pl-[92px] text-sm font-semibold text-primary">
              AI agents and consulting solutions.
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </a>
            <a href="#contact" className="btn-gradient !px-6 !py-2.5">
              Book a Consultation
            </a>
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
          <nav className="border-t border-border/60 bg-background/95 px-6 py-4 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </a>
              <a href="#contact" className="btn-gradient w-fit !px-6 !py-2.5">
                Book a Consultation
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
