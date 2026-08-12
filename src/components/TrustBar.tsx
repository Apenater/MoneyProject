import { LEGAL_DISCLAIMERS } from "@/lib/content";

export default function TrustBar() {
  const items = [...LEGAL_DISCLAIMERS, ...LEGAL_DISCLAIMERS];
  return (
    <div className="ticket-edge-top ticket-edge-bottom relative bg-mp-black-soft py-4 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="text-xs md:text-sm uppercase tracking-widest text-mp-cream/50"
          >
            ✦ {text}
          </span>
        ))}
      </div>
    </div>
  );
}
