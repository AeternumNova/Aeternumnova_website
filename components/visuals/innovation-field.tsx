const rings = [
  { r: 150, dots: 3 },
  { r: 110, dots: 2 },
  { r: 70, dots: 2 },
]

export function InnovationField({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full text-foreground"
        role="img"
        aria-label="Abstract visual of ideas converging into a core"
      >
        {rings.map((ring, i) => (
          <g key={ring.r}>
            <circle
              cx="200"
              cy="200"
              r={ring.r}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.12}
              className="text-foreground"
            />
            {Array.from({ length: ring.dots }).map((_, d) => {
              const a = (d / ring.dots) * Math.PI * 2 + i
              return (
                <circle
                  key={d}
                  cx={200 + Math.cos(a) * ring.r}
                  cy={200 + Math.sin(a) * ring.r}
                  r={i === 2 ? 3 : 4}
                  className="fill-foreground"
                  fillOpacity={0.7 - i * 0.15}
                />
              )
            })}
          </g>
        ))}
        <circle cx="200" cy="200" r="30" className="fill-background" stroke="currentColor" strokeOpacity={0.35} />
        <circle cx="200" cy="200" r="6" className="fill-foreground" />
      </svg>
    </div>
  )
}
