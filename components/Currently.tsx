import Link from 'next/link'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const items = [
  {
    label: 'Maintaining',
    text: 'ETH Mobile, the open-source React Native + Hardhat toolkit for mobile dApps.',
    href: '/work/eth-mobile',
  },
  {
    label: 'Exploring',
    text: 'Liquid restaking design patterns, following up on ideas from Yield.',
    href: '/work/yield',
  },
]

export default function Currently() {
  return (
    <section
      id="currently"
      className="border-b border-border bg-bg py-20 md:py-28"
    >
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Lab" title="Currently" />
        </Reveal>
        <ul className="max-w-2xl space-y-6">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <li className="flex gap-4">
                <span
                  className="relative mt-1.5 h-2 w-2 flex-shrink-0"
                  aria-hidden
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75" />
                  <span className="absolute inset-0 rounded-full bg-accent" />
                </span>
                <p className="text-base text-muted">
                  <span className="font-medium text-text">{item.label} — </span>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.text}
                  </Link>
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
