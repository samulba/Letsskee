export default function Logo({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff7a59" />
          <stop offset="0.5" stopColor="#ff4d8d" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#logoGrad)" />
      <path
        d="M20 40c0-10 7-16 14-16 5 0 9 3 9 8 0 9-15 6-15 13 0 3 3 5 7 5 3 0 6-1 8-3"
        fill="none"
        stroke="#0b0a14"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}
