# AeternumNova — Company Website

The official website of **AeternumNova**, a technology and innovation company building visionary products that solve meaningful real-world problems.

Our first product, **AeternumPay**, is a mobile payment and digital wallet platform built around accessibility, financial inclusion and secure payments, starting in Africa.

---

## About AeternumNova

AeternumNova exists to create technology that addresses meaningful problems across industries. The company is structured around two pillars:

- **Technology** — the infrastructure and engineering behind every product
- **Innovation** — the process that turns real problems into real products

**Vision:** To become a catalyst for global transformation, driving progress, and empowering humanity to reach new heights.

**Mission:** Create a revolutionary platform that houses visionary applications, ignites human potential, disrupts innovation, and provides cutting-edge solutions to real-world problems.

---

## Tech Stack

| Layer      | Technology                                    |
| ---------- | --------------------------------------------- |
| Framework  | [Next.js](https://nextjs.org) 16 (App Router) |
| UI         | React 19, TypeScript                          |
| Styling    | Tailwind CSS 4, shadcn/ui                     |
| Animation  | Motion (Framer Motion)                        |
| Icons      | Lucide React                                  |
| Analytics  | Vercel Analytics                              |
| Package mgr| pnpm                                          |

## Features

- Light and dark mode with a toggle, persisted in `localStorage` (no flash on load)
- Fully responsive, mobile-first layout
- Flat corporate design system: white, black and blue only, no gradients
- Product portfolio section featuring AeternumPay
- Team, careers, insights, innovation and contact pages
- Contact page with message form (preview mode, inbox not connected yet)
- Accessibility: semantic HTML, keyboard navigation, reduced-motion support
- Security headers configured in `next.config.mjs`

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- pnpm

### Install and run locally

```bash
# install dependencies
pnpm install

# start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
pnpm build
pnpm start
```

### Type checking

```bash
npx tsc --noEmit
```

## Project Structure

```
app/                  # Routes (App Router): pages, layout, global styles
  products/           # Products overview and AeternumPay page
  company/            # About the company, vision, mission, team
  careers/            # Careers and open areas
  innovation/         # How ideas become products
  insights/           # Articles and thinking
  contact/            # Contact channels and message form
components/
  home/               # Homepage sections (hero, product, approach...)
  site/               # Shared site components (navbar, footer, primitives...)
  visuals/            # Illustrative visuals (hero orbit, brand architecture...)
  pay/                # AeternumPay-specific components (roadmap)
  ui/                 # shadcn/ui primitives
lib/
  site.ts             # Single source of truth: nav, team, portfolio, roadmap
public/               # Logo, favicon and static assets
```

## Content Management

Most site content lives in one place: [`lib/site.ts`](lib/site.ts). Update it there and the whole site follows.

| What              | Where                          |
| ----------------- | ------------------------------ |
| Navigation links  | `mainNav`                      |
| Vision / Mission  | `VISION`, `MISSION`            |
| Product portfolio | `portfolio`                    |
| Leadership & team | `leadership`, `team`           |
| Product roadmap   | `payRoadmap`                   |

### Theme colors

Colors are defined as CSS variables in [`app/globals.css`](app/globals.css) with a light (`:root`) and dark (`.dark`) set:

| Token            | Purpose                                     |
| ---------------- | ------------------------------------------- |
| `--background`   | Page background                             |
| `--foreground`   | Primary text                                |
| `--card`         | Card and box surfaces                       |
| `--midnight`     | Alternating dark section background         |
| `--pay`          | AeternumPay / brand blue accent             |
| `--grid-line`    | Background box-square grid lines            |

## Deployment

The site is a standard Next.js App Router project and deploys cleanly to Vercel:

1. Push the repository to GitHub
2. Import it on [Vercel](https://vercel.com/new)
3. Vercel detects Next.js automatically; no extra configuration needed

Any Node host (or self-hosted `pnpm build && pnpm start`) works as well.

## Contributing

Internal team contributions:

1. Create a branch from `main`
2. Make your changes and verify with `pnpm build`
3. Open a pull request with a short description

## License

Copyright © 2026 AeternumNova. All rights reserved.

---

**AeternumNova** · Building technology for problems that matter. Starting in Africa, building for the world.
