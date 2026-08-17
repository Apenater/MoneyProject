"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import { BRAND } from "@/lib/content";

const NAV_LINKS = [
  { href: "#programa", label: "Programa" },
  { href: "#precio", label: "Precio" },
  { href: "#faq", label: "Preguntas" },
];

export default function Header() {
  // The three section anchors were `hidden md:flex` with nothing standing
  // in for them below that breakpoint — on the phone, where a WhatsApp-
  // driven landing gets most of its traffic, Programa/Precio/Preguntas
  // were simply unreachable. This adds the missing half of that pattern.
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

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
        <nav className="hidden md:flex items-center gap-7 text-sm text-mp-cream/80">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-mp-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton className="!px-4 !py-2 !text-xs">
            Reservar
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-mp-cream/80 transition-colors hover:text-mp-cream md:hidden"
          >
            {/* Two bars that cross into an ✕ — the state change is the
                affordance, so it needs no label of its own. */}
            <span className="relative block h-4 w-5" aria-hidden="true">
              <motion.span
                animate={
                  menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                className="absolute left-0 top-0 block h-0.5 w-full rounded-full bg-current"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                className="absolute bottom-0 left-0 block h-0.5 w-full rounded-full bg-current"
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-mp-cream/10 bg-mp-black/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto max-w-6xl px-5 py-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-mp-cream/5 py-3.5 font-display uppercase tracking-wide text-mp-cream/85 transition-colors last:border-b-0 hover:text-mp-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
