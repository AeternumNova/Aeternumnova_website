export const VISION =
  'To become a catalyst for global transformation, driving progress, and empowering humanity to reach new heights.'

export const MISSION =
  'Create a revolutionary platform that houses visionary applications, ignites human potential, disrupts innovation, and provides cutting-edge solutions to real-world problems.'

export const TAGLINE = 'Building technology for problems that matter.'

export const mainNav = [
  { label: 'About', href: '/company' },
  { label: 'Products', href: '/products' },
  { label: 'Innovation', href: '/innovation' },
  { label: 'Insights', href: '/insights' },
  { label: 'Team', href: '/company#leadership' },
]

export type ProductStatus = 'Currently Building' | 'Coming Soon' | 'Exploration'

export type PortfolioItem = {
  index: string
  name: string
  vertical?: string
  status: ProductStatus
  href?: string
}

// Replace a "Future Product" entry here when a new product is announced.
export const portfolio: PortfolioItem[] = [
  {
    index: '01',
    name: 'AeternumPay',
    vertical: 'Digital payments',
    status: 'Currently Building',
    href: '/products/aeternumpay',
  },
  { index: '02', name: 'Future Product', status: 'Coming Soon' },
  { index: '03', name: 'Future Product', status: 'Exploration' },
  { index: '04', name: 'Future Product', status: 'Exploration' },
]

export type TeamMember = { name: string; role: string }

export const leadership: TeamMember[] = [
  { name: 'Donald Ehwerunu', role: 'Founder & CEO' },
  { name: 'Otuokere Chidinma Mercy', role: 'Chief Operating Officer' },
  { name: 'Adepoju Opeyemi Daniel', role: 'Chief Technology Officer' },
  { name: 'Ahmad Mubarak Abdullahi', role: 'Chief Human Resources Officer' },
  { name: 'Rao Muhammad Daniyal', role: 'Chief Cybersecurity Officer' },
]

export const team: TeamMember[] = [
  { name: 'Promise Pius Obi', role: 'Assistant CTO & Backend Engineer' },
  { name: 'Akinlosotu Oluwatomisin Success', role: 'Flutter Developer' },
  { name: 'Syed Hussain Abbas Jaffery', role: 'Cybersecurity Analysis' },
  { name: 'Neville M. Wekesa', role: 'Backend Engineer' },
  { name: 'Anaele Ndubuisi Gift', role: 'Senior Accountant' },
]

export const payRoadmap = [
  {
    phase: 'Phase 01',
    title: 'AeternumPay Core Wallet',
    status: 'Currently Building' as const,
    body: 'The foundational wallet: balances, transfers, payments and transaction history.',
  },
  {
    phase: 'Phase 02',
    title: 'Expanded Services & Ecosystem',
    status: 'Planned' as const,
    body: 'Broadening the merchant, agent and partner ecosystem around the core wallet.',
  },
  {
    phase: 'Phase 03',
    title: 'Scale & Differentiation',
    status: 'Planned' as const,
    body: 'Taking the platform to wider markets with differentiated capabilities.',
  },
]

export const payProblems = [
  { title: 'High transaction fees', body: 'Everyday payments carry costs that fall hardest on those who can least afford them.' },
  { title: 'Financial exclusion', body: 'Large parts of the population remain outside formal financial services.' },
  { title: 'Fragmented payment systems', body: 'Wallets, banks and merchants often operate in disconnected silos.' },
  { title: 'Trust and security concerns', body: 'Fraud and uncertainty discourage people from adopting digital payments.' },
  { title: 'Low-connectivity populations', body: 'Many users live and trade where internet access is limited or unreliable.' },
  { title: 'Limited agent opportunities', body: 'Agent networks that could extend access remain underdeveloped.' },
]

export function initials(name: string) {
  const parts = name.replace(/\./g, '').split(' ').filter(Boolean)
  return (parts[0][0] + (parts[parts.length - 1]?.[0] ?? '')).toUpperCase()
}
