export default function Logo({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <circle cx="12" cy="16" r="8" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="20" cy="16" r="8" stroke="var(--color-accent)" strokeWidth="2.2" />
    </svg>
  )
}
