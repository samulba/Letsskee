import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import AppPreview from './AppPreview'

const ease = [0.22, 1, 0.36, 1]
const up = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease },
  }),
}

const members = [
  { initials: 'MK', tone: 'bg-[#3a2e28] text-accent-2' },
  { initials: 'JL', tone: 'bg-[#2e2a3a] text-sand' },
  { initials: 'AS', tone: 'bg-[#2a342e] text-sand' },
  { initials: 'TR', tone: 'bg-[#342a2a] text-accent-2' },
]

export default function Hero() {
  return (
    <section id="top" className="relative px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
      {/* subtle warm radial behind hero */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 right-[8%] h-[440px] w-[440px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.div
            variants={up}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-sand"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Private Beta · jetzt in 12 Städten
          </motion.div>

          <motion.h1
            variants={up}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-7 font-display text-[2.75rem] font-medium leading-[1.04] tracking-[-0.02em] text-cream sm:text-6xl lg:text-[4.25rem]"
          >
            Finde{' '}
            <span className="italic text-accent">deine Leute</span>{' '}
            für alles, worauf du Lust hast.
          </motion.h1>

          <motion.p
            variants={up}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            Bouldern nach Feierabend, Sonntags-Brunch, spontan ins Konzert.
            letsskee verbindet dich mit{' '}
            <span className="text-cream">verifizierten Menschen</span> in deiner
            Nähe, die genau jetzt dasselbe vorhaben.
          </motion.p>

          <motion.div
            variants={up}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#waitlist"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-white"
            >
              Beta beitreten
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-sand/40"
            >
              So funktioniert’s
            </a>
          </motion.div>

          <motion.div
            variants={up}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {members.map((m) => (
                  <div
                    key={m.initials}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold ring-2 ring-bg ${m.tone}`}
                  >
                    {m.initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted">
                <span className="font-semibold text-cream">4.000+</span> Early
                Member
              </p>
            </div>
            <span className="hidden h-4 w-px bg-line sm:block" />
            <p className="inline-flex items-center gap-1.5 text-sm text-muted">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Verifiziert · keine Werbung · DSGVO-konform
            </p>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
          className="relative flex justify-center lg:justify-end"
        >
          <AppPreview />
        </motion.div>
      </div>
    </section>
  )
}
