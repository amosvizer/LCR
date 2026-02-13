import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  BookOpen,
  GitCompare,
  Zap,
  ScanText,
  Table2,
  Database,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI-Enhanced Certification: ROI with AI",
  description:
    "Purpose-built AI tools for aviation certification: automated guidance verification, RAG compliance quoting, rapid manual generation, and conflict detection.",
};

const SECTIONS = [
  {
    headline: "Guaranteeing Compliance",
    subtitle: "Regulatory Accuracy & Traceability",
    items: [
      {
        icon: ShieldCheck,
        title: "Automated Guidance Verification",
        description:
          "Our tools instantly compare your draft documentation against the most current official guidance (14 CFR, 49 CFR, FAA Advisory Circulars, Orders) to identify and correct any missing, noncompliant, or outdated regulatory elements.",
      },
      {
        icon: BookOpen,
        title: "Precision Compliance Quoting (RAG)",
        description:
          "We use Retrieval-Augmented Generation to retrieve relevant and up-to-date regulatory language directly from verifiable sources (e.g., eCFR.gov, specific FAA Orders). Every citation is auditable and precise.",
      },
      {
        icon: GitCompare,
        title: "Interpretation Mapping",
        description:
          "Our AI flags areas where a requirement comes from FAA interpretation rather than the direct text of a CFR. This allows our human experts to explicitly state the basis of the requirement and address ambiguity before submission.",
      },
    ],
  },
  {
    headline: "Speed Without Compromise",
    subtitle: "Accelerated Documentation Development",
    items: [
      {
        icon: Zap,
        title: "Rapid Manual Generation",
        description:
          "AI facilitates fast generation of custom draft manuals, MELs, and training curricula tailored to your specific operational profile, cutting typical development time by weeks.",
      },
      {
        icon: ScanText,
        title: "NLP-Driven Quality",
        description:
          "AI-driven Natural Language Processing ensures your manuals are concise, professional, and free of ambiguity — critical for smooth FAA acceptance.",
      },
      {
        icon: Table2,
        title: "Automated Compliance Matrix",
        description:
          "Our tools automatically create a verifiable, cross-referenced compliance matrix linking every manual paragraph to its specific 14 CFR or Guidance source.",
      },
    ],
  },
  {
    headline: "Engineered for Approval",
    subtitle: "High-Confidence FAA Acceptance",
    items: [
      {
        icon: Database,
        title: "DCT Data Preparation",
        description:
          "For organizations undergoing the SAS process, our tools assist in compiling and structuring the necessary data for DCT submission, ensuring all required Quality Indicator (QID) elements are present and properly scoped.",
      },
      {
        icon: AlertTriangle,
        title: "Conflict Detection",
        description:
          "Our system identifies potential conflicts between instructions or requirements across your manual system, which our experts resolve before submission.",
      },
    ],
  },
] as const;

export default function AiEnhancedPage() {
  return (
    <>
      <PageHero
        eyebrow="Achieving High-Confidence Regulatory Acceptance"
        title="AI-Enhanced Certification: ROI with AI"
        description="LCR Aero Group is pioneering the use of specialized Artificial Intelligence and Machine Learning tools in the FAA certification process. We do not use generic AI. We use purpose-built, aviation-specific tools trained on regulatory datasets to deliver documentation that meets the highest standards of accuracy, traceability, and compliance. The result: first-time-right submissions that significantly reduce your total certification cost and timeline."
      />

      {/* AI Capability Sections */}
      {SECTIONS.map((section, sectionIndex) => (
        <section
          key={section.headline}
          className={`py-20 sm:py-24 ${
            sectionIndex % 2 === 1 ? "bg-aero-silver/10" : ""
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
                {section.subtitle}
              </p>
              <h2 className="mb-12 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
                {section.headline}
              </h2>
            </FadeIn>

            <div
              className={`grid gap-8 ${
                section.items.length === 2
                  ? "sm:grid-cols-2"
                  : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <FadeIn
                    key={item.title}
                    delay={itemIndex * 0.1}
                  >
                    <div className="flex h-full flex-col rounded-2xl border border-aero-silver bg-white p-8 transition-all duration-300 hover:border-cyan/30 hover:shadow-lg">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-blue/5">
                        <Icon className="h-6 w-6 text-cyan" />
                      </div>
                      <h3 className="mb-3 font-heading text-lg font-semibold text-deep-blue">
                        {item.title}
                      </h3>
                      <p className="font-body text-base leading-relaxed text-slate">
                        {item.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA Box */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl bg-deep-blue p-8 text-center sm:p-12">
              <h2 className="mb-4 font-heading text-2xl font-bold text-white sm:text-3xl">
                Want to see how AI can accelerate your certification timeline?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl font-body text-base leading-relaxed text-aero-silver/70 sm:text-lg">
                Let&apos;s discuss your project and show you how our AI-enhanced
                approach can reduce your total certification cost and timeline
                while improving first-time acceptance rates.
              </p>
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-cyan px-8 py-6 text-base font-semibold text-deep-blue transition-all hover:scale-[1.02] hover:bg-cyan-dark hover:shadow-lg hover:shadow-cyan/20"
              >
                <Link href="/contact">
                  Request an AI-Enhanced Consultation
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
