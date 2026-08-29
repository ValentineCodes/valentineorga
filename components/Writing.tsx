import Link from 'next/link'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Writing() {
  return (
    <section
      id="writing"
      className="border-b border-border bg-bg py-20 md:py-28"
    >
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Writing" title="Engineering notes" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-lg border border-dashed border-border p-8 text-sm text-muted">
            Nothing published yet — notes on smart contract patterns, Web3
            tooling, and shipping decisions will land here.{' '}
            <Link href="/writing" className="group text-accent hover:underline">
              Check the writing index
              <span
                aria-hidden
                className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
