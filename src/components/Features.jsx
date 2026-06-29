import { Zap, MapPin, Users, CalendarCheck } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const small = [
  {
    icon: MapPin,
    title: 'Direkt im Skigebiet',
    desc: 'Nur Sessions aus deinem Gebiet. Keine endlose Liste – das, was heute wirklich am Berg läuft.',
  },
  {
    icon: Users,
    title: 'Gleiches Level, gleicher Stil',
    desc: 'Matching nach Können und Fahrstil. Vom Genuss-Carver bis Freerider – du triffst Leute, bei denen das Tempo passt.',
  },
  {
    icon: CalendarCheck,
    title: 'Von Idee zu Abfahrt',
    desc: 'Treffpunkt an der Bergstation, Uhrzeit, Lift – alles an einem Ort. Schluss mit dem WhatsApp-Chaos.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="left"
          eyebrow="Warum letsskee"
          title="Gebaut fürs gemeinsame Fahren — nicht für endloses Swipen."
          sub="letsskee bringt dich mit Ridern zusammen, die genau jetzt auf den Berg wollen. Echte Sessions, gleiches Level, ohne Druck."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {/* Hero feature */}
          <Reveal className="min-w-0 lg:col-span-3">
            <div className="card relative overflow-hidden p-6 sm:p-10">
              <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <div className="min-w-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium text-cream">
                    Spontan statt allein am Lift
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted">
                    Lust auf jetzt? Poste eine Session und finde in Minuten Rider,
                    die mitkommen. Aus „müsste mal wieder“ wird heute am Berg.
                  </p>
                </div>
                <div className="min-w-0">
                  <div className="card bg-surface p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#13335a] text-[11px] font-semibold text-accent">
                        LM
                      </div>
                      <p className="min-w-0 flex-1 text-sm font-medium text-cream">
                        „Jemand spontan Powder in Ischgl?“
                      </p>
                      <span className="shrink-0 rounded-full bg-accent px-3 py-1.5 text-[11px] font-semibold text-white">
                        +3
                      </span>
                    </div>
                    <p className="mt-1.5 pl-12 text-xs text-muted">
                      Lea · vor 2 Min · Sölden
                    </p>
                  </div>
                  <div className="mt-3 ml-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    In 4 Minuten zusammengefunden
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {small.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07} className="min-w-0">
              <div className="card group h-full p-7 transition-colors hover:border-sand/25">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2">
                  <f.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-cream">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
