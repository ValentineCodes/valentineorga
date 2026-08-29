import Link from 'next/link'
import { achievements, education, experience } from '@/lib/experience'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border bg-bg py-20 md:py-28"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="What I was responsible for."
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <ol className="min-w-0 space-y-10">
            {experience.map((job, i) => (
              <li
                key={job.company}
                className="min-w-0 border-l border-border pl-6"
              >
                <Reveal delay={i * 0.1}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-text">
                      {job.role} —{' '}
                      {job.url ? (
                        <Link
                          href={job.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="hover:text-accent"
                        >
                          {job.company}
                        </Link>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {job.start} – {job.end}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted">{job.location}</p>
                  <p className="mt-3 text-sm text-muted">{job.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {job.technologies.map(t => (
                      <span
                        key={t}
                        className="font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="space-y-10">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                Recognition
              </h3>
              <ul className="mt-4 space-y-4">
                {achievements.map(a => (
                  <li key={a.title}>
                    <p className="text-sm font-medium text-text">{a.title}</p>
                    <p className="text-xs text-muted">{a.context}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                Education
              </h3>
              <ul className="mt-4 space-y-4">
                {education.map(e => (
                  <li key={e.school}>
                    <p className="text-sm font-medium text-text">{e.program}</p>
                    <p className="text-xs text-muted">
                      {e.school} · {e.start} – {e.end}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
