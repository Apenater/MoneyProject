"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

type TornDividerProps = {
  /** Tailwind color token feeding the fill, e.g. "fill-mp-cream" */
  fillClassName: string;
  /** Which section this divider visually belongs to */
  flip?: boolean;
  className?: string;
  /** Scroll-linked drift on the torn edge itself — reserved for the 2-3
   *  transitions adjacent to a Nivel B/C moment (PFD R3: connective
   *  tissue, not a new transition language applied to all 12 dividers). */
  parallax?: boolean;
};

// Deterministic jagged path (no Math.random — stays stable across server/client renders).
const POINTS: [number, number][] = [
  [0, 6], [40, 22], [80, 4], [125, 28], [170, 10], [215, 26], [260, 2],
  [305, 24], [350, 8], [395, 30], [440, 12], [485, 26], [530, 4], [575, 22],
  [620, 8], [665, 28], [710, 6], [755, 24], [800, 10], [845, 30], [890, 4],
  [935, 22], [980, 8], [1025, 26], [1070, 2], [1115, 24], [1160, 10],
  [1205, 28], [1250, 6], [1295, 22], [1340, 8], [1385, 26], [1440, 6],
];

export default function TornDivider({
  fillClassName,
  flip = false,
  className = "",
  parallax = false,
}: TornDividerProps) {
  const path =
    POINTS.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ") +
    " L1440,40 L0,40 Z";

  const ref = useRef<HTMLDivElement>(null);
  const driftY = useParallax(ref, parallax ? 10 : 0);

  // `flip` (rotate-180, a static class) and the scroll-linked `y` drift
  // both resolve to the same `transform` property — if they ever landed
  // on one element, Framer's inline transform would silently drop the
  // class-based rotation. Keeping flip on a plain outer div and the
  // parallax on an inner motion.div (which never sets rotate) means
  // they can never collide, even if a future divider uses both.
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${
        flip ? "rotate-180" : ""
      } ${className}`}
    >
      <motion.div ref={ref} style={parallax ? { y: driftY } : undefined}>
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          className="h-8 w-full md:h-10"
        >
          <path d={path} className={fillClassName} />
        </svg>
      </motion.div>
    </div>
  );
}
