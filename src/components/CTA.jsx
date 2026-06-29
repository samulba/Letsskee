import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from './Reveal'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    // Demo: hier würde später die echte Anmeldung passieren.
    setSent(true)
  }

  return (
    <section id="waitlist" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-4xl">
        <div className="card relative overflow-hidden p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-accent/15 blur-[100px]" />

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Private Beta
          </p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-cream sm:text-5xl">
            Sei von Anfang an dabei.
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
            Sichere dir deinen Platz – begrenzte Plätze pro Stadt. Kein Spam,
            jederzeit kündbar.
          </p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-surface-2 px-6 py-3.5 text-sm font-semibold text-cream"
            >
              <Check className="h-4 w-4 text-accent" strokeWidth={3} />
              Du bist auf der Liste! Wir melden uns.
            </motion.div>
          ) : (
            <form
              onSubmit={submit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="w-full rounded-full border border-line bg-bg px-5 py-3.5 text-sm text-cream placeholder-muted outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-white"
              >
                Beitreten
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
              Kostenlos in der Beta
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
              DSGVO-konform
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
              Kein Spam
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
