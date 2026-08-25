import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const description =
  "Smart contracts, Web3 applications, mobile wallets, and developer tooling built by Valentine Orga.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work | Valentine Orga",
    description,
    url: `${site.url}/work`,
    images: [site.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Valentine Orga",
    description,
    images: [site.ogImage],
  },
};

export default function WorkPage() {
  const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <>
      <Header />
      <main id="main">
        <section className="border-b border-border bg-bg py-16 md:py-20">
          <div className="container animate-fade-up">
            <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              <span aria-hidden className="h-px w-3.5 bg-accent" />
              01 / Work
            </p>
            <h1 className="max-w-2xl text-balance font-display text-4xl font-bold text-text md:text-5xl">
              Everything I&apos;ve shipped and open-sourced.
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted">
              Smart contracts, Web3 applications, mobile wallets, and the developer tooling that
              sits underneath them. Featured work is marked and sorted first.
            </p>
          </div>
        </section>

        <section className="bg-bg py-16 md:py-20">
          <div className="container">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ordered.map((project, i) => (
                <Reveal key={project.slug} delay={(i % 3) * 0.08}>
                  <ProjectCard project={project} priority={i === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
