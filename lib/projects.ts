export type ProjectCategory =
  | "smart-contracts"
  | "defi-refi"
  | "web3-apps"
  | "mobile"
  | "tooling";

export type ProjectStatus = "shipped" | "open-source" | "experimental";

export type Project = {
  name: string;
  slug: string;
  description: string;
  role: string;
  category: ProjectCategory[];
  technologies: string[];
  image: string;
  github: string;
  liveUrl?: string;
  featured: boolean;
  status: ProjectStatus;
  highlights: string[];
};

export const categoryLabels: Record<ProjectCategory, string> = {
  "smart-contracts": "Smart Contracts",
  "defi-refi": "DeFi / ReFi",
  "web3-apps": "Web3 Applications",
  mobile: "Mobile Web3",
  tooling: "Developer Infrastructure",
};

export const projects: Project[] = [
  {
    name: "Yield",
    slug: "yield",
    description:
      "A liquid restaking protocol that lets users stake Lido's stETH into EigenLayer to earn additional rewards. Deposits mint yETH against the value staked, and a multisig-controlled admin role can delegate and undelegate to an operator and manage withdrawals.",
    role: "Creator",
    category: ["smart-contracts", "defi-refi"],
    technologies: ["Solidity", "Next.js", "Ethers.js", "WalletConnect"],
    image: "/images/yield_img.png",
    github: "https://github.com/ValentineCodes/yield",
    featured: true,
    status: "open-source",
    highlights: [
      "Mints yETH against staked stETH on deposit",
      "Multisig-gated delegate, undelegate, and withdrawal flows for EigenLayer operators",
    ],
  },
  {
    name: "ETH Mobile",
    slug: "eth-mobile",
    description:
      "An open-source toolkit for building mobile decentralized applications with React Native, Foundry, and Hardhat — designed to make it easier for developers to create and deploy smart contracts and build interfaces that interact with them.",
    role: "Creator & Maintainer",
    category: ["tooling", "mobile"],
    technologies: ["React Native", "Foundry", "Hardhat", "Ganache", "Ethers.js"],
    image: "/images/scaffold-eth-react-native.png",
    github: "https://github.com/ValentineCodes/scaffold-eth-react-native",
    liveUrl: "https://ethmobile.io",
    featured: true,
    status: "open-source",
    highlights: [
      "Gitcoin-funded open-source grantee",
      "Adapted into Kitso, a LUKSO variant that placed top 10 in the Gitcoin × LUKSO grants program",
      "Still live and maintained at ethmobile.io",
    ],
  },
  {
    name: "Paux Wallet",
    slug: "paux-wallet",
    description:
      "A crypto wallet to generate accounts, manage tokens, transfer funds, sign transactions, and interact with dApps on any EVM-compatible chain.",
    role: "Creator",
    category: ["mobile", "web3-apps"],
    technologies: ["React Native", "WalletConnect"],
    image: "/images/paux_img.jpg",
    github: "https://github.com/ValentineCodes/paux",
    liveUrl: "https://play.google.com/store/apps/details?id=com.paux.wallet",
    featured: true,
    status: "shipped",
    highlights: [
      "Published on the Google Play Store",
      "Works across any EVM-compatible chain",
    ],
  },
  {
    name: "Token Wrapper",
    slug: "token-wrapper",
    description:
      "A decentralized application which enables users to wrap native and ERC-20 tokens on supported networks.",
    role: "Creator",
    category: ["web3-apps", "smart-contracts"],
    technologies: ["Solidity", "Next.js"],
    image: "/images/token-wrapper_img.png",
    github: "https://github.com/ValentineCodes/token-wrapper",
    liveUrl: "https://token-wrapper.vercel.app/",
    featured: false,
    status: "shipped",
    highlights: ["Deployed as a live dApp"],
  },
  {
    name: "The Bridge",
    slug: "the-bridge",
    description: "A bridge between layer-1 and layer-2 tokens.",
    role: "Creator",
    category: ["web3-apps", "smart-contracts"],
    technologies: ["Solidity", "Next.js"],
    image: "/images/thebridge_img.png",
    github: "https://github.com/ValentineCodes/thebridge",
    liveUrl: "https://thebridge-alpha.vercel.app/",
    featured: false,
    status: "shipped",
    highlights: ["Deployed as a live dApp"],
  },
  {
    name: "Snowman NFT",
    slug: "snowman-nft",
    description:
      "A composable NFT based on the ERC-4883 standard. Mint a snowman with dynamic attributes — sky color, wind direction, eye focus — and compose it with accessories like a hat or scarf.",
    role: "Creator",
    category: ["smart-contracts"],
    technologies: ["Solidity", "TypeScript"],
    image: "/images/snowman_img.png",
    github: "https://github.com/ValentineCodes/snowman",
    liveUrl: "https://snowman-eight.vercel.app/",
    featured: false,
    status: "shipped",
    highlights: ["Built on the ERC-4883 composable NFT standard"],
  },
  {
    name: "Yeet CLI",
    slug: "yeet-cli",
    description:
      "A CLI for querying blockchain data, interacting with smart contracts, transferring funds, generating accounts, and more.",
    role: "Creator",
    category: ["tooling"],
    technologies: ["TypeScript", "Node.js"],
    image: "/images/yeet_img.png",
    github: "https://github.com/ValentineCodes/yeet",
    liveUrl: "https://www.npmjs.com/package/yeet-cli",
    featured: false,
    status: "open-source",
    highlights: ["Published as an installable npm package"],
  },
  {
    name: "Unit Marketplace",
    slug: "unit-marketplace",
    description:
      "A decentralized NFT marketplace. Sellers can list NFTs for a fixed price or put them up for auction, and toggle between the two at any time.",
    role: "Creator",
    category: ["web3-apps", "smart-contracts"],
    technologies: ["Solidity", "Next.js"],
    image: "/images/unit_img.png",
    github: "https://github.com/ValentineCodes/unit-marketplace",
    liveUrl: "https://unit-mu.vercel.app/",
    featured: false,
    status: "shipped",
    highlights: ["Deployed as a live dApp"],
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getOtherProjects() {
  return projects.filter((p) => !p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((p) => p.category.includes(category));
}
