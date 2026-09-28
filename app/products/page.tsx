import type { Metadata } from 'next'
import { PageHero, Section, SectionHeading, StatusBadge, Eyebrow } from '@/components/site/primitives'
import { LinkButton } from '@/components/site/link-button'
import { Reveal } from '@/components/site/reveal'
import { BrandArchitecture } from '@/components/visuals/brand-architecture'
import { PortfolioGrid } from '@/components/site/portfolio-grid'
import { CtaBand } from '@/components/site/cta-band'

export const metadata: Metadata = {
  title: 'Products | AeternumNova',
  description:
    'Products built to solve real problems. AeternumPay is the first product being built by AeternumNova, with more solutions being explored across multiple problem spaces.',
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Products built to solve real problems."
        description="Every AeternumNova product starts with a meaningful problem. Here is what we're building today, and where we're looking next."
      />

      <Section id="first-product" labelledBy="products-current">
        <h2 id="products-current" className="sr-only">
          Our first product
        </h2>
        <Reveal className="relative overflow-hidden rounded-3xl border border-pay/25 bg-card">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-pay" aria-hidden="true" />
          <div className="relative grid items-center gap-10 p-6 sm:p-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow className="text-pay">Our First Product</Eyebrow>
                <StatusBadge status="Currently Building" />
              </div>
              <h3 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">AeternumPay</h3>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                A mobile payment and digital wallet platform designed around accessibility, financial inclusion, secure
                payments, and connected financial experiences.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <LinkButton href="/products/aeternumpay" variant="pay" arrow>
                  Explore AeternumPay
                </LinkButton>
                <LinkButton href="/contact?topic=partnership" variant="outline">
                  Partner With Us
                </LinkButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section labelledBy="products-future" className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <SectionHeading
            id="products-future"
            eyebrow="Future Products"
            title="New solutions are being explored across multiple problem spaces."
            description="We don't announce products before they exist. Future products will appear here as they move from exploration into development."
          />
          <BrandArchitecture />
        </div>
        <div className="mt-16">
          <PortfolioGrid />
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
