import { Container, Eyebrow } from '@/components/site/primitives'
import { LinkButton } from '@/components/site/link-button'
import { HeroNetwork } from '@/components/visuals/hero-network'
import { TAGLINE } from '@/lib/site'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 lg:pb-32" aria-labelledby="hero-title">
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <Eyebrow>AeternumNova</Eyebrow>
          <h1
            id="hero-title"
            className="mt-6 text-balance text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl xl:text-8xl"
          >
            {TAGLINE}
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            AeternumNova is a technology and innovation company building visionary products that solve
            real-world problems, starting in Africa and building for the world.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <LinkButton href="/products" arrow>
              View All Products
            </LinkButton>
            <LinkButton href="/company" variant="outline">
              About the Company
            </LinkButton>
          </div>
        </div>
        <div className="min-w-0">
          <HeroNetwork />
        </div>
      </Container>
    </section>
  )
}
