"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const ParticleHero = dynamic(
  () => import("@/components/animations/ParticleHero").then((mod) => mod.ParticleHero),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-deep-blue overflow-hidden">
      <ParticleHero className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/50 via-transparent to-deep-blue/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
            FAA Certification Consulting &nbsp;|&nbsp; AI-Enhanced Precision
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Get Certified.{" "}
            <span className="text-gradient-cyan">Stay Compliant.</span>{" "}
            <br className="hidden sm:block" />
            Fly Faster.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-aero-silver/80 sm:text-lg sm:leading-8">
            LCR Aero Group combines former FAA Aviation Safety Inspectors with
            AI-powered compliance tools to deliver certification programs that the
            FAA accepts the first time. Since 2013, we&apos;ve guided airlines, cargo
            operators, repair stations, and agricultural aviation companies through
            the most complex regulatory challenges in the industry.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-cyan px-8 py-6 text-base font-semibold text-deep-blue transition-all hover:scale-[1.02] hover:bg-cyan-dark hover:shadow-lg hover:shadow-cyan/20"
            >
              <Link href="/contact">
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 bg-transparent px-8 py-6 text-base font-medium text-white transition-all hover:scale-[1.02] hover:border-cyan/50 hover:bg-white/5 hover:text-cyan"
            >
              <Link href="/solutions">
                Explore Our Solutions
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
