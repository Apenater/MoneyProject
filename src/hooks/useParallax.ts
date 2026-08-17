"use client";

import { useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import type { RefObject } from "react";

/**
 * Scroll-linked parallax offset (in px) for a ref'd element — hand the
 * result straight to `style={{ y }}`.
 *
 * This is the site's ONE parallax primitive (PFD R3: a small shared
 * grammar, not a bespoke effect per section) and it's reduced-motion
 * aware by construction (PFD R1/reduced-motion parity): when the user
 * has prefers-reduced-motion set, the transform's output range collapses
 * to a fixed 0, so the element never drifts, no matter how the caller
 * uses it.
 */
export function useParallax(
  ref: RefObject<HTMLElement | null>,
  distance = 40
): MotionValue<number> {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-distance, distance]
  );
}
