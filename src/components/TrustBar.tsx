"use client";

import { useState } from "react";
import { LEGAL_DISCLAIMERS } from "@/lib/content";

export default function TrustBar() {
  const [paused, setPaused] = useState(false);
  const items = [...LEGAL_DISCLAIMERS, ...LEGAL_DISCLAIMERS];

  return (
    <div className="ticket-edge-top ticket-edge-bottom relative bg-mp-black-soft py-4 overflow-hidden">
      <div
        className="flex w-max animate-marquee gap-10 whitespace-nowrap"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="text-xs md:text-sm uppercase tracking-widest text-mp-cream-dim"
          >
            ✦ {text}
          </span>
        ))}
      </div>

      {/* The control sat directly on top of the moving text. This gutter
          fades the marquee out before it reaches the button, so the two
          never occupy the same pixels. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-[5] w-28 bg-gradient-to-l from-mp-black-soft via-mp-black-soft/90 to-transparent"
      />

      {/* Indefinitely-moving content needs a stop control independent of OS
          reduced-motion settings (WCAG 2.2.2, Level A) — this is the whole fix.
          Sized to the 44x44 minimum target (WCAG 2.5.8); it used to be 28x28. */}
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Reanudar el texto en movimiento" : "Pausar el texto en movimiento"}
        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mp-cream/20 bg-mp-black/70 text-xs text-mp-cream-dim backdrop-blur-sm transition-colors hover:text-mp-cream"
      >
        {paused ? "▶" : "❚❚"}
      </button>
    </div>
  );
}
