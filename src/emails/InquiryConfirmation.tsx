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
  const subject = isCertification
    ? "Thank You — Your Certification Inquiry Has Been Received"
    : "Thank You — LCR Aero Group Will Be in Touch";

  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Thank You, {fullName}</Heading>

          <Text style={text}>
            We&apos;ve received your inquiry and a member of our team will be in
            touch within 24 hours to discuss your project.
          </Text>

          {isCertification && serviceDetail && (
            <Section style={callout}>
              <Text style={calloutText}>
                {serviceDetail === "Part 121"
                  ? "While you wait, download our Part 121 Certification Readiness Checklist to start preparing."
                  : serviceDetail === "Part 135"
                  ? "While you wait, download our Part 135 Pre-Application Guide to start preparing."
                  : "Our certification specialists will review your specific needs and reach out with next steps."}
              </Text>
              {(serviceDetail === "Part 121" || serviceDetail === "Part 135") && (
                <Button style={button} href="https://lcr.aero/knowledge">
                  Download Guide
                </Button>
              )}
            </Section>
          )}

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
const calloutText = { fontSize: "14px", lineHeight: "1.6", color: "#0B1C2E", margin: "0 0 12px 0" };
const button = { backgroundColor: "#00E8FF", color: "#0B1C2E", padding: "12px 24px", borderRadius: "999px", fontWeight: "600", fontSize: "14px", textDecoration: "none" };
const hr = { borderColor: "#E1E6EB", margin: "30px 0" };
const footer = { fontSize: "12px", color: "#3A4553", margin: "4px 0" };
