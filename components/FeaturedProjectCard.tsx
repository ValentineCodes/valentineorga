import Link from 'next/link'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import type { Project } from '@/lib/projects'
import DomainTag from './DomainTag'
import ParallaxImage from './ParallaxImage'

export default function FeaturedProjectCard({
  project,
  reverse = false,
}: {
  project: Project
  reverse?: boolean
}) {
  const hasSeparateLiveUrl =
    project.liveUrl && project.liveUrl !== project.github

  return (
    <article
      className={`grid items-center gap-10 border-b border-border py-14 first:pt-0 last:border-b-0 md:grid-cols-2 md:gap-16 ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative block aspect-[16/11] min-w-0 overflow-hidden rounded-lg border border-border bg-surface-2 transition-colors duration-300 hover:border-accent"
      >
        <ParallaxImage
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          strength={26}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover saturate-[0.85]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-bg/0 to-bg/10 mix-blend-multiply" />
      </Link>

      <div className="min-w-0">
        <div className="flex flex-wrap gap-2">
          {project.category.map(c => (
            <DomainTag key={c} category={c} />
          ))}
        </div>

        <h3 className="mt-4 font-display text-2xl font-bold text-text md:text-3xl">
          <Link href={`/work/${project.slug}`} className="hover:text-accent">
            {project.name}
          </Link>
        </h3>

        <p className="mt-3 text-balance text-base text-muted">
          {project.description}
        </p>

        {project.highlights.length > 0 ? (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map(h => (
              <li key={h} className="flex gap-2 text-sm text-muted">
                <span aria-hidden className="text-accent">
                  —
                </span>
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        <p className="mt-4 font-mono text-xs uppercase tracking-wide text-muted">
          Role — {project.role}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map(t => (
            <span key={t} className="font-mono text-xs text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Link
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
          >
            <FaGithub aria-hidden /> Code
          </Link>
          {hasSeparateLiveUrl ? (
            <Link
              href={project.liveUrl!}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
            >
              <FaArrowUpRightFromSquare aria-hidden /> Live
            </Link>
          ) : null}
          <Link
            href={`/work/${project.slug}`}
            className="group flex items-center gap-1.5 text-sm text-accent"
          >
            Case study
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}
