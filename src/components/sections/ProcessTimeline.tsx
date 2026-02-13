"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CERTIFICATION_PHASES } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProcessTimeline() {
  return (
    <section className="bg-deep-blue py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
            Our Process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A Proven Path to Certification
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-aero-silver/70 sm:text-lg">
            We align our engagement with the FAA&apos;s own 5-Phase certification
            framework, enhanced by our proprietary AI verification layer.
          </p>
        </FadeIn>

        <StaggerContainer className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-cyan via-cyan/50 to-transparent lg:left-1/2 lg:block" />

          {CERTIFICATION_PHASES.map((phase, i) => (
            <StaggerItem key={phase.phase} className="relative mb-12 last:mb-0">
              <div
                className={`flex flex-col gap-6 lg:flex-row lg:items-start ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Phase number */}
                <div className="flex items-start gap-4 lg:w-1/2 lg:justify-end">
                  <div
                    className={`flex flex-col ${
                      i % 2 === 0 ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-cyan bg-deep-blue text-sm font-bold text-cyan lg:hidden"
                        whileInView={{ scale: [0.5, 1] }}
                        viewport={{ once: true }}
                      >
                        {phase.phase}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-aero-silver/70 sm:text-base">
                      {phase.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Center dot (desktop) */}
                <motion.div
                  className="relative z-10 mx-4 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-cyan bg-deep-blue text-sm font-bold text-cyan lg:flex"
                  whileInView={{ scale: [0.5, 1] }}
                  viewport={{ once: true }}
                >
                  {phase.phase}
                </motion.div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-16 text-center" delay={0.4}>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-cyan/30 bg-transparent px-8 text-cyan hover:border-cyan hover:bg-cyan/10"
          >
            <Link href="/solutions/certification">
              See how this process applies to your certification
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
