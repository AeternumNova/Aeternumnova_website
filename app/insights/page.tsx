import type { Metadata } from 'next'
import { PageHero, Section } from '@/components/site/primitives'
import { InsightsList } from '@/components/site/insights-list'
import { CtaBand } from '@/components/site/cta-band'

export const metadata: Metadata = {
  title: 'Insights | AeternumNova',
  description: 'Thinking from AeternumNova on technology, innovation, Africa, product and company building.',
}

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from building."
        description="Perspectives on technology, innovation and building from Africa. The articles below are sample topics. Real posts will replace them as they're published."
      />
      <Section labelledBy="insights-heading">
        <h2 id="insights-heading" className="sr-only">
          Articles
        </h2>
        <InsightsList />
      </Section>
      <CtaBand
        title="Media or speaking enquiry?"
        description="Reach out and we'll connect you with the right person on the team."
        primary={{ label: 'Media enquiries', href: '/contact?topic=media' }}
        secondary={{ label: 'Contact', href: '/contact' }}
      />
    </>
  )
}
