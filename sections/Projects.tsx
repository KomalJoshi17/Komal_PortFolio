"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import TerminalLoader from "@/components/TerminalLoader";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projects = [
  {
    title: "E-Commerce Platform",
    image: "/projects/ecom.png",
    live: "https://ecom-shop-amber.vercel.app/",
    github: "https://github.com/KomalJoshi17/EcomShop.git",
  },
  {
    title: "Seasonal Wardrobe",
    image: "/projects/wardrobe.png",
    live: "https://seasonal-wardrobe.onrender.com/",
    github: "https://github.com/KomalJoshi17/Seasonal-Wardrobe.git",
  },
  {
    title: "Vehicle Tracking System",
    image: "/projects/tracking.png",
    live: "https://real-time-vehicle-tracking.vercel.app",
    github: "https://github.com/KomalJoshi17/Real-Time-Vehicle-Tracking.git",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto w-full">

        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-black dark:text-white">
          Projects 🚀
        </h2>

        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
          A showcase of my hands-on projects reflecting real-world problem solving,
          technical expertise, and my passion for building scalable and user-centric applications.
        </p>

        <div className="grid md:grid-cols-3 gap-10 place-items-center mt-12">

          {projects.map((project) => (
            <CardContainer key={project.title} className="inter-var">

              <CardBody
                className="relative group/card rounded-3xl 
                bg-white dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                w-[320px] md:w-[380px]
                p-5
                hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]
                transition duration-300"
              >

                <CardItem translateZ="120" className="w-full">
                  <div className="relative w-full h-60 rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                </CardItem>

                <CardItem
                  translateZ="70"
                  className="text-xl font-semibold mt-5 text-black dark:text-white"
                >
                  {project.title}
                </CardItem>

              <CardItem
  translateZ="90"
  className="flex gap-5 mt-5"
>
<div className="flex gap-5 mt-5 z-10 relative">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
  >
   <Github className="w-6 h-6 text-neutral-600 dark:text-neutral-400 hover:!text-green-500 transition duration-200 cursor-pointer" />
  </a>

  <button onClick={() => setActiveProject(project.live)}>
   <ExternalLink className="w-6 h-6 text-neutral-600 dark:text-neutral-400 hover:!text-blue-500 transition duration-200 cursor-pointer" />
  </button>
</div>
</CardItem>
              </CardBody>
            </CardContainer>
          ))}

        </div>

        {activeProject && (
          <TerminalLoader
            url={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}

      </div>
    </section>
  );
}