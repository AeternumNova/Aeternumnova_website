import Link from 'next/link'
import { Logo } from './logo'
import { TAGLINE } from '@/lib/site'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/company' },
      { label: 'Vision', href: '/company#vision' },
      { label: 'Mission', href: '/company#mission' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'AeternumPay', href: '/products/aeternumpay' },
      { label: 'All Products', href: '/products' },
    ],
  },
  {
    title: 'Innovation',
    links: [
      { label: 'Our Approach', href: '/#approach' },
      { label: 'Innovation', href: '/innovation' },
      { label: 'Insights', href: '/insights' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Partner', href: '/contact?topic=partnership' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-balance text-2xl font-medium leading-snug tracking-tight">{TAGLINE}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {col.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 AeternumNova. All rights reserved.</p>
          <p>Technology company · Starting in Africa, building for the world.</p>
        </div>
      </div>
    </footer>
  )
}
