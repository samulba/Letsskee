import Logo from './Logo'

const cols = [
  { title: 'Produkt', links: ['Features', 'So funktioniert’s', 'Aktivitäten', 'Beta'] },
  { title: 'Unternehmen', links: ['Über uns', 'Blog', 'Karriere', 'Presse'] },
  { title: 'Rechtliches', links: ['Datenschutz', 'AGB', 'Impressum', 'Cookies'] },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-line px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Logo className="h-7 w-7 text-cream" />
              <span className="text-[1.05rem] font-semibold tracking-tight text-cream">
                letsskee
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Finde deine Crew für den Berg. Powder-Days, Park & Après – gemeinsam.
            </p>
            <p className="mt-4 text-sm text-muted">
              <a
                href="mailto:hey@letsskee.app"
                className="text-sand transition-colors hover:text-cream"
              >
                hey@letsskee.app
              </a>
            </p>
            <div className="mt-5 flex gap-2">
              {['Instagram', 'TikTok', 'X'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-line px-3.5 py-1.5 text-xs text-muted transition-colors hover:border-sand/40 hover:text-cream"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-cream">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-cream"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} letsskee. Alle Rechte vorbehalten.</p>
          <p className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Made in den Alpen
          </p>
        </div>
      </div>
    </footer>
  )
}
