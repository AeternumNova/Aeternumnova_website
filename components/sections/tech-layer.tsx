import { Blocks, Cloud, Database, Gauge, Plug, Shield, Terminal, Waypoints } from 'lucide-react'

const layers = [
  { icon: Waypoints, title: 'Core platforms' },
  { icon: Cloud, title: 'Cloud infrastructure' },
  { icon: Blocks, title: 'Product systems' },
  { icon: Plug, title: 'Integrations' },
  { icon: Shield, title: 'Security systems' },
  { icon: Database, title: 'Data infrastructure' },
  { icon: Gauge, title: 'Monitoring' },
  { icon: Terminal, title: 'Engineering tools' },
]

export function TechLayerGrid() {
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
      {layers.map(({ icon: Icon, title }) => (
        <li key={title} className="group flex flex-col gap-6 bg-background p-5 transition-colors hover:bg-card sm:p-6">
          <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden="true" />
          <span className="text-sm font-medium sm:text-base">{title}</span>
        </li>
      ))}
    </ul>
  )
}
