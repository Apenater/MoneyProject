"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import TornDivider from "./TornDivider";
import { ScribbleUnderline } from "./Scribble";
import { FAQ } from "@/lib/content";

const ROTATIONS = [-0.8, 0.8, -0.6, 0.6];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="paper-cream relative text-mp-black py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <h2 className="font-display uppercase text-3xl md:text-4xl text-center mb-3">
            ¿Tenés alguna duda?
          </h2>
          <p className="relative inline-block w-full text-center font-serif-italic text-lg text-mp-red/80 mb-14">
            Desplegá las preguntas
            <ScribbleUnderline
              className="absolute left-1/2 -bottom-2 w-40 -translate-x-1/2"
              strokeClassName="stroke-mp-red/60"
            />
          </p>
        </Reveal>

        <div className="space-y-5">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} delay={i * 0.05}>
                {/* Same split as the Curriculum cards: the washi tape sits
                    above the card's top edge, so it can't live on the same
                    element as torn-edge's clip-path and overflow-hidden —
                    it was getting sliced in half on all four cards. */}
                <div
                  className="tape relative"
                  style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
                >
                  {/* bg-white/70 over the cream section left the cards at
                      ~1.05:1 against their own background — they read as
                      text on paper, not as controls you can press. Solid
                      white plus a firmer offset shadow gives them an edge. */}
                  <div className="torn-edge relative overflow-hidden bg-white shadow-[5px_8px_0_rgba(0,0,0,0.18)]">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="w-full flex items-center justify-between gap-4 px-6 pt-8 pb-4 text-left font-display text-base md:text-lg"
                    >
                      {item.question}
                      <motion.span
                        aria-hidden="true"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.2 }}
                        className="shrink-0 text-mp-red"
                      >
                        ▾
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.25 }}
                        >
                          <p className="px-6 pb-6 border-t border-dashed border-mp-black/15 pt-4 text-sm md:text-base text-mp-black/70 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <TornDivider
        fillClassName="fill-mp-red-dark"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}
