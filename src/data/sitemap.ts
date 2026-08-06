// Site structure per the client's sitemap (Aurona AI sitemap 20260805.pptx).
// Each top-level section becomes an overview page at /:slug, and each child
// becomes a detail page at /:slug/:childSlug.

export interface SitemapChild {
  slug: string
  label: string
  description: string
}

export interface SitemapSection {
  slug: string
  label: string
  eyebrow: string
  heading: string
  description: string
  children: SitemapChild[]
}

export const sitemap: SitemapSection[] = [
  {
    slug: 'products',
    label: 'Products',
    eyebrow: 'Our Products',
    heading: 'AI Agents Built for the Enterprise',
    description:
      'Purpose-built AI agents that plug into your existing workflows — from customer service to recruitment — and start delivering value from day one.',
    children: [
      {
        slug: 'customer-service-ai-agent',
        label: 'Customer Service AI Agent',
        description:
          'Resolve support queries instantly across chat, email, and voice with an AI agent trained on your knowledge base.',
      },
      {
        slug: 'sales-ai-agent',
        label: 'Sales AI Agent',
        description:
          'Qualify leads, answer product questions, and book meetings automatically — around the clock.',
      },
      {
        slug: 'receptionist-ai-agent',
        label: 'Receptionist AI Agent',
        description:
          'A virtual front desk that greets, routes, and schedules visitors and callers without missing a beat.',
      },
      {
        slug: 'recruitment-ai-agent',
        label: 'Recruitment AI Agent',
        description:
          'Screen resumes, schedule interviews, and answer candidate questions to speed up your hiring pipeline.',
      },
      {
        slug: 'property-ai-agent',
        label: 'Property AI Agent',
        description:
          'Handle tenant and buyer inquiries, schedule viewings, and qualify leads for your real estate business.',
      },
      {
        slug: 'appointment-booking-ai-agent',
        label: 'Appointment Booking AI Agent',
        description:
          'Let customers book, reschedule, and cancel appointments through natural conversation, synced to your calendar.',
      },
    ],
  },
  {
    slug: 'services',
    label: 'Services',
    eyebrow: 'Our Services',
    heading: 'End-to-End AI Solutions',
    description:
      'From strategy to deployment, we deliver comprehensive AI solutions that drive measurable business outcomes.',
    children: [
      {
        slug: 'bespoke-ai-agents',
        label: 'Bespoke AI Agents',
        description:
          'Custom-built AI agents designed around your exact processes, data, and business logic.',
      },
      {
        slug: 'ai-consulting',
        label: 'AI Consulting',
        description:
          'Develop AI roadmaps, identify opportunities, and align AI initiatives with business goals.',
      },
      {
        slug: 'ai-as-a-service',
        label: 'AI as a Service',
        description:
          'Access fully managed AI services to accelerate innovation and automation without heavy upfront investment.',
      },
      {
        slug: 'ai-change-management',
        label: 'AI Change Management',
        description:
          'Guide your teams through AI adoption with structured change programs that stick.',
      },
      {
        slug: 'ai-governance',
        label: 'AI Governance',
        description:
          'Build trusted AI systems with strong governance frameworks, compliance standards, and ethical safeguards.',
      },
      {
        slug: 'workforce-upskilling',
        label: 'Workforce Upskilling',
        description:
          'Digital skills, customized learning, emerging technologies training, and continuous skill development.',
      },
    ],
  },
  {
    slug: 'technologies',
    label: 'Technologies',
    eyebrow: 'Our Stack',
    heading: 'Technologies We Work With',
    description:
      'We build on the leading foundation models and infrastructure so your AI systems stay best-in-class as the field moves fast.',
    children: [
      {
        slug: 'claude',
        label: 'Claude',
        description:
          "Anthropic's Claude models power reasoning-heavy agents that need to be safe, steerable, and reliable.",
      },
      {
        slug: 'openai',
        label: 'OpenAI',
        description:
          "OpenAI's GPT models for fast, versatile natural-language understanding and generation.",
      },
      {
        slug: 'gemini',
        label: 'Gemini',
        description:
          "Google's Gemini models for multimodal AI use cases spanning text, vision, and beyond.",
      },
      {
        slug: 'llama',
        label: 'Llama',
        description:
          "Meta's open-weight Llama models for self-hosted and cost-optimized deployments.",
      },
      {
        slug: 'perplexity',
        label: 'Perplexity',
        description:
          'Perplexity-powered retrieval for agents that need grounded, up-to-date answers.',
      },
      {
        slug: 'apis-integration',
        label: 'APIs & Integration',
        description:
          'We connect AI agents to your CRM, helpdesk, calendar, and internal systems via robust API integrations.',
      },
    ],
  },
  {
    slug: 'insights',
    label: 'Insights',
    eyebrow: 'Insights',
    heading: 'Ideas, Updates & Events',
    description:
      'Perspectives on enterprise AI — from the latest technology shifts to what we\'re seeing on the ground with clients.',
    children: [
      {
        slug: 'blogs',
        label: 'Blogs',
        description:
          'Articles and deep dives on AI strategy, implementation, and results from the Aurona AI team.',
      },
      {
        slug: 'events',
        label: 'Events',
        description:
          'Webinars, workshops, and conferences where you can meet the Aurona AI team.',
      },
      {
        slug: 'technology-updates',
        label: 'Technology Updates',
        description:
          'The latest model releases, platform updates, and what they mean for your AI roadmap.',
      },
    ],
  },
  {
    slug: 'about',
    label: 'About Us',
    eyebrow: 'About Us',
    heading: 'The Team Behind Aurona AI',
    description:
      'We\'re a team of AI engineers, consultants, and strategists on a mission to make enterprise AI adoption fast and trustworthy.',
    children: [
      {
        slug: 'our-values',
        label: 'Our Values',
        description:
          'The principles that guide how we build, ship, and partner with clients.',
      },
      {
        slug: 'our-mission',
        label: 'Our Mission',
        description:
          'Why Aurona AI exists and the future of enterprise AI we\'re building toward.',
      },
      {
        slug: 'leadership-team',
        label: 'Leadership Team',
        description:
          'Meet the people leading Aurona AI\'s strategy, engineering, and client delivery.',
      },
    ],
  },
  {
    slug: 'careers',
    label: 'Careers',
    eyebrow: 'Careers',
    heading: 'Innovative Minds at Work',
    description:
      'Join a team building the AI systems enterprises will rely on for the next decade.',
    children: [
      {
        slug: 'innovative-minds-at-work',
        label: 'Innovative Minds at Work',
        description:
          'What it\'s like to work at Aurona AI — how we collaborate, ship, and grow together.',
      },
      {
        slug: 'vacancies',
        label: 'Vacancies',
        description:
          'Open roles across engineering, consulting, and client success.',
      },
    ],
  },
]

export function findSection(slug: string | undefined) {
  return sitemap.find((s) => s.slug === slug)
}

export function findChild(sectionSlug: string | undefined, childSlug: string | undefined) {
  const section = findSection(sectionSlug)
  const child = section?.children.find((c) => c.slug === childSlug)
  return section && child ? { section, child } : null
}
