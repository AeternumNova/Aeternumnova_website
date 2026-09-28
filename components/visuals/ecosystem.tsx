import { LogoMark } from '@/components/site/logo'
import { cn } from '@/lib/utils'

const quadrants = [
  { title: 'Products', items: ['AeternumPay', 'Future Products'], highlight: 'AeternumPay' },
  { title: 'Technology', items: ['Infrastructure', 'Security', 'Cloud', 'Data'] },
  { title: 'People', items: ['Users', 'Merchants', 'Businesses', 'Partners'] },
  { title: 'Impact', items: ['Financial Inclusion', 'Economic Opportunity', 'Innovation', 'Access'] },
]

function Quadrant({ q, className }: { q: (typeof quadrants)[number]; className?: string }) {
  return (
    <div className={cn('relative p-6 sm:p-8', className)}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{q.title}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {q.items.map((item) => (
          <li
            key={item}
            className={cn(
              'rounded-full border px-3 py-1.5 text-sm',
              item === q.highlight
                ? 'border-pay/40 bg-pay/10 text-foreground'
                : item === 'Future Products'
                  ? 'border-dashed border-foreground/15 text-muted-foreground'
                  : 'border-border bg-foreground/[0.03] text-foreground/90',
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Ecosystem() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
      <div className="relative grid md:grid-cols-2">
        <Quadrant q={quadrants[0]} className="border-b border-border md:border-r" />
        <Quadrant q={quadrants[1]} className="border-b border-border md:text-right [&_ul]:md:justify-end" />
        <Quadrant q={quadrants[2]} className="border-b border-border md:border-b-0 md:border-r" />
        <Quadrant q={quadrants[3]} className="md:text-right [&_ul]:md:justify-end" />
      </div>

      <div className="relative flex justify-center border-t border-border py-8 md:absolute md:inset-0 md:border-0 md:py-0 md:pointer-events-none md:items-center">
        <div className="flex flex-col items-center">
          <div className="relative flex size-28 items-center justify-center rounded-full border border-foreground/20 bg-background sm:size-36">
            <div className="flex flex-col items-center gap-2">
              <LogoMark className="size-9" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em]">AeternumNova</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
