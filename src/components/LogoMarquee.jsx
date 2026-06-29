const items = [
  'Powder-Days',
  'Freeride',
  'Park & Pipe',
  'Carving',
  'Skitouren',
  'Backcountry',
  'Langlauf',
  'Après-Ski',
  'Night-Sessions',
  'Snowboard',
  'Tiefschnee',
  'Roadtrips',
]

export default function LogoMarquee() {
  return (
    <section className="relative border-y border-line py-5">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap text-sm font-medium tracking-wide text-sand/55"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-accent/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
