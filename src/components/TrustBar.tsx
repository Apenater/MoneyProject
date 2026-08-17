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

      {/* Indefinitely-moving content needs a stop control independent of OS
          reduced-motion settings (WCAG 2.2.2, Level A) — this is the whole fix. */}
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Reanudar el texto en movimiento" : "Pausar el texto en movimiento"}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-mp-cream/20 bg-mp-black/70 text-[10px] text-mp-cream-dim backdrop-blur-sm transition-colors hover:text-mp-cream"
      >
        {paused ? "▶" : "❚❚"}
      </button>
    </div>
  );
}
