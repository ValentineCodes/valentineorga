import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Image from "next/image";

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
    </main>
  );
}
