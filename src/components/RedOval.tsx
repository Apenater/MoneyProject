import type { ReactNode } from "react";

export default function RedOval({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[50%] bg-mp-red px-4 py-1 -rotate-3 shadow-[3px_3px_0_rgba(0,0,0,0.35)] ${className}`}
    >
      <span className="rotate-3 whitespace-nowrap">{children}</span>
    </span>
  );
}
