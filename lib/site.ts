export const site = {
  name: "Valentine Orga",
  brand: "ValentineCodes",
  role: "Blockchain Engineer",
  tagline: "I build blockchain products that actually ship.",
  description:
    "Valentine Orga is a blockchain engineer who builds smart contracts, Web3 applications, and developer tooling — Solidity, React Native, and Next.js, shipped in the open.",
  url: "https://valentineorga.com",
  location: "Nigeria",
  email: "valentineorga@gmail.com",
  resumeUrl: "/valentine-orga-resume.pdf",
  ogImage: "/opengraph-image",
  social: {
    linkedin: "https://www.linkedin.com/in/valentineorga",
    github: "https://github.com/ValentineCodes",
    x: "https://x.com/ValentineOrga",
  },
} as const;

export const navigation = [
  { label: "Work", href: "/work", index: "01" },
  { label: "Experience", href: "/#experience", index: "02" },
  { label: "Writing", href: "/writing", index: "03" },
  { label: "Contact", href: "/#contact", index: "04" },
] as const;
