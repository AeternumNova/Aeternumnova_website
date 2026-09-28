import { LogoMark } from '@/components/site/logo'

const ringDots = Array.from({ length: 5 }, (_, i) => {
  const a = (i / 5) * Math.PI * 2 - Math.PI / 2
  return { x: 50 + Math.cos(a) * 40, y: 50 + Math.sin(a) * 40 }
})

export function HeroNetwork() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[480px]"
      role="img"
      aria-label="Abstract visual of the AeternumNova ecosystem"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full text-foreground" aria-hidden="true">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="13" fill="none" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.3" />
        {ringDots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="0.9" className="fill-foreground" fillOpacity="0.3" />
        ))}
        <g className="animate-orbit">
          <circle cx="90" cy="50" r="2.8" fill="var(--pay)" fillOpacity="0.18" />
          <circle cx="90" cy="50" r="1.3" fill="var(--pay)" />
        </g>
        <g className="animate-orbit-slow">
          <circle cx="76" cy="50" r="1" fill="var(--pay)" fillOpacity="0.6" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="relative flex size-20 items-center justify-center rounded-full border border-foreground/20 bg-background sm:size-24">
          <LogoMark className="size-10 sm:size-12" />
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground sm:text-xs">
          AeternumNova
        </p>
      </div>
    </div>
  )
}
