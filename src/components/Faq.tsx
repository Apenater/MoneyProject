"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import TornDivider from "./TornDivider";
import { ScribbleUnderline } from "./Scribble";
import { FAQ } from "@/lib/content";

const ROTATIONS = [-0.8, 0.8, -0.6, 0.6];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

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
                <div
                  className="tape relative torn-edge bg-white/70 overflow-hidden shadow-[5px_8px_0_rgba(0,0,0,0.1)]"
                  style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 pt-8 pb-4 text-left font-display text-base md:text-lg"
                  >
                    {item.question}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="shrink-0 text-mp-red"
                    >
                      ▾
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-6 pb-6 border-t border-dashed border-mp-black/15 pt-4 text-sm md:text-base text-mp-black/70 leading-relaxed">
                          {item.answer}
                        </p>
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
        fillClassName="fill-mp-red-dark"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}
