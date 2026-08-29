'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { navigation, site } from '@/lib/site'

const socials = [
  { label: 'LinkedIn', href: site.social.linkedin, Icon: FaLinkedinIn },
  { label: 'GitHub', href: site.social.github, Icon: FaGithub },
  { label: 'X (Twitter)', href: site.social.x, Icon: FaXTwitter },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-base font-bold tracking-tight text-text"
        >
          <span className="text-accent">VC/</span> {site.brand}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navigation.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              <span className="text-accent">{item.index}</span>
              <span className="relative">
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <ul className="flex items-center gap-4">
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
          <Link
            href={site.resumeUrl}
            download
            className="rounded-full border border-border px-4 py-2 font-mono text-xs text-text transition-all duration-200 hover:scale-[1.05] hover:border-accent hover:text-accent active:scale-95"
          >
            Résumé ↓
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-text transition-transform duration-150 active:scale-90 lg:hidden"
        >
          <RiMenu3Line className="text-2xl" aria-hidden />
        </button>
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-[100] lg:hidden"
      >
        <div className="fixed inset-0 bg-bg" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-0 flex flex-col bg-bg px-6 py-6">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-display text-base font-bold text-text">
              <span className="text-accent">VC/</span> {site.brand}
            </Dialog.Title>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-text transition-transform duration-150 active:scale-90"
            >
              <RiCloseLine className="text-2xl" aria-hidden />
            </button>
          </div>

          <nav aria-label="Primary" className="mt-14 flex flex-col gap-2">
            {navigation.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-b border-border py-5 font-display text-2xl font-semibold text-text transition-all duration-200 hover:pl-2 hover:text-accent"
              >
                <span className="font-mono text-sm text-accent">
                  {item.index}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex items-center justify-between pt-10">
            <ul className="flex items-center gap-5">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="text-muted"
                  >
                    <Icon className="text-xl" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={site.resumeUrl}
              download
              className="rounded-full border border-border px-4 py-2 font-mono text-xs text-text"
            >
              Résumé ↓
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
