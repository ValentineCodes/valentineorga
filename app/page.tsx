import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
    </main>
  );
}
