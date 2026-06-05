import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { industryPages } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schemas";

const UAS_FAQS = [
  {
    question: "What is Advanced Air Mobility (AAM)?",
    answer: "Advanced Air Mobility is an emerging segment of aviation that uses new aircraft types — including electric vertical takeoff and landing (eVTOL) and other powered-lift aircraft — to move people and cargo in ways traditional aviation cannot. AAM encompasses urban air taxis, regional air mobility, and cargo operations, and it sits at the leading edge of FAA certification and rulemaking.",
  },
  {
    question: "What FAA certifications do eVTOL and UAS operators need?",
    answer: "Depending on the aircraft and mission, operators may need type and production certification for the aircraft, operational authorizations (such as Part 135 for carrying passengers or cargo), powered-lift airman certification, and UAS approvals under Part 107 or the emerging Part 108 framework. LCR helps emerging operators map the right certification pathway and build the documentation to support it.",
  },
  {
    question: "What is BVLOS and how is it approved?",
    answer: "BVLOS — Beyond Visual Line of Sight — refers to drone and UAS operations conducted where the remote pilot cannot see the aircraft directly. These operations require FAA approval, typically through waivers or exemptions supported by a robust safety case, concept of operations, and risk mitigations. LCR develops BVLOS applications and the operational documentation the FAA expects.",
  },
  {
    question: "Do UAS and AAM organizations need a Safety Management System (SMS)?",
    answer: "Yes — as operations scale and the FAA extends SMS requirements across aviation, a Safety Management System is increasingly central to AAM and UAS certification. LCR builds scalable SMS programs sized to an organization's operations and risk profile, positioning emerging operators to meet current and forthcoming requirements.",
  },
];

const industry = industryPages.find((p) => p.slug === "uas-aam")!;

export const metadata: Metadata = {
  title: industry.title,
  description: industry.description,
  alternates: { canonical: "/industries/uas-aam" },
};

export default function UasAamPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Industries", href: "/industries" }, { name: "UAS & Advanced Air Mobility", href: "/industries/uas-aam" }])} />
      <JsonLd data={serviceSchema({ name: "UAS & Advanced Air Mobility (eVTOL) Certification", description: industry.description, url: "/industries/uas-aam" })} />
      <JsonLd data={faqSchema(UAS_FAQS)} />
      <PageHero
        eyebrow="Industries"
        title={industry.h1}
        description={industry.description}
      />

      {/* Full-width Image */}
      <section className="relative h-[320px] w-full sm:h-[420px] lg:h-[500px]">
        <Image
          src={industry.image}
          alt="eVTOL aircraft representing Advanced Air Mobility operations"
          fill
          className="object-cover"
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </section>

      {/* Content Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <p className="font-body text-lg leading-relaxed text-slate sm:text-xl sm:leading-8">
                {industry.content}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-aero-silver/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
              Our Services for UAS & Advanced Air Mobility
            </h2>
            <p className="mb-12 max-w-2xl font-body text-base text-slate">
              From Part 107 compliance and BVLOS waivers to powered-lift
              certification support, we translate evolving FAA frameworks into
              actionable pathways for emerging operators.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industry.services.map((service) => (
              <StaggerItem key={service}>
                <div className="flex items-center gap-3 rounded-xl border border-aero-silver bg-white px-5 py-4 transition-all duration-200 hover:border-cyan/30 hover:shadow-md">
                  <div className="flex h-2 w-2 shrink-0 rounded-full bg-cyan" />
                  <span className="font-body text-sm font-medium text-deep-blue">
                    {service}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Back to Industries Link */}
      <section className="border-t border-aero-silver py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 font-body text-sm font-medium text-cyan transition-colors hover:text-cyan-dark"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            View All Industries
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
