import FloatingNavDemo from "@/components/floating-navbar-demo";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Work from "@/sections/Work";
import { Certificate } from "crypto";
import Certifications from "@/sections/Certifications";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      
      <FloatingNavDemo />

      <Hero />
      <About />
      <Skills/>
      <Work />
      <Certifications/>
      <Projects />
      <Contact/>
    </main>
  );
}