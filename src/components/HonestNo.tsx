import Reveal from "./Reveal";
import TornDivider from "./TornDivider";
import { HONEST_NO } from "@/lib/content";

export default function HonestNo() {
  return (
    <section className="paper-black-soft relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-14">
            {/* Brand red on mp-black-soft lands at ~2.8:1 — under the 3:1
                floor even for large text — and opacity-90 pushed it lower
                still, so the stamp was barely there. mp-red-light is the
                on-dark red (~5.2:1) and keeps the rubber-stamp look. */}
            <span className="relative inline-block rotate-[-8deg] rounded-full border-[3px] border-double border-mp-red-light px-7 py-2.5 font-display uppercase text-mp-red-light text-lg md:text-xl outline outline-1 outline-offset-[-6px] outline-mp-red-light/40">
              Falso
            </span>
            <h2 className="mt-6 font-display uppercase text-2xl md:text-3xl">
              No te vamos a vender humo
            </h2>
          </div>
        </Reveal>

        <div className="space-y-7">
          {HONEST_NO.map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <div
                className="flex items-start gap-4 bg-mp-black/40 border border-mp-cream/10 px-5 py-4"
                style={{ transform: `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)` }}
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mp-red/20 text-mp-red-light font-bold">
                  ✕
                </span>
                <p className="text-base md:text-lg text-mp-cream/85 leading-snug">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <TornDivider
        fillClassName="fill-mp-black"
        className="absolute bottom-0 left-0"
      />
    </section>
  );
}
