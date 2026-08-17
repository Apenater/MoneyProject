// Powers the hero's "-N Semanas" countdown badge. It used to be a literal
// hardcoded string ("-3 Semanas") with no relationship to KEY_DATES —
// meaning it silently kept claiming "3 weeks" forever, even after the
// real start date came and went. Computing it from KEY_DATES.startDateISO
// means the badge always reflects the actual gap to launch, and falls
// back to a sane message instead of a negative number once that date
// has passed.

export function weeksUntil(targetISO: string, from: Date = new Date()): number {
  const diffMs = new Date(targetISO).getTime() - from.getTime();
  return Math.ceil(diffMs / (7 * 24 * 60 * 60 * 1000));
}

export function countdownLabel(targetISO: string, from?: Date): string {
  const weeks = weeksUntil(targetISO, from);
  if (weeks > 1) return `-${weeks} Semanas`;
  if (weeks === 1) return "-1 Semana";
  if (weeks === 0) return "¡Esta semana!";
  return "Programa en curso";
}
