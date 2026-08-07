import Reveal from './Reveal'

// Team and company stats from the reference site,
// laid out as Brevon's about section (statement left, stat cards right).
const stats = [
  { value: '150+', label: 'AI Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '40+', label: 'Enterprise Clients' },
  { value: '$2B+', label: 'Value Generated' },
]

const team = [
  {
    name: 'Alex Carter',
    role: 'Founder & CEO',
    bio: 'Former AI Research Lead at Google DeepMind. 15+ years building enterprise AI systems.',
    initials: 'AC',
  },
  {
    name: 'Priya Nair',
    role: 'CTO',
    bio: 'Ex-Principal Engineer at OpenAI. Expert in LLMs, RAG architectures, and ML infrastructure.',
    initials: 'PN',
  },
  {
    name: 'Daniel Reeves',
    role: 'Head of Strategy',
    bio: 'McKinsey alum specializing in AI transformation and organizational change management.',
    initials: 'DR',
  },
  {
    name: 'Sofia Mendes',
    role: 'Lead AI Engineer',
    bio: 'PhD in Machine Learning from MIT. Specializes in predictive analytics and computer vision.',
    initials: 'SM',
  },
  {
    name: 'James Liu',
    role: 'Head of Data Engineering',
    bio: 'Built data platforms at Stripe and Airbnb. Expert in real-time pipelines and cloud architecture.',
    initials: 'JL',
  },
  {
    name: 'Aisha Okafor',
    role: 'Client Success Lead',
    bio: '10+ years in enterprise technology consulting. Ensures every engagement exceeds expectations.',
    initials: 'AO',
  },
]

export default function AboutUs() {
  return (
    <section
      id="about"
      className="border-t border-border/60 bg-muted/30 py-14 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Statement + stat cards (Brevon about layout) */}
        <div className="mb-20 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div>
              <p className="section-eyebrow mb-4">About Us</p>
              <h2 className="mb-6 font-heading text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-[2.6rem]">
                The Team Behind{' '}
                <span className="gradient-text">Aurona AI.</span>
              </h2>
              <p className="mb-8 max-w-xl text-lg text-muted-foreground">
                Every engagement is tied to business outcomes — not just
                deliverables. We measure success by your ROI.
              </p>
              <a href="#contact" className="btn-gradient">
                Book a Consultation
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="glow-card p-7">
                  <div className="font-heading text-3xl font-bold text-primary">
                    {s.value}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="glow-card p-3 sm:p-7">
                <div className="mb-2 flex items-center gap-2 sm:mb-5 sm:gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-heading text-xs font-bold text-white sm:h-14 sm:w-14 sm:text-lg">
                    {m.initials}
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate font-heading text-xs font-semibold sm:text-base">{m.name}</h3>
                    <p className="truncate text-[10px] text-primary sm:text-sm">{m.role}</p>
                  </div>
                </div>
                <p className="text-[10px] leading-relaxed text-muted-foreground sm:text-sm">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
