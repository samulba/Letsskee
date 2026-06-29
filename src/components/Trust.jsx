import { BadgeCheck, Lock, Mountain, Flag } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const pillars = [
  {
    icon: BadgeCheck,
    title: 'Verifizierte Profile',
    desc: 'Jedes Profil wird mit Foto und Ausweis geprüft. Du weißt, mit wem du fährst.',
  },
  {
    icon: Mountain,
    title: 'Level & Bewertungen',
    desc: 'Können und Fahrstil sind sichtbar – damit ihr zusammenpasst und niemand auf der falschen Piste landet.',
  },
  {
    icon: Lock,
    title: 'Privacy-first',
    desc: 'Deine Daten gehören dir. DSGVO-konform, Server in der EU, kein Verkauf an Dritte.',
  },
  {
    icon: Flag,
    title: 'Melden & blockieren',
    desc: 'Bewertungen nach jeder Session und ein Klick zum Melden. Ein Team prüft jeden Hinweis.',
  },
]

export default function Trust() {
  return (
    <section id="trust" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Sicherheit & Vertrauen"
            title="Mit Fremden am Berg fahren sollte sich sicher anfühlen."
            sub="Deshalb ist Vertrauen bei letsskee kein Feature, sondern die Grundlage. So sorgen wir dafür, dass du dich entspannt mit neuen Ridern treffen kannst."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="card h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-2">
                    <p.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-cream">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
