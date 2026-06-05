import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AdvantageSection } from "@/components/sections/AdvantageSection";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd, organizationSchema, consultingServiceSchema } from "@/components/JsonLd";
import { breadcrumbSchema, reviewSchema } from "@/lib/schemas";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={consultingServiceSchema} />
      <JsonLd data={reviewSchema(testimonials)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }])} />
      <HeroSection />
      <TrustBar />
      <WhoWeServe />
      <ServicesGrid />
      <AdvantageSection />
      <ClientLogos />
      <TestimonialsSection />
      <ProcessTimeline />
      <CTASection />
    </>
  );
}
