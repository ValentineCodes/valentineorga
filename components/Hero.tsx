import Image from 'next/image'
import Link from 'next/link'
import { BsDownload } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'
import { site } from '@/lib/site'
import Parallax from './Parallax'

export default function Hero() {
  return (
    <div className="container flex flex-col-reverse gap-14 py-16 md:flex-row md:items-center md:justify-between md:py-24 lg:py-32">
      <div className="w-full min-w-0 max-w-xl">
        <p
          aria-hidden
          className="animate-fade-up font-mono text-sm text-accent"
        >
          {'<h1>'}
        </p>
        <h1 className="ml-1 animate-fade-up text-balance font-display text-4xl font-bold leading-[1.08] text-text [animation-delay:80ms] sm:text-5xl md:text-6xl">
          Solving problems with code
        </h1>
        <p
          aria-hidden
          className="animate-fade-up font-mono text-sm text-accent [animation-delay:160ms]"
        >
          {'</h1>'}
        </p>

        <p className="mt-6 max-w-lg animate-fade-up text-balance text-base text-muted [animation-delay:220ms] md:text-lg">
          I help businesses grow by crafting out great user experiences. If
          you&apos;re looking for a developer that loves to get stuff done
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:300ms]">
          <Link
            href="/work"
            className="rounded-full bg-accent px-6 py-3 font-body text-sm font-medium text-bg transition-all duration-200 hover:scale-[1.03] hover:opacity-90 active:scale-95"
          >
            View my work
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-border px-6 py-3 font-body text-sm font-medium text-text transition-all duration-200 hover:scale-[1.03] hover:border-accent hover:text-accent active:scale-95"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <Parallax
        strength={18}
        className="w-full min-w-0 max-w-[280px] flex-shrink-0 self-center animate-fade-up [animation-delay:180ms] md:max-w-[300px] md:self-auto"
      >
        <div className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40">
          <Image
            src="/images/profile_image.png"
            alt="Portrait of Valentine Orga"
            width={112}
            height={112}
            className="mx-auto h-28 w-28 animate-pulse-ring rounded-full border-2 border-accent object-cover"
            priority
          />
          <p className="mt-4 text-center font-display text-lg font-semibold text-text">
            Valentine Orga
          </p>
          <p className="text-center text-sm text-muted">{site.role}</p>

          <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-muted">
            <GrLocation className="text-accent" aria-hidden />
            {site.location}
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {['Solidity', 'Next.js', 'React Native'].map(tag => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-wide text-accent">
            full-time / freelance
          </p>

          <Link
            href={site.resumeUrl}
            download
            className="group mt-5 flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm text-text transition-all duration-200 hover:scale-[1.02] hover:border-accent hover:text-accent active:scale-95"
          >
            Download résumé
            <BsDownload
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </Link>
        </div>
      </Parallax>
    </div>
  )
}
