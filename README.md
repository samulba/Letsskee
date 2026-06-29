# letsskee — Landing Page

Moderne, editoriale Landingpage für **letsskee** ([letsskee.app](https://letsskee.app)) —
die Social-/Meetup-App, mit der du echte Menschen für echte Pläne findest:
spontan, lokal, verifiziert.

## Design

- Warme, ruhige Palette auf einem Akzentton (kein Regenbogen-Gradient)
- Editorial-Typografie: **Fraunces** (Display) + **Inter** (Text)
- Dezente Film-Grain-Textur für Tiefe statt flachem Flat-Look
- Trust-first: eigene Sicherheits-Sektion, verifizierte Profile, DSGVO

## Tech-Stack

- **Vite 6** — Build-Tool & Dev-Server
- **React 18**
- **Tailwind CSS 4** (CSS-first Config via `@theme`)
- **Framer Motion** — dezente Scroll- & Entrance-Animationen
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
├── App.jsx                 # Komposition aller Sektionen
├── index.css               # Tailwind-Import, Theme-Tokens, Grain, Utilities
└── components/
    ├── Navbar.jsx          # Sticky Navbar (mit Mobile-Menü)
    ├── Hero.jsx            # Hero mit Headline & App-Preview
    ├── AppPreview.jsx      # Realistische App-UI mit Initial-Avataren
    ├── LogoMarquee.jsx     # Laufende Aktivitäten-Leiste
    ├── Features.jsx        # Bento-Layout mit Mini-Preview
    ├── HowItWorks.jsx      # 3-Schritte-Erklärung
    ├── Trust.jsx           # Sicherheit & Vertrauen
    ├── Categories.jsx      # Aktivitäten-Grid mit Live-Zählern
    ├── Testimonials.jsx    # Nutzerstimmen + Rating
    ├── CTA.jsx             # Waitlist-/Beta-Anmeldung
    ├── Footer.jsx
    ├── Logo.jsx            # SVG-Wordmark-Mark
    ├── SectionHeading.jsx  # Wiederverwendbare Section-Überschrift
    └── Reveal.jsx          # Reusable Scroll-Reveal-Wrapper
```

> Hinweis: Das Anmeldeformular ist aktuell ein Frontend-Demo (kein Backend angebunden).
