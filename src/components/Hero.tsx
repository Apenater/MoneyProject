import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import RedOval from "./RedOval";
import TornDivider from "./TornDivider";
import { ScribbleArrow, ScribbleUnderline } from "./Scribble";
import { KEY_DATES, PRICING, TAGLINE_EDUCATION } from "@/lib/content";
import { countdownLabel } from "@/lib/dates";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-mp-black pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-mp-red/20 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-80 w-80 rounded-full bg-mp-gold/10 blur-3xl" />
      </div>

      {/* Giant ghost type for depth */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 font-display text-[6rem] leading-none text-mp-cream/[0.035] select-none whitespace-nowrap sm:text-[13rem] md:text-[20rem]"
      >
        $$$
      </span>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mp-cream/25 px-4 py-1.5 text-xs uppercase tracking-widest text-mp-cream/70 -rotate-1">
            <span className="h-1.5 w-1.5 rounded-full bg-mp-gold" />
            Preventa {KEY_DATES.presaleDate} · {KEY_DATES.presaleTime}
          </div>

          <h1 className="font-display uppercase leading-[0.95] text-4xl sm:text-5xl md:text-6xl">
            Aprendé a manejar
            <br />
            <span className="relative inline-block">
              <span className="font-serif-italic font-normal capitalize text-mp-gold">
                tu dinero
              </span>
              <ScribbleUnderline
                className="absolute -bottom-2 left-0"
                strokeClassName="stroke-mp-red"
              />
            </span>
            <br />
            y empezá a invertir en
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <RedOval className="text-lg md:text-xl px-6 py-1.5">
              <span className="font-serif-italic capitalize">
                {countdownLabel(KEY_DATES.startDateISO)}
              </span>
            </RedOval>
            <span className="hidden sm:block text-2xl rotate-12 text-mp-cream/40">
              ✦
            </span>
          </div>

          <p className="mt-7 max-w-lg text-base md:text-lg text-mp-cream/80">
            6 sesiones en vivo + comunidad exclusiva + un evento presencial.
            Finanzas personales, bolsa y criptomonedas, explicado desde cero.
          </p>

          <p className="mt-3 text-sm uppercase tracking-wide text-mp-gold/90">
            {TAGLINE_EDUCATION}
          </p>

          <div className="mt-9 flex items-start gap-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsAppButton>Quiero mi lugar</WhatsAppButton>
              <div className="text-sm text-mp-cream/60">
                Inicio del programa:{" "}
                <span className="text-mp-cream">{KEY_DATES.startDate}</span>
              </div>
            </div>
            <ScribbleArrow className="hidden md:block -mt-8 -ml-2 rotate-[15deg] text-mp-red" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs uppercase tracking-wide text-mp-cream-dim">
            <span>Solo {PRICING.seatsLimit} cupos early bid</span>
            <span className="h-1 w-1 rounded-full bg-mp-cream/30" />
            <span>100% online por Zoom</span>
            <span className="h-1 w-1 rounded-full bg-mp-cream/30" />
            <span>+ evento presencial</span>
          </div>
        </div>

        <div className="relative mx-auto h-[26rem] w-full max-w-sm">
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 opacity-90">
            <Image
              src="/assets/icono_graffiti_dolar.png"
              alt="Ícono de dólar estilo graffiti, símbolo de Money Project"
              fill
              unoptimized
              className="object-contain drop-shadow-[0_0_40px_rgba(217,178,76,0.25)]"
            />
          </div>

          <div className="tape absolute -top-2 left-0 w-32 -rotate-[10deg] torn-edge shadow-2xl overflow-hidden bg-mp-cream p-1.5">
            <Image
              src="/assets/foto_billete_1_dolar_arrugado.png"
              alt="Billete de un dólar arrugado"
              width={200}
              height={250}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="tape absolute bottom-0 right-0 w-40 rotate-[8deg] torn-edge shadow-2xl overflow-hidden bg-mp-cream p-1.5">
            <Image
              src="/assets/foto_billete_100_franklin_rasgado.png"
              alt="Billete de cien dólares con retrato de Franklin"
              width={220}
              height={280}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Kept off-white/bordered rather than solid gold so it doesn't
              compete with the RedOval pill as a second "accent color"
              focal point in the hero (PFD L1: one dominant accent). */}
          <span className="absolute top-8 right-2 rounded-full border border-mp-cream/40 bg-mp-black/60 px-3 py-1 text-[11px] font-semibold uppercase text-mp-cream backdrop-blur-sm rotate-6 shadow-lg">
            100% online
          </span>

          <div className="absolute bottom-24 -left-4 h-16 w-16 rotate-12 opacity-90 animate-float">
            <Image
              src="/assets/icono_disco_vinilo.png"
              alt="Ícono decorativo de disco de vinilo"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <TornDivider
        fillClassName="fill-mp-black-soft"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}
