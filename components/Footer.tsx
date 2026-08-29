import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6'
import { site } from '@/lib/site'

const socials = [
  { label: 'LinkedIn', href: site.social.linkedin, Icon: FaLinkedinIn },
  { label: 'GitHub', href: site.social.github, Icon: FaGithub },
  { label: 'X (Twitter)', href: site.social.x, Icon: FaXTwitter },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-10">
      <div className="container flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">VC/</span> {site.brand} — built with
          Next.js
        </p>

        <ul className="flex items-center gap-5">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <Link
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="inline-block text-muted transition-all duration-200 hover:scale-110 hover:text-accent"
              >
                <Icon className="text-lg" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="mailto:valentineorga@gmail.com"
          className="font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          {site.email}
        </a>
      </div>
    </footer>
  )
}
