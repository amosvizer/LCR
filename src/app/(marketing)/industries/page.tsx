import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { industryPages } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "LCR Aero Group provides aviation certification and compliance consulting across commercial airlines, cargo operators, MRO facilities, and agricultural aviation.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries We Serve"
        description="From commercial airlines to agricultural operators, LCR Aero Group brings former FAA inspector expertise and AI-enhanced precision to every segment of the aviation industry."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid gap-8">
            {industryPages.map((industry) => (
              <StaggerItem key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-aero-silver bg-white shadow-sm transition-all duration-300 hover:border-cyan/30 hover:shadow-lg"
                >
                  <div className="grid lg:grid-cols-5">
                    <div className="relative h-56 lg:col-span-2 lg:h-full">
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/40 to-transparent lg:bg-gradient-to-l" />
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-10">
                      <h2 className="mb-3 font-heading text-2xl font-bold text-deep-blue transition-colors duration-200 group-hover:text-cyan sm:text-3xl">
                        {industry.h1}
                      </h2>
                      <p className="mb-6 font-body text-sm leading-relaxed text-slate sm:text-base">
                        {industry.content}
                      </p>
                      <div className="mb-6 flex flex-wrap gap-2">
                        {industry.services.slice(0, 4).map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-aero-silver bg-aero-silver/30 px-3 py-1 text-xs font-medium text-deep-blue"
                          >
                            {service}
                          </span>
                        ))}
                        {industry.services.length > 4 && (
                          <span className="rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1 text-xs font-medium text-cyan">
                            +{industry.services.length - 4} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-cyan transition-all duration-200 group-hover:gap-3">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
