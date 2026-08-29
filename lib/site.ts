export const site = {
  name: 'Valentine Orga',
  brand: 'ValentineCodes',
  brandMark: '<VC/>',
  role: 'Blockchain Engineer',
  tagline: 'I build blockchain products that actually ship.',
  description:
    'Valentine Orga is a blockchain engineer who builds smart contracts, Web3 applications, and developer tooling — Solidity, React Native, and Next.js, shipped in the open.',
  url: 'https://valentineorga.com',
  location: 'Nigeria',
  email: 'valentineorga@gmail.com',
  resumeUrl: '/valentine-orga-resume.pdf',
  ogImage: '/opengraph-image',
  social: {
    linkedin: 'https://www.linkedin.com/in/valentineorga',
    github: 'https://github.com/ValentineCodes',
    x: 'https://x.com/ValentineOrga',
  },
} as const

export const navigation = [
  { label: 'Projects', href: '/work', index: '01' },
  { label: 'Contact', href: '/#contact', index: '02' },
] as const
