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
            <ScribbleStar className="text-mp-gold/70" />
            <h2 className="font-serif-italic text-3xl md:text-4xl text-center">
              ¿Quiénes somos?
            </h2>
            <ScribbleStar className="text-mp-gold/70 rotate-45" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-mp-cream/75 text-base md:text-lg">
            {FOUNDERS_INTRO}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 sm:grid-cols-3">
          {FOUNDERS.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.1} x={i % 2 === 0 ? -20 : 20}>
              <div className="group flex flex-col items-center">
                <TapedPhoto
                  src={founder.photo}
                  alt={`Retrato de ${founder.name}, estilo recorte de periódico`}
                  rotate={ROTATIONS[i % ROTATIONS.length]}
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

      <TornDivider
        fillClassName="fill-mp-cream"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}
