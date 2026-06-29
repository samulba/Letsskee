import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Categories from './components/Categories'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-clip">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-rose/20 blur-[140px]" />
        <div className="absolute top-[40%] -left-40 h-[420px] w-[420px] rounded-full bg-violet/20 blur-[130px]" />
        <div className="absolute top-[70%] right-0 h-[460px] w-[460px] rounded-full bg-coral/15 blur-[140px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <HowItWorks />
        <Categories />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
