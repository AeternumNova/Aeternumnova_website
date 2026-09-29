import Image from 'next/image'
import { initials, leadership, team, type TeamMember } from '@/lib/site'
import { cn } from '@/lib/utils'

function TeamCard({ member, lead = false }: { member: TeamMember; lead?: boolean }) {
  return (
    <li className="flex items-center gap-4 bg-background p-5 sm:p-6">
      <span
        className={cn(
          'relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border font-mono font-medium',
          lead ? 'size-14 border-foreground/25 bg-foreground/[0.06] text-base' : 'size-11 border-border text-sm',
        )}
        aria-hidden={member.photo ? undefined : 'true'}
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
          initials(member.name)
        )}
      </span>
      <div className="min-w-0">
        <p className={cn('font-medium leading-snug', lead && 'text-lg')}>{member.name}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{member.role}</p>
      </div>
    </li>
  )
}

export function TeamGrid({ showTeam = true }: { showTeam?: boolean }) {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Leadership</p>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((m) => (
            <TeamCard key={m.name} member={m} lead />
          ))}
          <li className="hidden bg-background lg:block" aria-hidden="true" />
        </ul>
      </div>
      {showTeam && (
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Team</p>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
