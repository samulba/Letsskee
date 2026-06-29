import Logo from './Logo'

const cols = [
  {
    title: 'Produkt',
    links: ['Features', 'So funktioniert’s', 'Aktivitäten', 'Beta'],
  },
  {
    title: 'Unternehmen',
    links: ['Über uns', 'Blog', 'Karriere', 'Presse'],
  },
  {
    title: 'Rechtliches',
    links: ['Datenschutz', 'AGB', 'Impressum', 'Cookies'],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="font-display text-lg font-bold tracking-tight">
                lets<span className="text-gradient">skee</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/55">
              Finde Leute für alles, worauf du Lust hast. Spontan, lokal, echt.
            </p>
            <div className="mt-5 flex gap-3">
              {['Instagram', 'TikTok', 'X'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="glass flex h-9 items-center justify-center rounded-full px-4 text-xs text-white/70 transition-colors hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} letsskee. Made with ♥ für mehr echtes Leben.</p>
          <p>letsskee.app</p>
        </div>
      </div>
    </footer>
  )
}
