import type { Metadata } from 'next'
import { Eyebrow, PageHero, Section } from '@/components/site/primitives'

export const metadata: Metadata = {
  title: 'Terms of Use | AeternumNova',
  description:
    'The terms that apply when you use the AeternumNova website, including intellectual property, acceptable use and disclaimers.',
}

const sections = [
  {
    title: 'Acceptance of these terms',
    body: [
      'By accessing or using this website, you agree to these Terms of Use. If you do not agree, please do not use the site. These terms apply to the website only. Any future product, such as AeternumPay, will be governed by its own separate terms when it launches.',
    ],
  },
  {
    title: 'About the information on this site',
    body: [
      'This website describes an early-stage technology company and products under development. Information about AeternumPay, including features and plans, describes our current direction and intentions. It is not a promise of future performance, availability or pricing, and details may change as development progresses.',
      'Nothing on this site constitutes financial, investment or professional advice, and it should not be relied on for making decisions.',
    ],
  },
  {
    title: 'Intellectual property',
    body: [
      'The AeternumNova name, logo, site design and written content are owned by AeternumNova and protected by intellectual property laws. You may view, download and share pages for personal, non-commercial reference. You may not reproduce, republish or use our branding or content for commercial purposes without our written permission.',
    ],
  },
  {
    title: 'Acceptable use',
    body: [
      'You agree not to misuse this website. That includes attempting to breach or test its security, interfering with its operation, scraping it in ways that degrade service, or using it to send unlawful or harmful material.',
    ],
  },
  {
    title: 'Third-party links',
    body: [
      'Where this site links to external websites or services, those links are provided for convenience. We do not control them and are not responsible for their content or practices.',
    ],
  },
  {
    title: 'Disclaimers',
    body: [
      'This website is provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, including as to accuracy, completeness or availability. To the fullest extent permitted by law, AeternumNova is not liable for any loss or damage arising from your use of, or inability to use, this website.',
    ],
  },
  {
    title: 'Governing law',
    body: [
      'These terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict of law principles. Any disputes connected with this website will be subject to the exclusive jurisdiction of the courts of Nigeria.',
    ],
  },
  {
    title: 'Changes to these terms',
    body: [
      'We may revise these terms from time to time as the company grows. The date below shows when they were last updated. Continued use of the site after changes take effect means you accept the revised terms.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'Questions about these terms? Reach us through the contact page and we will respond.',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use."
        description="The ground rules for using this website. Written to be read, not skipped."
      />

      <Section labelledBy="terms-body">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Last updated September 2026
          </p>
          <div id="terms-body" className="mt-10 flex flex-col gap-12">
            {sections.map((s, i) => (
              <section key={s.title}>
                <Eyebrow>
                  {String(i + 1).padStart(2, '0')} · {s.title}
                </Eyebrow>
                <div className="mt-4 flex flex-col gap-3">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 24)} className="leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
