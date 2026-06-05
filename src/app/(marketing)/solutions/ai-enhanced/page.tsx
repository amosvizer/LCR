import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  BookOpen,
  ScanText,
  Table2,
  Database,
  AlertTriangle,
  CheckCircle2,
  Users,
  Lock,
  ArrowRight,
} from "lucide-react";

import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schemas";

const AI_FAQS = [
  {
    question: "How does LCR use AI in FAA certification and compliance?",
    answer:
      "LCR's purpose-built, aviation-specific tools compare your drafts against a curated, regularly updated knowledge base of 14 CFR, 49 CFR, Advisory Circulars, Orders, and guidance. Retrieval-Augmented Generation (RAG) surfaces the most relevant regulatory passages, automated matrices link manual content to its regulatory drivers, and NLP checks flag inconsistencies — all for review and confirmation by our human experts.",
  },
  {
    question: "Does AI replace your human experts?",
    answer:
      "No. At LCR Aero Group, AI doesn't replace human expertise — it automates retrieval, cross-checking, and consistency checks so our former FAA inspectors and subject matter experts can focus on interpretation, judgment, and strategy. Every AI analysis is reviewed and approved by our team before anything reaches the FAA.",
  },
  {
    question: "Is my proprietary data secure when LCR uses AI tools?",
    answer:
      "Yes. Client data is processed in private, access-controlled environments, is never used to train public AI models, and is handled in full respect of your NDAs. Your information stays inside your engagement.",
  },
  {
    question: "What is RAG in aviation compliance?",
    answer:
      "RAG (Retrieval-Augmented Generation) combines a language model with a curated knowledge base of regulatory documents. In LCR's implementation, the system retrieves relevant sections of 14 CFR, FAA Orders, and Advisory Circulars to support and verify compliance statements — creating auditable links between requirements and sources while supporting, not replacing, human expertise.",
  },
  {
    question: "What ROI can operators expect from AI-enhanced certification?",
    answer:
      "Operators working with LCR's AI-enhanced methodology typically see a 30-50% reduction in documentation development time, near-elimination of regulatory citation errors, and significantly fewer FAA revision requests. Our 95%+ first-time DCT acceptance rate translates directly to faster certification timelines, reduced consulting costs, and earlier revenue generation.",
  },
];

export const metadata: Metadata = {
  title: "AI-Enhanced Services for FAA Certification & Compliance",
  description:
    "Private, aviation-specific AI workflows — curated regulatory knowledge base, RAG retrieval, compliance matrices, and NLP quality checks — with former FAA inspectors reviewing every output.",
  alternates: { canonical: "/solutions/ai-enhanced" },
};

// The four outcomes our AI-enhanced workflows are engineered to deliver.
const OUTCOMES = [
  "Reduce revision cycles during SAS/DCT and manual reviews",
  "Improve traceability between requirements and manual content",
  "Highlight gaps and inconsistencies before the FAA does",
  "Shorten timelines compared with traditional, fully manual approaches",
] as const;

// The six capabilities behind "How our aviation-specific AI works".
const CAPABILITIES = [
  {
    icon: Database,
    title: "Curated Regulatory Knowledge Base",
    description:
      "We maintain a comprehensive, regularly updated database of key FAA regulations, Advisory Circulars, Orders, and guidance materials. Our tools compare your drafts against the latest versions in this expert-managed system, with AI flagging potential issues and references for human confirmation.",
  },
  {
    icon: BookOpen,
    title: "RAG-Powered Regulatory Retrieval",
    description:
      "Retrieval-Augmented Generation surfaces the most relevant regulatory and guidance passages for our team's review. This creates auditable links between requirements and sources while supporting — not replacing — human expertise.",
  },
  {
    icon: Table2,
    title: "Compliance Mapping & Matrices",
    description:
      "Our tools generate compliance matrices that link manual content to applicable regulatory drivers and clearly identify sections that represent company policy or best practices rather than direct regulatory requirements, with final adjustments made by our experts.",
  },
  {
    icon: ScanText,
    title: "NLP-Driven Quality & Consistency Checks",
    description:
      "Natural Language Processing scans manuals to detect inconsistent terminology, unclear or redundant language, and potential internal conflicts, helping our team improve clarity and alignment across related documents.",
  },
  {
    icon: AlertTriangle,
    title: "Targeted Conflict, Gap & Specialized Support",
    description:
      "AI-assisted reviews identify policy conflicts, missing regulatory elements, outdated references, and gaps against relevant checklists. Specialized workflows support SAS/DCT traceability (QID responses and SRR mapping) and SMS (Part 5) alignment for structure and coverage.",
  },
  {
    icon: ShieldCheck,
    title: "Human Expertise First, Securely Applied",
    description:
      "Every AI analysis is reviewed and approved by our former FAA inspectors and subject matter experts. Client data is processed in private, access-controlled environments, is never used to train public models, and is handled in full respect of NDAs.",
  },
] as const;

const TRUST_POINTS = [
  { icon: Users, label: "Human experts in the loop" },
  { icon: Lock, label: "Private, access-controlled environments" },
  { icon: ShieldCheck, label: "NDA-respected · never trains public models" },
] as const;

export default function AiEnhancedPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }, { name: "AI-Enhanced Services", href: "/solutions/ai-enhanced" }])} />
      <JsonLd data={serviceSchema({ name: "AI-Enhanced Services", description: "Private, aviation-specific AI workflows for FAA certification and compliance: curated regulatory knowledge base, RAG retrieval, compliance matrices, NLP quality checks, and conflict/gap detection — with human expert review.", url: "/solutions/ai-enhanced" })} />
      <JsonLd data={faqSchema(AI_FAQS)} />
      <PageHero
        eyebrow="Private, Aviation-Specific AI Workflows"
        title="AI-Enhanced Services"
        description="LCR Aero Group is pioneering the use of specialized Artificial Intelligence and Machine Learning tools in the FAA certification process and ongoing compliance. We use purpose-built, aviation-specific tools trained on regulatory datasets to deliver documentation that meets the highest standards of accuracy, traceability, and compliance. The result: first-time-right submissions that significantly reduce your total certification cost and timeline."
      />

      {/* Lead pull-quote: human expertise first */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <figure className="border-l-4 border-cyan pl-6 sm:pl-8">
              <blockquote className="font-heading text-xl font-medium leading-relaxed text-deep-blue sm:text-2xl sm:leading-relaxed">
                At LCR Aero Group, AI doesn&apos;t replace human expertise. It
                automates the work of retrieval, cross-checking, and consistency
                checks so our subject matter experts can focus their experience on
                interpretation, judgment, and strategy.
              </blockquote>
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* Why AI belongs in the process */}
      <section className="bg-aero-silver/10 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn direction="left">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
                Why AI Belongs in the Process
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
                Built for the Scale of Modern Compliance
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
                Modern certification and compliance programs generate tens of
                thousands of pages of manuals, matrices, and data. Manually keeping
                all documentation aligned with 14 CFR, 49 CFR, Advisory Circulars,
                Orders, FSIMS/8900.1, and Part 5 SMS requirements is slow and
                error-prone.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
                We&apos;re on the leading edge of FAA certification consultancies by
                spearheading the formal integration of AI into our workflows —
                always with human experts in the loop.
              </p>
            </FadeIn>

            <FadeIn direction="right">
              <div className="rounded-2xl border border-aero-silver bg-white p-8 shadow-sm sm:p-10">
                <p className="font-heading text-base font-semibold text-deep-blue">
                  Our AI-enhanced workflows are designed to:
                </p>
                <ul className="mt-6 space-y-4">
                  {OUTCOMES.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                      <span className="text-sm leading-relaxed text-slate sm:text-base">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How our aviation-specific AI works — six capabilities */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
              How It Works
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              How Our Aviation-Specific AI Works
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
              Purpose-built tools trained on regulatory and guidance datasets —
              each surfacing, mapping, and pressure-testing your documentation for
              a human expert to confirm.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((item, itemIndex) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={(itemIndex % 3) * 0.1}>
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

          {/* Trust strip */}
          <FadeIn delay={0.15}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-aero-silver bg-aero-silver/20 px-6 py-6">
              {TRUST_POINTS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="h-5 w-5 text-cyan" />
                  <span className="text-sm font-medium text-deep-blue">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

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
