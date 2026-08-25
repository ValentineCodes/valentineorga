import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DomainTag from "@/components/DomainTag";
import { getProjectBySlug, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.name,
      description: project.description,
      url: `${site.url}/work/${project.slug}`,
      images: [site.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: [site.ogImage],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const hasSeparateLiveUrl = project.liveUrl && project.liveUrl !== project.github;

  return (
    <>
      <Header />
      <main id="main">
        <article className="py-16 md:py-20">
          <div className="container max-w-3xl animate-fade-up">
            <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              <span aria-hidden className="h-px w-3.5 bg-accent" />
              <Link href="/work" className="hover:underline">
                Work
              </Link>
            </p>

            <div className="flex flex-wrap gap-2">
              {project.category.map((c) => (
                <DomainTag key={c} category={c} />
              ))}
            </div>

            <h1 className="mt-4 text-balance font-display text-4xl font-bold text-text md:text-5xl">
              {project.name}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
              >
                <FaGithub aria-hidden /> View code
              </Link>
              {hasSeparateLiveUrl ? (
                <Link
                  href={project.liveUrl!}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
                >
                  <FaArrowUpRightFromSquare aria-hidden /> Visit live
                </Link>
              ) : null}
            </div>

            <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface-2">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover saturate-[0.85]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-bg/0 to-bg/10 mix-blend-multiply" />
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  Overview
                </h2>
                <p className="mt-3 text-base text-muted">{project.description}</p>

                {project.highlights.length > 0 ? (
                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-muted">
                        <span aria-hidden className="text-accent">
                          —
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    Role
                  </h2>
                  <p className="mt-2 text-sm text-text">{project.role}</p>
                </div>
                <div>
                  <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    Stack
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {project.technologies.map((t) => (
                      <span key={t} className="font-mono text-xs text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    Status
                  </h2>
                  <p className="mt-2 text-sm capitalize text-text">
                    {project.status.replace("-", " ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 border-t border-border pt-8">
              <Link href="/work" className="group inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
                <span aria-hidden className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
                  ←
                </span>
                Back to all work
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
