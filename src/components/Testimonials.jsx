import { Star } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const quotes = [
  {
    text: 'Bin neu nach Berlin gezogen und hatte nach zwei Wochen schon eine feste Boulder-Crew. letsskee hat mein Sozialleben gerettet.',
    name: 'Mara K.',
    role: 'Berlin · seit 4 Monaten dabei',
    initials: 'MK',
    tone: 'bg-[#3a2e28] text-accent-2',
  },
  {
    text: 'Endlich eine App, die nicht ums Daten geht. Einfach Leute treffen, die dieselben Sachen mögen – genau das hat gefehlt.',
    name: 'Jonas L.',
    role: 'Hamburg · seit 6 Monaten dabei',
    initials: 'JL',
    tone: 'bg-[#2e2a3a] text-sand',
  },
  {
    text: 'Spontan abends Ramen mit drei Fremden, die jetzt Freunde sind. Klingt random, ist aber das Beste an der Stadt geworden.',
    name: 'Lea S.',
    role: 'München · seit 3 Monaten dabei',
    initials: 'LS',
    tone: 'bg-[#2a342e] text-sand',
  },
  {
    text: 'Als Freelancer arbeite ich allein – über letsskee finde ich Co-Working-Buddies und Afterwork. Hat meinen Alltag verändert.',
    name: 'Tobias R.',
    role: 'Köln · seit 5 Monaten dabei',
    initials: 'TR',
    tone: 'bg-[#342a2a] text-accent-2',
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
            title="Von den ersten Mitgliedern geliebt."
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
