"use client";

import { TRUST_STATS } from "@/lib/constants";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { FadeIn } from "@/components/animations/FadeIn";

export function TrustBar() {
  return (
    <section className="relative -mt-16 z-20 mx-auto max-w-6xl px-6">
      <FadeIn>
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-aero-silver bg-white p-6 shadow-xl shadow-deep-blue/5 sm:p-8 lg:grid-cols-4 lg:gap-8">
          {TRUST_STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="flex items-baseline gap-0.5">
                <CounterAnimation
                  target={stat.value}
                  suffix={stat.suffix}
                  isYear={"isYear" in stat ? stat.isYear : undefined}
                  className="text-3xl font-bold text-deep-blue sm:text-4xl lg:text-5xl"
                />
              </div>
              <p className="mt-2 text-xs font-medium text-slate sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
