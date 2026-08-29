import Link from 'next/link'
import { getFeaturedProjects } from '@/lib/projects'
import SectionHeading from './SectionHeading'
import FeaturedProjectCard from './FeaturedProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  const featured = getFeaturedProjects()

  return (
    <section
      id="projects"
      className="border-b border-border bg-bg py-20 md:py-28"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="It was exciting working on these"
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
            View all projects
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
