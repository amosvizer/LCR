import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { BookOpen, Bell, FileText, Video, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Aviation Certification Knowledge Hub",
  description:
    "Regulatory updates, certification guides, toolkits, and FAA process explainers from LCR Aero Group's team of former FAA inspectors. Coming soon.",
};

const plannedFeatures = [
  {
    icon: FileText,
    title: "Regulatory Updates",
    description:
      "Stay current with FAA rule changes, advisory circulars, and enforcement trends that affect your operations.",
  },
  {
    icon: BookOpen,
    title: "Guides & Toolkits",
    description:
      "Downloadable checklists, readiness assessments, and step-by-step certification guides.",
  },
  {
    icon: Video,
    title: "Webinars & Training",
    description:
      "On-demand sessions with our subject matter experts covering key certification and compliance topics.",
  },
  {
    icon: HelpCircle,
    title: "FAA Process Explainers",
    description:
      "Clear, practical breakdowns of FAA certification processes, timelines, and what to expect at each stage.",
  },
];

export default function KnowledgeHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Aviation Certification Knowledge Hub"
        description="Expert-authored guides, regulatory updates, and certification tools from our team of former FAA inspectors. Free resources to help you navigate the certification landscape with confidence."
      />

      {/* Coming Soon Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-5 py-2">
                <Bell className="h-4 w-4 text-cyan" />
                <span className="font-body text-sm font-medium text-deep-blue">
                  Coming Soon
                </span>
              </div>

              <h2 className="mb-6 font-heading text-3xl font-bold text-deep-blue sm:text-4xl">
                We&apos;re Building Something Valuable
              </h2>
              <p className="mb-8 font-body text-lg leading-relaxed text-slate">
                The LCR Knowledge Hub will be your go-to resource for aviation
                certification intelligence. Our team of former FAA inspectors is
                developing practical, actionable content that you won&apos;t
                find anywhere else &mdash; from regulatory deep-dives to
                certification readiness tools.
              </p>
              <p className="font-body text-base text-slate">
                Subscribe below to be the first to know when we launch.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Planned Features Grid */}
      <section className="bg-aero-silver/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h3 className="mb-12 text-center font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
              What to Expect
            </h3>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plannedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={feature.title} delay={index * 0.1}>
                  <div className="flex h-full flex-col items-center rounded-2xl border border-aero-silver bg-white p-8 text-center transition-all duration-300 hover:border-cyan/30 hover:shadow-lg">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-deep-blue/5">
                      <Icon className="h-7 w-7 text-cyan" />
                    </div>
                    <h4 className="mb-3 font-heading text-base font-bold text-deep-blue">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm leading-relaxed text-slate">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-xl text-center">
              <h3 className="mb-4 font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
                Get Notified at Launch
              </h3>
              <p className="mb-8 font-body text-base text-slate">
                Enter your email to receive a notification when the Knowledge
                Hub goes live, plus early access to our first resources.
              </p>

              <div className="mx-auto max-w-sm">
                <NewsletterForm variant="light" />
              </div>

              <p className="mt-4 font-body text-xs text-slate-light">
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
