"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import { PRICING } from "@/lib/content";

// Desktop's counterpart to FloatingWhatsApp (mobile-only): once the hero
// scrolls out of view there was no persistent way to convert on a
// 12-section page except scrolling back up. Hides again once Pricing
// itself is on screen — that section already carries its own full CTA,
// so the bar would just be a redundant second ask stacked on top of it.
export default function StickyCtaBar() {
  const reduceMotion = useReducedMotion();
  const [pastHero, setPastHero] = useState(false);
  const [reachedPricing, setReachedPricing] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const pricing = document.getElementById("precio");
    if (!hero || !pricing) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "-10% 0px 0px 0px" }
    );
    const pricingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setReachedPricing(true);
      },
      { rootMargin: "0px" }
    );

    heroObserver.observe(hero);
    pricingObserver.observe(pricing);
    return () => {
      heroObserver.disconnect();
      pricingObserver.disconnect();
    };
  }, []);

  const visible = pastHero && !reachedPricing;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: reduceMotion ? 0 : 72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: reduceMotion ? 0 : 72, opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="ticket-edge-top fixed inset-x-0 bottom-0 z-40 hidden items-center justify-between border-t border-mp-cream/10 bg-mp-black/95 px-8 pt-4 pb-3 backdrop-blur-md md:flex"
        >
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl text-mp-gold">
              ${PRICING.earlyBid}
            </span>
            <span className="text-xs uppercase tracking-widest text-mp-cream-dim">
              early bid · p/p · {PRICING.seatsLimit} cupos
            </span>
          </div>
          <WhatsAppButton className="!px-5 !py-2.5 !text-xs">
            Reservar mi cupo
          </WhatsAppButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
