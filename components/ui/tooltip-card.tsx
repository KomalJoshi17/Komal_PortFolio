"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const Tooltip = ({
  content,
  children,
  containerClassName,
}: {
  content: string | React.ReactNode;
  children: React.ReactNode;
  containerClassName?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={cn("relative inline-flex", containerClassName)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 -translate-x-1/2 
            bottom-full mb-2 z-[9999] pointer-events-none"
          >
            <div
              className="px-2 py-1 text-xs rounded-md 
              bg-black text-white 
              dark:bg-white dark:text-black
              shadow-lg whitespace-nowrap"
            >
              {content}
            </div>

            <div
              className="w-2 h-2 rotate-45 
              bg-black dark:bg-white 
              absolute left-1/2 -translate-x-1/2 top-full -mt-1"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};