"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { LogoTicker } from "@/components/animations/LogoTicker";
import { allClients } from "@/data/clients";

export function ClientLogos() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
            Trusted Partners
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
            Trusted by Airlines, Cargo Operators, and Repair Stations Worldwide
          </h2>
        </FadeIn>

        <div className="mt-12">
          <LogoTicker items={allClients.map((c) => ({ name: c.name }))} />
        </div>
      </div>
    </section>
  );
}
