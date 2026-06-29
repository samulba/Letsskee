import { Star } from 'lucide-react'
import Reveal from './Reveal'

const quotes = [
  {
    text: 'Bin neu nach Berlin gezogen und hatte nach zwei Wochen schon eine feste Boulder-Crew. letsskee hat mein Sozialleben gerettet.',
    name: 'Mara, 27',
    role: 'Berlin',
    avatar: '🧗‍♀️',
  },
  {
    text: 'Endlich eine App, die nicht ums Daten geht. Einfach Leute treffen, die dieselben Sachen mögen. Genau das hat gefehlt.',
    name: 'Jonas, 31',
    role: 'Hamburg',
    avatar: '🎬',
  },
  {
    text: 'Spontan abends Ramen essen mit drei Fremden, die jetzt Freunde sind. Klingt random, ist aber das Beste an der Stadt.',
    name: 'Lea, 24',
    role: 'München',
    avatar: '🍜',
  },
  {
    text: 'Als Freelancer arbeite ich allein – über letsskee finde ich Co-Working-Buddies und Afterwork. Game changer.',
    name: 'Tobias, 29',
    role: 'Köln',
    avatar: '💼',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-rose text-rose" />
            ))}
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Geliebt von <span className="text-gradient">Early Birds</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={(i % 2) * 0.08}>
              <figure className="glass h-full rounded-3xl p-7">
                <blockquote className="text-lg leading-relaxed text-white/85">
                  “{q.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-coral/30 to-violet/30 text-xl ring-1 ring-white/10">
                    {q.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{q.name}</p>
                    <p className="text-xs text-white/50">{q.role}</p>
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
