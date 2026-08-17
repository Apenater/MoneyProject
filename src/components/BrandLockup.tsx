import { BRAND } from "@/lib/content";

// The lockup is one shape at two scales, not two similar arrangements —
// the header's mark is literally the hero's mark after it shrinks, so
// they have to be the same component or they drift apart the first time
// either is touched.
//
// Per the brand artwork the "inc." ellipse sits *over* the tail of
// "Project" rather than beside it.
//
// The overlap is NOT a constant ratio across the two sizes, and it can't
// be: the ellipse's padding doesn't scale with the type, so at header
// size it stands ~0.7x the wordmark's height against ~0.38x in the hero.
// The same proportional overlap therefore covers far more of the "t" up
// there — matching the ratio swallowed the letter whole. Each size is
// tuned to the same *visual* result instead: the ellipse clipping the
// tail of the "t", with the letter still legible under it.
const SIZES = {
  header: {
    word: "text-lg md:text-xl",
    tag: "text-[10px] md:text-xs px-2 py-0.5",
    overlap: "-ml-0.5",
  },
  hero: {
    word: "text-5xl sm:text-6xl md:text-8xl",
    tag: "text-sm sm:text-base md:text-2xl px-3 py-1 md:px-5 md:py-1.5",
    overlap: "-ml-3 sm:-ml-4 md:-ml-7",
  },
} as const;

export default function BrandLockup({
  size = "header",
  className = "",
}: {
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const s = SIZES[size];

  return (
    <span className={`inline-flex items-center leading-none ${className}`}>
      <span className={`font-display tracking-tight ${s.word}`}>
        {BRAND.name}
      </span>
      <span
        className={`relative z-10 rounded-[50%] bg-mp-red font-semibold -rotate-3 shadow-[2px_2px_0_rgba(0,0,0,0.35)] ${s.tag} ${s.overlap}`}
      >
        {BRAND.suffix}
      </span>
    </span>
  );
}
