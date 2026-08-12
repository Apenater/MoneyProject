"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import TornDivider from "./TornDivider";
import { MODULES, MODALITY } from "@/lib/content";

const ROTATIONS = [-1, 1, -0.7];

export default function Curriculum() {
  const [open, setOpen] = useState(0);

  return (
    <section id="programa" className="paper-black relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
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

        <div className="mt-14 space-y-7">
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
                    <div className="relative h-14 w-14 shrink-0 rounded-full bg-mp-cream/10 p-2">
                      <Image
                        src={mod.icon}
                        alt=""
                        fill
                        className="object-contain p-1.5"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display uppercase text-lg md:text-xl mt-0.5">
                        {mod.title}
                      </h3>
                      <p className="text-sm text-mp-cream/50 mt-0.5">
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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
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
      />
    </section>
  );
}
