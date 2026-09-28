import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'pay' | 'ghost'

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  outline: 'border border-border bg-foreground/[0.02] text-foreground hover:bg-foreground/[0.06] hover:border-foreground/20',
  pay: 'bg-pay text-pay-foreground hover:bg-pay-bright',
  ghost: 'text-foreground hover:text-foreground/80 px-0',
}

export function LinkButton({
  href,
  children,
  variant = 'primary',
  arrow = false,
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  arrow?: boolean
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </Link>
  )
}
