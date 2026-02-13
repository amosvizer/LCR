import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface LeadNotificationProps {
  fullName: string;
  companyName: string;
  email: string;
  phone?: string;
  serviceInterest: string;
  serviceDetail?: string;
  projectDetails?: string;
  referralSource?: string;
  submittedAt: string;
}

export default function LeadNotification({
  fullName,
  companyName,
  email,
  phone,
  serviceInterest,
  serviceDetail,
  projectDetails,
  referralSource,
  submittedAt,
}: LeadNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New Inquiry: {companyName} — {serviceInterest}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Lead Inquiry</Heading>
          <Hr style={hr} />

          <Section>
            <Text style={label}>Contact</Text>
            <Text style={value}>{fullName}</Text>
            <Text style={value}>{companyName}</Text>
            <Text style={value}>{email}</Text>
            {phone && <Text style={value}>{phone}</Text>}
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={label}>Service Interest</Text>
            <Text style={value}>{serviceInterest}</Text>
            {serviceDetail && (
              <>
                <Text style={label}>Specific Service</Text>
                <Text style={value}>{serviceDetail}</Text>
              </>
            )}
          </Section>

          {projectDetails && (
            <>
              <Hr style={hr} />
              <Section>
                <Text style={label}>Project Details</Text>
                <Text style={value}>{projectDetails}</Text>
              </Section>
            </>
          )}

          {referralSource && (
            <>
              <Hr style={hr} />
              <Section>
                <Text style={label}>Referral Source</Text>
                <Text style={value}>{referralSource}</Text>
              </Section>
            </>
          )}

          <Hr style={hr} />
          <Text style={footer}>Submitted at {submittedAt}</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: "#f6f9fc", fontFamily: "Inter, sans-serif" };
const container = { margin: "0 auto", padding: "40px 20px", maxWidth: "560px" };
const heading = { fontSize: "24px", fontWeight: "700", color: "#0B1C2E" };
const hr = { borderColor: "#E1E6EB", margin: "20px 0" };
const label = { fontSize: "12px", fontWeight: "600", color: "#3A4553", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: "4px" };
const value = { fontSize: "16px", color: "#0B1C2E", marginTop: "0" };
const footer = { fontSize: "12px", color: "#3A4553" };
