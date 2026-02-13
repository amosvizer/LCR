"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { ShieldCheck, Brain, Zap, Layers } from "lucide-react";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Former FAA Inspectors, Not Just Consultants",
    description:
      "Our team members served as FAA Principal Operations Inspectors, Airworthiness Inspectors, and Aviation Safety Inspectors. When your documentation reaches the FAA, we've already reviewed it through the lens of the people who will evaluate it. This insider perspective is why we maintain a 95%+ first-time DCT acceptance rate.",
    image: "/images/aviation/meeting-room.jpg",
  },
  {
    icon: Brain,
    title: 'AI-Enhanced Precision ("ROI with AI")',
    description:
      "We are the only boutique certification consultancy using Retrieval-Augmented Generation (RAG) and Machine Learning to verify every regulatory citation against the latest 14 CFR, 49 CFR, FAA Advisory Circulars, and Orders. Every paragraph in your manual is cross-referenced and auditable. This means fewer revision cycles, faster FAA acceptance, and lower total project cost.",
    image: "/images/aviation/signing-papers.jpg",
  },
  {
    icon: Zap,
    title: "Speed Without Shortcuts",
    description:
      "Certification timelines directly impact your revenue. Every day grounded is money lost. By combining AI-accelerated documentation with expert human review, we consistently help clients achieve their objectives faster — reducing rework, shortening approval cycles, and keeping overall project costs historically low.",
    image: "/images/aviation/aircraft-takeoff.jpg",
  },
  {
    icon: Layers,
    title: "Full-Spectrum Discipline Coverage",
    description:
      "Unlike firms that specialize in a single area, we support the complete operational ecosystem: Flight Operations, Dispatch/Flight Following, Maintenance, HAZMAT, Inflight, Ground Operations, Cabin Safety, Passenger and Cargo Handling, SMS, and Company Procedures. One coordinated team. One consistent methodology.",
    image: "/images/aviation/airplanes-at-gates.jpg",
  },
];

export function AdvantageSection() {
  return (
    <section className="bg-aero-silver/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
            Why Choose LCR
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
            Why Aviation Leaders Choose LCR
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
            In an industry where the cost of error is existential, you need a
            partner who has sat in the FAA&apos;s seat and understands exactly what
            it takes to earn approval.
          </p>
        </FadeIn>

        <div className="mt-20 space-y-20 lg:space-y-32">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            const isReversed = i % 2 !== 0;

            return (
              <FadeIn
                key={item.title}
                direction={isReversed ? "right" : "left"}
                delay={0.1}
              >
                <div
                  className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-full overflow-hidden rounded-2xl lg:w-1/2">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        quality={80}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10">
                      <Icon className="h-6 w-6 text-cyan" />
                    </div>
                    <h3 className="text-2xl font-semibold text-deep-blue sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
