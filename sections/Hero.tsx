"use client";

import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundLines } from "@/components/ui/background-lines";
import { CoolMode } from "@/components/ui/cool-mode"; 

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-60">
        <BackgroundLines>
          <div />
        </BackgroundLines>
      </div>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-4 border-black dark:border-white blur-sm"></div>

            <Image
              src="/bitmoji.png"
              alt="Komal Joshi"
              width={320}
              height={320}
              className="relative rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">

          <TextGenerateEffect
            words="Hi, I'm"
            className="text-3xl md:text-4xl font-semibold text-black dark:text-white"
          />

          <TextGenerateEffect
            words="Komal Joshi"
            className="text-blue-500 text-6xl md:text-7xl font-bold leading-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          />

          <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white">
            Full-Stack Developer | Problem Solver
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl">
            Crafting scalable digital experiences with purposeful code.
          </p>

          <CoolMode>
            <a
              href="/Komal_Joshi_CV.pdf" 
              download
              className="w-fit px-6 py-3 rounded-xl 
              bg-blue-500 text-white font-semibold 
              hover:bg-blue-600 
              transition-all duration-300 
              shadow-lg shadow-blue-500/30"
            >
              Download CV
            </a>
          </CoolMode>

        </div>
      </div>
    </section>
  );
}
