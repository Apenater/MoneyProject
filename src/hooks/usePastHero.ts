"use client";

import { useEffect, useState } from "react";

/**
 * True once the hero section has scrolled out of view.
 *
 * Two separate chrome elements key off this moment — the header (which
 * stays hidden while the hero's own oversized lockup is on screen) and
 * the sticky CTA bar — so the observer lives here rather than being set
 * up twice with two subtly different rootMargins. Both appearing on the
 * same frame is the point: leaving the hero should read as one handoff,
 * not two things arriving at slightly different times.
 *
 * The -10% top margin means "past the hero" fires a beat before the
 * section's last pixel leaves, so the chrome is already settling in as
 * the next section arrives instead of snapping in behind it.
 */
export function usePastHero(heroId = "top"): boolean {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "-10% 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroId]);

  return pastHero;
}
