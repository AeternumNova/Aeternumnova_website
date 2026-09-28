'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const categories = ['All', 'Technology', 'Payments', 'Innovation', 'Africa', 'Product', 'Company'] as const
type Category = (typeof categories)[number]

const samples: { category: Exclude<Category, 'All'>; title: string; excerpt: string }[] = [
  { category: 'Technology', title: 'Designing infrastructure for low-connectivity environments', excerpt: 'Notes on building systems that stay useful when the network does not.' },
  { category: 'Payments', title: 'What financial inclusion actually requires', excerpt: 'Access is more than an account. A look at affordability, trust and reach.' },
  { category: 'Innovation', title: 'Why most of our ideas should never ship', excerpt: 'On using every stage of the process as a filter, not a formality.' },
  { category: 'Africa', title: 'Building from Nigeria, for the world', excerpt: 'Why starting close to the problem matters for long-term ambition.' },
  { category: 'Product', title: 'The shape of a unified wallet and merchant ecosystem', excerpt: 'How wallets, merchants and agents can share one network.' },
  { category: 'Company', title: 'One company, many possibilities', excerpt: 'How AeternumNova is structured to build more than one product.' },
]

export function InsightsList() {
  const [active, setActive] = useState<Category>('All')
  const items = active === 'All' ? samples : samples.filter((s) => s.category === active)

  return (
    <div>
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition-colors',
              active === c
                ? 'border-foreground bg-foreground text-background'
                : 'border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground',
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <li key={s.title} className="flex min-h-64 flex-col bg-background p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.category}</span>
              <span className="rounded-full border border-dashed border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Sample
              </span>
            </div>
            <h3 className="mt-10 text-balance text-xl font-medium leading-snug tracking-tight">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.excerpt}</p>
            <p className="mt-auto pt-8 text-xs text-muted-foreground">Coming soon</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
