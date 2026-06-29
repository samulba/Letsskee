const items = [
  '🧗 Bouldern',
  '☕ Coffee Dates',
  '🎾 Padel',
  '🍜 Foodie-Runs',
  '🎬 Kino',
  '🏃 Running Crew',
  '🎟️ Konzerte',
  '🎨 Museum Hops',
  '🍻 Afterwork',
  '🌅 Sunrise Hikes',
  '🎲 Game Nights',
  '🏄 Weekend Trips',
]

export default function LogoMarquee() {
  return (
    <section className="relative border-y border-white/5 py-6">
      <div className="mx-auto mb-2 max-w-6xl px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/40">
          Für alles, worauf man sonst niemanden findet
        </p>
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center gap-4 pr-4">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="glass whitespace-nowrap rounded-full px-5 py-2 text-sm text-white/75"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
