import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { site } from '@/lib/site'

const description =
  'Notes on smart contract patterns, Web3 tooling, and shipping decisions.'

export const metadata: Metadata = {
  title: 'Writing',
  description,
  alternates: { canonical: '/writing' },
  openGraph: {
    title: 'Writing | Valentine Orga',
    description,
    url: `${site.url}/writing`,
    images: [site.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writing | Valentine Orga',
    description,
    images: [site.ogImage],
  },
}

export default function WritingPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="py-16 md:py-20">
          <div className="container animate-fade-up">
            <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              <span aria-hidden className="h-px w-3.5 bg-accent" />
              03 / Writing
            </p>
            <h1 className="max-w-2xl text-balance font-display text-4xl font-bold text-text md:text-5xl">
              Engineering notes
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted">
              Notes on smart contract patterns, Web3 tooling, and the decisions
              behind what I ship.
            </p>

            <div className="mt-14 max-w-2xl rounded-lg border border-dashed border-border p-8 text-sm text-muted">
              Nothing published here yet. Check back soon, or follow{' '}
              <a
                href="https://x.com/ValentineOrga"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent hover:underline"
              >
                @ValentineOrga
              </a>{' '}
              for updates in the meantime.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
