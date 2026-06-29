import { Zap, ShieldCheck, MapPin, CalendarHeart, Users, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const features = [
  {
    icon: Zap,
    title: 'Spontan statt geplant',
    desc: 'Lust auf jetzt? Poste ein Hangout und finde in Minuten Leute, die mitkommen. Kein Wochen-im-Voraus-Planen.',
  },
  {
    icon: MapPin,
    title: 'Echt lokal',
    desc: 'Alles, was zählt, passiert in deiner Nähe. letsskee zeigt dir, was gerade in deiner Stadt läuft.',
  },
  {
    icon: Users,
    title: 'Gleiche Wellenlänge',
    desc: 'Smartes Matching nach Interessen & Vibe – du triffst Leute, mit denen es einfach passt.',
  },
  {
    icon: ShieldCheck,
    title: 'Sicher & verifiziert',
    desc: 'Verifizierte Profile, Bewertungen und ein Vibe-Check, damit du dich entspannt treffen kannst.',
  },
  {
    icon: CalendarHeart,
    title: 'Von Idee zu Plan',
    desc: 'Chat, Treffpunkt, Uhrzeit – alles an einem Ort. Kein WhatsApp-Gruppen-Chaos mehr.',
  },
  {
    icon: Sparkles,
    title: 'Neue Routinen',
    desc: 'Aus spontanen Treffen werden feste Crews. Deine Running-Gruppe, dein Game-Night-Squad.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Warum letsskee
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Weniger scrollen.
            <br />
            <span className="text-gradient">Mehr erleben.</span>
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Dating-Apps gibt’s genug. letsskee ist für alles dazwischen – echte
            Menschen, echte Aktivitäten, ohne Druck.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="group glass h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-coral/20 to-violet/20 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                  <f.icon className="h-6 w-6 text-rose" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
