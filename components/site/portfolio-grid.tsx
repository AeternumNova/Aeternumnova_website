import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { portfolio, type PortfolioItem } from '@/lib/site'
import { StatusBadge } from './primitives'
import { cn } from '@/lib/utils'

function ProductCard({ item }: { item: PortfolioItem }) {
  const isLive = Boolean(item.href)
  const inner = (
    <>
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-muted-foreground">Product {item.index}</span>
        {isLive && (
          <ArrowUpRight
            className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            aria-hidden="true"
          />
        )}
      </div>
      <div
        className={cn(
          'my-10 flex size-14 items-center justify-center rounded-2xl border',
          isLive ? 'border-pay/40 bg-pay/10' : 'border-dashed border-foreground/15',
        )}
        aria-hidden="true"
      >
        <span className={cn('rounded-full', isLive ? 'size-3 bg-pay' : 'size-2 border border-foreground/30')} />
      </div>
      <div className="mt-auto">
        <h3 className={cn('text-2xl font-medium tracking-tight', !isLive && 'text-muted-foreground')}>{item.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{item.vertical ?? 'To be announced'}</p>
        <StatusBadge status={item.status} className="mt-5" />
      </div>
    </>
  )

  const base =
    'group flex min-h-80 flex-col rounded-2xl border p-6 transition-colors'

  return isLive ? (
    <Link href={item.href!} className={cn(base, 'border-pay/25 bg-card hover:border-pay/50')}>
      {inner}
    </Link>
  ) : (
    <div className={cn(base, 'border-dashed border-border bg-transparent')}>{inner}</div>
  )
}

export function PortfolioGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {portfolio.map((item) => (
        <li key={item.index} className="flex">
          <div className="flex-1 [&>*]:h-full">
            <ProductCard item={item} />
          </div>
        </li>
      ))}
    </ul>
  )
}
