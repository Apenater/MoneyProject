import { BRAND, TAGLINE_EDUCATION, LEGAL_DISCLAIMERS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="grain-overlay relative bg-mp-black py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg">{BRAND.name}</span>
              <span
                className="relative rounded-full border border-mp-red bg-mp-red/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-mp-red"
                style={{ transform: "rotate(-4deg)" }}
              >
                {BRAND.suffix}
              </span>
            </div>
            <p className="mt-2 text-sm text-mp-cream/50 max-w-sm">
              {TAGLINE_EDUCATION}
            </p>
          </div>

          <div className="border border-dashed border-mp-cream/15 px-4 py-3 text-xs text-mp-cream/40 space-y-1 max-w-xs">
            {LEGAL_DISCLAIMERS.map((d) => (
              <p key={d}>{d}</p>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-dashed border-mp-cream/10 pt-6 text-xs text-mp-cream/35">
          <p>
            © {new Date().getFullYear()} {BRAND.name} {BRAND.suffix} — Todos
            los derechos reservados.
          </p>
          <a href="#" className="underline hover:text-mp-cream/60">
            Términos y condiciones
          </a>
        </div>
      </div>
    </footer>
  );
}
