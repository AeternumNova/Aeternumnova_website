import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Container, Eyebrow } from '@/components/site/primitives'
import { ContactForm } from '@/components/site/contact-form'
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact | AeternumNova',
  description:
    'Reach AeternumNova by email, phone or post, or send us a message about partnerships, investment, product, media or careers.',
}

const channels = [
  { icon: Mail, label: 'Email', value: CONTACT_EMAIL, href: CONTACT_EMAIL_HREF, note: 'For partnerships, investment, media and general enquiries.' },
  { icon: Phone, label: 'Phone', value: 'To be published', note: 'Official lines are published here soon.' },
  { icon: MapPin, label: 'Address', value: 'Nigeria', note: 'Full office address will be published soon.' },
]

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic } = await searchParams

  return (
    <section className="pt-36 pb-28 sm:pt-44" aria-labelledby="contact-title">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <h1
            id="contact-title"
            className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl"
          >
            Have an idea, partnership, or opportunity? <span className="text-muted-foreground">Let&apos;s talk.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Reach us directly through the channels below, or send a message with the form and the right
            person on the team will get back to you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
          <div className="flex flex-col gap-4">
            {channels.map(({ icon: Icon, label, value, href, note }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground"
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 inline-block break-all font-medium underline-offset-4 hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 break-all font-medium">{value}</p>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">{note}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Response time
              </p>
              <p className="mt-1 font-medium">Within a few business days</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Every message is read by the team. We reply as quickly as we can.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10">
            <ContactForm key={topic ?? 'general'} initialTopic={topic ?? 'general'} />
          </div>
        </div>
      </Container>
    </section>
  )
}
