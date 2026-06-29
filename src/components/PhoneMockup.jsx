import { motion } from 'framer-motion'
import { Heart, MessageCircle, MapPin } from 'lucide-react'

const activities = [
  {
    emoji: '🧗',
    title: 'Bouldern heute Abend',
    meta: 'Boulderwelt · 18:30 · 3 dabei',
    accent: 'from-coral/30 to-rose/10',
  },
  {
    emoji: '☕',
    title: 'Coffee & Co-Work',
    meta: 'Kreuzberg · morgen · 5 dabei',
    accent: 'from-violet/30 to-rose/10',
  },
  {
    emoji: '🍜',
    title: 'Late-Night Ramen',
    meta: 'Mitte · 22:00 · 2 dabei',
    accent: 'from-rose/30 to-violet/10',
  },
]

export default function PhoneMockup() {
  return (
    <div className="relative">
      {/* Floating chips */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="glass absolute -left-16 top-44 z-20 hidden items-center gap-2 rounded-2xl px-4 py-3 lg:flex"
      >
        <span className="text-xl">🎟️</span>
        <div className="text-left">
          <p className="text-xs font-semibold">Indie-Konzert</p>
          <p className="text-[10px] text-white/50">+4 wollen mit</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="glass absolute -right-12 bottom-28 z-20 hidden items-center gap-2 rounded-2xl px-4 py-3 lg:flex"
      >
        <div className="flex -space-x-2">
          {['🟧', '🟪', '🟥'].map((c, i) => (
            <span
              key={i}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-soft text-[10px] ring-2 ring-ink"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="text-xs font-semibold">Match! 🎉</p>
      </motion.div>

      {/* Phone */}
      <div className="animate-float relative z-10 h-[560px] w-[280px] rounded-[2.8rem] border border-white/10 bg-ink-soft p-3 shadow-2xl shadow-black/50">
        <div className="absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-ink" />
        <div className="h-full w-full overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-ink-soft to-ink">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-6 text-[11px] text-white/60">
            <span>9:41</span>
            <span>letsskee</span>
            <span>●●●</span>
          </div>

          {/* Header */}
          <div className="px-5 pt-5">
            <p className="text-xs text-white/50">In deiner Nähe</p>
            <h3 className="font-display text-xl font-bold">Was geht heute?</h3>
          </div>

          {/* Cards */}
          <div className="mt-4 space-y-3 px-4">
            {activities.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.18, duration: 0.6 }}
                className={`rounded-2xl border border-white/10 bg-gradient-to-br ${a.accent} p-4`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink/60 text-xl">
                      {a.emoji}
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-tight">
                        {a.title}
                      </p>
                      <p className="mt-0.5 flex items-center gap-1 text-[11px] text-white/55">
                        <MapPin className="h-3 w-3" />
                        {a.meta}
                      </p>
                    </div>
                  </div>
                  <Heart className="h-4 w-4 text-rose" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom action */}
          <div className="absolute inset-x-0 bottom-5 px-4">
            <div className="flex items-center justify-between rounded-full bg-gradient-to-r from-coral via-rose to-violet px-5 py-3">
              <span className="text-sm font-semibold text-white">
                Eigenes Hangout starten
              </span>
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
