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

const COMMERCIAL_FAQS = [
  {
    question: "How long does Part 121 air carrier certification take?",
    answer: "Part 121 certification typically takes 18 to 24 months from pre-application through certificate issuance. The timeline depends on the complexity of your proposed operation, aircraft fleet, route structure, and the quality of your documentation package. With experienced consulting guidance, some certifications have been completed ahead of schedule.",
  },
  {
    question: "What is the difference between domestic, flag, and supplemental operations?",
    answer: "Domestic operations are conducted entirely within the contiguous United States. Flag operations include international routes or routes between the US mainland and its territories. Supplemental operations are non-scheduled (charter) flights, either domestic or international. Each type has different regulatory requirements for crew qualifications, fuel reserves, and operational procedures under Part 121.",
  },
  {
    question: "What does ETOPS authorization allow?",
    answer: "ETOPS (Extended Operations) authorization allows twin-engine aircraft to fly routes that take them more than 60 minutes from a suitable airport. It requires specialized maintenance programs, dispatch procedures, crew training, and a Configuration, Maintenance, and Procedures (CMP) document meeting 14 CFR 121.374 requirements. ETOPS enables more direct transatlantic and transpacific routing.",
  },
  {
    question: "What is IOSA certification for airlines?",
    answer: "IOSA (IATA Operational Safety Audit) is an internationally recognized evaluation system that assesses airline operational management and control systems across eight disciplines. IOSA registration is required for IATA membership and is recognized by regulatory authorities worldwide as a benchmark for airline safety and operational excellence.",
  },
];

const industry = industryPages.find((p) => p.slug === "commercial")!;

export const metadata: Metadata = {
  title: industry.title,
  description: industry.description,
  alternates: { canonical: "/industries/commercial" },
};

export default function CommercialPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Industries", href: "/industries" }, { name: "Commercial Airlines", href: "/industries/commercial" }])} />
      <JsonLd data={serviceSchema({ name: "Commercial Airline Certification & Compliance", description: industry.description, url: "/industries/commercial" })} />
      <JsonLd data={faqSchema(COMMERCIAL_FAQS)} />
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
              Comprehensive solutions tailored to the unique regulatory
              requirements of commercial airline operations.
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
