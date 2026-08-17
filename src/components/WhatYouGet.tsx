"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import TornDivider from "./TornDivider";
import { useParallax } from "@/hooks/useParallax";
import { WHAT_YOU_GET, INCLUSIVITY } from "@/lib/content";

const ROTATIONS = [-1.5, 1, -1, 1.5, -0.5];

// Each card's checkmark drifts a few px against the card's own scroll —
// the one parallax touch in this section (PFD Nivel B), kept to the icon
// only so the copy itself never moves independently of its card.
function GetItem({ item, rotation }: { item: string; rotation: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const iconY = useParallax(ref, 10);

  return (
    <div
      ref={ref}
      className="flex items-center gap-4 bg-mp-cream text-mp-black px-5 py-4 shadow-[4px_6px_0_rgba(0,0,0,0.35)]"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <motion.div style={{ y: iconY }} className="relative h-8 w-8 shrink-0">
        <Image
          src="/assets/check_rojo_icono.png"
          alt=""
          fill
          unoptimized
          className="object-contain"
        />
      </motion.div>
      <p className="text-base md:text-lg font-medium">{item}</p>
    </div>
  );
}

export default function WhatYouGet() {
  return (
    <section className="paper-black relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <h2 className="font-display uppercase text-3xl md:text-4xl text-center">
            Esto es lo que vas a lograr
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {WHAT_YOU_GET.map((item, i) => (
            <Reveal key={item} delay={i * 0.07}>
              <GetItem item={item} rotation={ROTATIONS[i % ROTATIONS.length]} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35}>
          <p className="mt-16 text-center text-lg md:text-xl font-serif-italic text-mp-gold max-w-2xl mx-auto">
            {INCLUSIVITY}
          </p>
        </Reveal>
      </div>

      <TornDivider
        fillClassName="fill-mp-cream"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}
