import Image from "next/image";
import Reveal from "./Reveal";
import TornDivider from "./TornDivider";
import WhatsAppButton from "./WhatsAppButton";
import { ScribbleArrow, ScribbleUnderline } from "./Scribble";
import { BRAND, KEY_DATES, PRICING } from "@/lib/content";

export default function FinalCta() {
  return (
    <section className="grain-overlay relative overflow-hidden bg-mp-red-dark py-24 md:py-32">
      <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 opacity-[0.14] rotate-12">
        <Image
          src="/assets/icono_graffiti_dolar_rotado.png"
          alt=""
          fill
          unoptimized
          className="object-contain"
        />
      </div>
      <div className="pointer-events-none absolute -left-14 bottom-0 h-56 w-56 opacity-[0.1] -rotate-6">
        <Image
          src="/assets/icono_graffiti_dolar.png"
          alt=""
          fill
          unoptimized
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center">
        <Reveal>
          <p className="font-serif-italic text-xl text-mp-cream/80">
            Únete a este {BRAND.hashtag}
          </p>
          <h2 className="relative mt-3 font-display uppercase text-3xl sm:text-4xl md:text-5xl leading-tight">
            El dinero no espera.
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              Tampoco los {PRICING.seatsLimit} cupos.
              <ScribbleUnderline
                className="absolute left-0 -bottom-3 w-full"
                strokeClassName="stroke-mp-gold"
                animate
                delay={0.4}
              />
            </span>
          </h2>
          <p className="mt-8 text-mp-cream/85 text-base md:text-lg">
            Preventa {KEY_DATES.presaleDate} a las {KEY_DATES.presaleTime} · Inicio del
            programa {KEY_DATES.startDate}
          </p>
          <div className="relative mt-9 inline-block">
            <WhatsAppButton className="!bg-mp-cream !text-mp-black hover:!bg-white">
              Reservar mi espacio por WhatsApp
            </WhatsAppButton>
            {/* Was -top-16: 64px above the button, which put the arrow on
                top of the date line and left it aiming at empty space to
                the button's right. Moved beside the button and rotated so
                it points down-left into it — the arrow's own path runs
                top-to-bottom, so -60deg aims it at the target. */}
            <ScribbleArrow
              className="absolute -right-20 top-1/2 hidden h-16 w-12 -translate-y-1/2 rotate-[-60deg] md:block"
              strokeClassName="stroke-mp-cream/70"
            />
          </div>
        </Reveal>
      </div>

      <TornDivider
        fillClassName="fill-mp-black"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}
