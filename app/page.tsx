import { HomeHero } from '@/components/home/hero'
import {
  AfricaSection,
  CareersTeaser,
  CompanyStatement,
  EcosystemSection,
  FirstProduct,
  FutureProducts,
  InnovationSection,
  OurApproach,
  TeamSection,
  TechnologyLayer,
  VisionSection,
} from '@/components/home/sections'
import { CtaBand } from '@/components/site/cta-band'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CompanyStatement />
      <FirstProduct />
      <OurApproach />
      <TechnologyLayer />
      <EcosystemSection />
      <AfricaSection />
      <FutureProducts />
      <InnovationSection />
      <VisionSection />
      <TeamSection />
      <CareersTeaser />
      <CtaBand />
    </>
  )
}
