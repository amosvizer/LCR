import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CERTIFICATION_PHASES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "FAA Air Carrier & Air Agency Certification",
  description:
    "Expert guidance through the FAA 5-Phase certification process for Parts 121, 135, 145, and 137. Former FAA inspectors with 95%+ first-time DCT acceptance.",
  alternates: { canonical: "/solutions/certification" },
};

const CERT_FAQS = [
  {
    question: "What is the FAA 5-Phase certification process?",
    answer: "The FAA 5-Phase process is the structured pathway to obtaining an air carrier or air agency certificate. The phases are: (1) Pre-Application — initial inquiry and pre-assessment, (2) Formal Application — submitting the application and required documentation, (3) Design Assessment — FAA review of manuals, procedures, and organizational structure, (4) Performance Assessment — proving runs, evaluations, and operational demonstrations, and (5) Administrative — final certificate issuance and OpSpecs approval.",
  },
  {
    question: "How long does FAA Part 121 certification take?",
    answer: "Part 121 air carrier certification typically takes 18 to 24 months from initial application to certificate issuance. The timeline depends on the complexity of your operation, the quality of your documentation, and FAA workload. With expert guidance and proper DCT preparation, some certifications have been completed ahead of schedule.",
  },
  {
    question: "What is a Data Collection Tool (DCT)?",
    answer: "The Data Collection Tool (DCT) is the FAA's standardized document package that applicants submit during the certification process. It contains all required manuals, procedures, training programs, and compliance documentation. A well-prepared DCT is critical — LCR Aero Group maintains a 95%+ first-time DCT acceptance rate, meaning submissions are approved without requiring revision.",
  },
  {
    question: "What is the difference between Part 121 and Part 135 certification?",
    answer: "Part 121 governs scheduled air carrier operations (airlines), while Part 135 covers on-demand charter and commuter operations. Part 121 has more stringent requirements for crew training, maintenance programs, and operational control. Part 135 offers more operational flexibility but still requires comprehensive safety and compliance programs. The choice depends on your business model, aircraft size, and route structure.",
  },
  {
    question: "What does a 95% DCT acceptance rate mean?",
    answer: "A 95%+ DCT acceptance rate means that more than 95 out of 100 Data Collection Tool submissions prepared by LCR Aero Group are accepted by the FAA on the first review, without requiring corrections or resubmission. The industry average is significantly lower. This high acceptance rate saves clients months of delays and demonstrates the precision of LCR's documentation process.",
  },
];

const CERTIFICATION_TYPES = [
  {
    id: "part-121",
    label: "Part 121",
    title: "14 CFR Part 121 — Domestic, Flag, and Supplemental Operations",
    content:
      "Part 121 certification is required for scheduled airlines, flag carriers, and supplemental operators. The process involves extensive manual development, DCT submission, proving runs, and FAA evaluation across all operational disciplines. LCR has managed Part 121 certifications for startup airlines, cargo carriers, and operators transitioning between certificate types. We provide complete manual system development including the General Operations Manual (GOM), Flight Operations Manual (FOM), General Maintenance Manual (GMM), cabin safety programs, HAZMAT programs, dispatch/flight following procedures, and all required training curricula.",
  },
  {
    id: "part-135",
    label: "Part 135",
    title: "14 CFR Part 135 — Commuter and On-Demand Operations",
    content:
      "Part 135 certification covers charter, air taxi, commuter, and on-demand operations. We support the full range of Part 135 certificates: Single-Pilot, Basic, 9 or Fewer Passengers, 10 or More Passengers, and Commuter operations. Whether you are a startup seeking your first certificate or an existing operator upgrading your authority, LCR manages the entire process including manual preparation, SAS portal submissions, and FAA coordination.",
  },
  {
    id: "part-145",
    label: "Part 145",
    title: "14 CFR Part 145 — Repair Station Certification",
    content:
      "Part 145 certification is required for organizations performing maintenance, preventive maintenance, or alterations of aircraft, airframes, aircraft engines, propellers, appliances, or component parts. LCR develops your Repair Station Manual (RSM) and Quality Control Manual (QCM), prepares your capability list, and guides you through the FAA\u2019s evaluation process. We also support dual-certification needs for organizations requiring both FAA and EASA approval.",
  },
  {
    id: "part-137",
    label: "Part 137",
    title: "14 CFR Part 137 — Agricultural Aircraft Operations",
    content:
      "Part 137 certification covers aerial application of pesticides, fertilizers, seeds, and other materials. LCR provides manual development, operational procedures, and FAA coordination for agricultural aircraft operators, including congested area waivers and specialized equipment requirements.",
  },
] as const;

export default function CertificationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }, { name: "Certification Services", href: "/solutions/certification" }])} />
      <JsonLd data={serviceSchema({ name: "FAA Air Carrier & Air Agency Certification", description: "Expert guidance through the FAA 5-Phase certification process for Parts 121, 135, 145, and 137. Former FAA inspectors with 95%+ first-time DCT acceptance.", url: "/solutions/certification" })} />
      <JsonLd data={faqSchema(CERT_FAQS)} />
      <PageHero
        eyebrow="Certification Services"
        title="FAA Air Carrier & Air Agency Certification"
        description="Obtaining an Air Carrier or Operating Certificate is one of the most complex regulatory undertakings in aviation. It requires subject matter expertise across operations, maintenance, training, safety, and security — all coordinated through a rigorous 5-Phase FAA process. LCR Aero Group has successfully guided dozens of operators through initial certification, managing every phase from pre-application through certificate issuance. Our team of former FAA Aviation Safety Inspectors understands exactly what the FAA looks for, because we used to be the ones looking."
      />

      {/* 5-Phase Certification Process */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              The FAA 5-Phase Certification Process
            </h2>
            <p className="mb-16 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
              Every FAA certification follows a structured five-phase process.
              LCR manages each phase with precision, ensuring nothing is missed
              and your timeline stays on track.
            </p>
          </FadeIn>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-aero-silver sm:left-8" />

            <div className="space-y-12">
              {CERTIFICATION_PHASES.map((phase, index) => (
                <FadeIn key={phase.phase} delay={index * 0.1}>
                  <div className="relative flex gap-6 sm:gap-8">
                    {/* Phase number circle */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-cyan bg-deep-blue text-lg font-bold text-cyan sm:h-16 sm:w-16 sm:text-xl">
                      {phase.phase}
                    </div>

                    {/* Phase content */}
                    <div className="flex-1 pb-2 pt-1 sm:pt-3">
                      <h3 className="mb-3 font-heading text-lg font-semibold text-deep-blue sm:text-xl">
                        Phase {phase.phase}: {phase.title}
                      </h3>
                      <p className="font-body text-base leading-relaxed text-slate">
                        {phase.fullDescription}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Types — Tabs */}
      <section className="bg-aero-silver/10 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              Certification Types We Support
            </h2>
            <p className="mb-12 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
              We guide operators through every major FAA certification category,
              tailoring our approach to your specific operational profile.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Tabs defaultValue="part-121" className="w-full">
              <TabsList className="mb-8 flex w-full flex-wrap gap-2 bg-transparent">
                {CERTIFICATION_TYPES.map((type) => (
                  <TabsTrigger
                    key={type.id}
                    value={type.id}
                    className="rounded-lg border border-aero-silver bg-white px-5 py-2.5 text-sm font-semibold text-slate transition-all data-[state=active]:border-cyan data-[state=active]:bg-deep-blue data-[state=active]:text-white"
                  >
                    {type.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {CERTIFICATION_TYPES.map((type) => (
                <TabsContent key={type.id} value={type.id}>
                  <div className="rounded-2xl border border-aero-silver bg-white p-8">
                    <h3 className="mb-4 font-heading text-xl font-bold text-deep-blue">
                      {type.title}
                    </h3>
                    <p className="font-body text-base leading-relaxed text-slate">
                      {type.content}
                    </p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </FadeIn>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl bg-aero-silver/30 p-8 text-center sm:p-12">
              <h2 className="mb-4 font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
                Not sure which certification path is right for your operation?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
                Our team can assess your needs and recommend the most efficient
                route to certification. Every engagement starts with an honest
                conversation about where you are and where you need to be.
              </p>
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-cyan px-8 py-6 text-base font-semibold text-deep-blue transition-all hover:scale-[1.02] hover:bg-cyan-dark hover:shadow-lg hover:shadow-cyan/20"
              >
                <Link href="/contact">
                  Schedule a Readiness Assessment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
