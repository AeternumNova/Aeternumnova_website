import { Reveal } from '@/components/site/reveal'

const steps = [
  { n: '01', title: 'Discover', body: 'Understand the problem.' },
  { n: '02', title: 'Design', body: 'Design solutions around real users.' },
  { n: '03', title: 'Build', body: 'Develop scalable technology.' },
  { n: '04', title: 'Scale', body: 'Take solutions from early adoption to broader markets.' },
]

export function ApproachSteps() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.n} className="bg-background">
          <Reveal delay={i * 0.08} className="flex h-full flex-col p-8 sm:p-10">
            <span className="font-mono text-sm text-muted-foreground">{s.n}</span>
            <div className="my-12 flex items-center gap-2" aria-hidden="true">
              {steps.map((_, j) => (
                <span key={j} className={j <= i ? 'h-1 flex-1 rounded-full bg-foreground' : 'h-1 flex-1 rounded-full bg-foreground/10'} />
              ))}
            </div>
            <h3 className="text-2xl font-medium tracking-tight">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
