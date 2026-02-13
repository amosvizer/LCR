import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { caseStudies } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Success Stories",
  description:
    "See how LCR Aero Group has helped aviation operators achieve their certification and compliance objectives. Real results from former FAA inspectors.",
};

const certTypeFilters = ["All", "Part 121", "Part 135", "Part 145", "Part 137"];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Client Success Stories"
        description="Our track record speaks for itself. Here are examples of how LCR Aero Group has helped aviation operators achieve their certification and compliance objectives."
      />

      {/* Filter Badges (visual only for now) */}
      <section className="border-b border-aero-silver bg-white py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-slate">Filter by:</span>
              {certTypeFilters.map((filter, i) => (
                <Badge
                  key={filter}
                  variant={i === 0 ? "default" : "outline"}
                  className={
                    i === 0
                      ? "bg-deep-blue text-white"
                      : "border-aero-silver text-slate hover:border-cyan/40 hover:bg-cyan/5"
                  }
                >
                  {filter}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid gap-10">
            {caseStudies.map((study) => (
              <StaggerItem key={study.id}>
                <article className="overflow-hidden rounded-2xl border border-aero-silver bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <div className="grid lg:grid-cols-5">
                    <div className="relative h-64 lg:col-span-2 lg:h-full">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                        quality={75}
                      />
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-cyan px-3 py-1 text-xs font-bold text-deep-blue">
                          {study.certType}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col p-8 lg:col-span-3 lg:p-10">
                      <span className="text-xs font-medium uppercase tracking-wider text-cyan">
                        {study.category}
                      </span>
                      <h2 className="mb-6 mt-2 text-2xl font-bold text-deep-blue sm:text-3xl">
                        {study.title}
                      </h2>

                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange/10">
                            <AlertTriangle className="h-5 w-5 text-orange" />
                          </div>
                          <div>
                            <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-deep-blue">
                              The Challenge
                            </h3>
                            <p className="text-sm leading-relaxed text-slate">
                              {study.challenge}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-deep-blue/5">
                            <Compass className="h-5 w-5 text-deep-blue" />
                          </div>
                          <div>
                            <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-deep-blue">
                              Our Approach
                            </h3>
                            <p className="text-sm leading-relaxed text-slate">
                              {study.approach}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan/10">
                            <CheckCircle className="h-5 w-5 text-cyan" />
                          </div>
                          <div>
                            <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-deep-blue">
                              The Result
                            </h3>
                            <p className="text-sm font-medium leading-relaxed text-deep-blue">
                              {study.result}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-aero-silver bg-aero-silver/20 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <p className="text-base text-slate">
              Additional case studies are being developed with detailed client
              metrics and timelines. Check back for updated success stories across
              all certification types.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
