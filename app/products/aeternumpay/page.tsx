import type { Metadata } from 'next'
import { CalendarClock, Gift, UsersRound, WifiOff, Zap } from 'lucide-react'
import { Container, PageHero, Section, SectionHeading, StatusBadge } from '@/components/site/primitives'
import { LinkButton } from '@/components/site/link-button'
import { Reveal } from '@/components/site/reveal'
import { ProblemGrid } from '@/components/sections/pay-sections'
import { PayRoadmap } from '@/components/pay/roadmap'
import { CtaBand } from '@/components/site/cta-band'

export const metadata: Metadata = {
  title: 'AeternumPay | Digital Payments by AeternumNova',
  description:
    'AeternumPay is a mobile payment and digital wallet platform being built by AeternumNova around accessibility, financial inclusion, secure payments and connected financial experiences.',
}

const differentiators = [
  {
    icon: Zap,
    title: 'Fast, low-fee transactions',
    body: 'Lightning-fast transfers with minimal, flat and predictable fees. No surprise charges.',
  },
  {
    icon: UsersRound,
    title: 'Send to anyone',
    body: 'Money reaches anyone, even without a bank account or smartphone.',
  },
  {
    icon: Gift,
    title: 'AeternumPay Points',
    body: 'A rewards layer that turns everyday activity into real value for users.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible withdrawals',
    body: 'Withdrawal scheduling that supports better cash flow for people and small businesses.',
  },
  {
    icon: WifiOff,
    title: 'Works offline',
    body: 'Designed for offline and low-connectivity zones, where most payment products stop.',
  },
  {
    icon: UsersRound,
    title: 'Agent opportunity',
    body: 'An agent network that extends access into communities and creates income.',
  },
]

export default function AeternumPayPage() {
  return (
    <>
      <PageHero
        accent="pay"
        eyebrow="AeternumNova · Our First Product"
        title={
          <>
            AeternumPay. <span className="text-muted-foreground">Payments built for access.</span>
          </>
        }
        description="A mobile payment and digital wallet platform designed around accessibility, financial inclusion and secure payments. Starting in Africa."
      >
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status="Currently in Development" />
          <LinkButton href="/contact?topic=partnership" variant="pay" arrow>
            Partner on AeternumPay
          </LinkButton>
        </div>
      </PageHero>

      <Section labelledBy="pay-standout-title">
        <SectionHeading
          id="pay-standout-title"
          eyebrow="Why AeternumPay Wins"
          title="What makes us stand out."
          description="Six principles separate AeternumPay from other payment products."
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map(({ icon: Icon, title, body }, i) => (
            <li key={title}>
              <Reveal
                delay={(i % 3) * 0.06}
                className="h-full rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <span
                  className="flex size-11 items-center justify-center rounded-xl border border-pay/25 bg-pay/10 text-pay"
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-6 text-xl font-medium tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="pay-problem-title" className="border-t border-border bg-midnight">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionHeading
            id="pay-problem-title"
            eyebrow="The Problem"
            title="Access to financial services is still uneven."
            description="Many people and small businesses remain outside convenient, affordable digital payments."
          />
          <ProblemGrid />
        </div>
      </Section>

      <Section id="security" labelledBy="pay-security-title" className="border-t border-border bg-midnight">
        <div className="max-w-3xl">
          <SectionHeading
            id="pay-security-title"
            eyebrow="Security & Trust"
            title="Trust is part of the product."
            description="Bank-grade security and compliance are designed in from the first line of code, including KYC/AML, transaction monitoring and secure partner infrastructure. We don't list certifications we haven't obtained; any will be published here once in place."
          />
        </div>
      </Section>

      <Section id="roadmap" labelledBy="pay-roadmap-title" className="border-t border-border">
        <SectionHeading id="pay-roadmap-title" eyebrow="Roadmap" title="Where AeternumPay is going." />
        <div className="mt-14">
          <PayRoadmap />
        </div>
      </Section>

      <CtaBand
        title="Help build a more connected payment ecosystem."
        description="We're looking for partners, investors and merchants who want to shape AeternumPay from the start."
        primary={{ label: 'Partner With Us', href: '/contact?topic=partnership' }}
        secondary={{ label: 'Investor enquiries', href: '/contact?topic=investment' }}
      />
    </>
  )
}
