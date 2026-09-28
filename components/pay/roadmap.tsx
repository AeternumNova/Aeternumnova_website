import { payRoadmap } from '@/lib/site'
import { StatusBadge } from '@/components/site/primitives'
import { cn } from '@/lib/utils'

export function PayRoadmap() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
      {payRoadmap.map((p, i) => (
        <li key={p.phase} className="relative flex flex-col gap-6 bg-background p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                'flex size-8 items-center justify-center rounded-full border font-mono text-xs',
                i === 0 ? 'border-pay/50 bg-pay/10 text-pay' : 'border-border text-muted-foreground',
              )}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className={cn('h-px flex-1', i === 0 ? 'bg-pay' : 'bg-border')} aria-hidden="true" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.phase}</p>
            <h3 className="mt-2 text-xl font-medium tracking-tight">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
          <StatusBadge status={p.status} className="mt-auto self-start" />
        </li>
      ))}
    </ol>
  )
}

export function CorporateRoadmap() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Corporate direction</p>
      <div className="mt-8 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
        <div className="rounded-xl border border-foreground/25 bg-foreground px-5 py-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-background md:w-56">
          AeternumNova
        </div>
        <div className="mx-auto h-8 w-px bg-foreground/20 md:mx-0 md:h-px md:w-auto md:flex-1" aria-hidden="true" />
        <ul className="grid flex-[2] grid-cols-2 gap-3 sm:grid-cols-4">
          <li className="rounded-xl border border-pay/40 bg-pay/10 px-3 py-3 text-center text-sm">AeternumPay</li>
          {[1, 2, 3].map((n) => (
            <li key={n} className="rounded-xl border border-dashed border-foreground/15 px-3 py-3 text-center text-sm text-muted-foreground">
              Future Product
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        One company, multiple products. Future initiatives will be announced when they are ready. No dates are committed here.
      </p>
    </div>
  )
}
