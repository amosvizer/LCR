"use client";

import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import {
  ShieldCheck,
  TrendingUp,
  Activity,
  FileText,
  Brain,
  Monitor,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  TrendingUp,
  Activity,
  FileText,
  Brain,
  Monitor,
};

export function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
            Comprehensive Certification &<br className="hidden sm:block" /> Compliance Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
            From initial certification to ongoing compliance, we provide end-to-end
            support across every operational discipline. Our team of former FAA
            inspectors understands both the regulatory framework and how the FAA
            applies it in real-world evaluations.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isLarge = i === 0 || i === 4;

            return (
              <StaggerItem
                key={service.href}
                className={isLarge ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <Link href={service.href} className="group block h-full">
                  <div
                    className={`flex h-full flex-col rounded-2xl border border-aero-silver bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-xl hover:shadow-cyan/5 sm:p-8 ${
                      isLarge ? "lg:p-10" : ""
                    }`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-blue/5 transition-colors group-hover:bg-cyan/10">
                      {Icon && (
                        <Icon className="h-6 w-6 text-deep-blue transition-colors group-hover:text-cyan" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-deep-blue sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate sm:text-base">
                      {service.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.subServices.map((sub) => (
                        <span
                          key={sub}
                          className="rounded-full border border-aero-silver-dark/50 px-3 py-1 text-xs text-slate"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center text-sm font-medium text-cyan transition-all group-hover:gap-2">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
