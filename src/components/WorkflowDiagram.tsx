// AI lead-intelligence pipeline diagram — same structure as the client's
// reference (inputs/outputs, 9-step flow, LLM providers, memory & knowledge
// layer, solid vs dashed boxes), recolored to the site's own dark theme
// instead of a white screenshot-style panel. Human Review reads "Optional"
// per the latest revision (was "Mandatory Approval" in the reference).

const primary = 'hsl(217 91% 60%)'
// More Dark Navy palette — deepened further per feedback.
const borderColor = '#3A5A99'
const glowColor = 'rgba(58, 90, 153, 0.25)'
const dotGrey = 'hsl(215 12% 62%)'
const cardFill = '#0A1730'
const stepHighlightFill = '#0F2142'
const iconColor = 'hsl(150 6% 70%)'
const foreground = 'hsl(210 40% 98%)'
const muted = 'hsl(215 20% 68%)'

function Glow({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <rect x={x - 5} y={y - 5} width={w + 10} height={h + 10} rx="14" fill={glowColor} filter="url(#soft-glow)" />
  )
}

function Box({
  x,
  y,
  w,
  h,
  dashed = false,
  fill = cardFill,
  glow = true,
}: {
  x: number
  y: number
  w: number
  h: number
  dashed?: boolean
  fill?: string
  glow?: boolean
}) {
  return (
    <>
      {glow && <Glow x={x} y={y} w={w} h={h} />}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="10"
        fill={fill}
        stroke={borderColor}
        strokeOpacity={dashed ? 0.9 : 0.8}
        strokeWidth="1.4"
        strokeDasharray={dashed ? '5 4' : undefined}
      />
    </>
  )
}

// A wire with an animated pulse travelling along it — same technique used
// across the site's other diagrams.
function Wire({ d, delay = 0, dashed = false, double = false }: { d: string; delay?: number; dashed?: boolean; double?: boolean }) {
  return (
    <>
      <path
        d={d}
        stroke={primary}
        strokeOpacity={dashed ? 0.4 : 0.6}
        strokeWidth={dashed ? 1.3 : 1.7}
        strokeDasharray={dashed ? '5 4' : undefined}
        fill="none"
        markerEnd="url(#arrow-p)"
        markerStart={double ? 'url(#arrow-p-start)' : undefined}
      />
      {!dashed && (
        <circle r="3.2" fill={dotGrey}>
          <animateMotion dur="2.6s" begin={`${delay}s`} repeatCount="indefinite" path={d} />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.6s" begin={`${delay}s`} repeatCount="indefinite" />
        </circle>
      )}
    </>
  )
}

const iw = { width: 30, height: 30, viewBox: '0 0 22 22', fill: 'none' as const, strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, stroke: iconColor }
const iwSmall = { width: 20, height: 20, viewBox: '0 0 22 22', fill: 'none' as const, strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, stroke: iconColor }

function GlobeIcon() { return <svg {...iwSmall}><circle cx="11" cy="11" r="8" /><path d="M3 11 H19 M11 3 C7 7 7 15 11 19 C15 15 15 7 11 3" /></svg> }
function LinkedInIcon() { return <svg {...iwSmall} fill={iconColor} stroke="none"><rect x="3" y="3" width="16" height="16" rx="2.5" fill="none" stroke={iconColor} strokeWidth="1.6" /><circle cx="7.3" cy="7.5" r="1.15" /><rect x="6.2" y="9.8" width="2.2" height="6.4" /><path d="M11 9.8 H13 V11 C13.4 10.2 14.2 9.6 15.3 9.6 C17 9.6 17.8 10.7 17.8 12.6 V16.2 H15.6 V13 C15.6 12 15.2 11.3 14.3 11.3 C13.6 11.3 13.2 11.8 13 12.3 C12.9 12.5 12.9 12.8 12.9 13.1 V16.2 H10.7 C10.7 16.2 10.75 10.4 11 9.8Z" fill={iconColor} /></svg> }
function MailIcon() { return <svg {...iwSmall}><rect x="3" y="5" width="16" height="12" rx="2" /><path d="M4 6.5 L11 12 L18 6.5" /></svg> }
function FileIcon() { return <svg {...iwSmall}><rect x="5" y="2.5" width="12" height="17" rx="1.5" /><path d="M8 8 H14 M8 11.5 H14 M8 15 H11.5" /></svg> }
function DatabaseIcon() { return <svg {...iwSmall}><ellipse cx="11" cy="5.5" rx="7" ry="2.4" /><path d="M4 5.5 V16.5 C4 17.8 7.1 18.9 11 18.9 C14.9 18.9 18 17.8 18 16.5 V5.5" /><path d="M4 11 C4 12.3 7.1 13.4 11 13.4 C14.9 13.4 18 12.3 18 11" /></svg> }
function PersonCircleIcon() { return <svg {...iwSmall}><circle cx="11" cy="11" r="8" /><circle cx="11" cy="8.6" r="2.6" /><path d="M5.8 16.3 C6.6 13.9 8.6 13 11 13 C13.4 13 15.4 13.9 16.2 16.3" /></svg> }
function CheckCircleIcon() { return <svg {...iwSmall}><circle cx="11" cy="11" r="8" /><path d="M7.3 11.3 L9.7 13.7 L14.9 8.3" /></svg> }
function BarChartIcon() { return <svg {...iwSmall}><path d="M4 18 V12 M11 18 V5 M18 18 V9" /></svg> }

function NodesIcon() { return <svg {...iw}><circle cx="6" cy="5" r="2" /><circle cx="6" cy="17" r="2" /><circle cx="17" cy="11" r="2" /><path d="M6 7 V15" /><path d="M6 9 C6 11, 15 9, 15 11" /></svg> }
function FunnelIcon() { return <svg {...iw}><path d="M3 4 H19 L13 11.5 V17 L9 15 V11.5 Z" /></svg> }
function BrainIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 18 18" fill="none" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" stroke={iconColor}>
      <path d="M6.5 3.5 C4 3.5 3 5.5 3.5 7 C2 7.7 2 10 3.5 10.8 C3 12.3 4.5 14 6.3 13.5 C6.6 15 9.4 15 9.5 13.4 M11.5 3.5 C14 3.5 15 5.5 14.5 7 C16 7.7 16 10 14.5 10.8 C15 12.3 13.5 14 11.7 13.5 C11.4 15 9 15 9 13.4 V4.5" />
    </svg>
  )
}
function SearchIcon() { return <svg {...iw}><circle cx="9.5" cy="9.5" r="6" /><path d="M14 14 L19 19" /></svg> }
function PersonCheckIcon() {
  return (
    <svg {...iw}>
      <circle cx="9.5" cy="7" r="3.2" /><path d="M3.5 18 C4.5 14.3 6.8 13 9.5 13 C10.3 13 11.1 13.1 11.8 13.4" />
      <path d="M14 15.3 L16 17.3 L20 12.8" />
    </svg>
  )
}
function SendIcon() { return <svg {...iw}><path d="M3 11 L19 3.5 L12.5 19 L10 12.5 Z" /></svg> }
function RefreshIcon() { return <svg {...iw}><path d="M4.5 11 A6.5 6.5 0 0 1 17 8.3 M17.5 4 V8.3 H13.2" /><path d="M17.5 11 A6.5 6.5 0 0 1 5 13.7 M4.5 18 V13.7 H8.8" /></svg> }
function BookIcon() { return <svg {...iw}><path d="M11 5.5 C9.5 4.3 6.8 4 4.5 4.3 V16.3 C6.8 16 9.5 16.3 11 17.5 C12.5 16.3 15.2 16 17.5 16.3 V4.3 C15.2 4 12.5 4.3 11 5.5Z" /><path d="M11 5.5 V17.5" /></svg> }

function OpenAIMark() { return <svg width="26" height="26" viewBox="0 0 22 22" fill="none" stroke={iconColor} strokeWidth="1.4"><path d="M11 3.5 C13 3.5 14.7 4.8 15.3 6.6 M15.3 6.6 C17.2 7 18.5 8.7 18.5 10.7 C18.5 11.9 18 13 17.2 13.7 M17.2 13.7 C17.3 15.8 15.9 17.7 13.8 18.3 C12 18.9 10 18.4 8.7 17 M8.7 17 C6.7 17 5 15.7 4.4 13.9 M4.4 13.9 C2.5 13.5 1.2 11.8 1.2 9.8 C1.2 8.6 1.7 7.5 2.5 6.8 M2.5 6.8 C2.4 4.7 3.8 2.8 5.9 2.2 C7.7 1.6 9.7 2.1 11 3.5Z" /></svg> }
function AnthropicMark() { return <text x="0" y="18" fontSize="19" fontWeight="800" fill={iconColor} fontFamily="Georgia, serif">A</text> }
function SparkleMark() { return <svg width="24" height="24" viewBox="0 0 22 22" fill={iconColor} stroke="none"><path d="M11 1 C11.5 6 12 9 17 11 C12 13 11.5 16 11 21 C10.5 16 10 13 5 11 C10 9 10.5 6 11 1Z" /></svg> }
function DotsGridMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 22 22" fill={iconColor} stroke="none">
      {[4, 11, 18].flatMap((cx) => [4, 11, 18].map((cy) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" />))}
    </svg>
  )
}

interface Step {
  n: number
  x: number
  title: string
  subtitle: string
  icon: React.ReactNode
  dashed?: boolean
  fill?: string
}

const STEP_W = 80
const STEP_Y = 170
const STEP_H = 80

const STEPS: Step[] = [
  { n: 1, x: 150, title: 'Capture Leads', subtitle: '(Sources / Triggers)', icon: <NodesIcon /> },
  { n: 2, x: 290, title: 'Clean & Enrich Data', subtitle: '(Validation & Deduplication)', icon: <FunnelIcon /> },
  { n: 3, x: 430, title: 'Data Enrichment', subtitle: '(APIs / Databases)', icon: <DatabaseIcon /> },
  { n: 4, x: 570, title: 'AI Lead Intelligence', subtitle: '(LLM)', icon: <BrainIcon />, fill: stepHighlightFill },
  { n: 5, x: 710, title: 'Lead Scoring', subtitle: '(Fit & Intent)', icon: <SearchIcon /> },
  { n: 6, x: 850, title: 'Human Review', subtitle: '(Optional)', icon: <PersonCheckIcon />, dashed: true },
  { n: 7, x: 990, title: 'Outreach / Engagement', subtitle: '(Email / LinkedIn / SMS)', icon: <SendIcon />, dashed: true },
  { n: 8, x: 1130, title: 'Follow-up & Nurture', subtitle: '(Sequences / Reminders)', icon: <RefreshIcon /> },
  { n: 9, x: 1270, title: 'Conversion Tracking', subtitle: '(Meetings / Deals)', icon: <BarChartIcon /> },
]

const MEMORY_ITEMS = [
  { title: 'Lead Database', subtitle: '(Contacts & Companies)', icon: <DatabaseIcon />, dashed: false },
  { title: 'Enrichment Data', subtitle: '(Firmographic / Technographic)', icon: <DatabaseIcon />, dashed: true },
  { title: 'Knowledge Base', subtitle: '(ICP, Playbooks, FAQs)', icon: <BookIcon />, dashed: false },
  { title: 'Prompt Library', subtitle: '(Templates & Messages)', icon: <FileIcon />, dashed: true },
]

const INPUT_ICONS = [<GlobeIcon key="g" />, <LinkedInIcon key="l" />, <MailIcon key="m" />, <FileIcon key="f" />, <DatabaseIcon key="d" />]
const OUTPUT_ICONS = [<PersonCircleIcon key="p" />, <CheckCircleIcon key="c" />, <BarChartIcon key="b" />, <DatabaseIcon key="d" />, <MailIcon key="m" />]

export default function WorkflowDiagram() {
  const memoryTargets = [290 + 40, 570 + 40, 850 + 40, 1130 + 40] // step 2, 4, 6, 8 centers

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_25px_70px_rgba(0,0,0,0.55),0_0_50px_hsl(var(--primary)/0.1)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: 'radial-gradient(hsl(217 40% 45% / 0.3) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse 85% 85% at 50% 45%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 45%, black, transparent)',
        }}
      />
      <svg
        viewBox="0 0 1520 630"
        className="relative h-auto w-full"
        role="img"
        aria-label="AI lead intelligence pipeline: inputs flow through nine stages supported by LLM providers and a memory and knowledge layer, ending in outputs"
        fontFamily="Inter, ui-sans-serif, system-ui"
      >
        <defs>
          <filter id="soft-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <marker id="arrow-p" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke={primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
          <marker id="arrow-p-start" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M8 1L2 5L8 9" fill="none" stroke={primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* ---- INPUTS -> step 1 ---- */}
        <Wire d="M100 210 L150 210" delay={0} />
        {/* ---- main pipeline ---- */}
        {STEPS.slice(0, -1).map((s, i) => (
          <Wire key={s.n} d={`M${s.x + STEP_W} 210 L${STEPS[i + 1].x} 210`} delay={0.3 * (i + 1)} />
        ))}
        {/* ---- step 9 -> OUTPUTS ---- */}
        <Wire d="M1350 210 L1400 210" delay={3} />

        {/* ---- LLM providers <-> step 4 ---- */}
        <Wire d="M610 170 L610 100" dashed={false} double delay={1.2} />

        {/* ---- memory layer <-> steps 2, 4, 6, 8 ---- */}
        {memoryTargets.map((tx) => (
          <path key={tx} d={`M${tx} 430 L${tx} 250`} stroke={primary} strokeOpacity="0.4" strokeWidth="1.3" strokeDasharray="5 4" fill="none" markerEnd="url(#arrow-p)" markerStart="url(#arrow-p-start)" />
        ))}

        {/* ---- INPUTS panel ---- */}
        <Box x={10} y={65} w={90} h={30} fill={stepHighlightFill} glow={false} />
        <text x={55} y={85} fontSize="13" fontWeight="700" fill={foreground} textAnchor="middle">INPUTS</text>
        <Box x={10} y={105} w={90} h={230} />
        {INPUT_ICONS.map((icon, i) => (
          <g key={i} transform={`translate(${55 - 10} ${120 + i * 44})`}>{icon}</g>
        ))}

        {/* ---- OUTPUTS panel ---- */}
        <Box x={1400} y={65} w={90} h={30} fill={stepHighlightFill} glow={false} />
        <text x={1445} y={85} fontSize="13" fontWeight="700" fill={foreground} textAnchor="middle">OUTPUTS</text>
        <Box x={1400} y={105} w={90} h={230} />
        {OUTPUT_ICONS.map((icon, i) => (
          <g key={i} transform={`translate(${1445 - 10} ${120 + i * 44})`}>{icon}</g>
        ))}

        {/* ---- LLM Providers box ---- */}
        <Box x={490} y={10} w={240} h={90} dashed />
        <text x={610} y={32} fontSize="13" fontWeight="700" fill={foreground} textAnchor="middle">LLM Providers</text>
        <g transform="translate(516 46)"><OpenAIMark /></g>
        <g transform="translate(566 44)"><AnthropicMark /></g>
        <g transform="translate(604 46)"><SparkleMark /></g>
        <g transform="translate(646 46)"><DotsGridMark /></g>

        {/* ---- pipeline steps ---- */}
        {/* Labels sit above their box so they read "ahead of" the icon —
            except step 4, which keeps its label below since the LLM
            Providers connector already occupies the space above it. */}
        {STEPS.map((s) => {
          const labelBelow = s.n === 4
          const titleY = labelBelow ? STEP_Y + STEP_H + 24 : STEP_Y - 26
          const subtitleY = labelBelow ? STEP_Y + STEP_H + 42 : STEP_Y - 10
          return (
            <g key={s.n}>
              <Box x={s.x} y={STEP_Y} w={STEP_W} h={STEP_H} dashed={s.dashed} fill={s.fill ?? cardFill} />
              <g transform={`translate(${s.x + STEP_W / 2 - 15} ${STEP_Y + 40 - 15})`}>{s.icon}</g>
              <text x={s.x + STEP_W / 2} y={titleY} fontSize="11.5" fontWeight="700" fill={foreground} textAnchor="middle">
                {s.n}. {s.title}
              </text>
              <text x={s.x + STEP_W / 2} y={subtitleY} fontSize="11" fill={muted} textAnchor="middle">
                {s.subtitle}
              </text>
            </g>
          )
        })}

        {/* ---- Memory & Knowledge Layer ---- */}
        <Box x={280} y={430} w={940} h={150} glow={false} />
        <text x={750} y={455} fontSize="13" fontWeight="700" fill={foreground} textAnchor="middle" letterSpacing="0.5">
          MEMORY &amp; KNOWLEDGE LAYER
        </text>
        {MEMORY_ITEMS.map((m, i) => {
          const bx = 313 + i * 225
          return (
            <g key={m.title}>
              <Box x={bx} y={470} w={205} h={90} dashed={m.dashed} glow={false} />
              <g transform={`translate(${bx + 14} ${485})`}>{m.icon}</g>
              <text x={bx + 52} y={498} fontSize="11.5" fontWeight="700" fill={foreground}>{m.title}</text>
              <text x={bx + 52} y={513} fontSize="10" fill={muted}>
                <tspan x={bx + 52} dy="0">{m.subtitle}</tspan>
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
