import type { Metadata } from 'next'
import { Container, PageHero, Section, SectionHeading } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { InnovationField } from '@/components/visuals/innovation-field'
import { CtaBand } from '@/components/site/cta-band'

export const metadata: Metadata = {
  title: 'Innovation | AeternumNova',
  description:
    'Ideas become products. How AeternumNova moves from problem discovery through research, prototyping, engineering, testing, launch and scale.',
}

const stages = [
  { title: 'Problem Discovery', body: 'We look for meaningful, recurring problems: the kind people work around every day because nothing better exists.' },
  { title: 'Research', body: 'We study the people, markets, regulation and infrastructure around the problem before committing to a solution.' },
  { title: 'Prototyping', body: 'Fast, disposable experiments test whether an idea actually helps. Most ideas stop here, and that is by design.' },
  { title: 'Engineering', body: 'Ideas that survive are engineered properly: secure, reliable and built on shared AeternumNova infrastructure.' },
  { title: 'Testing', body: 'Products are tested with real users in real conditions, including the constraints they will actually face.' },
  { title: 'Launch', body: 'We launch deliberately, with clear communication about what is available and what is still coming.' },
  { title: 'Scale', body: 'Successful products are expanded to more people and markets, and what we learn feeds the next idea.' },
]

export default function InnovationPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovation"
        title="Ideas become products."
        description="AeternumNova is designed to keep exploring. AeternumPay came out of this process, and it's the same process that will produce whatever we build next."
      />

      <Section labelledBy="innovation-process">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="innovation-process"
              eyebrow="The Process"
              title="Seven stages from problem to scale."
              description="Every stage is a filter. Ideas only move forward when they've earned it."
            />
            <InnovationField className="mt-12 hidden aspect-square w-full max-w-sm lg:block" />
          </div>
          <ol className="relative flex flex-col">
            <span className="absolute bottom-6 left-[19px] top-6 w-px bg-border" aria-hidden="true" />
            {stages.map((s, i) => (
              <li key={s.title} className="relative pb-12 last:pb-0">
                <Reveal delay={0.04} className="flex gap-6">
                  <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{s.title}</h3>
                    <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <section className="border-y border-border bg-midnight py-20 sm:py-28" aria-labelledby="bigger-title">
        <Container>
          <p id="bigger-title" className="max-w-4xl text-balance text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            AeternumPay is the first product to come out of this process.{' '}
            <span className="text-muted-foreground">It won&apos;t be the last.</span>
          </p>
        </Container>
      </section>

      <CtaBand
        title="Have a problem worth solving?"
        description="We're interested in hearing from people who see problems up close: partners, researchers and communities."
        primary={{ label: 'Share an idea', href: '/contact?topic=general' }}
        secondary={{ label: 'Partner With Us', href: '/contact?topic=partnership' }}
      />
    </>
  )
}
