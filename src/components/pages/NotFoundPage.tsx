import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-32 text-center">
      <p className="section-eyebrow mb-4">404</p>
      <h1 className="mb-4 font-heading text-3xl font-bold md:text-5xl">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="btn-gradient">
        Back to Home
      </Link>
    </section>
  )
}
