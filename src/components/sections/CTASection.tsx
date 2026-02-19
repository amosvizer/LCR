"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, Mail } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryText?: string;
  variant?: "dark" | "light";
}

export function CTASection({
  headline = "Let's Discuss Your Certification Goals",
  subtext = "Whether you're launching a new airline, adding an aircraft type, or preparing for an audit, our team is ready. No obligation. No pressure. Just expert guidance.",
  ctaText = "Schedule a Free Consultation",
  ctaHref = "/contact",
  secondaryText = "Or email us directly at info@lcr.aero",
  variant = "dark",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`relative overflow-hidden py-24 sm:py-32 ${
        isDark ? "bg-deep-blue" : "bg-aero-silver/30"
      }`}
    >
      {isDark && (
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
      )}

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <FadeIn>
          <h2
            className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              isDark ? "text-white" : "text-deep-blue"
            }`}
          >
            {headline}
          </h2>
          <p
            className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${
              isDark ? "text-aero-silver/70" : "text-slate"
            }`}
          >
            {subtext}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-cyan px-8 py-6 text-base font-semibold text-deep-blue transition-all hover:scale-[1.02] hover:bg-cyan-dark hover:shadow-lg hover:shadow-cyan/20"
            >
              <Link href={ctaHref} onClick={() => trackCTAClick("schedule_consultation", "cta_section")}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {secondaryText && (
            <p
              className={`mt-6 flex items-center justify-center gap-2 text-sm ${
                isDark ? "text-aero-silver/50" : "text-slate-light"
              }`}
            >
              <Mail className="h-4 w-4" />
              {secondaryText}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
