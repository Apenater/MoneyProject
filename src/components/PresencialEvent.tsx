import Image from "next/image";
import Reveal from "./Reveal";
import TapedPhoto from "./TapedPhoto";
import TornDivider from "./TornDivider";
import { ScribbleCircle } from "./Scribble";
import { PRESENCIAL_EVENT, KEY_DATES, ALLIES } from "@/lib/content";

export default function PresencialEvent() {
  return (
    <section className="paper-cream relative text-mp-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative h-[420px] md:h-[480px]">
            <TapedPhoto
              src="/assets/foto_evento_presencial.png"
              alt="Evento presencial de Money Project"
              rotate={-3}
              aspect="aspect-[3/4]"
              className="absolute left-0 top-0 w-[62%]"
            />
            <TapedPhoto
              src="/assets/foto_almuerzo_delicioso.png"
              alt="Almuerzo del evento presencial"
              rotate={5}
              aspect="aspect-square"
              className="absolute right-0 top-4 w-[48%]"
            />
            <TapedPhoto
              src="/assets/foto_laptop_cafe_aprendizaje.png"
              alt="Aprendizaje con laptop y café"
              rotate={-2}
              aspect="aspect-square"
              className="absolute bottom-0 right-6 w-[45%]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="relative inline-block text-xs uppercase tracking-widest text-mp-red">
            {KEY_DATES.eventLabel}
            <ScribbleCircle strokeClassName="stroke-mp-red/70" />
          </span>
          <p className="text-xs uppercase tracking-widest text-mp-black/50 mt-1">
            {KEY_DATES.eventWindow}
          </p>
          <h2 className="font-display uppercase text-3xl md:text-4xl mt-3 leading-tight">
            {PRESENCIAL_EVENT.title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-mp-black/75">
            {PRESENCIAL_EVENT.description}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            {PRESENCIAL_EVENT.perks.map((perk, i) => (
              <div
                key={perk}
                className="bg-mp-black text-mp-cream text-sm text-center py-3 px-2 shadow-[3px_4px_0_rgba(0,0,0,0.15)]"
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
                {perk}
              </div>
            ))}
          </div>

          <div className="mt-9">
            <p className="text-xs uppercase tracking-widest text-mp-black/50 mb-3">
              Nuestros aliados
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {ALLIES.map((ally) =>
                ally.logo ? (
                  <div key={ally.name} className="relative h-9 w-32">
                    <Image
                      src={ally.logo}
                      alt={ally.name}
                      fill
                      unoptimized
                      className="object-contain object-left"
                    />
                  </div>
                ) : (
                  <span
                    key={ally.name}
                    className="font-display text-lg uppercase text-mp-black/70"
                  >
                    {ally.name}
                  </span>
                )
              )}
            </div>
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
