import type { Metadata } from 'next'
import { Eyebrow, PageHero, Section } from '@/components/site/primitives'

export const metadata: Metadata = {
  title: 'Privacy Policy | AeternumNova',
  description:
    'How AeternumNova handles information on this website: what we collect, why we collect it and the choices you have.',
}

const sections = [
  {
    title: 'Overview',
    body: [
      'This policy explains how AeternumNova ("we", "us") handles information when you visit this website. It applies to this site only, not to products or services we may launch in the future. Those will carry their own terms and privacy notices when they exist.',
    ],
  },
  {
    title: 'What we collect',
    body: [
      'Contact form submissions. If you write to us through the contact form, we receive the name, email address and message you provide. We use it only to respond to your enquiry.',
      'Basic usage analytics. We collect simple, aggregated statistics about site visits, such as page views and approximate region. This data does not identify you personally and is not used to build advertising profiles.',
    ],
  },
  {
    title: 'What we do not do',
    body: [
      'We do not sell your information. We do not share it with third parties for their own marketing. We do not run advertising or cross-site tracking on this website.',
    ],
  },
  {
    title: 'Cookies and local storage',
    body: [
      'This site stores one preference in your browser: your light or dark theme choice, kept in local storage under the name "aeternum-theme". It stays on your device and is never sent to us.',
      'Our analytics are cookieless. We do not set advertising or cross-site tracking cookies. If this changes as products launch, this policy will be updated first.',
    ],
  },
  {
    title: 'How long we keep information',
    body: [
      'Enquiries sent through the contact form are kept only as long as needed to handle them and for a reasonable period afterwards, in case follow-up is needed. Aggregated analytics are kept in summary form and are not tied to individuals.',
    ],
  },
  {
    title: 'Security',
    body: [
      'We take reasonable technical and organisational measures to protect the limited information we hold. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      'You can ask us what enquiry information we hold about you, ask for corrections, or ask us to delete it. You can also clear your browser storage at any time to remove the saved theme preference.',
    ],
  },
  {
    title: 'Changes to this policy',
    body: [
      'We may update this policy as the company and its products grow. The date below shows when it was last revised. Significant changes will be reflected on this page before they take effect.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy."
        description="How we handle information on this website. Plain language, no surprises."
      />

      <Section labelledBy="privacy-body">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Last updated September 2026
          </p>
          <div id="privacy-body" className="mt-10 flex flex-col gap-12">
            {sections.map((s, i) => (
              <section key={s.title} id={i === 3 ? 'cookies' : undefined} className="scroll-mt-24">
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
            <section>
              <Eyebrow>09 · Contact</Eyebrow>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Questions about this policy? Reach us through the contact page and we will respond.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  )
}
