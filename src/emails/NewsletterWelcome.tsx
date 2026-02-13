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

export default function NewsletterWelcome() {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Regulatory Watch — Monthly FAA intelligence from former inspectors</Preview>
      <Body style={main}>
        <Container style={wrapper}>
          {/* Header */}
          <Section style={header}>
            <Text style={logoText}>LCR</Text>
            <Text style={logoSubtext}>AERO GROUP</Text>
          </Section>

          <Section style={accentLine} />

          {/* Badge */}
          <Section style={badgeSection}>
            <Text style={badge}>REGULATORY WATCH</Text>
          </Section>

          {/* Main content */}
          <Section style={content}>
            <Heading style={heading}>
              You&apos;re In. Welcome to the Briefing.
            </Heading>

            <Text style={bodyText}>
              You&apos;ve just joined the same regulatory intelligence briefing trusted by
              compliance officers, DOMs, and aviation executives across the industry.
            </Text>

            {/* What You'll Receive */}
            <Section style={featureBox}>
              <Text style={featureHeading}>WHAT YOU&apos;LL RECEIVE EACH MONTH</Text>

              <Section style={featureRow}>
                <Row>
                  <Column style={featureIcon}>
                    <Text style={featureIconText}>📋</Text>
                  </Column>
                  <Column style={featureContent}>
                    <Text style={featureTitle}>Regulatory Updates</Text>
                    <Text style={featureDesc}>
                      Rule changes, new Advisory Circulars, and SAS system updates — distilled
                      by former FAA inspectors who understand what actually matters.
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Section style={featureRow}>
                <Row>
                  <Column style={featureIcon}>
                    <Text style={featureIconText}>🎯</Text>
                  </Column>
                  <Column style={featureContent}>
                    <Text style={featureTitle}>Practical Guidance</Text>
                    <Text style={featureDesc}>
                      Actionable insights on how regulatory changes affect your operations,
                      with specific compliance recommendations.
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Section style={{ ...featureRow, borderBottom: "none", paddingBottom: "0" }}>
                <Row>
                  <Column style={featureIcon}>
                    <Text style={featureIconText}>💡</Text>
                  </Column>
                  <Column style={featureContent}>
                    <Text style={featureTitle}>Industry Intelligence</Text>
                    <Text style={featureDesc}>
                      Enforcement trends, certification insights, and best practices drawn from
                      our work with 50+ airlines and agencies.
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            {/* CTA */}
            <Section style={ctaSection}>
              <Text style={ctaText}>
                While you wait for the next issue, explore our Knowledge Hub for
                guides, toolkits, and FAA process explainers.
              </Text>
              <Button style={ctaButton} href="https://lcr.aero/knowledge">
                Explore Knowledge Hub
              </Button>
            </Section>

            {/* Credentials */}
            <Section style={credentialsBar}>
              <Row>
                <Column style={credentialColumn}>
                  <Text style={credentialValue}>95%+</Text>
                  <Text style={credentialLabel}>First-Time{"\n"}Acceptance</Text>
                </Column>
                <Column style={credentialColumn}>
                  <Text style={credentialValue}>400+</Text>
                  <Text style={credentialLabel}>Years FAA{"\n"}Experience</Text>
                </Column>
                <Column style={credentialColumn}>
                  <Text style={credentialValue}>Since</Text>
                  <Text style={credentialLabel}>2013</Text>
                </Column>
              </Row>
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
              <a href="https://lcr.aero/contact" style={footerLink}>Contact</a>
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
  backgroundColor: "#00E8FF",
};

const badgeSection: React.CSSProperties = {
  textAlign: "center" as const,
  padding: "24px 0 0",
};

const badge: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#0B1C2E",
  color: "#00E8FF",
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "2px",
  padding: "6px 16px",
  borderRadius: "999px",
  margin: "0",
};

const content: React.CSSProperties = {
  padding: "24px 40px 32px",
};

const heading: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#0B1C2E",
  lineHeight: "1.3",
  margin: "0 0 16px",
  textAlign: "center" as const,
};

const bodyText: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "1.7",
  color: "#3A4553",
  margin: "0 0 28px",
  textAlign: "center" as const,
};

const featureBox: React.CSSProperties = {
  backgroundColor: "#f8f9fb",
  borderRadius: "12px",
  padding: "24px 20px 16px",
  margin: "0 0 28px",
};

const featureHeading: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: "700",
  color: "#0B1C2E",
  letterSpacing: "1.5px",
  margin: "0 0 20px",
  textAlign: "center" as const,
};

const featureRow: React.CSSProperties = {
  borderBottom: "1px solid #E1E6EB",
  paddingBottom: "14px",
  marginBottom: "14px",
};

const featureIcon: React.CSSProperties = {
  width: "36px",
  verticalAlign: "top",
  paddingTop: "2px",
};

const featureIconText: React.CSSProperties = {
  fontSize: "20px",
  margin: "0",
};

const featureContent: React.CSSProperties = {
  verticalAlign: "top",
  paddingLeft: "4px",
};

const featureTitle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#0B1C2E",
  margin: "0 0 4px",
};

const featureDesc: React.CSSProperties = {
  fontSize: "13px",
  lineHeight: "1.6",
  color: "#3A4553",
  margin: "0",
};

const ctaSection: React.CSSProperties = {
  textAlign: "center" as const,
  margin: "0 0 28px",
};

const ctaText: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#3A4553",
  margin: "0 0 16px",
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

const credentialsBar: React.CSSProperties = {
  backgroundColor: "#0B1C2E",
  borderRadius: "12px",
  padding: "20px 16px",
  textAlign: "center" as const,
};

const credentialColumn: React.CSSProperties = {
  textAlign: "center" as const,
  verticalAlign: "top",
  padding: "0 8px",
};

const credentialValue: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "800",
  color: "#00E8FF",
  margin: "0",
  lineHeight: "1.2",
};

const credentialLabel: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: "600",
  color: "#8899aa",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "4px 0 0",
  lineHeight: "1.4",
  whiteSpace: "pre-line" as const,
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
