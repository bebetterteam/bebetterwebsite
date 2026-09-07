import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Toolkit from "@/components/Toolkit";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="w-full px-6">
        <Hero />
        <About />
        <Toolkit />
        <Services />
        <Pricing />
        <Projects />
      </main>
      <Contact />
    </>
  );
}
