"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

// A thin reading-progress line at the very top edge — the kind of
// ambient "you're getting somewhere" cue long showcase pages use so a
// 12-section scroll doesn't feel directionless. It's a direct 1:1
// reflection of scroll position, not an independent animation, so it
// stays on even under reduced motion — only the spring smoothing (which
// very slightly lags/settles after you stop scrolling) is skipped then,
// so nothing moves once the user's finger/wheel does.
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: reduceMotion ? scrollYProgress : smoothed }}
      className="fixed top-0 inset-x-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-mp-red to-mp-gold"
    />
  );
}
