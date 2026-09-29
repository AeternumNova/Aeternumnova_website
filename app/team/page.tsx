import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { PageHero, Section, SectionHeading } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { CtaBand } from '@/components/site/cta-band'
import { initials, leadership, team, type TeamMember } from '@/lib/site'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Team | AeternumNova',
  description:
    'Meet the people building AeternumNova: the leadership team and the engineers, specialists and operators behind AeternumPay.',
}

function Portrait({ member, large = false }: { member: TeamMember; large?: boolean }) {
  return (
    <div
      className={cn(
        'relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-midnight',
        large ? 'size-16 text-base' : 'size-14 text-sm',
      )}
    >
      {member.photo ? (
        <Image
          src={member.photo}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(min-width: 1024px) 96px, 64px"
          className="object-cover"
        />
      ) : (
        <span aria-hidden="true" className="font-mono font-medium text-foreground/80">
          {initials(member.name)}
        </span>
      )}
    </div>
  )
}

function TeamCard({ member, lead = false }: { member: TeamMember; lead?: boolean }) {
  return (
    <li>
      <Reveal className="flex h-full flex-col bg-background p-6 sm:p-7" delay={0.05}>
        <Portrait member={member} large={lead} />
        <p className={cn('mt-5 font-medium leading-snug tracking-tight', lead ? 'text-lg' : 'text-base')}>
          {member.name}
        </p>
        <p className="mt-1 text-sm text-pay">{member.role}</p>
        {member.location && (
          <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
            {member.location}
          </p>
        )}
        {member.bio && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>}
        {member.link && (
          <a
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block pt-3 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Profile
          </a>
        )}
      </Reveal>
    </li>
  )
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind AeternumNova."
        description="A distributed team of engineers, specialists and operators building AeternumPay and the products that follow it."
      />

      <Section labelledBy="team-leadership">
        <SectionHeading
          id="team-leadership"
          eyebrow="Leadership"
          title="Setting the direction."
          description="The leadership team defines the company's vision, standards and priorities."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((m) => (
            <TeamCard key={m.name} member={m} lead />
          ))}
          <li className="hidden bg-background lg:block" aria-hidden="true" />
        </ul>
      </Section>

      <Section labelledBy="team-members" className="border-t border-border">
        <SectionHeading
          id="team-members"
          eyebrow="Team"
          title="Building the products."
          description="The engineers, specialists and operators turning the vision into working software."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted-foreground">
          Want to work alongside this team?{' '}
          <Link
            href="/contact?topic=careers"
            className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            Get in touch
          </Link>
        </p>
      </Section>

      <CtaBand
        title="Build the future with us."
        description="We're building across engineering, product, design, cybersecurity, operations, finance and business development."
        primary={{ label: 'Join AeternumNova', href: '/contact?topic=careers' }}
        secondary={{ label: 'About the company', href: '/company' }}
      />
    </>
  )
}
