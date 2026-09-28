import {
  Activity,
  BadgeCheck,
  Coins,
  Eye,
  Handshake,
  KeyRound,
  Layers,
  Link2,
  Lock,
  ServerCog,
  ShieldCheck,
  Signal,
  Users,
  Wallet,
  ScanFace,
} from 'lucide-react'
import { payProblems } from '@/lib/site'
import { Reveal } from '@/components/site/reveal'

export function ProblemGrid() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {payProblems.map((p, i) => (
        <li key={p.title} className="bg-background p-6 sm:p-8">
          <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-6 text-xl font-medium tracking-tight">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
        </li>
      ))}
    </ul>
  )
}

const why = [
  { icon: Coins, title: 'Affordable', body: 'Optimized payment infrastructure designed around lower transaction friction.' },
  { icon: Users, title: 'Inclusive', body: 'Designed with underbanked users in mind.' },
  { icon: Link2, title: 'Connected', body: 'Brings wallet, merchant and payment experiences together.' },
  { icon: ShieldCheck, title: 'Secure', body: 'Designed around security, compliance and transaction monitoring.' },
  { icon: Signal, title: 'Accessible', body: 'Designed for environments where connectivity can be limited.' },
  { icon: Handshake, title: 'Opportunity-driven', body: 'Creates possibilities for agents and ecosystem participants.' },
]

export function WhyCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {why.map(({ icon: Icon, title, body }, i) => (
        <li key={title}>
          <Reveal
            delay={(i % 3) * 0.06}
            className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-pay/40 sm:p-8"
          >
            <span className="flex size-11 items-center justify-center rounded-xl border border-pay/25 bg-pay/10 text-pay transition-transform group-hover:-translate-y-0.5">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-8 text-xl font-medium tracking-tight">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}

export const payCapabilities = [
  'Affordable payment infrastructure',
  'Financial inclusion',
  'Unified wallet and merchant ecosystem',
  'Secure payment infrastructure',
  'Low-connectivity environments',
  'Agent opportunities',
]

const trust = [
  { icon: Lock, title: 'Security' },
  { icon: BadgeCheck, title: 'Compliance' },
  { icon: ScanFace, title: 'KYC/AML' },
  { icon: Eye, title: 'Transaction monitoring' },
  { icon: KeyRound, title: 'Secure APIs' },
  { icon: Layers, title: 'Partner infrastructure' },
  { icon: Activity, title: 'Operational monitoring' },
]

export function TrustGrid() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
      <div className="relative flex aspect-square max-h-[420px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-midnight">
        {[88, 68, 48, 28].map((s, i) => (
          <span
            key={s}
            className="absolute rounded-full border border-foreground/10"
            style={{ width: `${s}%`, height: `${s}%`, opacity: 0.4 + i * 0.15 }}
            aria-hidden="true"
          />
        ))}
        <span className="relative flex size-16 items-center justify-center rounded-2xl border border-foreground/20 bg-background">
          <ShieldCheck className="size-7" aria-hidden="true" />
        </span>
        <p className="absolute bottom-5 left-0 right-0 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Layered by design
        </p>
      </div>
      <div>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {trust.map(({ icon: Icon, title }) => (
            <li key={title} className="flex items-center gap-4 bg-background px-5 py-5">
              <Icon className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span className="font-medium">{title}</span>
            </li>
          ))}
          <li className="hidden bg-background sm:block" aria-hidden="true" />
        </ul>
        <p className="mt-6 text-lg text-foreground">Designed around strong security and compliance requirements.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          We don&apos;t list certifications or licenses we haven&apos;t obtained. Any will be published here once in place.
        </p>
      </div>
    </div>
  )
}

const models = [
  { icon: ServerCog, title: 'API Layer', items: ['Transaction fee splits', 'Subscription tiers', 'White-label enterprise markup', 'Value-added services'] },
  { icon: Wallet, title: 'Mobile Wallet', items: ['Transaction charges', 'Platform API charges', 'Merchant processing fees', 'Premium features'] },
]

export function BusinessModel() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        {models.map(({ icon: Icon, title, items }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Icon className="size-5 text-pay" aria-hidden="true" />
              <h3 className="text-xl font-medium tracking-tight">{title}</h3>
            </div>
            <ul className="mt-6 flex flex-col divide-y divide-border">
              {items.map((it) => (
                <li key={it} className="flex items-center justify-between py-3.5 text-sm">
                  {it}
                  <span className="size-1.5 rounded-full bg-pay/60" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        This model is specific to AeternumPay. Future AeternumNova products will each have their own model.
      </p>
    </div>
  )
}
