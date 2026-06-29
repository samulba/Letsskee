import Reveal from './Reveal'

const cats = [
  { emoji: '🧗', label: 'Sport & Move', span: 'sm:col-span-2', grad: 'from-coral/25 to-rose/5' },
  { emoji: '🍜', label: 'Food & Drinks', span: '', grad: 'from-rose/25 to-violet/5' },
  { emoji: '🎟️', label: 'Events & Kultur', span: '', grad: 'from-violet/25 to-coral/5' },
  { emoji: '🌅', label: 'Outdoor & Trips', span: 'sm:col-span-2', grad: 'from-violet/25 to-rose/5' },
  { emoji: '🎲', label: 'Chill & Games', span: '', grad: 'from-coral/25 to-violet/5' },
  { emoji: '💼', label: 'Work & Network', span: '', grad: 'from-rose/25 to-coral/5' },
]

export default function Categories() {
  return (
    <section id="categories" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            Aktivitäten
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Wofür auch immer du <span className="text-gradient">brennst</span>
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Egal ob nervöser Newbie oder alteingesessener Local – hier ist immer
            jemand für deinen Plan dabei.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {cats.map((c, i) => (
            <Reveal
              key={c.label}
              delay={(i % 4) * 0.06}
              className={`${c.span} group`}
            >
              <div
                className={`relative h-40 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${c.grad} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25`}
              >
                <span className="text-4xl transition-transform duration-300 group-hover:scale-125">
                  {c.emoji}
                </span>
                <h3 className="absolute bottom-6 left-6 font-display text-xl font-semibold">
                  {c.label}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
