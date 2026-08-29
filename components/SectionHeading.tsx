type Props = {
  eyebrow: string
  title: string
  description?: string
}

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">
        <span aria-hidden className="h-px w-3.5 bg-accent" />
        {eyebrow}
      </p>
      <h2 className="text-balance font-display text-3xl font-bold text-text md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
