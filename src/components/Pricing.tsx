import Image from "next/image";
import Reveal from "./Reveal";
import TornDivider from "./TornDivider";
import WhatsAppButton from "./WhatsAppButton";
import { ScribbleCircle, ScribbleStar } from "./Scribble";
import { RECEIVE_TABLE, RECEIVE_TABLE_TOTAL, PRICING } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="precio" className="paper-black relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <p className="text-center font-serif-italic text-lg text-mp-gold mb-2">
            Tu recibo de Money Project
          </p>
          <h2 className="font-display uppercase text-3xl md:text-4xl text-center">
            Recibirás
          </h2>
        </Reveal>

        {/* Editorial two-column read on desktop: the receipt is the thing
            you scroll through line by line, the price + CTA is the
            decision you make once — so it stays in view the whole time
            you're reading, the same sticky pattern PresencialEvent
            already uses (one shared mechanism, not a one-off). */}
        <div className="mt-10 grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          {/* Receipt / ticket card */}
          <Reveal delay={0.05} className="mx-auto w-full max-w-md md:mx-0">
            <div
              className="bg-mp-cream text-mp-black shadow-[8px_14px_0_rgba(0,0,0,0.35)]"
              style={{ transform: "rotate(-1deg)" }}
            >
              <div className="ticket-edge-bottom pt-7 px-6 md:px-9 pb-4">
                <p className="text-center font-display uppercase text-sm tracking-widest text-mp-black-dim">
                  ★ Detalle de tu inversión ★
                </p>
              </div>
              <div className="divide-y divide-dashed divide-mp-black/20 px-6 md:px-9">
                {/* Rows print in one at a time as the receipt scrolls into
                    view, instead of arriving as one flat block. */}
                {RECEIVE_TABLE.map((row, i) => (
                  <Reveal key={row.label} delay={i * 0.06} y={10}>
                    <div className="flex items-center justify-between gap-4 py-4">
                      <span className="text-sm md:text-base text-mp-black/80">
                        {row.label}
                      </span>
                      <span className="shrink-0 font-display text-mp-red">
                        ${row.value}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="ticket-edge-top pb-8 px-6 md:px-9 pt-5">
                <div className="flex items-center justify-between">
                  <span className="font-display uppercase text-sm tracking-widest text-mp-black-dim">
                    Valor total
                  </span>
                  <span className="relative font-display text-2xl text-mp-black-dim">
                    ${RECEIVE_TABLE_TOTAL.toFixed(2).replace(/\.00$/, "")}
                    <span className="absolute left-0 top-1/2 h-[2px] w-full -rotate-6 bg-mp-red" />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Decision panel — pinned on desktop so the price and the CTA
              are visible for as long as the receipt is being read. */}
          <Reveal delay={0.1} className="md:sticky md:top-28">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="text-sm uppercase tracking-widest text-mp-cream-dim">
                Inversión real de inscripción
              </span>
              <span className="relative font-display text-3xl text-mp-cream-dim">
                ${PRICING.realPrice}{" "}
                <span className="text-base align-top">p/p</span>
                <span className="absolute left-0 top-1/2 h-[2px] w-full -rotate-6 bg-mp-red" />
              </span>

              <span
                className="relative mt-6 rounded-full bg-mp-red px-5 py-1.5 text-xs uppercase tracking-widest text-mp-cream shadow-md"
                style={{ transform: "rotate(-3deg)" }}
              >
                Early bid
              </span>

              <span className="mt-3 flex items-end gap-2">
                <span className="relative h-10 w-10">
                  <Image
                    src="/assets/icono_graffiti_dolar.png"
                    alt=""
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </span>
                <span className="relative inline-block">
                  <span className="relative font-display text-6xl md:text-7xl text-mp-gold">
                    {PRICING.earlyBid}
                  </span>
                  <ScribbleCircle strokeClassName="stroke-mp-gold/70" />
                  <ScribbleStar
                    className="absolute -right-5 -top-5 h-6 w-6"
                    strokeClassName="stroke-mp-gold"
                  />
                </span>
                <span className="pb-2 text-mp-cream-dim">p/p</span>
              </span>

              <p className="mt-4 max-w-sm text-xs text-mp-cream-dim">
                {PRICING.disclaimer}
              </p>

              <p className="mt-6 max-w-sm text-sm text-mp-gold/90">
                ⚠ {PRICING.seatsNote} ⚠
              </p>

              <div className="mt-8">
                <WhatsAppButton>Reservar mi cupo ahora</WhatsAppButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <TornDivider
        fillClassName="fill-mp-cream"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}
