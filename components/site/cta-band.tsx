import { Container } from './primitives'
import { LinkButton } from './link-button'

export function CtaBand({
  title = 'Have an idea, partnership, or opportunity?',
  description = 'We work with partners, investors and talent who want to build technology for problems that matter.',
  primary = { label: 'Partner With Us', href: '/contact?topic=partnership' },
  secondary = { label: 'Contact', href: '/contact' },
}: {
  title?: string
  description?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="py-28 sm:py-36" aria-labelledby="cta-title">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-midnight px-6 py-16 sm:px-12 sm:py-24">
          <div className="relative max-w-3xl">
            <h2 id="cta-title" className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <LinkButton href={primary.href} arrow>
                {primary.label}
              </LinkButton>
              <LinkButton href={secondary.href} variant="outline">
                {secondary.label}
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
