import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <section className="h-screen w-full bg-[#292f37]">
        <Header />
        <Hero />
      </section>
    </main>
  );
}
