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

const CARGO_FAQS = [
  {
    question: "What certifications do cargo airlines need?",
    answer: "Cargo airlines operating under Part 121 need the same base air carrier certificate as passenger airlines, plus additional authorizations for hazardous materials (HAZMAT) handling, cargo-specific security programs, and potentially DoD (Department of Defense) approval for military contract flights. Part 135 cargo operators have a streamlined but still comprehensive certification path.",
  },
  {
    question: "What is a HAZMAT program in aviation?",
    answer: "An aviation HAZMAT (Hazardous Materials) program is a comprehensive set of procedures, training requirements, and documentation governing the acceptance, handling, storage, and transport of dangerous goods by air. It must comply with 49 CFR Parts 171-180 and ICAO Technical Instructions. All personnel involved in cargo acceptance must receive HAZMAT training and recurrent updates.",
  },
  {
    question: "Can charter operators hold both Part 121 and Part 135 certificates?",
    answer: "Yes, some operators hold dual certificates to serve different market segments. Part 121 governs scheduled or large-aircraft operations, while Part 135 covers on-demand charter and commuter operations with smaller aircraft. Each certificate has distinct operational, training, and maintenance requirements. LCR has experience guiding operators through both certification processes simultaneously.",
  },
  {
    question: "What is DoD air carrier approval?",
    answer: "DoD (Department of Defense) approval allows commercial airlines to carry military passengers, cargo, and mail under government contracts. The approval process involves a comprehensive evaluation of your operations, maintenance, safety programs, and security procedures by the DoD Air Carrier Survey and Analysis Office. LCR assists with preparation and compliance documentation for DoD evaluations.",
  },
];

const industry = industryPages.find((p) => p.slug === "cargo-charter")!;

export const metadata: Metadata = {
  title: industry.title,
  description: industry.description,
  alternates: { canonical: "/industries/cargo-charter" },
};

export default function CargoCharterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Industries", href: "/industries" }, { name: "Cargo & Charter", href: "/industries/cargo-charter" }])} />
      <JsonLd data={serviceSchema({ name: "Cargo Airline & Charter Operator Solutions", description: industry.description, url: "/industries/cargo-charter" })} />
      <JsonLd data={faqSchema(CARGO_FAQS)} />
      <PageHero
        eyebrow="Industries"
        title={industry.h1}
        description={industry.description}
      />

      {/* Full-width Image */}
      <section className="relative h-[320px] w-full sm:h-[420px] lg:h-[500px]">
        <Image
          src={industry.image}
          alt={industry.title}
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
              Our Services for {industry.title}
            </h2>
            <p className="mb-12 max-w-2xl font-body text-base text-slate">
              Specialized regulatory solutions for cargo carriers and charter
              operators with complex compliance needs.
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

      {/* Client Logos Section */}
      {industry.clients.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn>
              <h2 className="mb-4 text-center font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
                Trusted By Industry Leaders
              </h2>
              <p className="mb-12 text-center font-body text-base text-slate">
                We have proudly supported these organizations in achieving their
                certification and compliance goals.
              </p>
            </FadeIn>

            <StaggerContainer className="flex flex-wrap items-center justify-center gap-4">
              {industry.clients.map((client) => (
                <StaggerItem key={client}>
                  <div className="rounded-full border border-aero-silver bg-white px-6 py-3 font-heading text-sm font-semibold text-deep-blue shadow-sm transition-all duration-200 hover:border-cyan/40 hover:shadow-md">
                    {client}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

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
