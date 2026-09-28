import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={512}
      height={512}
      aria-hidden="true"
      className={cn('size-7 rounded-md object-cover', className)}
    />
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2.5 text-foreground', className)}
      aria-label="AeternumNova home"
    >
      <LogoMark />
      <span className="text-[15px] font-semibold uppercase tracking-[0.14em]">
        Aeternum<span className="font-medium text-muted-foreground">Nova</span>
      </span>
    </Link>
  )
}
