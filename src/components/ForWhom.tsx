import Reveal from "./Reveal";
import TornDivider from "./TornDivider";
import { IS_FOR, IS_NOT_FOR } from "@/lib/content";

export default function ForWhom() {
  return (
    // overflow-x-clip because the right-hand card enters with Reveal
    // x={24}: until it scrolls into view it sits 24px right of its final
    // position, and on a phone (where the columns stack full-width) that
    // was pushing the document 5px wider than the viewport — the whole
    // page could be dragged sideways. clip rather than hidden so no
    // scroll container is created for anything sticky further down.
    <section className="paper-cream relative overflow-x-clip text-mp-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="font-display uppercase text-3xl md:text-4xl text-center mb-14">
            ¿Este programa es para ti?
          </h2>
        </Reveal>

        {/* items-center, not the default stretch: IS_NOT_FOR carries one
            entry against IS_FOR's five, so the short card used to sit
            top-aligned with a column of dead space under it, reading as
            content that failed to load. Centred, the asymmetry reads as
            deliberate. The real fix is two or three more disqualifiers in
            IS_NOT_FOR — that's copy, so it stays a content decision. */}
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <Reveal x={-24}>
            {/* torn-edge is a clip-path, so it was cutting the washi tape
                (a ::before at top:-14px) in half. Tape moves to an
                unclipped wrapper; the clip stays on the card. */}
            <div className="tape relative -rotate-1">
              <div className="torn-edge bg-white/70 p-7 pt-9 shadow-[6px_10px_0_rgba(0,0,0,0.08)]">
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
            </div>
          </Reveal>

          <Reveal delay={0.1} x={24}>
            <div className="tape relative rotate-1">
              <div className="torn-edge bg-mp-black p-7 pt-9 text-mp-cream shadow-[6px_10px_0_rgba(0,0,0,0.25)]">
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
