# NeuralForge AI — Marketing Site

A React + TypeScript + Vite single-page site that combines:

- **Styling** from [neural-ai-1.base44.app](https://neural-ai-1.base44.app/) — dark navy theme
  (`hsl(222 47% 2%)` background), blue/purple/cyan palette, Space Grotesk + Inter +
  JetBrains Mono fonts, shadcn-style HSL CSS variables (see `src/index.css`).
- **Layout** from the [Brevon HTML template](https://ex-coders.com/html/brevon/) — topbar +
  nav, full-height hero with stat card, reasons grid, about statement, numbered services
  list, projects marquee, testimonials, 3-step process, pricing toggle, blog cards,
  newsletter CTA, 4-column footer.
- A **dummy chatbot** (bottom-right, `src/components/Chatbot.tsx`) modeled on the
  reference site's "Nexus Advisor" widget. It returns a canned reply — swap the
  `setTimeout` in `sendMessage` for a real API call when the backend is ready.

## Development

```bash
npm install
npm run dev
```

## Deploying to Vercel

```bash
npm i -g vercel   # if not installed
vercel            # from this directory
```

Or import the repo at vercel.com — Vercel auto-detects Vite. Build command
`npm run build`, output directory `dist`. No environment variables needed.
# Aurora-AI
