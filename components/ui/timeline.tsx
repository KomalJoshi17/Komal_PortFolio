"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [confettiFired, setConfettiFired] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"], 
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.95 && !confettiFired) {
        setConfettiFired(true);

        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      }
    });
  }, [scrollYProgress, confettiFired]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-6">

        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 md:pt-10 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">

              <div className="h-10 absolute left-3 w-10 rounded-full 
              bg-white dark:bg-black flex items-center justify-center 
              border border-neutral-300 dark:border-neutral-700">

                <div className="h-4 w-4 rounded-full bg-blue-500 
                shadow-[0_0_20px_rgba(59,130,246,1)] animate-pulse" />
              </div>

              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold 
              text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">

              <h3 className="md:hidden block text-2xl mb-4 font-bold 
              text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>

              <div
                className="p-4 rounded-xl max-w-2xl
                bg-white/50 dark:bg-neutral-900/50 
                backdrop-blur-lg 
                border border-neutral-200 dark:border-neutral-800
                hover:scale-[1.02] 
                hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
                transition duration-300"
              >
                <div className="text-[15px] md:text-base leading-relaxed 
                text-neutral-600 dark:text-neutral-400">
                  {item.content}
                </div>
              </div>

            </div>
          </div>
        ))}

<div
  className="absolute md:left-8 left-8 top-0 w-[2px] h-full 
  bg-neutral-300 dark:bg-neutral-800"
/>

<motion.div
  style={{
    height: heightTransform,
  }}
  className="absolute md:left-8 left-8 top-0 w-[2px] 
  bg-blue-500 rounded-full"
/>

      </div>
    </div>
  );
};