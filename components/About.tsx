import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-border bg-bg py-20 md:py-28">
      <div className="container grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
        <Reveal className="min-w-0">
          <div>
            <SectionHeading eyebrow="About" title="About me" />
            <div className="max-w-prose space-y-4 text-base text-muted">
              <p>
                I specialize in blockchain development — smart contracts in Solidity, and the
                Next.js and React Native applications that sit on top of them. I care about
                writing clear, well-tested code that does what it says, especially when
                it&apos;s holding someone else&apos;s funds.
              </p>
              <p>
                Most of what I build ends up open source. I like the blockchain space precisely
                because so much of it is verifiable in public, and I try to hold my own work to
                that standard.
              </p>
              <p>
                Outside of shipping code, I read, play chess, and follow football — Barcelona,
                specifically.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="min-w-0 w-full md:max-w-sm">
          <Image
            src="/images/workspace.jpeg"
            alt="Valentine's workspace"
            width={480}
            height={480}
            sizes="(min-width: 768px) 384px, 100vw"
            className="h-auto w-full rounded-lg border border-border object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </Reveal>
      </div>
    </section>
  );
}
