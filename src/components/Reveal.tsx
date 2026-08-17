"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  /** Horizontal offset (px) to enter from — lets sections alternate
   *  left/right instead of every block rising the same way (used by
   *  Founders, ForWhom). Kept on the same primitive rather than a new
   *  component: one shared reveal grammar, only parameters change. */
  x?: number;
};

export default function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
  x = 0,
}: RevealProps) {
  // Framer Motion animates via JS, so the CSS-only prefers-reduced-motion
  // reset in globals.css can't reach it — this hook is the real off switch.
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y, x: reduceMotion ? 0 : x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
