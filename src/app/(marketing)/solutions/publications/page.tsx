import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { FileText, ClipboardCheck, RefreshCw } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schemas";

const PUBLICATIONS_FAQS = [
  {
    question: "What manuals are required for FAA Part 121 certification?",
    answer: "Part 121 operators must develop and maintain several key manuals including a General Operations Manual (GOM), Flight Operations Manual (FOM), General Maintenance Manual (GMM), training program manuals for all disciplines, a Minimum Equipment List (MEL) program, Cabin Safety/Inflight Manual, HAZMAT program documentation, and an Emergency Response Plan (ERP). Each manual must comply with the applicable sections of 14 CFR and be accepted by the FAA before operations can begin.",
  },
  {
    question: "How long does aviation manual development take?",
    answer: "Comprehensive manual development for a new air carrier typically takes 3 to 6 months, depending on the scope and complexity of the operation. For existing operators, individual manual revisions can be completed in 2 to 4 weeks. LCR's AI-enhanced tools accelerate the process by automating regulatory cross-referencing and compliance verification, reducing development time while maintaining accuracy.",
  },
  {
    question: "What is a compliance matrix in aviation manuals?",
    answer: "A compliance matrix is a detailed cross-reference document that maps every regulatory requirement in 14 CFR to the specific section, page, and paragraph in your manuals where that requirement is addressed. It demonstrates to the FAA that your documentation comprehensively covers all applicable regulations and is a critical component of the Data Collection Tool (DCT) submission.",
  },
  {
    question: "Can existing manuals be updated instead of rewritten?",
    answer: "Yes. LCR specializes in both new manual development and revision of existing documentation. We perform a thorough gap analysis to identify areas where your current manuals fall short of regulatory requirements or industry best practices, then revise only what needs updating. This targeted approach is faster and more cost-effective than starting from scratch.",
  },
];

export const metadata: Metadata = {
  title: "Aviation Manual Development & Technical Publications",
  description:
    "Complete aviation manual development, revision, and compliance verification. GOM, FOM, GMM, training manuals, and all required Part 121/135/145 documentation.",
  alternates: { canonical: "/solutions/publications" },
};

const MANUALS = [
  "General Operations Manual (GOM)",
  "Flight Operations Manual (FOM)",
  "General Maintenance Manual (GMM)",
  "Cabin Safety / Inflight Manual",
  "Aircraft Operating Manuals",
  "HAZMAT Program Manuals",
  "Dispatch / Flight Following Manual",
  "Company Procedures Manual",
  "Minimum Equipment List (MEL) Programs",
  "Training Program Manuals (all disciplines)",
  "Repair Station Manual (RSM) and Quality Control Manual (QCM)",
  "Safety Management System (SMS) Manual",
  "Emergency Response Plan (ERP)",
  "Security Program Documentation",
] as const;

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Assessment",
    description:
      "We evaluate your existing documentation (if any), operational scope, fleet composition, and regulatory requirements.",
  },
  {
    step: 2,
    title: "Drafting",
    description:
      "Our subject matter experts and AI tools produce custom documentation tailored to your specific operation, not generic templates.",
  },
  {
    step: 3,
    title: "Verification",
    description:
      "Every regulatory citation is verified against the current 14 CFR, 49 CFR, FAA Advisory Circulars, and Orders using our RAG-powered compliance engine.",
  },
  {
    step: 4,
    title: "Review",
    description:
      "Your operational leadership reviews all documentation for accuracy, feasibility, and alignment with your organizational culture.",
  },
  {
    step: 5,
    title: "Submission",
    description:
      "We prepare the final package for FAA submission, including compliance matrices that cross-reference every manual paragraph to its regulatory source.",
  },
  {
    step: 6,
    title: "Revision Support",
    description:
      "We support all FAA feedback and revision cycles through final acceptance.",
  },
] as const;

export default function PublicationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }, { name: "Technical Publications", href: "/solutions/publications" }])} />
      <JsonLd data={serviceSchema({ name: "Aviation Manual Development & Technical Publications", description: "Complete aviation manual development, revision, and compliance verification for all Part 121/135/145 documentation.", url: "/solutions/publications" })} />
      <JsonLd data={faqSchema(PUBLICATIONS_FAQS)} />
      <PageHero
        eyebrow="Technical Publications"
        title="Aviation Manual Development & Technical Publications"
        description="Your manuals are the operational DNA of your organization. They define how every procedure is performed, how every role is executed, and how every regulatory requirement is met. The FAA evaluates your manuals as the primary evidence of your ability to operate safely. Poorly written, inconsistent, or noncompliant manuals are the single most common cause of certification delays."
      />

      {/* Intro paragraph */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <p className="font-body text-base leading-relaxed text-slate sm:text-lg">
              LCR Aero Group develops and revises the complete spectrum of
              aviation manuals, with a focus on standardization, regulatory
              accuracy, and operational clarity. Our AI-enhanced documentation
              process ensures every citation is current, every cross-reference is
              accurate, and every procedure is written in clear, unambiguous
              language.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Manuals We Develop */}
      <section className="bg-aero-silver/10 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-7 w-7 text-cyan" />
              <h2 className="font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
                Manuals We Develop
              </h2>
            </div>
            <p className="mb-12 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
              We produce the complete documentation suite required for FAA
              certification and ongoing operational compliance.
            </p>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MANUALS.map((manual, index) => (
              <FadeIn key={manual} delay={index * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-aero-silver bg-white px-5 py-4 transition-all duration-200 hover:border-cyan/30 hover:shadow-md">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-deep-blue/5">
                    <FileText className="h-4 w-4 text-cyan" />
                  </div>
                  <span className="font-body text-sm font-medium text-deep-blue">
                    {manual}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Process */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <ClipboardCheck className="h-7 w-7 text-cyan" />
              <h2 className="font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
                Our Documentation Process
              </h2>
            </div>
            <p className="mb-16 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
              A structured, repeatable process that produces compliant
              documentation and minimizes revision cycles.
            </p>
          </FadeIn>

          <div className="space-y-8">
            {PROCESS_STEPS.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.08}>
                <div className="flex gap-6">
                  {/* Step number */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-cyan/40 bg-deep-blue text-lg font-bold text-cyan">
                    {item.step}
                  </div>

                  {/* Step content */}
                  <div className="flex-1 pt-1">
                    <h3 className="mb-2 font-heading text-lg font-semibold text-deep-blue">
                      {item.title}
                    </h3>
                    <p className="font-body text-base leading-relaxed text-slate">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Management Callout */}
      <section className="pb-8 sm:pb-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-8 sm:p-12">
              <div className="flex items-start gap-5">
                <div className="hidden shrink-0 sm:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-deep-blue/10">
                    <RefreshCw className="h-6 w-6 text-cyan" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 font-heading text-xl font-semibold text-deep-blue sm:text-2xl">
                    Ongoing Manual Management
                  </h3>
                  <p className="font-body text-base leading-relaxed text-slate sm:text-lg">
                    We also provide ongoing manual management services for
                    operators who want to ensure their documentation stays
                    current with regulatory changes without diverting internal
                    resources. Our team monitors regulatory updates and proactively
                    revises your manuals to maintain continuous compliance.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
