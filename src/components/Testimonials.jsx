import { Star } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const quotes = [
  {
    text: 'Neu in den Bergen und keine Leute zum Fahren? Über letsskee hatte ich nach einem Wochenende eine feste Freeride-Crew.',
    name: 'Mara K.',
    role: 'Sölden · seit 2 Saisons dabei',
    initials: 'MK',
    tone: 'bg-[#13335a] text-accent',
  },
  {
    text: 'Endlich eine App nur fürs Fahren – kein Dating. Einfach Rider auf meinem Level treffen, genau das hat gefehlt.',
    name: 'Jonas L.',
    role: 'Zermatt · seit 1 Saison dabei',
    initials: 'JL',
    tone: 'bg-[#2a2f5c] text-accent-2',
  },
  {
    text: 'Spontan einen Powder-Day mit drei Fremden gefahren, die jetzt meine Stamm-Crew sind. Beste Saison ever.',
    name: 'Lea S.',
    role: 'Sankt Anton · seit 2 Saisons dabei',
    initials: 'LS',
    tone: 'bg-[#123a4d] text-accent',
  },
  {
    text: 'Als Snowboarder oft allein unterwegs – jetzt finde ich Park-Sessions und Après-Ski direkt im Gebiet.',
    name: 'Tobias R.',
    role: 'Garmisch · seit 1 Saison dabei',
    initials: 'TR',
    tone: 'bg-[#2c2a5e] text-accent-2',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Stimmen"
            title="Von den ersten Ridern geliebt."
          />
          <Reveal className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted">
              <span className="font-semibold text-cream">4,9</span> / 5 · 1.200+
              Bewertungen
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={(i % 2) * 0.08}>
              <figure className="card flex h-full flex-col p-7">
                <blockquote className="flex-1 text-[1.05rem] leading-relaxed text-sand">
                  “{q.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold ${q.tone}`}
                  >
                    {q.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cream">{q.name}</p>
                    <p className="text-xs text-muted">{q.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
