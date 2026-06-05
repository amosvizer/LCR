"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const HERO_IMAGE = "/images/hero/airliner-twilight.jpg"; // or airliner-sunset.jpg

const ParticleHero = dynamic(
  () => import("@/components/animations/ParticleHero").then((mod) => mod.ParticleHero),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-deep-blue overflow-hidden">
      <ParticleHero className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/50 via-transparent to-deep-blue/80" />

      {/* Desktop/tablet: photo bleeds off the right, feathered into the bg */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-[56%] lg:block xl:w-[52%]">
        <Image
          src={HERO_IMAGE}
          alt="Commercial airliner climbing through a twilight sky"
          fill
          priority
          quality={86}
          sizes="(min-width: 1024px) 56vw, 0px"
          className="object-cover object-center"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 18%, black 40%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 18%, black 40%)",
          }}
        />
        {/* blend the photo into the deep-space-blue hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-deep-blue/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/70 via-transparent to-deep-blue/15" />
      </div>

      {/* Mobile: photo as a full-bleed atmospheric backdrop, dimmed for legibility */}
      <div className="absolute inset-0 z-[1] lg:hidden">
        <Image
          src={HERO_IMAGE}
          alt=""
          aria-hidden
          fill
          priority
          quality={80}
          sizes="(min-width: 1024px) 0px, 100vw"
          className="object-cover object-[66%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/60 via-deep-blue/72 to-deep-blue/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/70 via-transparent to-transparent" />
      </div>

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
            Get Certified
            <br />
            Begin Operations Quicker
            <br />
            <span className="text-gradient-cyan">Stay Compliant</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-aero-silver/80 sm:text-lg sm:leading-8">
            LCR Aero Group pairs former FAA Aviation Safety Inspectors with
            purpose-built AI to deliver certification programs the FAA accepts the
            first time. Since 2013, we&apos;ve guided Part 121 and 135 operators,
            repair stations, pilot schools, and emerging UAS/AAM organizations
            through the industry&apos;s most complex regulatory challenges.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-cyan px-8 py-6 text-base font-semibold text-deep-blue transition-all hover:scale-[1.02] hover:bg-cyan-dark hover:shadow-lg hover:shadow-cyan/20"
            >
              <Link href="/contact">
                Request Information
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
