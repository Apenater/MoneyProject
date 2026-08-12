import Image from "next/image";
import Reveal from "./Reveal";
import TornDivider from "./TornDivider";
import { WHAT_YOU_GET, INCLUSIVITY } from "@/lib/content";

const ROTATIONS = [-1.5, 1, -1, 1.5, -0.5];

export default function WhatYouGet() {
  return (
    <section className="paper-black relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <h2 className="font-display uppercase text-3xl md:text-4xl text-center">
            Esto es lo que vas a lograr
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {WHAT_YOU_GET.map((item, i) => (
            <Reveal key={item} delay={i * 0.07}>
              <div
                className="flex items-center gap-4 bg-mp-cream text-mp-black px-5 py-4 shadow-[4px_6px_0_rgba(0,0,0,0.35)]"
                style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
              >
                <div className="relative h-8 w-8 shrink-0">
                  <Image
                    src="/assets/check_rojo_icono.png"
                    alt=""
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <p className="text-base md:text-lg font-medium">{item}</p>
              </div>
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
