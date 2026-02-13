import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface InquiryConfirmationProps {
  fullName: string;
  serviceInterest: string;
  serviceDetail?: string;
}

export default function InquiryConfirmation({
  fullName,
  serviceInterest,
  serviceDetail,
}: InquiryConfirmationProps) {
  const isCertification = serviceInterest === "Initial Certification";
  const firstName = fullName.split(" ")[0];

  const subject = isCertification
    ? "Your Certification Inquiry Has Been Received"
    : "LCR Aero Group — We've Received Your Inquiry";

  const serviceSpecificContent = getServiceContent(serviceInterest, serviceDetail);

  return (
    <Html>
      <Head>
        <style>{`
          @media only screen and (max-width: 600px) {
            .stat-column { display: block !important; width: 100% !important; text-align: center !important; padding: 8px 0 !important; }
          }
        `}</style>
      </Head>
      <Preview>{subject}</Preview>
      <Body style={main}>
        {/* Header */}
        <Container style={wrapper}>
          <Section style={header}>
            <Text style={logoText}>LCR</Text>
            <Text style={logoSubtext}>AERO GROUP</Text>
          </Section>

          {/* Cyan accent line */}
          <Section style={accentLine} />

          {/* Main content */}
          <Section style={content}>
            <Heading style={greeting}>
              {firstName}, thank you for reaching out.
            </Heading>

            <Text style={bodyText}>
              Your inquiry regarding <strong style={{ color: "#0B1C2E" }}>{serviceInterest}</strong>
              {serviceDetail ? ` (${serviceDetail})` : ""} has been received and assigned to a
              specialist on our team.
            </Text>

            {/* What Happens Next */}
            <Section style={nextStepsBox}>
              <Text style={nextStepsHeading}>What Happens Next</Text>

              <Section style={stepRow}>
                <Row>
                  <Column style={stepNumber}>1</Column>
                  <Column style={stepContent}>
                    <Text style={stepTitle}>Expert Review</Text>
                    <Text style={stepDesc}>
                      A senior consultant with direct experience in {serviceInterest.toLowerCase()} will
                      review your inquiry within the next few hours.
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Section style={stepRow}>
                <Row>
                  <Column style={stepNumber}>2</Column>
                  <Column style={stepContent}>
                    <Text style={stepTitle}>Personal Outreach</Text>
                    <Text style={stepDesc}>
                      You&apos;ll hear from us within 24 hours — typically much sooner — with
                      an initial assessment and suggested next steps.
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Section style={{ ...stepRow, borderBottom: "none", paddingBottom: "0" }}>
                <Row>
                  <Column style={stepNumber}>3</Column>
                  <Column style={stepContent}>
                    <Text style={stepTitle}>Complimentary Consultation</Text>
                    <Text style={stepDesc}>
                      We&apos;ll schedule a no-obligation call to understand your specific
                      situation and outline a clear path forward.
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            {/* Service-specific callout */}
            {serviceSpecificContent && (
              <Section style={calloutBox}>
                <Text style={calloutIcon}>{serviceSpecificContent.icon}</Text>
                <Text style={calloutTitle}>{serviceSpecificContent.title}</Text>
                <Text style={calloutText}>{serviceSpecificContent.description}</Text>
                {serviceSpecificContent.ctaUrl && (
                  <Button style={ctaButton} href={serviceSpecificContent.ctaUrl}>
                    {serviceSpecificContent.ctaLabel}
                  </Button>
                )}
              </Section>
            )}

            {/* Why LCR */}
            <Text style={sectionLabel}>WHY AVIATION LEADERS CHOOSE LCR</Text>

            <Section style={credentialsBar}>
              <Row>
                <Column style={credentialColumn} className="stat-column">
                  <Text style={credentialValue}>95%+</Text>
                  <Text style={credentialLabel}>First-Time DCT{"\n"}Acceptance Rate</Text>
                </Column>
                <Column style={credentialColumn} className="stat-column">
                  <Text style={credentialValue}>400+</Text>
                  <Text style={credentialLabel}>Combined Years{"\n"}FAA Experience</Text>
                </Column>
                <Column style={credentialColumn} className="stat-column">
                  <Text style={credentialValue}>50+</Text>
                  <Text style={credentialLabel}>Airlines &{"\n"}Agencies Served</Text>
                </Column>
              </Row>
            </Section>

            <Text style={trustStatement}>
              Our team includes former FAA Principal Operations Inspectors and Airworthiness
              Inspectors who have sat on the other side of the table. We combine that insider
              perspective with AI-enhanced compliance verification to deliver certification
              programs that the FAA accepts the first time.
            </Text>

            {/* Direct contact */}
            <Section style={directContact}>
              <Text style={directContactText}>
                Need to reach us sooner? Reply directly to this email or call us at your convenience.
              </Text>
              <Text style={directContactEmail}>info@lcr.aero</Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerLogo}>LCR AERO GROUP</Text>
            <Text style={footerTagline}>
              Former FAA Inspectors. AI-Enhanced Precision. Certification Certainty.
            </Text>
            <Hr style={footerHr} />
            <Text style={footerLinks}>
              <a href="https://lcr.aero/solutions" style={footerLink}>Solutions</a>
              {" · "}
              <a href="https://lcr.aero/about" style={footerLink}>About Us</a>
              {" · "}
              <a href="https://lcr.aero/about/case-studies" style={footerLink}>Case Studies</a>
              {" · "}
              <a href="https://lcr.aero/knowledge" style={footerLink}>Knowledge Hub</a>
            </Text>
            <Text style={footerAddress}>
              LCR Aero Group · Serving the global aviation industry since 2013
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function getServiceContent(serviceInterest: string, serviceDetail?: string) {
  if (serviceInterest === "Initial Certification") {
    if (serviceDetail === "Part 121" || serviceDetail === "Part 135") {
      return {
        icon: "📋",
        title: `${serviceDetail} Certification Resources`,
        description: `While you wait, explore our ${serviceDetail} certification resources — including process overviews, timeline expectations, and preparation checklists used by our consultants.`,
        ctaUrl: "https://lcr.aero/solutions/certification",
        ctaLabel: `View ${serviceDetail} Certification Process`,
      };
    }
    return {
      icon: "✈️",
      title: "Certification Expertise You Can Trust",
      description: "We've guided dozens of operators through the FAA's 5-Phase certification process. Our methodology is built on first-hand experience as the inspectors who evaluate these applications.",
      ctaUrl: "https://lcr.aero/solutions/certification",
      ctaLabel: "Explore Our Certification Approach",
    };
  }

  if (serviceInterest === "Operational Expansion") {
    return {
      icon: "📈",
      title: "Expanding Your Operations",
      description: "From new aircraft types to ETOPS authorization, flag carrier transitions, and beyond — we handle the regulatory complexity so you can focus on growing your business.",
      ctaUrl: "https://lcr.aero/solutions/expansion",
      ctaLabel: "Learn About Expansion Services",
    };
  }

  if (serviceInterest === "Safety & SMS") {
    return {
      icon: "🛡️",
      title: "Safety Management Expertise",
      description: "Our SMS specialists have implemented and audited safety management systems for Part 121, 135, and 145 operators — including IATA and DoD compliance programs.",
      ctaUrl: "https://lcr.aero/solutions/safety-sms",
      ctaLabel: "View SMS Solutions",
    };
  }

  if (serviceInterest === "Technical Publications") {
    return {
      icon: "📖",
      title: "Documentation That Passes First Review",
      description: "Our AI-enhanced verification cross-references every regulatory citation in your manuals against the latest 14 CFR, Advisory Circulars, and FAA Orders — eliminating the revision cycles that delay your timeline.",
      ctaUrl: "https://lcr.aero/solutions/publications",
      ctaLabel: "Explore Publications Services",
    };
  }

  if (serviceInterest === "Technology Solutions") {
    return {
      icon: "🖥️",
      title: "Technology That Powers Your Operation",
      description: "From flight planning to dispatch, safety systems to management dashboards — we help you select, implement, and optimize the technology backbone that keeps your operation running at peak efficiency.",
      ctaUrl: "https://lcr.aero/solutions/technology",
      ctaLabel: "Explore Technology Solutions",
    };
  }

  if (serviceInterest === "AI-Enhanced Services") {
    return {
      icon: "🤖",
      title: "ROI with AI",
      description: "We're the only boutique certification consultancy using Retrieval-Augmented Generation (RAG) and Machine Learning to verify regulatory compliance. The result: fewer revision cycles, faster acceptance, and lower total project cost.",
      ctaUrl: "https://lcr.aero/solutions/ai-enhanced",
      ctaLabel: "See AI-Enhanced Services",
    };
  }

  return null;
}

// ── Styles ──────────────────────────────────────────────────────

const main: React.CSSProperties = {
  backgroundColor: "#f0f2f5",
  fontFamily: "'Inter', 'Segoe UI', Helvetica, Arial, sans-serif",
};

const wrapper: React.CSSProperties = {
  margin: "0 auto",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
};

const header: React.CSSProperties = {
  backgroundColor: "#0B1C2E",
  padding: "32px 40px 28px",
  textAlign: "center" as const,
};

const logoText: React.CSSProperties = {
  fontSize: "36px",
  fontWeight: "800",
  color: "#ffffff",
  letterSpacing: "6px",
  margin: "0",
  lineHeight: "1",
};

const logoSubtext: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: "500",
  color: "#00E8FF",
  letterSpacing: "4px",
  margin: "6px 0 0",
  lineHeight: "1",
};

const accentLine: React.CSSProperties = {
  height: "3px",
  background: "linear-gradient(90deg, #00E8FF 0%, #0B1C2E 100%)",
  backgroundColor: "#00E8FF",
};

const content: React.CSSProperties = {
  padding: "40px 40px 32px",
};

const greeting: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#0B1C2E",
  lineHeight: "1.3",
  margin: "0 0 16px",
};

const bodyText: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.7",
  color: "#3A4553",
  margin: "0 0 28px",
};

const nextStepsBox: React.CSSProperties = {
  backgroundColor: "#f8f9fb",
  borderRadius: "12px",
  padding: "28px 24px 20px",
  margin: "0 0 32px",
};

const nextStepsHeading: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: "700",
  color: "#0B1C2E",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "0 0 20px",
};

const stepRow: React.CSSProperties = {
  borderBottom: "1px solid #E1E6EB",
  paddingBottom: "16px",
  marginBottom: "16px",
};

const stepNumber: React.CSSProperties = {
  width: "32px",
  verticalAlign: "top",
  paddingTop: "2px",
  fontSize: "14px",
  fontWeight: "700",
  color: "#00E8FF",
};

const stepContent: React.CSSProperties = {
  verticalAlign: "top",
  paddingLeft: "8px",
};

const stepTitle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#0B1C2E",
  margin: "0 0 4px",
};

const stepDesc: React.CSSProperties = {
  fontSize: "13px",
  lineHeight: "1.6",
  color: "#3A4553",
  margin: "0",
};

const calloutBox: React.CSSProperties = {
  backgroundColor: "#0B1C2E",
  borderRadius: "12px",
  padding: "28px 28px 24px",
  margin: "0 0 32px",
  textAlign: "center" as const,
};

const calloutIcon: React.CSSProperties = {
  fontSize: "28px",
  margin: "0 0 8px",
};

const calloutTitle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 10px",
};

const calloutText: React.CSSProperties = {
  fontSize: "13px",
  lineHeight: "1.7",
  color: "#c0c8d2",
  margin: "0 0 20px",
};

const ctaButton: React.CSSProperties = {
  backgroundColor: "#00E8FF",
  color: "#0B1C2E",
  padding: "12px 28px",
  borderRadius: "999px",
  fontWeight: "700",
  fontSize: "13px",
  textDecoration: "none",
  display: "inline-block",
};

const sectionLabel: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: "700",
  color: "#3A4553",
  letterSpacing: "1.5px",
  margin: "0 0 16px",
  textAlign: "center" as const,
};

const credentialsBar: React.CSSProperties = {
  backgroundColor: "#f8f9fb",
  borderRadius: "12px",
  padding: "20px 16px",
  margin: "0 0 20px",
  textAlign: "center" as const,
};

const credentialColumn: React.CSSProperties = {
  textAlign: "center" as const,
  verticalAlign: "top",
  padding: "0 8px",
};

const credentialValue: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "800",
  color: "#0B1C2E",
  margin: "0",
  lineHeight: "1.2",
};

const credentialLabel: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: "600",
  color: "#3A4553",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "4px 0 0",
  lineHeight: "1.4",
  whiteSpace: "pre-line" as const,
};

const trustStatement: React.CSSProperties = {
  fontSize: "13px",
  lineHeight: "1.7",
  color: "#3A4553",
  textAlign: "center" as const,
  fontStyle: "italic" as const,
  margin: "0 0 32px",
  padding: "0 12px",
};

const directContact: React.CSSProperties = {
  borderTop: "1px solid #E1E6EB",
  paddingTop: "24px",
  textAlign: "center" as const,
};

const directContactText: React.CSSProperties = {
  fontSize: "14px",
  color: "#3A4553",
  margin: "0 0 8px",
};

const directContactEmail: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#0B1C2E",
  margin: "0",
};

const footer: React.CSSProperties = {
  backgroundColor: "#0B1C2E",
  padding: "28px 40px",
  textAlign: "center" as const,
};

const footerLogo: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: "800",
  color: "#ffffff",
  letterSpacing: "3px",
  margin: "0 0 4px",
};

const footerTagline: React.CSSProperties = {
  fontSize: "11px",
  color: "#00E8FF",
  margin: "0 0 16px",
  lineHeight: "1.4",
};

const footerHr: React.CSSProperties = {
  borderColor: "#1a2d42",
  margin: "0 0 16px",
};

const footerLinks: React.CSSProperties = {
  fontSize: "12px",
  margin: "0 0 12px",
  lineHeight: "1.6",
};

const footerLink: React.CSSProperties = {
  color: "#8899aa",
  textDecoration: "none",
};

const footerAddress: React.CSSProperties = {
  fontSize: "11px",
  color: "#4a5a6a",
  margin: "0",
};
