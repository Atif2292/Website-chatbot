import WorkflowDiagram from './WorkflowDiagram'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-20 pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--border) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="animate-hero-in mx-auto mb-8 max-w-6xl text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Transforming enterprises with the power of AI
          </h1>
        </div>

        <div
          className="animate-hero-in mx-auto w-full max-w-6xl"
          style={{ animationDelay: '200ms' }}
        >
          <WorkflowDiagram />
        </div>
      </div>
    </section>
  )
}
