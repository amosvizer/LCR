import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AdvantageSection } from "@/components/sections/AdvantageSection";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd, organizationSchema, consultingServiceSchema } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={consultingServiceSchema} />
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <AdvantageSection />
      <ClientLogos />
      <ProcessTimeline />
      <CTASection />
    </>
  );
}
