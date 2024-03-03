import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main>
      <section className="h-screen w-full bg-[#292f37]">
        <Header />
        <Hero />
      </section>

      <section className="h-screen bg-[#292f37] flex items-center">
        <About />
      </section>

      <section className="bg-[url('/images/coding_bg0.jpeg')] h-screen bg-no-repeat bg-cover">
        <Skills />
      </section>

      <section className="bg-[url('/images/head_shattering.jpeg')] h-screen bg-cover">
        <Works />
      </section>

      <section className="bg-[#1a1e23] h-screen bg-cover">
        <Contact />
      </section>
    </main>
  );
}
