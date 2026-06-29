# letsskee — Landing Page

Moderne, animierte Landingpage für **letsskee** ([letsskee.app](https://letsskee.app)) —
die Social-/Meetup-App, mit der du Leute für alles findest, worauf du Lust hast.

## Tech-Stack

- **Vite 6** — Build-Tool & Dev-Server
- **React 18**
- **Tailwind CSS 4** (CSS-first Config via `@theme`)
- **Framer Motion** — Scroll- & Entrance-Animationen
- **lucide-react** — Icons

## Lokal starten

```bash
npm install
npm run dev
```

Die Seite läuft dann auf **http://localhost:5173**.

## Weitere Befehle

```bash
npm run build     # Production-Build nach dist/
npm run preview   # Production-Build lokal vorschauen
```

## Struktur

```
src/
├── App.jsx                 # Komposition aller Sektionen + Ambient-Glows
├── index.css               # Tailwind-Import, Theme-Tokens, Utilities, Keyframes
└── components/
    ├── Navbar.jsx          # Sticky Glass-Navbar (mit Mobile-Menü)
    ├── Hero.jsx            # Hero mit Headline & Phone-Mockup
    ├── PhoneMockup.jsx     # Animiertes App-Mockup mit Floating-Chips
    ├── LogoMarquee.jsx     # Endlos-laufende Aktivitäten-Leiste
    ├── Features.jsx        # 6 Feature-Karten
    ├── HowItWorks.jsx      # 3-Schritte-Erklärung
    ├── Categories.jsx      # Aktivitäten-Bento-Grid
    ├── Testimonials.jsx    # Nutzerstimmen
    ├── CTA.jsx             # Waitlist-/Beta-Anmeldung
    ├── Footer.jsx
    ├── Logo.jsx            # SVG-Logo
    └── Reveal.jsx          # Reusable Scroll-Reveal-Wrapper
```

> Hinweis: Das Anmeldeformular ist aktuell ein Frontend-Demo (kein Backend angebunden).
