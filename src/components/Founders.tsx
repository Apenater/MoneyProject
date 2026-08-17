import Reveal from "./Reveal";
import RedOval from "./RedOval";
import TapedPhoto from "./TapedPhoto";
import TornDivider from "./TornDivider";
import { ScribbleStar } from "./Scribble";
import { FOUNDERS, FOUNDERS_INTRO } from "@/lib/content";

const ROTATIONS = [-3, 2, -2];

export default function Founders() {
  return (
    <section className="paper-black relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            {/* ScribbleStar colours its path from strokeClassName, not from
                a text-* class on the svg — both stars were rendering at
                full stroke-mp-gold and ignoring the /70 asked for here. */}
            <ScribbleStar strokeClassName="stroke-mp-gold/70" />
            <h2 className="font-serif-italic text-3xl md:text-4xl text-center">
              ¿Quiénes somos?
            </h2>
            <ScribbleStar className="rotate-45" strokeClassName="stroke-mp-gold/70" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-mp-cream/75 text-base md:text-lg">
            {FOUNDERS_INTRO}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 sm:grid-cols-3">
          {FOUNDERS.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.1} x={i % 2 === 0 ? -20 : 20}>
              <div className="group flex flex-col items-center">
                {/* The three clippings ship at 0.88, 1.11 and 1.35 aspect
                    ratios; forcing all of them into the default 4/5 frame
                    cropped the two landscape ones hard enough to cut the
                    names printed across them ("CARLOS RIVER", "AVIER
                    PORTILLO"). A square frame sits near the middle of that
                    spread, and contain keeps every headline intact — the
                    cream border mats the leftover space. */}
                <TapedPhoto
                  src={founder.photo}
                  alt={`Retrato de ${founder.name}, estilo recorte de periódico`}
                  rotate={ROTATIONS[i % ROTATIONS.length]}
                  aspect="aspect-square"
                  fit="contain"
                  sizes="(min-width: 640px) 220px, 100vw"
                  className="w-full max-w-[220px] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.03]"
                />
                <p className="mt-6 text-center font-display text-lg tracking-wide">
                  {founder.name}
                </p>
                <div className="mt-2 flex justify-center">
                  <RedOval className="text-[11px] px-3 py-1 text-mp-cream">
                    {founder.tag}
                  </RedOval>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Fill matches TrustBar's bg-mp-black-soft, which now follows
          directly (TrustBar has its own perforated ticket-edge on top of
          that, independent of this divider — two compatible textures,
          not a color clash). */}
      <TornDivider
        fillClassName="fill-mp-black-soft"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}
