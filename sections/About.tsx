"use client";

import Avatar3D from "@/components/Avatar3D";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Tooltip } from "@/components/ui/tooltip-card";

export default function About() {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen bg-white dark:bg-black">

      <section id="about" className="px-6 py-28">

        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-24 text-neutral-900 dark:text-white dark:text-white">
            About Me
          </h1>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="flex justify-center items-center relative">
              <div className="absolute w-[320px] h-[320px] bg-blue-500/20 blur-3xl rounded-full"></div>

              <div className="relative scale-110">
                <Avatar3D />
              </div>
            </div>

            <div className="flex flex-col gap-6 max-w-xl">

              <div className="text-lg md:text-xl leading-relaxed text-neutral-800 dark:text-neutral-200">

                <span>Hi, I’m </span>

                <Tooltip
                  containerClassName="inline-block"
                  content={
                    <div className="flex flex-col gap-2 pointer-events-auto">

                      <span className="font-semibold text-sm">Connect with me 🚀</span>

                      <a
                        href="https://github.com/KomalJoshi17"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        GitHub
                      </a>

                      <a
                        href="https://www.linkedin.com/in/komal-joshi10"
                        target="_blank"
                        className="text-blue-400 hover:underline"
                      >
                        LinkedIn
                      </a>

                    </div>
                  }
                >
                  <span className="text-blue-500 font-semibold cursor-pointer hover:underline">
                    Komal Joshi
                  </span>
                </Tooltip>

                <span>
                  {" "}— a Computer Science student passionate about problem-solving and web development.
                </span>

              </div>
              <div className="flex flex-col gap-5 text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                <p>
                  I enjoy building projects and turning ideas into real, functional applications that create meaningful impact.
                </p>
                <p>
                  I have a strong interest in improving my coding skills and regularly practice to write efficient, clean, and optimized solutions. Along with development, I like exploring how different technologies work together to build scalable and smooth user experiences.
                </p>
                <p>
                  I am also actively involved in learning new concepts, strengthening my foundation in data structures and algorithms, and applying my knowledge through practical projects.
                </p>
                <p>
                  I’m always eager to learn, grow, and take on new challenges that help me evolve as a developer and contribute effectively in real-world environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}