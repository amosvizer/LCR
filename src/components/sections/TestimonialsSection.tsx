"use client";

import { Quote } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { testimonials } from "@/data/testimonials";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="bg-aero-silver/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-cyan sm:text-sm">
            Client Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl lg:text-5xl">
            Trusted by the Operators We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            From Part 121 certifications and reactivations to Repair Station SMS
            programs, aviation leaders rely on LCR Aero Group to navigate the FAA
            with confidence.
          </p>
        </FadeIn>

        {/* Masonry columns gracefully absorb the varied quote lengths */}
        <div className="mt-16 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="mb-6 break-inside-avoid last:mb-0"
            >
              <FadeIn delay={(i % 3) * 0.08}>
                <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-aero-silver bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-xl hover:shadow-deep-blue/5 sm:p-8">
                  <span className="absolute right-6 top-6 inline-flex items-center rounded-full bg-cyan/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan">
                    {testimonial.highlight}
                  </span>

                  <Quote
                    aria-hidden
                    className="h-9 w-9 shrink-0 fill-cyan/15 text-cyan/40"
                  />

                  <blockquote className="mt-5 space-y-4">
                    {testimonial.quote.map((paragraph, p) => (
                      <p
                        key={p}
                        className="text-[15px] leading-relaxed text-slate sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-4 border-t border-aero-silver pt-6">
                    <div
                      aria-hidden
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-deep-blue text-sm font-semibold text-cyan"
                    >
                      {getInitials(testimonial.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-heading font-semibold text-deep-blue">
                        {testimonial.name}
                      </div>
                      <div className="text-sm leading-snug text-slate">
                        {testimonial.title}, {testimonial.company}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
