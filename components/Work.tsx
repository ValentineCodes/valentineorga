import Link from 'next/link'
import { getFeaturedProjects } from '@/lib/projects'
import SectionHeading from './SectionHeading'
import FeaturedProjectCard from './FeaturedProjectCard'
import Reveal from './Reveal'

export default function Work() {
  const featured = getFeaturedProjects()

  return (
    <section id="work" className="border-b border-border bg-bg py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Shipped, not just prototyped."
            description="A handful of projects that show the range — smart contracts, mobile Web3, and developer tooling, built and used, not just demoed. The first three were built during a blockchain developer role with BuidlGuidl."
          />
        </Reveal>

        <div>
          {featured.map((project, i) => (
            <Reveal key={project.slug}>
              <FeaturedProjectCard project={project} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-text transition-all duration-200 hover:scale-[1.03] hover:border-accent hover:text-accent active:scale-95"
          >
            View all work
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
