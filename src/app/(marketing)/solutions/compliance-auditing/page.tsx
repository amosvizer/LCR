import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import {
  Scale,
  Globe,
  ShieldAlert,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Regulatory Compliance Auditing — FAA, IATA & DoD",
  description:
    "Independent regulatory compliance auditing for aviation operators. FAA, IATA/IOSA, and DoD evaluations by former FAA inspectors. Customized audit programs with actionable findings.",
  alternates: { canonical: "/solutions/compliance-auditing" },
};

const AUDIT_FAQS = [
  {
    question: "What does an FAA compliance audit cover?",
    answer: "A comprehensive FAA compliance audit evaluates your operations, maintenance, training, and safety programs against current 14 CFR requirements and FAA guidance. This includes reviewing manuals, procedures, training records, maintenance documentation, Operations Specifications compliance, and all associated program areas for Parts 121, 135, 145, and 137.",
  },
  {
    question: "How often should we conduct an internal compliance audit?",
    answer: "Aviation operators should conduct comprehensive internal compliance audits at least annually. Semi-annual audits are recommended for complex operations or operators with recent findings. Continuous monitoring programs — part of a robust SMS — provide ongoing compliance assurance between formal audits.",
  },
  {
    question: "What is IATA IOSA?",
    answer: "IATA IOSA (Operational Safety Audit) is an internationally recognized and accepted evaluation system designed to assess the operational management and control systems of an airline. It covers eight operational areas and is a requirement for IATA membership. IOSA registration signals operational excellence and is recognized by regulators and insurance providers worldwide.",
  },
  {
    question: "What happens when audit findings are identified?",
    answer: "When findings are identified, LCR provides a detailed corrective action plan with specific recommendations, implementation timelines, and responsible parties. Findings are categorized by severity and compliance risk. Our team can assist with implementing corrective actions, updating documentation, and conducting follow-up verification to ensure closure before regulatory consequences arise.",
  },
];

const AUDIT_TYPES = [
  {
    icon: Scale,
    title: "FAA Regulatory Compliance Audits",
    description:
      "Comprehensive evaluation of your operations, maintenance, training, and safety programs against current 14 CFR requirements and FAA guidance. We audit against the same standards your FSDO uses — because our team wrote the evaluation criteria. Coverage includes Parts 121, 135, 145, and 137 operations, OpSpecs compliance, and all associated program areas.",
  },
  {
    icon: Globe,
    title: "IATA/IOSA Audit Preparation & Support",
    description:
      "End-to-end preparation for the IATA Operational Safety Audit, including gap analysis against current IOSA Standards Manual (ISM) requirements, evidence compilation, documentation alignment, and mock audit exercises. We prepare your team to demonstrate conformance across all eight IOSA audit disciplines — from FLT and DSP through GRH and SEC.",
  },
  {
    icon: ShieldAlert,
    title: "DoD Compliance Evaluations",
    description:
      "Independent evaluation of your operational programs against Department of Defense Air Transportation Eligibility requirements. We assess your safety, operational, and maintenance programs against DoD evaluation criteria to identify deficiencies before the official evaluation team does. Our assessments cover both initial eligibility and ongoing compliance monitoring.",
  },
  {
    icon: ClipboardList,
    title: "Internal Audit Program Development",
    description:
      "Design and implementation of structured internal audit and continuing analysis programs that satisfy regulatory requirements and drive genuine operational improvement. We build audit schedules, develop checklists calibrated to your operation, train your audit team, and establish corrective action tracking systems that close the loop on every finding.",
  },
] as const;

const AUDIT_AREAS = [
  "Flight Operations & Dispatch Procedures",
  "Maintenance & Airworthiness Programs",
  "Training & Qualification Programs (All Disciplines)",
  "Safety Management System (SMS) Effectiveness",
  "HAZMAT Handling & Dangerous Goods Programs",
  "Security Program Compliance",
  "Operational Control & Flight Following",
  "MEL/CDL Administration & Compliance",
  "Records Management & Documentation Systems",
  "Emergency Response Plan (ERP) Adequacy",
  "Ground Handling & Ramp Safety Procedures",
  "Fatigue Risk Management Programs",
] as const;

const AUDIT_PROCESS = [
  {
    phase: 1,
    title: "Scope Definition & Planning",
    description:
      "Every audit begins with a detailed scoping exercise. We review your certificate type, OpSpecs, fleet composition, operational complexity, and the specific regulatory framework that applies. We then develop a customized audit plan that defines the scope, criteria, schedule, and methodology — ensuring the audit is targeted, efficient, and relevant to your actual operation, not a generic checklist exercise.",
  },
  {
    phase: 2,
    title: "Document Review & Pre-Audit Analysis",
    description:
      "Before setting foot in your facility, we conduct a thorough review of your manuals, training records, maintenance documentation, safety reports, and previous audit findings. Our AI-enhanced tools cross-reference your documentation against current 14 CFR requirements, applicable Advisory Circulars, and FAA Orders to identify potential compliance gaps before the on-site phase begins.",
  },
  {
    phase: 3,
    title: "On-Site Evaluation & Interviews",
    description:
      "Our auditors conduct structured on-site evaluations that include facility inspections, process observations, records sampling, and interviews with key personnel across operations, maintenance, training, and safety. We use standardized evaluation protocols calibrated to the applicable regulatory framework — the same methodologies used in FAA surveillance and IOSA audits.",
  },
  {
    phase: 4,
    title: "Analysis & Findings Report",
    description:
      "We compile all observations into a comprehensive findings report that categorizes each item by severity, identifies the specific regulatory basis, and provides clear, actionable corrective action recommendations. Every finding includes the applicable CFR section, guidance reference, and a practical path to resolution. No vague observations — only specific, defensible findings your team can act on immediately.",
  },
  {
    phase: 5,
    title: "Corrective Action Support & Verification",
    description:
      "We do not hand you a report and walk away. LCR supports your team through the corrective action process — reviewing proposed fixes, verifying implementation effectiveness, and conducting follow-up assessments to confirm closure. For operators preparing for external audits, we provide ongoing support through the official evaluation.",
  },
] as const;

const DIFFERENTIATORS = [
  {
    title: "Former FAA Inspectors",
    text: "Our auditors are former FAA Aviation Safety Inspectors who conducted surveillance, certification, and enforcement actions. We know what the FAA looks for because we used to be the ones looking.",
  },
  {
    title: "True Independence",
    text: "We have no vendor relationships, no software to sell, and no conflicts of interest. Our findings are objective, our recommendations are unbiased, and our only obligation is to the accuracy of the audit.",
  },
  {
    title: "Customized to Your Operation",
    text: "We do not use generic audit templates. Every evaluation is tailored to your specific certificate type, fleet, route structure, and operational complexity. A Part 135 single-pilot operation is not audited the same way as a Part 121 flag carrier.",
  },
  {
    title: "Actionable, Not Academic",
    text: "Every finding includes the specific regulatory basis and a practical corrective action path. Our reports are designed to be worked — not filed. We measure success by findings closed, not findings issued.",
  },
] as const;

export default function ComplianceAuditingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }, { name: "Compliance Auditing", href: "/solutions/compliance-auditing" }])} />
      <JsonLd data={serviceSchema({ name: "Regulatory Compliance Auditing", description: "Independent regulatory compliance auditing for aviation operators. FAA, IATA/IOSA, and DoD evaluations by former FAA inspectors.", url: "/solutions/compliance-auditing" })} />
      <JsonLd data={faqSchema(AUDIT_FAQS)} />
      <PageHero
        eyebrow="Regulatory Compliance Auditing"
        title="Independent Regulatory Compliance Auditing"
        description="Regulatory compliance is not a one-time event — it is a continuous obligation that demands ongoing vigilance, objective evaluation, and expert interpretation. LCR Aero Group conducts independent compliance audits for FAA, IATA, and DoD regulatory frameworks, performed by former FAA Aviation Safety Inspectors who bring the same rigor and standards they applied as federal regulators. Our audits are customized to your operation, our findings are specific and actionable, and our independence ensures the objectivity your compliance program requires."
      />

      {/* Audit Types Grid */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              Audit Programs We Deliver
            </h2>
            <p className="mb-16 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
              We conduct independent evaluations across every major regulatory
              framework applicable to aviation operators, maintenance
              organizations, and air agencies.
            </p>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2">
            {AUDIT_TYPES.map((audit, index) => {
              const Icon = audit.icon;
              return (
                <FadeIn key={audit.title} delay={index * 0.1}>
                  <div className="flex h-full flex-col rounded-2xl border border-aero-silver bg-white p-8 transition-all duration-300 hover:border-cyan/30 hover:shadow-lg">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-blue/5">
                      <Icon className="h-6 w-6 text-cyan" />
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-semibold text-deep-blue">
                      {audit.title}
                    </h3>
                    <p className="font-body text-base leading-relaxed text-slate">
                      {audit.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audit Areas Checklist */}
      <section className="bg-aero-silver/10 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              Operational Areas We Audit
            </h2>
            <p className="mb-12 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
              Our auditors evaluate compliance across every functional area of
              your operation, ensuring comprehensive coverage and no blind spots.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-aero-silver bg-white p-8 sm:p-10">
              <ul className="space-y-4">
                {AUDIT_AREAS.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                    <span className="font-body text-base text-slate">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Audit Process Timeline */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              Our Audit Methodology
            </h2>
            <p className="mb-16 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
              A structured, five-phase process that delivers thorough,
              defensible findings and measurable compliance improvement — not a
              box-checking exercise.
            </p>
          </FadeIn>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-aero-silver sm:left-8" />

            <div className="space-y-12">
              {AUDIT_PROCESS.map((phase, index) => (
                <FadeIn key={phase.phase} delay={index * 0.1}>
                  <div className="relative flex gap-6 sm:gap-8">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-cyan bg-deep-blue text-lg font-bold text-cyan sm:h-16 sm:w-16 sm:text-xl">
                      {phase.phase}
                    </div>
                    <div className="flex-1 pb-2 pt-1 sm:pt-3">
                      <h3 className="mb-3 font-heading text-lg font-semibold text-deep-blue sm:text-xl">
                        Phase {phase.phase}: {phase.title}
                      </h3>
                      <p className="font-body text-base leading-relaxed text-slate">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The LCR Audit Difference — Dark Callout */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl bg-deep-blue p-8 sm:p-12">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
                What Sets Us Apart
              </p>
              <h2 className="mb-6 font-heading text-2xl font-bold text-white sm:text-3xl">
                The LCR Audit Difference
              </h2>
              <p className="mb-6 font-body text-base leading-relaxed text-aero-silver/70 sm:text-lg">
                Most audit firms deliver a checklist and a report. LCR delivers
                a partnership that begins before the first audit day and
                continues until every finding is closed.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {DIFFERENTIATORS.map((item, index) => (
                  <FadeIn key={item.title} delay={index * 0.1}>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                      <h3 className="mb-2 font-heading text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-aero-silver/60">
                        {item.text}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Metric Callout */}
      <section className="bg-aero-silver/10 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-8 sm:p-12">
              <div className="flex flex-col items-center text-center">
                <p className="mb-2 font-heading text-5xl font-bold text-cyan sm:text-6xl">
                  Zero Surprises
                </p>
                <p className="mb-4 font-heading text-xl font-semibold text-deep-blue sm:text-2xl">
                  Audit Preparation That Eliminates Risk
                </p>
                <p className="max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
                  Operators we prepare for external audits — whether FAA
                  surveillance, IOSA registrations, or DoD evaluations —
                  consistently report zero unexpected findings during the
                  official evaluation. When your internal audit program is built
                  and executed by former regulators, external audits become
                  confirmations, not discoveries.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl bg-aero-silver/30 p-8 text-center sm:p-12">
              <h2 className="mb-4 font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
                Ready to strengthen your compliance posture?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
                Whether you need a one-time independent evaluation or an ongoing
                audit program, LCR can design an approach tailored to your
                operation, your certificate, and your regulatory obligations.
                Every engagement starts with understanding your specific
                compliance needs.
              </p>
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-cyan px-8 py-6 text-base font-semibold text-deep-blue transition-all hover:scale-[1.02] hover:bg-cyan-dark hover:shadow-lg hover:shadow-cyan/20"
              >
                <Link href="/contact">
                  Schedule a Compliance Consultation
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
