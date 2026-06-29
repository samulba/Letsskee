import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Trust from './components/Trust'
import Categories from './components/Categories'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <HowItWorks />
        <Trust />
        <Categories />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
