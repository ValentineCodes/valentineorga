"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

import { Popover } from '@headlessui/react'

export default function Home() {
  return (
    <main id="home">
      <Popover className="relative min-h-screen w-full bg-[#292f37]">
        <Header />
        <Hero />
      </Popover>

      <section className="min-h-screen bg-[#292f37] flex items-center">
        <About />
      </section>

      <section className="bg-[url('/images/coding_bg.jpeg')] min-h-screen bg-no-repeat bg-cover">
        <Skills />
      </section>

      {/* <section className="bg-[url('/images/head_shattering.jpeg')] h-screen bg-cover">
        <Works />
      </section>

      <section className="bg-[#1a1e23] h-screen bg-cover">
        <Contact />
      </section> */}
    </main>
  );
}
