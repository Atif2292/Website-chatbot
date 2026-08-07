import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Technologies from './components/Technologies'
import Solutions from './components/Solutions'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Insights from './components/Insights'
import AboutUs from './components/AboutUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import ConsultPopup from './components/ConsultPopup'
import OverviewPage from './components/pages/OverviewPage'
import DetailPage from './components/pages/DetailPage'
import ContactPage from './components/pages/ContactPage'
import NotFoundPage from './components/pages/NotFoundPage'
import ScrollToTop from './components/pages/ScrollToTop'
import { sitemap } from './data/sitemap'

// Homepage is left exactly as-is (hero + diagram included) per client sign-off.
function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Technologies />
      <Solutions />
      <Projects />
      <Testimonials />
      <Process />
      <Pricing />
      <Insights />
      <AboutUs />
      <ContactForm />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {sitemap.map((section) => (
            <Route
              key={section.slug}
              path={`/${section.slug}`}
              element={
                <OverviewPage
                  section={section}
                  layout={section.slug === 'products' ? 'scroll' : 'grid'}
                />
              }
            />
          ))}
          {sitemap.flatMap((section) =>
            section.children.map((child) => (
              <Route
                key={`${section.slug}/${child.slug}`}
                path={`/${section.slug}/${child.slug}`}
                element={<DetailPage section={section} item={child} />}
              />
            )),
          )}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
      <ConsultPopup />
    </>
  )
}
