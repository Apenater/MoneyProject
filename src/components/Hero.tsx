"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import RedOval from "./RedOval";
import TornDivider from "./TornDivider";
import { ScribbleArrow, ScribbleUnderline } from "./Scribble";
import { KEY_DATES, PRICING, TAGLINE_EDUCATION } from "@/lib/content";
import { countdownLabel } from "@/lib/dates";
import { useParallax } from "@/hooks/useParallax";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  // The one parallax layer this hero gets (PFD R1 budget: ghost type +
  // the two staggering photos below is already 2-3 moving layers, the
  // cap for a single viewport) — a slow drift that reads as depth
  // without ever approaching the WhatsApp CTA's bounding box.
  const ghostY = useParallax(sectionRef, 50);

  // The on-load cascade: this is the "primera vista" moment (PFD R2's
  // 50ms gate) — everything else on the page only animates once you
  // scroll to it, which is exactly why the hero read as static before.
  // A staggered reveal (one line/block at a time, not a single flat
  // fade) is what makes it feel alive on arrival without ever having
  // more than ~2 blocks mid-transition at once.
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.05,
      },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden bg-mp-black pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-mp-red/20 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-80 w-80 rounded-full bg-mp-gold/10 blur-3xl" />
      </motion.div>

      {/* Giant ghost type for depth — the hero's one scroll-linked parallax
          layer. Position/centering lives on this static wrapper; the
          motion.span only owns opacity + the scroll-linked y, so Framer's
          inline transform never clobbers the -translate-x-1/2 centering. */}
      <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2">
        <motion.span
          aria-hidden="true"
          style={{ y: ghostY }}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="block font-display text-[6rem] leading-none text-mp-cream/[0.035] select-none whitespace-nowrap sm:text-[13rem] md:text-[20rem]"
        >
          $$$
        </motion.span>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Badge keeps its original -rotate-1 tilt on a static inner
              div — the outer motion.div only carries opacity/y, so the
              two transforms never collide on one element. */}
          <motion.div variants={item} className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-mp-cream/25 px-4 py-1.5 text-xs uppercase tracking-widest text-mp-cream/70 -rotate-1">
              <span className="h-1.5 w-1.5 rounded-full bg-mp-gold" />
              Preventa {KEY_DATES.presaleDate} · {KEY_DATES.presaleTime}
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display uppercase leading-[0.95] text-4xl sm:text-5xl md:text-6xl"
          >
            Aprendé a manejar
            <br />
            <span className="relative inline-block">
              <span className="font-serif-italic font-normal capitalize text-mp-gold">
                tu dinero
              </span>
              <ScribbleUnderline
                className="absolute -bottom-2 left-0"
                strokeClassName="stroke-mp-red"
                animate
                delay={0.9}
              />
            </span>
            <br />
            y empezá a invertir en
          </motion.h1>

          <motion.div variants={item} className="mt-5 flex items-center gap-3">
            {/* Subtle idle pulse — the badge is allowed its own small
                life since it's not the CTA itself, just a neighbor. */}
            <motion.div
              animate={reduceMotion ? undefined : { scale: [1, 1.035, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <RedOval className="text-lg md:text-xl px-6 py-1.5">
                <span className="font-serif-italic capitalize">
                  {countdownLabel(KEY_DATES.startDateISO)}
                </span>
              </RedOval>
            </motion.div>
            <span className="hidden sm:block text-2xl rotate-12 text-mp-cream/40">
              ✦
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 max-w-lg text-base md:text-lg text-mp-cream/80"
          >
            6 sesiones en vivo + comunidad exclusiva + un evento presencial.
            Finanzas personales, bolsa y criptomonedas, explicado desde cero.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 text-sm uppercase tracking-wide text-mp-gold/90"
          >
            {TAGLINE_EDUCATION}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex items-start gap-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsAppButton>Quiero mi lugar</WhatsAppButton>
              <div className="text-sm text-mp-cream/60">
                Inicio del programa:{" "}
                <span className="text-mp-cream">{KEY_DATES.startDate}</span>
              </div>
            </div>
            <ScribbleArrow className="hidden md:block -mt-8 -ml-2 rotate-[15deg] text-mp-red" />
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-6 text-xs uppercase tracking-wide text-mp-cream-dim"
          >
            <span>Solo {PRICING.seatsLimit} cupos early bid</span>
            <span className="h-1 w-1 rounded-full bg-mp-cream/30" />
            <span>100% online por Zoom</span>
            <span className="h-1 w-1 rounded-full bg-mp-cream/30" />
            <span>+ evento presencial</span>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto h-[26rem] w-full max-w-sm">
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.6, rotate: -20 }}
              animate={{ opacity: 0.9, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full"
            >
              <Image
                src="/assets/icono_graffiti_dolar.png"
                alt="Ícono de dólar estilo graffiti, símbolo de Money Project"
                fill
                unoptimized
                loading="eager"
                sizes="208px"
                className="object-contain drop-shadow-[0_0_40px_rgba(217,178,76,0.25)]"
              />
            </motion.div>
          </div>

          {/* The hero is the one 50ms-gate moment that gets its best
              choreography (PFD R2) — the two photos land with a
              staggered settle instead of appearing flat, on-mount since
              they're above the fold from frame one (not whileInView). */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.85, rotate: -24 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="tape absolute -top-2 left-0 w-32"
          >
            {/* torn-edge (a clip-path) and overflow-hidden used to sit on
                the same element as .tape, so the washi tape above the
                photo was being clipped off. Clip on the inner frame. */}
            <div className="torn-edge overflow-hidden bg-mp-cream p-1.5 shadow-2xl">
              <Image
                src="/assets/foto_billete_1_dolar_arrugado.png"
                alt="Billete de un dólar arrugado"
                width={200}
                height={250}
                loading="eager"
                sizes="128px"
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.85, rotate: 22 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="tape absolute bottom-0 right-0 w-40"
          >
            <div className="torn-edge overflow-hidden bg-mp-cream p-1.5 shadow-2xl">
              <Image
                src="/assets/foto_billete_100_franklin_rasgado.png"
                alt="Billete de cien dólares con retrato de Franklin"
                width={220}
                height={280}
                loading="eager"
                sizes="160px"
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Kept off-white/bordered rather than solid gold so it doesn't
              compete with the RedOval pill as a second "accent color"
              focal point in the hero (PFD L1: one dominant accent).
              Rotation is fully owned by Framer here (rather than a
              rotate-6 class) so it can animate in from a wider angle. */}
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-8 right-2 rounded-full border border-mp-cream/40 bg-mp-black/60 px-3 py-1 text-[11px] font-semibold uppercase text-mp-cream backdrop-blur-sm shadow-lg"
          >
            100% online
          </motion.span>

          {/* Opacity-only entrance on a wrapper, positioning + the
              continuous animate-float keyframe stay on the untouched
              inner div — Framer never takes over its transform, so the
              CSS float animation keeps running after the fade-in. */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-24 -left-4 h-16 w-16"
          >
            <div className="relative h-full w-full rotate-12 opacity-90 animate-float">
              <Image
                src="/assets/icono_disco_vinilo.png"
                alt="Ícono decorativo de disco de vinilo"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fill matches whichever section comes next (the torn edge is
          rendered as that section's color peeking through) — now Problem,
          since it moved up to follow the hero directly. */}
      <TornDivider
        fillClassName="fill-mp-cream"
        className="absolute bottom-0 left-0"
        parallax
      />
    </section>
  );
}
