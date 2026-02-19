import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Mail, Clock, Shield } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Let's Talk About Your Project",
  description:
    "Contact LCR Aero Group to discuss your aviation certification, compliance, or safety consulting needs. Our team of former FAA inspectors responds within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }])} />
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Project"
        description="Whether you're starting from scratch or expanding an established operation, our team is ready to help. Tell us about your project and we'll connect you with the right expert within 24 hours."
      />

      {/* Trust Indicators */}
      <section className="border-b border-aero-silver bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-2 font-body text-sm text-slate">
              <Clock className="h-4 w-4 text-cyan" />
              Response within 24 hours
            </div>
            <div className="flex items-center gap-2 font-body text-sm text-slate">
              <Shield className="h-4 w-4 text-cyan" />
              No obligation consultation
            </div>
            <div className="flex items-center gap-2 font-body text-sm text-slate">
              <Mail className="h-4 w-4 text-cyan" />
              Expert-matched responses
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-aero-silver/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <InquiryForm />
          </FadeIn>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
                Prefer a Direct Conversation?
              </h2>
              <p className="mb-6 font-body text-base leading-relaxed text-slate">
                Email us at{" "}
                <a
                  href="mailto:info@lcr.aero"
                  className="font-semibold text-cyan underline decoration-cyan/30 underline-offset-4 transition-colors hover:text-cyan-dark hover:decoration-cyan"
                >
                  info@lcr.aero
                </a>{" "}
                and we&apos;ll set up a time to discuss your needs. No
                obligation.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-aero-silver bg-white px-8 py-5 shadow-sm">
                <Mail className="h-6 w-6 text-cyan" />
                <div className="text-left">
                  <p className="font-heading text-sm font-semibold text-deep-blue">
                    Email Us Directly
                  </p>
                  <a
                    href="mailto:info@lcr.aero"
                    className="font-mono text-base text-cyan transition-colors hover:text-cyan-dark"
                  >
                    info@lcr.aero
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection variant="light" />
    </>
  );
}
