'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/site'

export const contactTopics = [
  { value: 'partnership', label: 'Partnership' },
  { value: 'investment', label: 'Investment' },
  { value: 'product', label: 'Product' },
  { value: 'media', label: 'Media' },
  { value: 'careers', label: 'Careers' },
  { value: 'general', label: 'General' },
] as const

const fieldClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-foreground/40 focus-visible:ring-2 focus-visible:ring-ring/40'

export function ContactForm({ initialTopic }: { initialTopic: string }) {
  const [topic, setTopic] = useState(
    contactTopics.some((t) => t.value === initialTopic) ? initialTopic : 'general',
  )
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div role="status" className="rounded-2xl border border-border bg-card p-8">
        <p className="text-xl font-medium tracking-tight">Thanks. Your message is noted.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          This form is a preview and isn&apos;t connected to an inbox yet, so nothing was sent. In the meantime, email us
          directly at{' '}
          <a href={CONTACT_EMAIL_HREF} className="break-all underline underline-offset-4 hover:text-foreground/80">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm underline underline-offset-4 hover:text-foreground/80"
        >
          Back to form
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-6"
    >
      <fieldset>
        <legend className="mb-3 text-sm font-medium">What is this about?</legend>
        <div className="flex flex-wrap gap-2">
          {contactTopics.map((t) => (
            <label
              key={t.value}
              className={cn(
                'cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/40',
                topic === t.value
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground',
              )}
            >
              <input
                type="radio"
                name="topic"
                value={t.value}
                checked={topic === t.value}
                onChange={() => setTopic(t.value)}
                className="sr-only"
              />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" maxLength={120} className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" maxLength={200} className={fieldClass} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="organisation" className="text-sm font-medium">
          Organisation <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input id="organisation" name="organisation" autoComplete="organization" maxLength={160} className={fieldClass} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea id="message" name="message" required rows={6} maxLength={4000} className={cn(fieldClass, 'resize-y')} />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Send message
        </button>
        <p className="text-xs text-muted-foreground">
          Preview form, not yet connected to an inbox. Prefer email? Write to{' '}
          <a href={CONTACT_EMAIL_HREF} className="underline underline-offset-4 hover:text-foreground">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    </form>
  )
}
