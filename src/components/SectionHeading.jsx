import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, sub, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left' : 'mx-auto text-center'
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-cream sm:text-[2.9rem]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-muted">{sub}</p>}
    </Reveal>
  )
}
