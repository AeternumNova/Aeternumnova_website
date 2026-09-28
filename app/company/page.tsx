import type { Metadata } from 'next'
import { Eyebrow, PageHero, Section, SectionHeading, StatusBadge } from '@/components/site/primitives'
import { LinkButton } from '@/components/site/link-button'
import { Reveal } from '@/components/site/reveal'
import { ApproachSteps } from '@/components/sections/approach'
import { BrandArchitecture } from '@/components/visuals/brand-architecture'
import { CorporateRoadmap } from '@/components/pay/roadmap'
import { TeamGrid } from '@/components/site/team-grid'
import { CtaBand } from '@/components/site/cta-band'
import { MISSION, VISION } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Company | AeternumNova',
  description:
    'AeternumNova is a technology and innovation company building visionary products that solve meaningful real-world problems. Learn about our vision, mission, philosophy and team.',
}

const philosophy = [
  { title: 'Problems first', body: 'We start from real challenges people face, not from technology looking for a use.' },
  { title: 'People at the centre', body: 'Products are shaped by the people who will use them and the environments they live in.' },
  { title: 'Build for the long term', body: 'Infrastructure, security and reliability are designed in from the first line of code.' },
  { title: 'Honest ambition', body: 'We are ambitious about the future and precise about where we are today.' },
]

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="A technology company building for problems that matter."
        description="AeternumNova is a technology and innovation company. We build visionary products that solve meaningful real-world problems."
      />

      <Section id="vision" labelledBy="company-vision">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-2">
          <div className="bg-background p-6 sm:p-12">
            <Eyebrow>Vision</Eyebrow>
            <p id="company-vision" className="mt-8 text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              {VISION}
            </p>
          </div>
          <div id="mission" className="scroll-mt-20 bg-background p-6 sm:p-12">
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-8 text-pretty text-xl leading-relaxed text-muted-foreground sm:text-2xl">{MISSION}</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="company-philosophy">
        <SectionHeading id="company-philosophy" eyebrow="Philosophy" title="How we think about building." />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((p, i) => (
            <li key={p.title} className="bg-background p-6 sm:p-8">
              <Reveal delay={i * 0.06}>
                <span className="font-mono text-sm text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-10 text-xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="company-build" className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionHeading
            id="company-build"
            eyebrow="What We Build"
            title="Technology and innovation, expressed as products."
            description="AeternumNova sits above everything. Technology and innovation feed a portfolio of products. AeternumPay is the first, and future products will follow."
          />
          <BrandArchitecture />
        </div>
      </Section>

      <Section labelledBy="company-approach" className="border-t border-border">
        <SectionHeading id="company-approach" eyebrow="Our Approach" title="We start with problems, not products." />
        <div className="mt-14">
          <ApproachSteps />
        </div>
      </Section>

      <Section labelledBy="company-current" className="border-t border-border">
        <div className="flex flex-col gap-8 rounded-3xl border border-pay/25 bg-card p-6 sm:p-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow className="text-pay">Current Product</Eyebrow>
              <StatusBadge status="Currently Building" />
            </div>
            <h2 id="company-current" className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              AeternumPay
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our first product: building a more accessible and connected digital payment experience for Africa.
            </p>
          </div>
          <LinkButton href="/products/aeternumpay" variant="pay" arrow>
            Explore AeternumPay
          </LinkButton>
        </div>
      </Section>

      <Section labelledBy="company-future">
        <SectionHeading
          id="company-future"
          eyebrow="Future Direction"
          title="This is only the beginning."
          description="Over time, AeternumNova intends to build products across additional problem spaces. We'll name them when they're real."
        />
        <div className="mt-14">
          <CorporateRoadmap />
        </div>
      </Section>

      <Section id="leadership" labelledBy="company-team" className="border-t border-border">
        <SectionHeading id="company-team" eyebrow="Leadership & Team" title="The people building AeternumNova." />
        <div className="mt-14">
          <TeamGrid />
        </div>
      </Section>

      <CtaBand
        title="Build the future with us."
        description="We're building across engineering, product, design, cybersecurity, operations, finance and business development."
        primary={{ label: 'Join AeternumNova', href: '/careers' }}
        secondary={{ label: 'Contact', href: '/contact' }}
      />
    </>
  )
}
