import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const capabilities = [
  {
    title: "Smart Contracts",
    description:
      "I write and test Solidity contracts — restaking vaults, P2P lending markets, NFT mechanics, and marketplace logic — with an emphasis on getting the edge cases right.",
    tech: ["Solidity", "Hardhat", "Foundry", "OpenZeppelin", "Ethers.js"],
  },
  {
    title: "Web3 Applications",
    description:
      "I build the frontends that talk to those contracts — bridges, wrappers, and marketplaces — using Next.js, with wallet connections that stay out of the user's way.",
    tech: ["Next.js", "React", "WalletConnect", "TypeScript"],
  },
  {
    title: "Mobile Web3",
    description:
      "I build wallets and mobile dApps in React Native, from a wallet published on the Play Store to an open-source toolkit other builders use to ship their own.",
    tech: ["React Native", "WalletConnect"],
  },
  {
    title: "Developer Infrastructure",
    description:
      "I build the tooling other developers build with — scaffolding, CLIs, and debug UIs that shorten the distance between an idea and a working dApp.",
    tech: ["Hardhat", "Foundry", "Node.js", "TypeScript"],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-border bg-bg py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What I build, not just what I know."
          />
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="bg-bg">
              <div className="group flex h-full flex-col gap-4 p-7 transition-colors duration-300 hover:bg-surface">
                <h3 className="font-display text-xl font-semibold text-text transition-colors duration-300 group-hover:text-accent">
                  {c.title}
                </h3>
                <p className="text-sm text-muted">{c.description}</p>
                <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-2">
                  {c.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
