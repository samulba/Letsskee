import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, MapPin, Users } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative px-4 pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/80 lg:mx-0"
          >
            <Sparkles className="h-3.5 w-3.5 text-rose" />
            Jetzt in der Private Beta
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Finde Leute für
            <br />
            <span className="text-gradient">alles</span>, worauf du
            <br className="hidden sm:block" /> Lust hast.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mx-auto mt-6 max-w-xl text-lg text-white/65 lg:mx-0"
          >
            Bouldern, Kaffee, Late-Night-Ramen oder ein spontanes Konzert –
            <span className="text-white"> letsskee </span>
            verbindet dich mit echten Menschen in deiner Nähe. Spontan, lokal,
            ohne Smalltalk-Stress.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start sm:justify-center"
          >
            <a
              href="#waitlist"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral via-rose to-violet px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose/25 transition-transform hover:scale-[1.03]"
            >
              Beta-Zugang sichern
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              So funktioniert’s
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex items-center justify-center gap-6 text-sm text-white/55 lg:justify-start"
          >
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-rose" />
              <span>
                <span className="font-semibold text-white">12.000+</span> auf der
                Warteliste
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-violet" />
              <span>
                <span className="font-semibold text-white">40+</span> Städte
              </span>
            </div>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex justify-center"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}
