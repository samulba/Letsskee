import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const cats = [
  { label: 'Piste & Carving', desc: 'Genuss-Carven, Pistenflow', live: 34 },
  { label: 'Freeride & Backcountry', desc: 'Powder, Lines, Tiefschnee', live: 27 },
  { label: 'Park & Freestyle', desc: 'Kicker, Rails, Pipe', live: 18 },
  { label: 'Skitouren & Langlauf', desc: 'Aufstieg, Loipe, Ruhe', live: 14 },
  { label: 'Après-Ski & Hütte', desc: 'Einkehr, Drinks, Sonne', live: 39 },
  { label: 'Trips & Roadtrips', desc: 'Wochenenden, neue Gebiete', live: 11 },
]

export default function Categories() {
  return (
    <section id="categories" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Disziplinen"
          title="Egal wie du den Berg fährst."
          sub="Ob nervöser Anfänger oder alteingesessener Local – für deine Session ist immer jemand dabei."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => (
            <Reveal key={c.label} delay={(i % 3) * 0.06} className="bg-bg">
              <a
                href="#waitlist"
                className="group flex h-full flex-col justify-between gap-8 p-7 transition-colors hover:bg-surface"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                    {c.live} live
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-cream">
                    {c.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{c.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
