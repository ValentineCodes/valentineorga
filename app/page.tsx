"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

import { Popover } from '@headlessui/react'

export default function Home() {
  return (
    <main>
      <Popover className="relative min-h-screen w-full bg-[#292f37]">
        <Header />
        <Hero />
      </Popover>

      <section id="about" className="bg-[url('/images/about_bg.jpeg')] min-h-screen bg-no-repeat bg-cover">
        <About />
      </section>

      <section id="skills" className="bg-[url('/images/coding_bg.jpeg')] min-h-screen bg-no-repeat bg-cover">
        <Skills />
      </section>

      <section id="Projects" className="bg-[url('/images/head_shattering.jpeg')] min-h-screen bg-cover">
        <Projects />
      </section>

      <section id="contact" className="bg-[#1a1e23] min-h-screen bg-cover">
        <Contact />
      </section>
    </main>
  );
}
