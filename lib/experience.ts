export type ExperienceEntry = {
  company: string
  location: string
  role: string
  start: string
  end: string
  url?: string
  summary: string
  technologies: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Clynto',
    location: 'USA (Remote)',
    role: 'Blockchain Developer',
    start: 'Jul 2024',
    end: 'Sep 2024',
    url: 'https://clynto.com',
    summary:
      'Built the smart contracts for a peer-to-peer lending and borrowing protocol — loan creation, funding, repayment, and liquidation across multiple tokens — plus a governance system driven by CLY token voting.',
    technologies: ['Solidity', 'Hardhat', 'Ethers.js', 'OpenZeppelin'],
  },
  {
    company: 'BuidlGuidl',
    location: 'USA (Remote)',
    role: 'Blockchain Developer',
    start: 'Mar 2023',
    end: 'Jan 2024',
    summary:
      'Built ETH Mobile, an open-source toolkit for shipping mobile dApps with React Native and Foundry/Hardhat, along with the Yield restaking protocol and Paux Wallet.',
    technologies: [
      'React Native',
      'Foundry',
      'Hardhat',
      'Solidity',
      'Next.js',
      'Ethers.js',
      'WalletConnect',
    ],
  },
]

export type Achievement = {
  title: string
  context: string
}

export const achievements: Achievement[] = [
  {
    title: 'Top 10, Gitcoin × LUKSO Grants Program',
    context: 'with Kitso, a LUKSO variant of ETH Mobile',
  },
  {
    title: 'Gitcoin Grantee',
    context: 'for ETH Mobile',
  },
  {
    title: 'BuidlGuidl Extensions Hackathon Winner',
    context: 'for the Universal Profile Extension',
  },
]

export const education = [
  {
    school: 'Nnamdi Azikiwe University, Nigeria',
    program: 'Computer Science',
    start: 'Oct 2017',
    end: 'Dec 2023',
  },
]
