"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import { BRAND } from "@/lib/content";

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

  // Deliberately just the wordmark and the one CTA: no section links, no
  // mobile menu. The page is a single linear pitch that ends in one ask,
  // so anything else up here is a competing exit. The section ids
  // (#programa / #precio / #faq) stay in place for deep links — the
  // scroll-padding-top in globals.css still clears this header for them.
  return (
    <motion.header
      style={{ boxShadow, borderColor: useTransform(borderOpacity, (v) => `rgba(243,236,217,${v})`) }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-mp-black/70 border-b"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-lg md:text-xl tracking-tight">
            {BRAND.name}
          </span>
          <span className="rounded-full bg-mp-red px-2 py-0.5 text-[10px] md:text-xs font-semibold -rotate-3">
            {BRAND.suffix}
          </span>
        </a>
        <WhatsAppButton className="!px-4 !py-2 !text-xs">
          Reservar
        </WhatsAppButton>
      </div>
    </motion.header>
  );
}
