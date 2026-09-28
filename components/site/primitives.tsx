import { cn } from '@/lib/utils'

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8', className)}>{children}</div>
}

export function Section({
  id,
  className,
  children,
  labelledBy,
}: {
  id?: string
  className?: string
  children: React.ReactNode
  labelledBy?: string
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('scroll-mt-24 py-28 sm:py-36', className)}>
      <Container>{children}</Container>
    </section>
  )
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground',
        className,
      )}
    >
      <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  id?: string
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <Eyebrow className={cn(align === 'center' && 'justify-center')}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

type Status = 'Currently Building' | 'Currently in Development' | 'Planned' | 'Coming Soon' | 'Exploration' | 'Coming Through AeternumNova' | 'Illustrative'

export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  const active = status === 'Currently Building' || status === 'Currently in Development'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider',
        active ? 'border-pay/30 bg-pay/10 text-pay' : 'border-border bg-foreground/[0.03] text-muted-foreground',
        className,
      )}
    >
      <span className="relative flex size-1.5" aria-hidden="true">
        <span className={cn('relative size-1.5 rounded-full', active ? 'bg-pay' : 'bg-muted-foreground/60')} />
      </span>
      {status}
    </span>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  accent = 'corporate',
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  accent?: 'corporate' | 'pay'
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-px',
          accent === 'pay' ? 'bg-pay' : 'bg-foreground/20',
        )}
        aria-hidden="true"
      />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {description}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </Container>
    </section>
  )
}

export function DemoLabel({ children = 'Illustrative product mockup · Demo data' }: { children?: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      {children}
    </p>
  )
}
