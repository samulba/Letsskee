import { motion } from 'framer-motion'
import { Check, MapPin } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

function Avatars({ people }) {
  return (
    <div className="flex -space-x-2">
      {people.map((p) => (
        <div
          key={p.i}
          className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-semibold ring-2 ring-surface ${p.tone}`}
        >
          {p.i}
        </div>
      ))}
    </div>
  )
}

const feed = [
  {
    title: 'Powder-Day Freeride',
    where: 'Gaislachkogl · heute 09:00',
    people: [
      { i: 'MK', tone: 'bg-[#3a2e28] text-accent-2' },
      { i: 'JL', tone: 'bg-[#2e2a3a] text-sand' },
      { i: 'AS', tone: 'bg-[#2a342e] text-sand' },
    ],
    note: 'Mara + 2 dabei',
    primary: true,
  },
  {
    title: 'Park-Session',
    where: 'Obergurgl Snowpark · 13:00',
    people: [
      { i: 'TR', tone: 'bg-[#342a2a] text-accent-2' },
      { i: 'NK', tone: 'bg-[#2e2a3a] text-sand' },
    ],
    note: 'Tobias + 1 dabei',
  },
]

export default function AppPreview() {
  return (
    <div className="relative w-full max-w-[340px]">
      {/* soft shadow plate */}
      <div className="absolute inset-x-6 bottom-0 top-10 -z-10 rounded-[2rem] bg-accent/5 blur-2xl" />

      <div className="overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-2xl shadow-black/60">
        {/* App header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <p className="text-[11px] text-muted">Heute am Berg</p>
            <p className="flex items-center gap-1.5 text-sm font-semibold text-cream">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              Sölden, Tirol
            </p>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-cream">
            <span className="text-base">＋</span>
          </div>
        </div>

        {/* Feed */}
        <div className="space-y-3 p-4">
          {feed.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.15, duration: 0.6, ease }}
              className={`rounded-2xl border p-4 ${
                c.primary
                  ? 'border-accent/30 bg-accent/[0.06]'
                  : 'border-line bg-surface-2'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-cream">
                    {c.title}
                    <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
                  </p>
                  <p className="mt-1 text-xs text-muted">{c.where}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatars people={c.people} />
                  <span className="text-[11px] text-muted">{c.note}</span>
                </div>
                {c.primary ? (
                  <span className="rounded-full bg-accent px-3.5 py-1.5 text-[11px] font-semibold text-white">
                    Mitmachen
                  </span>
                ) : (
                  <span className="rounded-full border border-line px-3.5 py-1.5 text-[11px] font-semibold text-cream">
                    Mitmachen
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-muted">
            <span className="h-1 w-1 rounded-full bg-accent" />
            14 weitere Sessions heute
          </div>
        </div>
      </div>

      {/* floating verified badge — single, purposeful */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-6 -left-10 hidden items-center gap-2 rounded-xl border border-line bg-bg px-3 py-2 shadow-xl shadow-black/50 lg:flex"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15">
          <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
        </div>
        <div className="leading-tight">
          <p className="text-[11px] font-semibold text-cream">Profil verifiziert</p>
          <p className="text-[10px] text-muted">Foto + Level geprüft</p>
        </div>
      </motion.div>
    </div>
  )
}
