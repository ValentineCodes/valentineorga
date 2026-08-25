import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Capabilities from "@/components/Capabilities";
import Experience from "@/components/Experience";
import Currently from "@/components/Currently";
import Writing from "@/components/Writing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Capabilities />
        <Experience />
        <Currently />
        <Writing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
