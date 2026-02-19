import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Operational Expansion & Major Change Projects",
  description:
    "Expert management of FAA major change projects: new aircraft types, ETOPS, extended overwater, CPDLC, SMS implementation, and operational transitions.",
  alternates: { canonical: "/solutions/expansion" },
};

const EXPANSION_FAQS = [
  {
    question: "What is a Major Change Process Document (MCPD)?",
    answer: "The MCPD is a structured project plan that outlines all steps required for a major operational change, such as adding a new aircraft type or obtaining ETOPS authorization. It follows the same 5-Phase framework as initial certification and coordinates between the operator, LCR's subject matter experts, and the FAA Flight Standards District Office (FSDO).",
  },
  {
    question: "What is ETOPS authorization?",
    answer: "ETOPS (Extended Operations) authorization allows twin-engine aircraft to fly routes that take them more than 60 minutes from an adequate airport. It requires specialized maintenance programs, dispatch procedures, crew training, and a Configuration, Maintenance, and Procedures (CMP) document that meets the requirements of 14 CFR 121.374.",
  },
  {
    question: "How long does it take to add a new aircraft type?",
    answer: "Adding a new aircraft type to your Operations Specifications typically takes 90 to 180 days. The timeline depends on the complexity of the aircraft, the extent of manual revisions required, crew training needs, and FAA FSDO scheduling. LCR has completed fleet additions as quickly as 2 weeks ahead of schedule.",
  },
  {
    question: "What is the difference between Domestic, Flag, and Supplemental operations?",
    answer: "Domestic operations are conducted entirely within the contiguous United States. Flag operations include international routes or routes between the US mainland and its territories. Supplemental operations are non-scheduled (charter) flights that may be domestic or international. Each type has different regulatory requirements for crew qualifications, fuel reserves, and operational procedures.",
  },
];

const EXPANSION_SERVICES = [
  {
    id: "new-aircraft-types",
    title: "Addition of New Aircraft Types",
    description:
      "Adding a new make and model to your Operations Specifications (OpSpecs) involves a comprehensive design and performance assessment. LCR manages the entire MCPD 5-Phase process: Initial Inquiry, Application, Element Design Assessment (EDA), Element Performance Assessment (EPA), and FAA Administrative Functions. We update all affected manuals, training programs, and MEL/MMEL documentation, and coordinate with your FSDO and assigned principal inspectors.",
  },
  {
    id: "etops",
    title: "ETOPS Implementation",
    description:
      "Extended Operations (ETOPS) authorization allows twin-engine aircraft to fly routes that take them more than 60 minutes from an adequate airport. LCR prepares the complete ETOPS program including maintenance requirements, dispatch procedures, crew training, and the Configuration, Maintenance, and Procedures (CMP) document. We ensure your program meets the requirements of 14 CFR \u00A7121.374.",
  },
  {
    id: "ewo",
    title: "Extended Overwater Operations (EWO)",
    description:
      "Operations conducted beyond 50 nautical miles from the nearest shoreline require specific equipment, training, and procedural authorizations. LCR develops the required supplemental documentation, emergency equipment requirements, and crew training modules.",
  },
  {
    id: "transition",
    title: "Transition Between Operations Types",
    description:
      "Transitioning between Domestic, Flag, and Supplemental operations involves significant manual revisions, crew training updates, and FAA coordination. LCR manages these transitions to minimize operational disruption while ensuring complete regulatory compliance.",
  },
  {
    id: "cpdlc",
    title: "Controller-Pilot Datalink Communications (CPDLC)",
    description:
      "CPDLC authorization enables digital text-based communication between pilots and air traffic controllers. LCR prepares the required training programs, operational procedures, and performance monitoring documentation.",
  },
  {
    id: "additional-ratings",
    title: "Additional Repair Station Ratings",
    description:
      "Expanding your Part 145 capability list to include new ratings requires updated documentation, quality control procedures, and FAA evaluation. LCR prepares all required materials and coordinates with your certificate management team.",
  },
  {
    id: "sms-implementation",
    title: "SMS Implementation (Parts 121, 135, and 145)",
    description:
      "Safety Management System implementation is now required for Part 121 operators and increasingly expected for Part 135 and 145 certificate holders. LCR develops and implements SMS programs that are practical, measurable, and aligned with both 14 CFR Part 5 requirements and ICAO Standards and Recommended Practices (SARPs).",
  },
  {
    id: "iata-compliance",
    title: "IATA Compliance",
    description:
      "For operators seeking or maintaining IATA membership, we ensure your operational programs meet IATA Operational Safety Audit (IOSA) requirements and prepare your team for successful audit outcomes.",
  },
  {
    id: "dod-compliance",
    title: "DoD Compliance",
    description:
      "Operators seeking Department of Defense contract eligibility must meet additional safety and operational requirements. LCR prepares your programs and documentation to satisfy DoD evaluation criteria.",
  },
] as const;

export default function ExpansionPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }, { name: "Operational Expansion", href: "/solutions/expansion" }])} />
      <JsonLd data={serviceSchema({ name: "Operational Expansion & Major Change Projects", description: "Expert management of FAA major change projects: new aircraft types, ETOPS, extended overwater, CPDLC, SMS implementation, and operational transitions.", url: "/solutions/expansion" })} />
      <JsonLd data={faqSchema(EXPANSION_FAQS)} />
      <PageHero
        eyebrow="Operational Expansion"
        title="Operational Expansion & Major Change Projects"
        description="Growing your operation — whether adding a new fleet type, expanding to international routes, or implementing advanced technologies — requires FAA approval through a structured change management process. LCR Aero Group manages these complex projects with the same rigor and precision we bring to initial certifications, using the FAA's Master Change Process Document (MCPD) framework."
      />

      {/* Expansion Services Accordion */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              Expansion &amp; Major Change Services
            </h2>
            <p className="mb-12 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
              Each expansion project is managed end-to-end by our team of former
              FAA inspectors who understand the regulatory requirements from both
              sides of the table.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Accordion type="single" collapsible className="w-full">
              {EXPANSION_SERVICES.map((service) => (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className="border-b border-aero-silver"
                >
                  <AccordionTrigger className="py-6 text-lg font-semibold text-deep-blue hover:no-underline hover:text-cyan [&[data-state=open]]:text-cyan">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="font-body text-base leading-relaxed text-slate">
                      {service.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* MCPD Process Overview */}
      <section className="bg-aero-silver/10 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl border border-aero-silver bg-white p-8 sm:p-12">
              <h2 className="mb-6 font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
                The MCPD Framework
              </h2>
              <p className="mb-8 font-body text-base leading-relaxed text-slate">
                Every major change follows the FAA&apos;s Master Change Process
                Document (MCPD) framework, a structured 5-phase process that
                mirrors the initial certification pathway:
              </p>
              <div className="grid gap-4 sm:grid-cols-5">
                {[
                  "Initial Inquiry",
                  "Application",
                  "Element Design Assessment",
                  "Element Performance Assessment",
                  "Administrative Functions",
                ].map((step, index) => (
                  <div key={step} className="text-center">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-deep-blue text-sm font-bold text-cyan">
                      {index + 1}
                    </div>
                    <p className="font-body text-sm font-medium text-deep-blue">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
