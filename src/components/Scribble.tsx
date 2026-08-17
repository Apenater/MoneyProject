"use client";

import { motion, useReducedMotion } from "framer-motion";

type ScribbleProps = {
  className?: string;
  strokeClassName?: string;
};

export function ScribbleUnderline({
  className = "",
  strokeClassName = "stroke-mp-red",
  animate = false,
  delay = 0.3,
}: ScribbleProps & { animate?: boolean; delay?: number }) {
  const reduceMotion = useReducedMotion();
  const draw = animate && !reduceMotion;

  return (
    <svg
      viewBox="0 0 200 16"
      preserveAspectRatio="none"
      className={`h-3 w-full ${className}`}
      aria-hidden="true"
    >
      <motion.path
        d="M2 10.5C40 4 80 14 100 8C130 -1 160 13 198 6"
        fill="none"
        className={strokeClassName}
        strokeWidth="4"
        strokeLinecap="round"
        initial={draw ? { pathLength: 0 } : false}
        whileInView={draw ? { pathLength: 1 } : undefined}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function ScribbleCircle({
  className = "",
  strokeClassName = "stroke-mp-gold",
}: ScribbleProps) {
  return (
    // preserveAspectRatio="none" because this is an "circle this text"
    // mark, not a logo: without it the 2.2:1 oval was letterboxed inside
    // whatever box it was given, so on wide-and-short labels it shrank to
    // a narrow ellipse floating in the middle of the phrase (and dipped
    // onto the line below). Stretching is the correct behaviour here.
    // The explicit h-/w- calcs are not redundant with the insets: an SVG
    // is a replaced element, so with height:auto its used height comes
    // from the viewBox ratio (width / 2.2) and the bottom inset is simply
    // dropped. On a wide, short label that made the oval ~80px tall for a
    // 16px line — it stopped circling its own text and spilled onto the
    // line below. Sizing it explicitly to inset+100% makes the box the
    // insets describe, and preserveAspectRatio="none" lets the oval fill
    // it (this is a "circle this phrase" mark, not a logo).
    <svg
      viewBox="0 0 220 100"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute -inset-x-4 -inset-y-3 h-[calc(100%+1.5rem)] w-[calc(100%+2rem)] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M25 55C15 25 55 8 110 6C170 4 205 22 200 52C196 82 150 96 105 94C55 92 18 78 22 58"
        fill="none"
        className={strokeClassName}
        strokeWidth="4"
        strokeLinecap="round"
        // Keeps the pen weight even once the viewBox is stretched.
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function ScribbleArrow({
  className = "",
  strokeClassName = "stroke-mp-red",
}: ScribbleProps) {
  return (
    <svg
      viewBox="0 0 80 110"
      className={`h-24 w-16 ${className}`}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M40 4C36 34 30 62 44 92"
        className={strokeClassName}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M24 78C30 86 36 92 44 98C50 90 56 84 64 80"
        className={strokeClassName}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScribbleStar({
  className = "",
  strokeClassName = "stroke-mp-gold",
}: ScribbleProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`h-6 w-6 ${className}`}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M20 2L23 17L38 20L23 23L20 38L17 23L2 20L17 17Z"
        className={strokeClassName}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
