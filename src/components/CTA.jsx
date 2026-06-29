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
    // Demo only – hier würde später die echte Anmeldung passieren.
    setSent(true)
  }

  return (
    <section id="waitlist" className="relative px-4 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 p-10 text-center sm:p-16">
          {/* gradient backdrop */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-coral/20 via-rose/15 to-violet/20" />
          <div className="absolute -top-24 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-rose/30 blur-[100px]" />

          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Sei von Anfang an dabei.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
            Sichere dir deinen Platz in der Private Beta von letsskee. Begrenzte
            Plätze pro Stadt – kein Spam, versprochen.
          </p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink"
            >
              <Check className="h-4 w-4" />
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
                className="w-full rounded-full border border-white/15 bg-ink/40 px-5 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-rose"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
              >
                Beitreten
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}

          <p className="mt-5 text-xs text-white/45">
            🔒 Wir nutzen deine Mail nur für den Beta-Launch.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
