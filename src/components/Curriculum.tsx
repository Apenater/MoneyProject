"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import TornDivider from "./TornDivider";
import { MODULES, MODALITY } from "@/lib/content";

const ROTATIONS = [-1, 1, -0.7];

// Hand-drawn line icons per module — avoids relying on flattened Canva
// slide graphics (which come with opaque white backgrounds) for small
// circular badges.
function IconMindset({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <path d="M20 6C12 6 7 12 7 19c0 5 3 8.5 6 10.5V33h14v-3.5c3-2 6-5.5 6-10.5 0-7-5-13-13-13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 33h10M16.5 36.5h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 12c-3.5 2-5 5-3.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconChart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <path d="M6 33h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="10" y="21" width="4" height="9" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="14" width="4" height="16" stroke="currentColor" strokeWidth="2" />
      <rect x="26" y="8" width="4" height="22" stroke="currentColor" strokeWidth="2" />
      <path d="M9 18 L19 10 L27 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 5h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCrypto({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <path d="M20 4 33 12v16L20 36 7 28V12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 15h5.5a3 3 0 0 1 0 6H16m0 0h6a3 3 0 0 1 0 6h-6m0-12v-3m0 15v3m4-18v3m0 15v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const MODULE_ICONS = [IconMindset, IconChart, IconCrypto];

export default function Curriculum() {
  const [open, setOpen] = useState(0);
  const reduceMotion = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  // "El viaje que recorrés" gets a literal progress spine: a line that
  // grows with scroll instead of the accordion's own click-driven state
  // (no pinning here — stacking a scroll-jack on top of an existing
  // click interaction would fight the user's own input, see PFD R1/R4).
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start center", "end center"],
  });
  const spineScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [0, 1]);

  return (
    <section id="programa" className="paper-black relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="text-center font-serif-italic text-lg text-mp-gold mb-2">
            El viaje que recorrés en Money Project
          </p>
          <h2 className="font-display uppercase text-3xl md:text-4xl text-center">
            Todo lo que vas a aprender
          </h2>
          <p className="mt-3 text-center text-mp-cream/60 text-sm uppercase tracking-widest">
            {MODALITY.title}
          </p>
        </Reveal>

        <div ref={listRef} className="relative mt-14 space-y-7">
          <div
            aria-hidden="true"
            className="absolute -left-4 top-0 bottom-0 hidden w-px bg-mp-cream/10 md:block"
          >
            <motion.div
              style={{ scaleY: spineScale }}
              className="h-full w-full origin-top bg-mp-gold/70"
            />
          </div>
          {MODULES.map((mod, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={mod.title} delay={i * 0.08}>
                <div
                  className="relative bg-mp-cream/[0.04] border border-mp-cream/15 overflow-hidden shadow-[5px_8px_0_rgba(0,0,0,0.3)]"
                  style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
                >
                  <span className="absolute -top-3 left-6 rounded-full bg-mp-red px-3 py-1 text-[10px] uppercase tracking-widest text-mp-cream -rotate-2 shadow-md">
                    {mod.badge}
                  </span>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center gap-5 px-5 pt-7 pb-5 text-left"
                  >
                    <div className="relative h-14 w-14 shrink-0 rounded-full bg-mp-cream/10 p-2.5 text-mp-gold">
                      {(() => {
                        const IconComp = MODULE_ICONS[i % MODULE_ICONS.length];
                        return <IconComp className="h-full w-full" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display uppercase text-lg md:text-xl mt-0.5">
                        {mod.title}
                      </h3>
                      <p className="text-sm text-mp-cream-dim mt-0.5">
                        {mod.sessions}
                      </p>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="text-2xl text-mp-cream/60 font-light"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" }}
                      >
                        <ul className="px-5 pb-6 pl-[4.75rem] space-y-3 border-t border-dashed border-mp-cream/15 pt-4">
                          {mod.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-3 text-sm md:text-base text-mp-cream/80"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mp-gold" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <TornDivider
        fillClassName="fill-mp-cream"
        className="absolute bottom-0 left-0"
        parallax
      />
    </section>
  );
}
