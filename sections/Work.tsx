"use client";

import TimelineDemo from "@/components/timeline-demo";

export default function Work() {
  return (
    <section
      id="work"
      className="relative w-full 
      bg-white dark:bg-black 
      transition-colors"
    >
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white">
            Work & Growth
          </h1>

          <p className="mt-6 text-neutral-600 dark:text-neutral-400 
          max-w-2xl mx-auto text-lg leading-relaxed">
            A journey of learning, building, and continuously improving through real-world development and problem-solving.
          </p>
        </div>
        <TimelineDemo />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 
      bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />
    </section>
  );
}