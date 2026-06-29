// Subtle, performant snowfall — a fixed handful of flakes, no JS animation.
const flakes = Array.from({ length: 22 }, (_, i) => i)

export default function Snow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {flakes.map((i) => {
        const left = (i * 47) % 100
        const size = 2 + (i % 3)
        const duration = 10 + (i % 7)
        const delay = (i * 1.7) % 12
        const opacity = 0.12 + (i % 4) * 0.07
        return (
          <span
            key={i}
            className="snowflake"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDuration: `${duration}s`,
              animationDelay: `-${delay}s`,
            }}
          />
        )
      })}
    </div>
  )
}
