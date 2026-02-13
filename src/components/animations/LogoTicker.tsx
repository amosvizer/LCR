"use client";

import { cn } from "@/lib/utils";

interface LogoTickerItem {
  name: string;
}

interface LogoTickerProps {
  items: LogoTickerItem[];
  speed?: number;
  className?: string;
}

export function LogoTicker({ items, speed = 30, className }: LogoTickerProps) {
  if (items.length === 0) return null;

  // Calculate animation duration based on speed and item count.
  // Higher speed value = faster scroll. Lower = slower scroll.
  const animationDuration = items.length * (60 / speed);

  return (
    <div
      className={cn("group relative overflow-hidden", className)}
      aria-label="Client logos"
    >
      {/* Fade masks on edges for seamless visual blending */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-deep-blue to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-deep-blue to-transparent" />

      <div
        className="flex w-max gap-8 group-hover:[animation-play-state:paused]"
        style={{
          animation: `logo-ticker-scroll ${animationDuration}s linear infinite`,
        }}
      >
        {/* Render items twice for seamless looping */}
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3"
          >
            <span className="whitespace-nowrap text-sm font-medium tracking-wide text-aero-silver/70">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
