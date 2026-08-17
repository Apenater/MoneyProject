import Reveal from "./Reveal";
import TornDivider from "./TornDivider";
import { IS_FOR, IS_NOT_FOR } from "@/lib/content";

export default function ForWhom() {
  return (
    <section className="paper-cream relative text-mp-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="font-display uppercase text-3xl md:text-4xl text-center mb-14">
            ¿Este programa es para ti?
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal x={-24}>
            <div className="tape relative torn-edge bg-white/70 p-7 pt-9 shadow-[6px_10px_0_rgba(0,0,0,0.08)] -rotate-1">
              <h3 className="font-display text-xl uppercase text-mp-red mb-5">
                Es para ti si...
              </h3>
              <ul className="space-y-4">
                {IS_FOR.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-snug">
                    <span className="mt-1 text-mp-red">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} x={24}>
            <div className="tape relative torn-edge bg-mp-black text-mp-cream p-7 pt-9 shadow-[6px_10px_0_rgba(0,0,0,0.25)] rotate-1">
              <h3 className="font-display text-xl uppercase text-mp-cream/80 mb-5">
                No es para ti si...
              </h3>
              <ul className="space-y-4">
                {IS_NOT_FOR.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-snug">
                    <span className="mt-1 text-mp-cream/50">✕</span>
                    <span className="text-mp-cream/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <TornDivider
        fillClassName="fill-mp-black-soft"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}
