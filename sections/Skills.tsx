"use client";

import { IconCloud } from "@/components/ui/icon-cloud";
import { Tooltip } from "@/components/ui/tooltip-card";
import { FaJava, FaCss3Alt } from "react-icons/fa";

const categories = {
  Frontend: [
    "html5","css","javascript","typescript",
    "react","nextdotjs","tailwindcss"
  ],
  Backend: [
    "nodedotjs","express","google"
  ],
  Database: [
    "mongodb","mongoose","mysql",
    "postgresql","sqlite","redis"
  ],
  Other: [
    "git","github","docker",
    "python","java","c","cplusplus","android"
  ],
};

const cloudSlugs = [
  "html5","css","javascript","typescript",
  "react","nextdotjs","tailwindcss",
  "nodedotjs","express",
  "mongodb","mysql","postgresql",
  "docker","git","github","python"
];

const images = cloudSlugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}`
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-start justify-center 
      px-6 bg-white dark:bg-black transition-colors"
    >
      <div className="max-w-7xl w-full mx-auto mt-3">

        <h1 className="text-3xl md:text-6xl font-bold text-center mb-4 
        text-black dark:text-white">
          Skills
        </h1>

        <p className="text-center mb-10 text-neutral-600 dark:text-neutral-400 
        max-w-2xl mx-auto text-[1rem] md:text-[1rem] leading-relaxed">
          A well-rounded stack with frontend finesse, backend strength, and scalable architecture.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="relative flex justify-center items-center">

            <div className="absolute w-[480px] h-[480px] 
            bg-blue-500/15 blur-[140px] rounded-full"></div>

            <div className="absolute w-[260px] h-[260px] 
            bg-blue-400/10 blur-[90px] rounded-full"></div>

            <div className="scale-110 opacity-90">
              <IconCloud images={images} />
            </div>

          </div>

          <div className="grid grid-cols-2 gap-5">

            {Object.entries(categories).map(([title, items]) => (
              <div
                key={title}
                className="p-5 rounded-2xl 
                border border-neutral-200 dark:border-neutral-800
                bg-white/60 dark:bg-neutral-900/60
                backdrop-blur-xl
                shadow-[0_0_30px_rgba(59,130,246,0.12)]
                hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]
                transition duration-300"
              >

                <h2 className="text-md font-semibold mb-4 text-center text-blue-500">
                  {title}
                </h2>

                <div className="grid grid-cols-3 gap-4 place-items-center">

                  {items.map((slug, i) => (
                    <Tooltip key={i} content={slug.toUpperCase()}>
                      <div
                        className="w-12 h-12 flex items-center justify-center
                        rounded-xl 
                        bg-neutral-200/70 dark:bg-neutral-800/70
                        border border-neutral-300 dark:border-neutral-700
                        hover:scale-110
                        hover:bg-blue-100 dark:hover:bg-blue-900/40
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
                        transition duration-300 cursor-pointer"
                      >
                        {slug === "java" ? (
                          <FaJava className="w-6 h-6 text-orange-500" />
                        ) : slug === "css" || slug === "css3" ? (
                          <FaCss3Alt className="w-6 h-6 text-blue-500" />
                        ) : (
                          <img
                            src={`https://cdn.simpleicons.org/${slug}`}
                            className="w-6 h-6 object-contain"
                            alt={slug}
                          />
                        )}
                      </div>
                    </Tooltip>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}