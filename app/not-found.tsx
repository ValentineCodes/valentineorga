import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex min-h-[60vh] items-center py-20">
        <div className="container">
          <p className="font-mono text-sm text-accent">404</p>
          <h1 className="mt-3 font-display text-3xl font-bold text-text md:text-4xl">
            Nothing shipped at this address.
          </h1>
          <p className="mt-4 text-base text-muted">
            The page you&apos;re looking for doesn&apos;t exist, or has moved.
          </p>
          <Link
            href="/"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-text transition-all duration-200 hover:scale-[1.03] hover:border-accent hover:text-accent active:scale-95"
          >
            <span aria-hidden className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
