import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/projects'
import DomainTag from './DomainTag'

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project
  priority?: boolean
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-black/20"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover saturate-[0.85] transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-bg/0 to-bg/10 mix-blend-multiply" />
        {project.featured ? (
          <span className="absolute left-3 top-3 rounded-full border border-accent/40 bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent backdrop-blur">
            Featured
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {project.category.slice(0, 2).map(c => (
            <DomainTag key={c} category={c} />
          ))}
        </div>
        <h3 className="font-display text-lg font-semibold text-text">
          {project.name}
        </h3>
        <p className="line-clamp-3 flex-1 text-sm text-muted">
          {project.description}
        </p>
        {project.highlights[0] ? (
          <p className="flex gap-2 text-xs text-muted">
            <span aria-hidden className="text-accent">
              —
            </span>
            {project.highlights[0]}
          </p>
        ) : null}
      </div>
    </Link>
  )
}
