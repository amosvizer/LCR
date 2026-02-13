import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import {
  ShieldCheck,
  TrendingUp,
  Activity,
  FileText,
  Brain,
  Monitor,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aviation Certification & Compliance Solutions",
  description:
    "End-to-end FAA certification consulting, regulatory compliance, safety management, and AI-enhanced documentation services from former FAA inspectors.",
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  TrendingUp,
  Activity,
  FileText,
  Brain,
  Monitor,
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Aviation Certification & Compliance Solutions"
        description="LCR Aero Group provides end-to-end consulting across the full spectrum of FAA certification, regulatory compliance, and operational safety. Every engagement is led by former FAA inspectors and enhanced by our proprietary AI-powered compliance verification tools."
      />

      {/* Solutions Grid */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {SERVICE_CATEGORIES.map((service, index) => {
              const Icon = ICON_MAP[service.icon];

              return (
                <FadeIn key={service.href} delay={index * 0.1}>
                  <Link href={service.href} className="group block h-full">
                    <div className="flex h-full flex-col rounded-2xl border border-aero-silver bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-xl">
                      {/* Icon */}
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-deep-blue/5">
                        {Icon && (
                          <Icon className="h-7 w-7 text-cyan" />
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="mb-3 font-heading text-xl font-bold text-deep-blue sm:text-2xl">
                        {service.title}
                      </h2>

                      {/* Description */}
                      <p className="mb-6 font-body text-base leading-relaxed text-slate">
                        {service.description}
                      </p>

                      {/* Sub-services */}
                      <div className="mb-8 flex flex-wrap gap-2">
                        {service.subServices.map((sub) => (
                          <span
                            key={sub}
                            className="rounded-full bg-aero-silver/50 px-3 py-1 text-xs font-medium text-slate"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>

                      {/* Learn More link */}
                      <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-cyan transition-colors group-hover:text-cyan-dark">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
