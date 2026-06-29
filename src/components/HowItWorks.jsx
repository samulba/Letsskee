import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const steps = [
  {
    num: '01',
    title: 'Sag, worauf du Lust hast',
    desc: 'Wähle eine Aktivität oder starte dein eigenes Hangout – von Bouldern bis Brunch.',
  },
  {
    num: '02',
    title: 'Triff deine Crew',
    desc: 'letsskee zeigt dir verifizierte Leute in der Nähe mit demselben Plan. Ein Tap, und ihr seid verbunden.',
  },
  {
    num: '03',
    title: 'Seht euch – im echten Leben',
    desc: 'Treffpunkt klären, hingehen, loslegen. Raus aus der App, rein ins echte Leben.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="So funktioniert’s"
          title="In drei Schritten unter Leute."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1} className="bg-bg">
              <div className="h-full p-8 sm:p-9">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-medium text-accent">
                    {s.num}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-cream">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
