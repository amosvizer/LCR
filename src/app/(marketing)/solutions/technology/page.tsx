import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Navigation,
  Gauge,
  Radio,
  ShieldCheck,
  Users,
  Wrench,
  BarChart3,
  FileText,
  Bell,
  X,
  Check,
} from "lucide-react";

import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schemas";

const TECH_FAQS = [
  {
    question: "What technology systems do airlines need?",
    answer: "Modern airlines require an integrated technology stack including flight operations systems, crew scheduling and tracking, maintenance tracking (MRO software), dispatch and flight following systems, safety management systems (SMS), document management, training records management, and regulatory compliance monitoring. The specific requirements depend on your certificate type, fleet size, and operational complexity.",
  },
  {
    question: "How long does aviation technology implementation take?",
    answer: "A full technology implementation typically takes 3 to 9 months from vendor selection to go-live, depending on the system complexity and scope of integration. LCR manages the entire lifecycle: requirements analysis, vendor evaluation, contract negotiation, implementation planning, data migration, user training, on-the-job training (OJT), and post-implementation support.",
  },
  {
    question: "Should we build custom aviation software or buy off-the-shelf?",
    answer: "For most operators, commercial off-the-shelf (COTS) solutions are the recommended approach. They offer proven functionality, vendor support, regulatory updates, and lower total cost of ownership. Custom development is typically only justified for unique operational requirements that no commercial product addresses. LCR evaluates your specific needs and recommends the most cost-effective path.",
  },
  {
    question: "What happens when we outgrow our current aviation systems?",
    answer: "LCR provides technology lifecycle support including system assessments, migration planning, and replacement implementation. When your operation expands — adding aircraft types, new bases, or international routes — we evaluate whether your current systems can scale or if a technology upgrade is needed, then manage the transition to minimize operational disruption.",
  },
];

export const metadata: Metadata = {
  title: "Technology Solutions — Selection, Implementation & Lifecycle Support",
  description:
    "End-to-end operational technology consulting for aviation: system selection, implementation, training, OJT, and ongoing support. A true turnkey solution from LCR Aero Group.",
  alternates: { canonical: "/solutions/technology" },
};

const TECHNOLOGY_DOMAINS = [
  {
    icon: Navigation,
    title: "Flight Planning & Navigation",
    description:
      "Route optimization, fuel planning, NOTAM integration, and navigation database management systems that keep your dispatch and flight crews operating with precision.",
  },
  {
    icon: Gauge,
    title: "Aircraft Performance & Weight/Balance",
    description:
      "Performance calculation systems, weight and balance platforms, and runway analysis tools tailored to your fleet composition and operational environment.",
  },
  {
    icon: Radio,
    title: "Flight Dispatch & Flight Following",
    description:
      "Real-time flight tracking, dispatch communication platforms, and flight following systems that meet Part 121 and Part 135 regulatory requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Management Systems",
    description:
      "Digital SMS platforms for hazard reporting, risk assessment, safety assurance, and safety promotion — fully aligned with ICAO Annex 19 and FAA SMS framework.",
  },
  {
    icon: Users,
    title: "Crew Scheduling & Training Management",
    description:
      "Crew rostering, qualification tracking, fatigue risk management, and training records systems that ensure regulatory compliance and operational efficiency.",
  },
  {
    icon: Wrench,
    title: "Maintenance Tracking",
    description:
      "MRO and M&E systems for airworthiness management, work order tracking, parts inventory, AD/SB compliance, and MEL tracking across your fleet.",
  },
  {
    icon: BarChart3,
    title: "Management Dashboards & Business Intelligence",
    description:
      "Executive dashboards, KPI monitoring, operational analytics, and business intelligence platforms that transform raw data into actionable operational insight.",
  },
  {
    icon: FileText,
    title: "Government & Regulatory Reporting",
    description:
      "Automated reporting systems for DOT, FAA, TSA, and CBP requirements — including BTS Form 41, ASAP/FOQA submissions, and security compliance documentation.",
  },
  {
    icon: Bell,
    title: "Communication & Notification Systems",
    description:
      "Operational control center communications, crew notification platforms, passenger communication systems, and irregular operations (IROPS) management tools.",
  },
] as const;

const APPROACH_PHASES = [
  {
    phase: 1,
    title: "Discovery & Requirements Analysis",
    description:
      "We start by understanding your operation from the inside out — your certificate type, fleet composition, route structure, crew base model, growth plans, and regulatory obligations. We map every technology requirement across every department, identifying what you need today and what you will need as you scale. The result is a comprehensive Technology Requirements Document that becomes the foundation for every decision that follows.",
  },
  {
    phase: 2,
    title: "Technology Evaluation & Selection",
    description:
      "We evaluate every viable platform against your specific operational profile — not generic feature lists. Our team has worked with dozens of technology vendors across the aviation ecosystem and understands the real-world strengths and limitations of each platform. We conduct side-by-side comparisons, facilitate vendor demonstrations, negotiate contract terms, and deliver a clear recommendation with full ROI analysis. You choose with confidence, not guesswork.",
  },
  {
    phase: 3,
    title: "Implementation & Integration",
    description:
      "We manage the complete implementation: system configuration, data migration, workflow design, integration between platforms, and UAT testing. We ensure your technology stack works as a unified ecosystem — not a collection of disconnected tools. Every configuration is documented, every integration is tested, and every workflow is validated against your operational procedures and regulatory requirements before go-live.",
  },
  {
    phase: 4,
    title: "Training, OJT & Go-Live Support",
    description:
      "Technology is only as effective as the people using it. We develop custom training curricula for every role — dispatchers, pilots, maintenance controllers, crew schedulers, and management. We provide hands-on OJT during the transition period, on-site go-live support, and a structured knowledge transfer that ensures your team is fully self-sufficient. We do not leave until your operation is running smoothly.",
  },
] as const;

const COMPARISON = {
  typical: [
    "Recommends a few well-known vendors",
    "Provides a basic feature comparison",
    "Hands off after certificate issuance",
    "No implementation support",
    "No training or OJT",
    "No integration between systems",
    "No ongoing relationship",
  ],
  lcr: [
    "Evaluates every viable platform against your specific profile",
    "Conducts full ROI analysis with vendor negotiations",
    "Stays through implementation, testing, and go-live",
    "Manages complete system configuration and data migration",
    "Delivers role-specific training with hands-on OJT",
    "Ensures all systems work as a unified ecosystem",
    "Provides ongoing optimization and lifecycle support",
  ],
} as const;

export default function TechnologyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }, { name: "Technology Solutions", href: "/solutions/technology" }])} />
      <JsonLd data={serviceSchema({ name: "Technology Solutions — Selection, Implementation & Lifecycle Support", description: "End-to-end operational technology consulting for aviation: system selection, implementation, training, OJT, and ongoing support.", url: "/solutions/technology" })} />
      <JsonLd data={faqSchema(TECH_FAQS)} />
      <PageHero
        eyebrow="Technology Solutions"
        title="Technology Selection, Implementation & Lifecycle Support"
        description="Most aviation consultancies help you get your certificate — then disappear. LCR Aero Group delivers a complete 360° technology solution: from identifying the right operational systems for your specific operation, through implementation, integration, training, and ongoing lifecycle support. We don't just recommend tools. We build the technology backbone that powers your operation — and we stay to make sure it works."
      />

      {/* The Technology Challenge — Text + Image */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Text */}
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
                  The Technology Challenge
                </h2>
                <p className="mb-6 font-body text-base leading-relaxed text-slate sm:text-lg">
                  Launching or scaling an aviation operation requires dozens of
                  interconnected technology systems — each with different
                  vendors, different data formats, different regulatory
                  implications, and different learning curves. The wrong choice
                  in any one area can create operational bottlenecks, compliance
                  gaps, and significant wasted investment.
                </p>
                <p className="font-body text-base leading-relaxed text-slate sm:text-lg">
                  Operators need more than a list of vendor names. They need a
                  trusted technology advisor who understands both the regulatory
                  requirements that drive system selection{" "}
                  <em>and</em> the practical realities of operating with those
                  systems every day. That is exactly what LCR provides.
                </p>
              </FadeIn>
            </div>

            {/* Image */}
            <FadeIn delay={0.15} className="lg:w-1/2">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/aviation/technology-consultant.jpg"
                    alt="LCR technology consultant reviewing operational systems in an aviation operations center"
                    fill
                    className="object-cover"
                    quality={80}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/30 to-transparent" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Technology Domains Grid */}
      <section className="bg-aero-silver/10 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
              Comprehensive Coverage
            </p>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              Technology Domains We Cover
            </h2>
            <p className="mb-12 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
              We consult across the full spectrum of aviation operational
              technology — ensuring every system in your operation is the right
              fit, properly configured, and fully integrated.
            </p>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TECHNOLOGY_DOMAINS.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <FadeIn key={domain.title} delay={index * 0.1}>
                  <div className="flex h-full flex-col rounded-2xl border border-aero-silver bg-white p-8 transition-all duration-300 hover:border-cyan/30 hover:shadow-lg">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-blue/5">
                      <Icon className="h-6 w-6 text-cyan" />
                    </div>
                    <h3 className="mb-3 font-heading text-lg font-semibold text-deep-blue">
                      {domain.title}
                    </h3>
                    <p className="font-body text-base leading-relaxed text-slate">
                      {domain.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach — 4 Phase Timeline */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              Our Approach
            </h2>
            <p className="mb-16 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
              A structured, four-phase methodology that takes you from
              technology uncertainty to operational confidence — with LCR
              managing every step.
            </p>
          </FadeIn>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-aero-silver sm:left-8" />

            <div className="space-y-12">
              {APPROACH_PHASES.map((phase, index) => (
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

      {/* Hands-On Expertise — Image + Text (reversed layout) */}
      <section className="bg-aero-silver/10 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Image — left on desktop */}
            <FadeIn className="lg:w-1/2">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/aviation/technoloy-consultant2.jpg"
                    alt="Aviation technology specialist demonstrating flight management systems on a tablet in an operations center"
                    fill
                    className="object-cover"
                    quality={80}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/30 to-transparent" />
                </div>
              </div>
            </FadeIn>

            {/* Text — right on desktop */}
            <div className="lg:w-1/2">
              <FadeIn delay={0.15}>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
                  Hands-On Expertise
                </p>
                <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
                  We Don&apos;t Just Advise. We Implement.
                </h2>
                <p className="mb-6 font-body text-base leading-relaxed text-slate sm:text-lg">
                  Our consultants work shoulder-to-shoulder with your team —
                  configuring systems, building workflows, and validating every
                  integration against your operational procedures. We bring
                  direct experience with the platforms that power today&apos;s
                  most efficient airlines and agencies.
                </p>
                <p className="font-body text-base leading-relaxed text-slate sm:text-lg">
                  From the operations control center to the flight deck, we
                  ensure every system is configured correctly, every user is
                  trained, and every workflow is tested before your operation
                  goes live.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Go-Live — Dark Callout */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-2xl bg-deep-blue p-8 sm:p-12">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
                What Sets Us Apart
              </p>
              <h2 className="mb-6 font-heading text-2xl font-bold text-white sm:text-3xl">
                Beyond Go-Live: Continuous Lifecycle Support
              </h2>
              <p className="mb-6 font-body text-base leading-relaxed text-aero-silver/70 sm:text-lg">
                Most consultancies disappear after your certificate is issued.
                LCR stays. Our relationship with your operation does not end at
                go-live — it evolves.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Ongoing Optimization",
                    text: "We monitor system performance, identify inefficiencies, and implement improvements as your operation matures and scales.",
                  },
                  {
                    title: "Vendor Liaison",
                    text: "We manage vendor relationships on your behalf — escalating issues, negotiating upgrades, and ensuring SLA compliance.",
                  },
                  {
                    title: "System Upgrades & Migration",
                    text: "When platforms evolve or your needs outgrow a system, we manage the transition with zero disruption to your operation.",
                  },
                  {
                    title: "Regulatory Change Management",
                    text: "When the FAA changes requirements, we ensure your technology stack adapts — updating configurations, workflows, and reporting.",
                  },
                ].map((item, index) => (
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

      {/* Why LCR — Comparison */}
      <section className="bg-aero-silver/10 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-4 text-center font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
              The LCR Difference
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center font-body text-base leading-relaxed text-slate sm:text-lg">
              See why operators choose LCR for technology consulting over
              traditional aviation consultancies.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Typical Consultancy */}
              <div className="rounded-2xl border border-aero-silver bg-white p-8">
                <h3 className="mb-6 font-heading text-lg font-bold text-slate">
                  Typical Consultancy
                </h3>
                <ul className="space-y-4">
                  {COMPARISON.typical.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="mt-0.5 h-5 w-5 shrink-0 text-aero-silver" />
                      <span className="text-sm leading-relaxed text-slate">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LCR Aero Group */}
              <div className="rounded-2xl border-2 border-cyan bg-white p-8 shadow-lg shadow-cyan/5">
                <h3 className="mb-6 font-heading text-lg font-bold text-deep-blue">
                  LCR Aero Group
                </h3>
                <ul className="space-y-4">
                  {COMPARISON.lcr.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                      <span className="text-sm leading-relaxed text-deep-blue">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
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
                Ready to build your operational technology backbone?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl font-body text-base leading-relaxed text-slate sm:text-lg">
                Whether you are launching a new operation or modernizing an
                existing one, LCR can help you select, implement, and optimize
                the technology systems that will power your success. Every
                engagement starts with understanding your unique operation.
              </p>
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-cyan px-8 py-6 text-base font-semibold text-deep-blue transition-all hover:scale-[1.02] hover:bg-cyan-dark hover:shadow-lg hover:shadow-cyan/20"
              >
                <Link href="/contact">
                  Schedule a Technology Consultation
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
