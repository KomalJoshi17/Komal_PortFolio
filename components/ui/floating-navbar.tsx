"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

export const FloatingNav = ({ navItems }: any) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScroll && latest > 100) {
      setVisible(false); 
    } else {
      setVisible(true); 
    }

    setLastScroll(latest);
  });

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="flex items-center gap-6 px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg">

        {navItems.map((item: any, idx: number) => (
          <a
            key={idx}
            href={item.link}
            className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
          >
            {item.icon}
            <span className="hidden md:block">{item.name}</span>
          </a>
        ))}

        <ThemeToggle />

      </div>
    </div>
  );
};