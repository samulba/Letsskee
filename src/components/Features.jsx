import { Zap, MapPin, Users, CalendarCheck } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const small = [
  {
    icon: MapPin,
    title: 'Echt lokal',
    desc: 'Nur Pläne aus deinem Kiez. Keine endlose Liste – das, was heute wirklich um die Ecke passiert.',
  },
  {
    icon: Users,
    title: 'Gleiche Wellenlänge',
    desc: 'Matching nach Interessen statt nach Aussehen. Du triffst Leute, mit denen es einfach passt.',
  },
  {
    icon: CalendarCheck,
    title: 'Von Idee zu Plan',
    desc: 'Chat, Treffpunkt, Uhrzeit – an einem Ort. Schluss mit dem WhatsApp-Gruppen-Chaos.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="left"
          eyebrow="Warum letsskee"
          title="Gebaut für echtes Treffen — nicht für endloses Swipen."
          sub="Dating-Apps gibt es genug. letsskee ist für alles dazwischen: gemeinsame Aktivitäten mit echten Menschen, ohne Druck und ohne Algorithmus-Spielchen."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {/* Hero feature */}
          <Reveal className="lg:col-span-3">
            <div className="card relative overflow-hidden p-8 sm:p-10">
              <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium text-cream">
                    Spontan statt drei Wochen Vorlauf
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted">
                    Lust auf jetzt? Poste ein Hangout und finde in Minuten Leute,
                    die mitkommen. Aus „man müsste mal“ wird heute Abend.
                  </p>
                </div>
                <div className="relative">
                  <div className="card flex items-center gap-3 bg-surface p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3a2e28] text-[11px] font-semibold text-accent-2">
                      LM
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-cream">
                        „Jemand spontan Padel um 19h?“
                      </p>
                      <p className="text-xs text-muted">Lea · vor 2 Min · Neukölln</p>
                    </div>
                    <span className="rounded-full bg-accent px-3 py-1.5 text-[11px] font-semibold text-white">
                      +3
                    </span>
                  </div>
                  <div className="mt-3 ml-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    In 4 Minuten zusammengefunden
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {small.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
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
