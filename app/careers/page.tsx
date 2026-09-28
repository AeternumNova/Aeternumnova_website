import type { Metadata } from 'next'
import { BarChart3, Briefcase, Code2, Palette, Shield, Settings2, Wallet } from 'lucide-react'
import { PageHero, Section, SectionHeading } from '@/components/site/primitives'
import { LinkButton } from '@/components/site/link-button'
import { Reveal } from '@/components/site/reveal'
import { CtaBand } from '@/components/site/cta-band'

export const metadata: Metadata = {
  title: 'Careers | AeternumNova',
  description:
    'Build the future with AeternumNova. We are building products across engineering, product, design, cybersecurity, operations, finance and business development.',
}

const areas = [
  { icon: Code2, title: 'Engineering', example: 'Mobile, backend and infrastructure' },
  { icon: BarChart3, title: 'Product', example: 'Product management and research' },
  { icon: Palette, title: 'Design', example: 'Product and brand design' },
  { icon: Shield, title: 'Cybersecurity', example: 'Security engineering and analysis' },
  { icon: Settings2, title: 'Operations', example: 'Operations and people' },
  { icon: Wallet, title: 'Finance', example: 'Finance and accounting' },
  { icon: Briefcase, title: 'Business Development', example: 'Partnerships and growth' },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the future with us."
        description="AeternumNova is building products across multiple technology areas. We're looking for people who want to solve meaningful problems, starting with AeternumPay and continuing well beyond it."
      >
        <LinkButton href="/contact?topic=careers" arrow>
          Join AeternumNova
        </LinkButton>
      </PageHero>

      <Section labelledBy="careers-areas">
        <SectionHeading
          id="careers-areas"
          eyebrow="Where you could work"
          title="Seven areas. One company."
          description="No specific openings are listed yet. These are the areas we expect to grow. Reach out if you'd like to be considered."
        />
        <ul className="mt-14 flex flex-col border-t border-border">
          {areas.map(({ icon: Icon, title, example }, i) => (
            <li key={title} className="border-b border-border">
              <Reveal delay={i * 0.03} className="flex flex-wrap items-center gap-x-6 gap-y-2 py-6 sm:flex-nowrap">
                <Icon className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                <span className="w-full text-2xl font-medium tracking-tight sm:w-72 sm:text-3xl">{title}</span>
                <span className="flex-1 text-muted-foreground">{example}</span>
                <span className="rounded-full border border-dashed border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Placeholder · No open role yet
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Don't see your role?"
        description="Tell us what you'd bring. We read every message."
        primary={{ label: 'Join AeternumNova', href: '/contact?topic=careers' }}
        secondary={{ label: 'About the company', href: '/company' }}
      />
    </>
  )
}
