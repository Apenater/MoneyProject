"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import BrandLockup from "./BrandLockup";
import { usePastHero } from "@/hooks/usePastHero";

export default function Header() {
  // A single page-level scroll listener (Framer's useScroll is already
  // rAF-throttled) driving one cheap box-shadow ramp — the header gains
  // a hairline of depth once content is actually scrolling under it,
  // instead of being flatly semi-solid from frame one. transform/opacity
  // only, nothing here competes with the WhatsApp button beside it.
  const { scrollY } = useScroll();
  const elevation = useTransform(scrollY, [0, 80], [0, 1]);
  const boxShadow = useTransform(
    elevation,
    (v) => `0 8px 24px -12px rgba(0,0,0,${0.45 * v})`
  );
  const borderOpacity = useTransform(elevation, [0, 1], [0.1, 0.25]);

  // Hidden for the whole hero: the hero carries the lockup at full size,
  // so a second, smaller copy of the same mark pinned above it was the
  // brand competing with itself. The header is the mark's *scrolled*
  // state — it arrives only once the big one is gone.
  const reduceMotion = useReducedMotion();
  const visible = usePastHero();

  return (
    <motion.header
      style={{ boxShadow, borderColor: useTransform(borderOpacity, (v) => `rgba(243,236,217,${v})`) }}
      initial={false}
      animate={{
        y: visible ? 0 : "-100%",
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      // Hidden means hidden: without inert the Reservar link stays in the
      // tab order the whole time it is translated off-screen, so a
      // keyboard user's first Tab lands on a control they cannot see.
      inert={!visible}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-mp-black/70 border-b"
    >
      {/* Mark only, centred. The ask lives in the sticky bar along the
          bottom edge, which appears on this same frame — two WhatsApp
          buttons pinned to opposite edges of the viewport was the same
          request competing with itself. */}
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-center">
        <a href="#top" className="flex items-center">
          <BrandLockup size="header" />
        </a>
      </div>
    </motion.header>
  );
}
