import { categoryLabels, type ProjectCategory } from '@/lib/projects'

export default function DomainTag({ category }: { category: ProjectCategory }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-muted">
      {categoryLabels[category]}
    </span>
  )
}
