import { Zap } from 'lucide-react'

// Footer columns from the reference site
const columns = [
  {
    heading: 'Services',
    links: [
      'AI Consulting',
      'AI as a Service (AIaaS)',
      'AI Agents & Automation',
      'Workforce Upskilling',
      'AI Governance & Compliance',
      'AI Product Development',
    ],
    href: '#services',
  },
  {
    heading: 'Technologies',
    links: [
      'OpenAI & Claude',
      'Google Gemini',
      'LangChain & LangGraph',
      'AWS & Azure',
      'Google Cloud',
      'Docker & Kubernetes',
    ],
    href: '#technologies',
  },
  {
    heading: 'Industries',
    links: [
      'SaaS & Technology',
      'Healthcare',
      'Financial Services',
      'Manufacturing',
      'Retail & E-Commerce',
      'Education',
    ],
    href: '#solutions',
  },
  {
    heading: 'Company',
    links: [
      'About Us',
      'Case Studies',
      'Blog & Resources',
      'Careers',
      'Privacy Policy',
      'Terms of Service',
    ],
    href: '#about',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <a href="#home" className="mb-5 flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
              <Zap className="h-5 w-5 fill-white text-white" />
            </span>
            <span className="font-heading text-xl font-bold tracking-tight">
              Aurona AI
            </span>
          </a>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Enterprise-grade AI consulting and technology solutions — scaling
            businesses through intelligent automation and custom AI agents.
          </p>
          <a href="#contact" className="btn-gradient !px-6 !py-2.5 text-sm">
            Book a Consultation
          </a>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h4 className="mb-5 font-heading text-sm font-semibold uppercase tracking-wider">
              {col.heading}
            </h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href={col.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l}
                  </a>
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
            <a href="#home" className="transition-colors hover:text-primary">
              Privacy policy
            </a>
            <a href="#home" className="transition-colors hover:text-primary">
              Terms &amp; conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
