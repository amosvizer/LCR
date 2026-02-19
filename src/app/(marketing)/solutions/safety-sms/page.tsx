import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { Shield, Search, BarChart3, Megaphone, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Safety Management Systems & Compliance Programs",
  description:
    "SMS implementation, gap analysis, IOSA audit preparation, and safety culture programs for Parts 121, 135, and 145 operators. Built on ICAO four-pillar framework.",
  alternates: { canonical: "/solutions/safety-sms" },
};

const SMS_FAQS = [
  {
    question: "What is a Safety Management System (SMS)?",
    answer: "An SMS is a systematic approach to managing safety risk in aviation operations. Built on the ICAO four-pillar framework — Safety Policy, Safety Risk Management, Safety Assurance, and Safety Promotion — it provides a structured process for identifying hazards, assessing risks, implementing mitigations, and continuously monitoring safety performance.",
  },
  {
    question: "Is SMS required for Part 121 operators?",
    answer: "Yes. Under 14 CFR Part 5, all Part 121 air carriers are required to implement a Safety Management System. While not yet mandated for Part 135 and Part 145 operators, SMS is increasingly expected by the FAA and is required for IATA membership and IOSA certification. Proactive SMS implementation demonstrates safety leadership and can expedite regulatory processes.",
  },
  {
    question: "What is an IOSA audit?",
    answer: "The IATA Operational Safety Audit (IOSA) is an internationally recognized evaluation system for airlines. It assesses operational management and control systems across eight disciplines. IOSA registration is a requirement for IATA membership and is recognized by regulatory authorities worldwide as a benchmark for airline safety.",
  },
  {
    question: "How long does SMS implementation take?",
    answer: "A comprehensive SMS implementation typically takes 4 to 8 weeks, depending on the size and complexity of your operation. This includes gap analysis, policy development, risk management procedures, safety assurance programs, and safety promotion materials. LCR's team of former FAA inspectors ensures your SMS meets both regulatory requirements and operational best practices.",
  },
];

const ICAO_PILLARS = [
  {
    icon: Shield,
    title: "Safety Policy",
    description:
      "Organizational commitment, safety objectives, accountability structures, and management responsibility documentation. We establish the foundation that demonstrates your organization's dedication to safety at every level.",
  },
  {
    icon: Search,
    title: "Safety Risk Management",
    description:
      "Systematic hazard identification, risk assessment, and mitigation strategy development. We use data-driven methodologies to prioritize risks by severity and likelihood, ensuring resources are allocated where they matter most.",
  },
  {
    icon: BarChart3,
    title: "Safety Assurance",
    description:
      "Continuous monitoring, internal evaluation, and management-of-change processes. We design SAS-compatible data collection tools and performance metrics that provide real-time visibility into your safety performance.",
  },
  {
    icon: Megaphone,
    title: "Safety Promotion",
    description:
      "Training programs, communication strategies, and safety culture development that embed safety awareness across your organization. Effective promotion turns safety from a compliance requirement into an operational advantage.",
  },
] as const;

const SMS_SERVICES = [
  "Complete SMS Manual Development and Implementation",
  "Gap Analysis and Readiness Assessments",
  "SAS Data Collection Tool (DCT) Development and Support",
  "Safety Risk Assessments for Operational Changes",
  "Internal Audit and Evaluation Programs",
  "Safety Culture Assessments and Improvement Programs",
  "SMS Training Program Development",
  "IOSA Audit Preparation and Support",
  "DoD Compliance Evaluation and Preparation",
] as const;

export default function SafetySmsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }, { name: "Safety & SMS", href: "/solutions/safety-sms" }])} />
      <JsonLd data={serviceSchema({ name: "Safety Management Systems & Compliance Programs", description: "SMS implementation, gap analysis, IOSA audit preparation, and safety culture programs for Parts 121, 135, and 145 operators.", url: "/solutions/safety-sms" })} />
      <JsonLd data={faqSchema(SMS_FAQS)} />
      <PageHero
        eyebrow="Safety & SMS"
        title="Safety Management Systems & Compliance Programs"
        description="An effective Safety Management System is not a binder on a shelf. It is a living operational framework that identifies hazards, manages risks, and drives continuous improvement. Under 14 CFR Part 5, SMS is a regulatory requirement for Part 121 operators, and it is rapidly becoming the expected standard for Part 135 and 145 certificate holders. LCR Aero Group designs SMS programs that are practical to operate, efficient to maintain, and demonstrably effective in reducing operational risk."
      />

      {/* ICAO Four Pillars */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              Built on the ICAO Four Pillars
            </h2>
            <p className="mb-16 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
              We structure every SMS program around the four ICAO pillars,
              tailored to the size and complexity of your operation.
            </p>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2">
            {ICAO_PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} delay={index * 0.1}>
                  <div className="rounded-2xl border border-aero-silver bg-white p-8 transition-all duration-300 hover:border-cyan/30 hover:shadow-lg">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-blue/5">
                      <Icon className="h-6 w-6 text-cyan" />
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-semibold text-deep-blue">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-base leading-relaxed text-slate">
                      {pillar.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SMS Services */}
      <section className="bg-aero-silver/10 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              SMS Services
            </h2>
            <p className="mb-12 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
              From initial development through ongoing management, our team
              provides comprehensive SMS support across every stage of your
              safety program lifecycle.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-aero-silver bg-white p-8 sm:p-10">
              <ul className="space-y-4">
                {SMS_SERVICES.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                    <span className="font-body text-base text-slate">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Metric Callout */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-8 sm:p-12">
              <div className="flex flex-col items-center text-center">
                <p className="mb-2 font-heading text-5xl font-bold text-cyan sm:text-6xl">
                  95%+
                </p>
                <p className="mb-4 font-heading text-xl font-semibold text-deep-blue sm:text-2xl">
                  First-Time DCT Acceptance Rate
                </p>
                <p className="max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
                  Over 95% of our DCT submissions are accepted by the FAA on
                  initial review — significantly above the industry average. This
                  means fewer revision cycles and a faster path to approval for
                  your operation.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
