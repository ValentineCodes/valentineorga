import Image from 'next/image'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="border-b border-border bg-bg py-20 md:py-28">
      <div className="container grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
        <Reveal className="min-w-0">
          <div>
            <SectionHeading eyebrow="About" title="About me" />
            <div className="max-w-prose space-y-4 text-base text-muted">
              <p className="text-sm lg:text-md font-light text-gray-200">
                I specialize in blockchain development utilizing{' '}
                <span className="text-[#15f7d6]">NextJS</span>,{' '}
                <span className="text-[#15f7d6]">React Native</span>,{' '}
                <span className="text-[#15f7d6]">Solidity</span>, e.t.c.
              </p>
              <p className="text-sm lg:text-md font-light text-gray-200">
                I&apos;m highly disciplined and dedicated to writing clear,
                concise, robust code that works. I believe in the
                blockchain&apos;s potential so I strive to never stop learning
                and improving.
              </p>
              <p className="text-sm lg:text-md font-light text-gray-200">
                I love reading books and educative articles. Also, Chess and
                Football...{' '}
                <span className="text-[#15f7d6]">Up&nbsp;Barcelona!</span>
              </p>
              <p className="text-sm lg:text-md font-light text-gray-200">
                I&apos;m always open to new challenges. Enough to push me beyond
                my limits and broaden my vision of the ecosystem.
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
  )
}
