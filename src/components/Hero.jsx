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
  { initials: 'MK', tone: 'bg-[#13335a] text-accent' },
  { initials: 'JL', tone: 'bg-[#2a2f5c] text-accent-2' },
  { initials: 'AS', tone: 'bg-[#123a4d] text-accent' },
  { initials: 'TR', tone: 'bg-[#2c2a5e] text-accent-2' },
]

export default function Hero() {
  return (
    <section id="top" className="relative px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
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
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            Private Beta · jetzt in 12 Skigebieten
          </motion.div>

          <motion.h1
            variants={up}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-7 font-display text-[2.85rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-cream sm:text-6xl lg:text-[4.5rem]"
          >
            Finde{' '}
            <span className="text-energetic">deine Crew</span>{' '}
            für den Berg.
          </motion.h1>

          <motion.p
            variants={up}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            Powder-Days, Freeride-Lines, Park-Sessions oder Après-Ski. letsskee
            verbindet dich mit{' '}
            <span className="text-cream">verifizierten Ridern</span> in deinem
            Skigebiet, die genau jetzt dasselbe vorhaben.
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
              className="btn-energetic group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-[1.04]"
            >
              Beta beitreten
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface/50 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-accent/50 hover:text-accent"
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
                <span className="font-semibold text-cream">4.000+</span> Rider
                dabei
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
