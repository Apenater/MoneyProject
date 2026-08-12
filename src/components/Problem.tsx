import Reveal from "./Reveal";
import TornDivider from "./TornDivider";
import { PAIN_POINTS, PAIN_CONCLUSION } from "@/lib/content";

export default function Problem() {
  return (
    <section className="paper-cream relative text-mp-black py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <h2 className="font-serif-italic text-3xl md:text-5xl text-center">
            Ganás dinero, pero…
          </h2>
          <p className="mt-4 text-center font-display uppercase text-xl md:text-2xl leading-tight">
            ¿Qué pasa si no sabés usarlo ni dónde invertirlo?
          </p>
        </Reveal>

        <div className="mt-16 space-y-10">
          {PAIN_POINTS.map((point, i) => (
            <Reveal key={point.number} delay={i * 0.1}>
              <div className="relative flex items-start gap-5">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-4 -top-10 select-none font-display text-8xl text-mp-black/[0.06] md:text-9xl"
                >
                  0{point.number}
                </span>
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mp-red font-serif-italic text-xl text-mp-cream -rotate-3 shadow-[3px_4px_0_rgba(0,0,0,0.2)]">
                  {point.number}
                </span>
                <p className="relative z-10 text-lg md:text-xl leading-snug pt-1">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-16 text-center text-xl md:text-2xl font-serif-italic">
            {PAIN_CONCLUSION}
          </p>
        </Reveal>
      </div>

      <TornDivider
        fillClassName="fill-mp-black"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}
