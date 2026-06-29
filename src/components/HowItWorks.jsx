import Reveal from './Reveal'

const steps = [
  {
    num: '01',
    title: 'Sag, worauf du Lust hast',
    desc: 'Wähle eine Aktivität oder starte dein eigenes Hangout – von Bouldern bis Brunch.',
  },
  {
    num: '02',
    title: 'Match mit deiner Crew',
    desc: 'letsskee zeigt dir Leute in der Nähe mit demselben Plan. Ein Tap und ihr seid verbunden.',
  },
  {
    num: '03',
    title: 'Trefft euch – im echten Leben',
    desc: 'Chat, Treffpunkt, los. Aus der App raus, ins echte Leben rein.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet">
            So funktioniert’s
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            In <span className="text-gradient">3 Schritten</span> unter Leuten
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />

          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.12} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full glass">
                  <span className="text-gradient font-display text-3xl font-bold">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
