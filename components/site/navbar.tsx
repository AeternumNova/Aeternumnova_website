'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'
import { ThemeToggle } from './theme-toggle'
import { mainNav } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) =>
    !href.includes('#') && (href === pathname || (href !== '/products' && pathname.startsWith(href + '/')))

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || open
          ? 'border-border bg-background/80 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'rounded-full px-3 py-2 text-sm transition-colors',
                  isActive(item.href)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-full border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5 lg:inline-flex"
          >
            Contact
          </Link>
          <Link
            href="/contact?topic=partnership"
            className="hidden h-9 items-center rounded-full bg-pay px-4 text-sm font-semibold text-pay-foreground transition-colors hover:bg-pay-bright sm:inline-flex"
          >
            Partner With Us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
      >
        <ul className="flex flex-col px-5 py-6 sm:px-8">
          {[...mainNav, { label: 'Careers', href: '/careers' }, { label: 'Contact', href: '/contact' }].map(
            (item) => (
              <li key={item.href} className="border-b border-border">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-2xl font-medium tracking-tight text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <div className="px-5 pb-10 sm:px-8">
          <Link
            href="/contact?topic=partnership"
            onClick={() => setOpen(false)}
            className="flex h-11 items-center justify-center rounded-full bg-pay text-sm font-semibold text-pay-foreground"
          >
            Partner With Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex h-11 items-center justify-center rounded-full border border-border text-sm font-medium text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
