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

const PILOT_SCHOOL_FAQS = [
  {
    question: "What is the difference between Part 141 and Part 142?",
    answer: "Part 141 governs FAA-certificated pilot schools that train pilots under approved, structured courses with defined Training Course Outlines (TCOs). Part 142 governs training centers that use approved courseware, often with simulation, to provide pilot and crewmember training — including type ratings and recurrent training. LCR helps organizations determine which certificate fits their business model and supports the full certification of either.",
  },
  {
    question: "What is a Training Course Outline (TCO)?",
    answer: "A Training Course Outline is the FAA-approved document that defines the structure, content, hours, stages, and standards of each course a Part 141 school or Part 142 center delivers. The TCO is the backbone of a training certificate — LCR develops, refines, and shepherds TCOs through FAA review, along with the supporting curricula, syllabi, and records systems.",
  },
  {
    question: "Do pilot schools and training centers need a Safety Management System (SMS)?",
    answer: "As the FAA expands SMS requirements across the aviation industry, more training organizations are implementing or preparing for SMS. Even where not yet mandatory, a well-built SMS strengthens safety performance and positions a school for future requirements. LCR develops scalable SMS programs tailored to the size and risk profile of training organizations.",
  },
  {
    question: "How does LCR support ongoing pilot school operations?",
    answer: "Beyond initial certification, LCR supports recurrent FAA surveillance, audit preparation, check airman and evaluator programs, stage-check and records systems, curriculum revisions, and added course approvals. Our former FAA inspectors help training organizations stay continuously compliant as regulations and FAA expectations evolve.",
  },
];

const industry = industryPages.find((p) => p.slug === "pilot-schools")!;

export const metadata: Metadata = {
  title: industry.title,
  description: industry.description,
  alternates: { canonical: "/industries/pilot-schools" },
};

export default function PilotSchoolsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Industries", href: "/industries" }, { name: "Pilot Schools", href: "/industries/pilot-schools" }])} />
      <JsonLd data={serviceSchema({ name: "Pilot School Certification (Part 141 & 142)", description: industry.description, url: "/industries/pilot-schools" })} />
      <JsonLd data={faqSchema(PILOT_SCHOOL_FAQS)} />
      <PageHero
        eyebrow="Industries"
        title={industry.h1}
        description={industry.description}
      />

      {/* Full-width Image */}
      <section className="relative h-[320px] w-full sm:h-[420px] lg:h-[500px]">
        <Image
          src={industry.image}
          alt="Flight training simulator at a Part 141 pilot school"
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
              Our Services for Pilot Schools & Training Centers
            </h2>
            <p className="mb-12 max-w-2xl font-body text-base text-slate">
              End-to-end Part 141 and Part 142 support — from initial
              certification through ongoing surveillance and added course
              approvals.
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
