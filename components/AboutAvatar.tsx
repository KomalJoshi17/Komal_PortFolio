"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutAvatar() {
  return (
    <motion.div
      whileHover={{ rotate: 5, scale: 1.05 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className="flex flex-col items-center gap-4"
    >
      <Image
        src="/bitmoji.png"
        alt="Komal Joshi"
        width={260}
        height={260}
        className="object-contain"
      />

      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Hi 👋
      </p>
    </motion.div>
  );
}