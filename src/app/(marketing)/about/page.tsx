import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import {
  Crosshair,
  Eye,
  Zap,
  ShieldCheck,
  Lightbulb,
  ArrowRight,
  Users,
  Trophy,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "About LCR Aero Group",
  description:
    "Since 2013, LCR Aero Group has provided unparalleled certification, regulatory, and safety compliance consulting to aviation organizations worldwide. Former FAA inspectors. AI-enhanced precision.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Crosshair,
    title: "Precision",
    description:
      "Every document, every citation, every procedure is verified and accurate.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We keep you informed at every stage. No surprises. No hidden costs.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description:
      "Your timeline is our timeline. We work to get you certified as fast as responsibly possible.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    description:
      "Safety is not a line item. It is embedded in everything we do, from SMS design to manual development.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We invest in AI and technology because precision at scale is the future of regulatory compliance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "About", href: "/about" }])} />
      <PageHero
        eyebrow="About Us"
        title="About LCR Aero Group"
        description="Former FAA inspectors delivering AI-enhanced aviation certification consulting with a 95%+ first-time DCT acceptance rate. Since 2013."
      />

      {/* Our Story */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-cyan">
                Our Story
              </p>
              <h2 className="mb-8 font-heading text-3xl font-bold text-deep-blue sm:text-4xl">
                A Legacy of Excellence
              </h2>

              <div className="space-y-6 font-body text-base leading-relaxed text-slate sm:text-lg sm:leading-8">
                <p>
                  Since 2013, the LCR Aero Group has provided unparalleled
                  certification, regulatory, and safety compliance consulting to
                  aviation organizations worldwide. Founded by Lawrence
                  &ldquo;Larry&rdquo; Richards, a career aviation professional
                  with 50 years of experience including 26 years with the FAA,
                  LCR was built on a simple premise: the best certification
                  consultants are the ones who have sat in the FAA&apos;s chair.
                </p>

                <p>
                  Our team is composed entirely of former FAA Aviation Safety
                  Inspectors and seasoned industry professionals. We don&apos;t
                  just know the regulations &mdash; we know how the FAA
                  interprets them, how inspectors evaluate compliance, and what
                  it takes to earn approval with confidence.
                </p>

                <p>
                  In 2024, we became one of the first boutique certification
                  consultancies to integrate Artificial Intelligence and Machine
                  Learning into our regulatory compliance workflow. Our
                  AI-enhanced tools don&apos;t replace human expertise &mdash;
                  they amplify it, ensuring every citation is verified, every
                  cross-reference is accurate, and every submission meets the
                  highest standard of quality.
                </p>

                <p>
                  Today, we support flight operations, dispatch, maintenance,
                  HAZMAT, inflight, ground operations, and passenger and cargo
                  handling for air carriers, repair stations, and agricultural
                  operators worldwide.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-deep-blue py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-cyan">
                Our Mission
              </p>
              <h2 className="mb-8 font-heading text-3xl font-bold text-white sm:text-4xl">
                Why We Do What We Do
              </h2>
              <blockquote className="relative">
                <div className="absolute -top-4 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-cyan" />
                <p className="font-body text-lg leading-relaxed text-aero-silver/80 sm:text-xl sm:leading-8">
                  &ldquo;To provide aviation operators with the most accurate,
                  efficient, and reliable certification and compliance consulting
                  available &mdash; combining the insight of former FAA
                  inspectors with the precision of AI-enhanced tools to deliver
                  programs that the FAA accepts with confidence.&rdquo;
                </p>
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-cyan">
                Our Values
              </p>
              <h2 className="mb-4 font-heading text-3xl font-bold text-deep-blue sm:text-4xl">
                What Guides Every Engagement
              </h2>
              <p className="mx-auto mb-16 max-w-2xl font-body text-base text-slate">
                These five principles define how we work, how we communicate,
                and how we deliver results for every client.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="group flex h-full flex-col rounded-2xl border border-aero-silver bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-xl">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-deep-blue/5 transition-colors group-hover:bg-cyan/10">
                      <Icon className="h-7 w-7 text-cyan" />
                    </div>
                    <h3 className="mb-3 font-heading text-xl font-bold text-deep-blue">
                      {value.title}
                    </h3>
                    <p className="font-body text-base leading-relaxed text-slate">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Link Cards to Team & Case Studies */}
      <section className="bg-aero-silver/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Meet the Team */}
              <Link href="/about/team" className="group block">
                <div className="flex h-full flex-col rounded-2xl border border-aero-silver bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-xl">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-deep-blue">
                    <Users className="h-8 w-8 text-cyan" />
                  </div>
                  <h3 className="mb-3 font-heading text-2xl font-bold text-deep-blue">
                    Meet Our Team
                  </h3>
                  <p className="mb-6 font-body text-base leading-relaxed text-slate">
                    14 subject matter experts with 400+ combined years of
                    aviation experience, including 230+ years of direct FAA
                    service. Meet the professionals who will lead your project.
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-cyan transition-colors group-hover:text-cyan-dark">
                    View Expert Directory
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              {/* Case Studies */}
              <Link href="/about/case-studies" className="group block">
                <div className="flex h-full flex-col rounded-2xl border border-aero-silver bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-xl">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-deep-blue">
                    <Trophy className="h-8 w-8 text-cyan" />
                  </div>
                  <h3 className="mb-3 font-heading text-2xl font-bold text-deep-blue">
                    Client Success Stories
                  </h3>
                  <p className="mb-6 font-body text-base leading-relaxed text-slate">
                    See how we have helped aviation operators achieve their
                    certification and compliance objectives &mdash; from startup
                    airlines to established MRO organizations.
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-cyan transition-colors group-hover:text-cyan-dark">
                    View Case Studies
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
