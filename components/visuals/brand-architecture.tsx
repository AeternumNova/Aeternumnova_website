import { cn } from '@/lib/utils'

function Box({
  children,
  sub,
  tone = 'default',
  className,
}: {
  children: React.ReactNode
  sub?: string
  tone?: 'core' | 'default' | 'pay' | 'future'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-xl border px-4 py-3 text-center',
        tone === 'core' && 'border-foreground/30 bg-foreground text-background',
        tone === 'default' && 'border-border bg-card',
        tone === 'pay' && 'border-pay/40 bg-pay/10',
        tone === 'future' && 'border-dashed border-foreground/15 bg-transparent text-muted-foreground',
        className,
      )}
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em]">{children}</span>
      {sub && (
        <span className={cn('mt-1 text-[11px]', tone === 'pay' ? 'text-pay' : 'text-muted-foreground')}>{sub}</span>
      )}
    </div>
  )
}

function Stem({ className }: { className?: string }) {
  return <div className={cn('mx-auto h-8 w-px bg-foreground/20', className)} aria-hidden="true" />
}

function Split({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative mx-auto h-8 w-[calc(50%+0.5rem)]" aria-hidden="true">
      <div className={cn('absolute inset-x-0 h-px bg-foreground/20', flip ? 'bottom-0' : 'top-0')} />
      <div className="absolute left-0 top-0 h-full w-px bg-foreground/20" />
      <div className="absolute right-0 top-0 h-full w-px bg-foreground/20" />
    </div>
  )
}

export function BrandArchitecture({ className }: { className?: string }) {
  return (
    <figure className={cn('mx-auto w-full max-w-xl', className)}>
      <div className="flex flex-col">
        <Box tone="core" className="mx-auto w-full max-w-56">AeternumNova</Box>
        <Stem />
        <Split />
        <div className="grid grid-cols-2 gap-4">
          <Box>Technology</Box>
          <Box>Innovation</Box>
        </div>
        <Split flip />
        <Stem />
        <Box className="mx-auto w-full max-w-44">Products</Box>
        <Stem />
        <Split />
        <div className="grid grid-cols-2 gap-4">
          <Box tone="pay" sub="Currently Building">AeternumPay</Box>
          <Box tone="future" sub="To be announced">Future Products</Box>
        </div>
      </div>
      <figcaption className="sr-only">
        Brand hierarchy: AeternumNova leads Technology and Innovation, which power Products. Products include AeternumPay, currently being built, and future products.
      </figcaption>
    </figure>
  )
}
