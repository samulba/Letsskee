import Navbar from './components/Navbar'
import Snow from './components/Snow'
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
      {/* Cool aurora glows */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-40 right-[6%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[150px]" />
        <div className="absolute top-[45%] -left-40 h-[480px] w-[480px] rounded-full bg-blue/15 blur-[150px]" />
        <div className="absolute top-[78%] right-[12%] h-[420px] w-[420px] rounded-full bg-mint/10 blur-[150px]" />
      </div>

      <Snow />

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
