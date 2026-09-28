import { Check, Globe2, MapPin, Target, Users } from 'lucide-react'
import { Container, Section, SectionHeading, StatusBadge, Eyebrow } from '@/components/site/primitives'
import { LinkButton } from '@/components/site/link-button'
import { Reveal } from '@/components/site/reveal'
import { ApproachSteps } from '@/components/sections/approach'
import { payCapabilities } from '@/components/sections/pay-sections'
import { Ecosystem } from '@/components/visuals/ecosystem'
import { InnovationField } from '@/components/visuals/innovation-field'
import { TechLayerGrid } from '@/components/sections/tech-layer'
import { BrandArchitecture } from '@/components/visuals/brand-architecture'
import { PortfolioGrid } from '@/components/site/portfolio-grid'
import { TeamGrid } from '@/components/site/team-grid'
import { MISSION, VISION } from '@/lib/site'

const principles = ['Identify the problem.', 'Understand the people.', 'Build the technology.', 'Create the impact.']

export function CompanyStatement() {
  return (
    <section className="border-y border-border bg-midnight py-28 sm:py-36" aria-labelledby="statement-title">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>The Company</Eyebrow>
            <h2 id="statement-title" className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              One company. Many possibilities.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              AeternumNova exists to create technology that addresses meaningful problems across industries. Our
              approach is simple:
            </p>
          </div>
          <ol className="flex flex-col">
            {principles.map((p, i) => (
              <li key={p} className="border-b border-border first:border-t">
                <Reveal delay={i * 0.08} className="flex items-baseline gap-6 py-6 sm:py-8">
                  <span className="font-mono text-sm text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-2xl font-medium tracking-tight sm:text-4xl">{p}</span>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}

export function FirstProduct() {
  return (
    <Section id="what-we-build" labelledBy="first-product-title" className="border-y border-border bg-midnight">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow className="text-pay">Our First Product</Eyebrow>
            <StatusBadge status="Currently in Development" />
          </div>
          <h2
            id="first-product-title"
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          >
            AeternumPay
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-xl leading-relaxed text-muted-foreground">
            A digital payments platform built around financial inclusion and a more connected payment
            ecosystem, starting in Africa.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton href="/products/aeternumpay" variant="pay" arrow>
              Explore AeternumPay
            </LinkButton>
            <LinkButton href="/products" variant="outline">
              View All Products
            </LinkButton>
          </div>
        </div>
        <div className="lg:pt-2">
          <p className="text-muted-foreground">Designed around:</p>
          <ul className="mt-6 flex flex-col divide-y divide-border border-y border-border">
            {payCapabilities.map((c) => (
              <li key={c} className="flex items-center gap-3 py-3.5">
                <Check className="size-4 shrink-0 text-pay" aria-hidden="true" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            These are the capabilities AeternumPay is being designed around. Not every capability is live yet.
          </p>
        </div>
      </div>
    </Section>
  )
}

export function OurApproach() {
  return (
    <Section id="approach" labelledBy="approach-title">
      <SectionHeading id="approach-title" eyebrow="Our Approach" title="We start with problems, not products." />
      <div className="mt-14">
        <ApproachSteps />
      </div>
    </Section>
  )
}

export function TechnologyLayer() {
  return (
    <section className="border-y border-border bg-midnight py-28 sm:py-36" aria-labelledby="tech-title">
      <Container>
        <SectionHeading
          id="tech-title"
          eyebrow="Technology"
          title="Behind every product is infrastructure."
          description="AeternumNova is a technology company first. Beneath each product we build the systems that make it reliable, secure and extensible."
        />
        <div className="mt-16">
          <TechLayerGrid />
        </div>
      </Container>
    </section>
  )
}

export function EcosystemSection() {
  return (
    <Section labelledBy="eco-title">
      <SectionHeading
        id="eco-title"
        eyebrow="The Ecosystem"
        title="One core. Products, technology, people and impact around it."
        align="center"
      />
      <div className="mt-16">
        <Ecosystem />
      </div>
    </Section>
  )
}

const africaPoints = [
  { icon: MapPin, title: 'Nigeria', body: 'Our current base.' },
  { icon: Globe2, title: 'Africa', body: 'Where we begin.' },
  { icon: Users, title: 'Real problems', body: 'The problems worth solving.' },
  { icon: Target, title: 'Global ambition', body: 'Building for the world.' },
]

export function AfricaSection() {
  return (
    <Section labelledBy="africa-title">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-12 lg:p-16">
        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Where We Begin</Eyebrow>
            <h2 id="africa-title" className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Starting in Africa. Building for the world.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              We start where we are, with the problems closest to us. The ambition is global, and
              we&apos;ll say so plainly.
            </p>
          </div>
          <ul className="grid gap-px self-end overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {africaPoints.map(({ icon: Icon, title, body }) => (
              <li key={title} className="bg-background p-6">
                <Icon className="size-5 text-muted-foreground" aria-hidden="true" />
                <p className="mt-6 font-medium">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export function FutureProducts() {
  return (
    <Section labelledBy="future-title" className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <SectionHeading
          id="future-title"
          eyebrow="The Portfolio"
          title="One product today. A portfolio tomorrow."
          description="Our long-term vision is to build a portfolio of technology products that address meaningful challenges across industries."
        />
        <BrandArchitecture className="hidden lg:block" />
      </div>
      <div className="mt-16">
        <PortfolioGrid />
      </div>
    </Section>
  )
}

export function InnovationSection() {
  return (
    <section className="overflow-hidden border-y border-border bg-midnight py-28 sm:py-36" aria-labelledby="innovation-title">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="innovation-title"
            eyebrow="Innovation"
            title="Innovation is part of the architecture."
            description="AeternumNova is designed to continuously explore new ideas and turn the strongest of them into products. Exploration isn't a side project. It's built into how the company works."
          />
          <LinkButton href="/innovation" variant="outline" arrow className="mt-10">
            How ideas become products
          </LinkButton>
        </div>
        <InnovationField className="mx-auto aspect-square w-full max-w-md" />
      </Container>
    </section>
  )
}

export function VisionSection() {
  return (
    <Section labelledBy="vision-title">
      <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-2">
        <div className="bg-background p-6 sm:p-12">
          <Eyebrow>Vision</Eyebrow>
          <p id="vision-title" className="mt-8 text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            {VISION}
          </p>
        </div>
        <div className="bg-background p-6 sm:p-12">
          <Eyebrow>Mission</Eyebrow>
          <p className="mt-8 text-pretty text-xl leading-relaxed text-muted-foreground sm:text-2xl">{MISSION}</p>
        </div>
      </div>
    </Section>
  )
}

export function TeamSection() {
  return (
    <Section labelledBy="team-title">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading id="team-title" eyebrow="The Team" title="The people building AeternumNova." />
        <LinkButton href="/company#leadership" variant="outline" arrow>
          About the company
        </LinkButton>
      </div>
      <div className="mt-14">
        <TeamGrid />
      </div>
    </Section>
  )
}

export function CareersTeaser() {
  return (
    <Section labelledBy="careers-title" className="border-t border-border">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
        <SectionHeading
          id="careers-title"
          eyebrow="Careers"
          title="Build the future with us."
          description="We're building products across multiple technology areas: engineering, product, design, cybersecurity, operations, finance and business development."
        />
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <LinkButton href="/careers" arrow>
            Join AeternumNova
          </LinkButton>
        </div>
      </div>
    </Section>
  )
}
