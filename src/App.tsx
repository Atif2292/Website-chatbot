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

export default function App() {
  return (
    <>
      <Header />
      <main>
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
      </main>
      <Footer />
      <Chatbot />
      <ConsultPopup />
    </>
  )
}
