import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function NewsletterWelcome() {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Regulatory Watch by LCR Aero Group</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>
            Welcome to Regulatory Watch
          </Heading>

          <Text style={text}>
            You&apos;re now subscribed to Regulatory Watch — LCR Aero Group&apos;s
            monthly briefing on FAA regulatory developments, certification
            insights, and compliance best practices.
          </Text>

          <Section style={callout}>
            <Text style={calloutText}>
              Each month, you&apos;ll receive curated updates on rule changes, new
              Advisory Circulars, SAS system updates, and practical guidance from
              our team of former FAA inspectors.
            </Text>
          </Section>

          <Text style={text}>
            In the meantime, explore our Knowledge Hub for guides, toolkits,
            and FAA process explainers.
          </Text>

          <Button style={button} href="https://lcr.aero/knowledge">
            Explore Knowledge Hub
          </Button>

          <Hr style={hr} />

          <Text style={footer}>
            LCR Aero Group — Former FAA inspectors. AI-enhanced precision.
            Certification certainty.
          </Text>
          <Text style={footer}>info@lcr.aero | lcr.aero</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: "#f6f9fc", fontFamily: "Inter, sans-serif" };
const container = { margin: "0 auto", padding: "40px 20px", maxWidth: "560px" };
const heading = { fontSize: "24px", fontWeight: "700", color: "#0B1C2E" };
const text = { fontSize: "16px", lineHeight: "1.6", color: "#3A4553" };
const callout = { backgroundColor: "#f0feff", borderLeft: "4px solid #00E8FF", padding: "16px 20px", margin: "20px 0", borderRadius: "0 8px 8px 0" };
const calloutText = { fontSize: "14px", lineHeight: "1.6", color: "#0B1C2E", margin: "0" };
const button = { backgroundColor: "#00E8FF", color: "#0B1C2E", padding: "12px 24px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", textDecoration: "none", display: "inline-block", marginTop: "12px" };
const hr = { borderColor: "#E1E6EB", margin: "30px 0" };
const footer = { fontSize: "12px", color: "#3A4553", margin: "4px 0" };
