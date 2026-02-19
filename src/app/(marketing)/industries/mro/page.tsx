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

const MRO_FAQS = [
  {
    question: "What is required for Part 145 repair station certification?",
    answer: "Part 145 certification requires a Repair Station Manual detailing your organization, procedures, and quality system; a Quality Control Manual with inspection procedures and quality assurance processes; a Capability List defining the specific work you are authorized to perform; qualified personnel with appropriate training and experience; adequate facilities, equipment, and tooling; and a training program for all maintenance personnel.",
  },
  {
    question: "How long does Part 145 certification take?",
    answer: "Part 145 repair station certification typically takes 6 to 12 months from initial application to certificate issuance. The timeline depends on the scope of your requested ratings, the complexity of your quality system, facility readiness, and FAA FSDO workload. A well-prepared application with comprehensive documentation can significantly accelerate the process.",
  },
  {
    question: "Can a repair station hold both FAA and EASA certification?",
    answer: "Yes, dual FAA/EASA certification is common for repair stations serving international customers. While both regulatory frameworks share core principles, there are significant differences in documentation requirements, quality system expectations, and personnel qualification standards. LCR has supported numerous repair stations through dual certification, ensuring compliance with both FAA Part 145 and EASA Part 145 requirements.",
  },
  {
    question: "What is a repair station capability list?",
    answer: "A Capability List is a detailed document that defines the specific maintenance, repair, and overhaul work a Part 145 repair station is authorized to perform. It lists approved aircraft, engines, propellers, components, and the specific tasks or operations the station can accomplish. The capability list is part of your Operations Specifications and must be kept current as you add or remove capabilities.",
  },
];

const industry = industryPages.find((p) => p.slug === "mro")!;

export const metadata: Metadata = {
  title: industry.title,
  description: industry.description,
  alternates: { canonical: "/industries/mro" },
};

export default function MROPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Industries", href: "/industries" }, { name: "Repair Stations (MRO)", href: "/industries/mro" }])} />
      <JsonLd data={serviceSchema({ name: "Repair Station Certification & Compliance", description: industry.description, url: "/industries/mro" })} />
      <JsonLd data={faqSchema(MRO_FAQS)} />
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
              Comprehensive Part 145 documentation and quality assurance
              solutions for MRO organizations of all sizes.
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
