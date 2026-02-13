import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
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
        <Container style={wrapper}>
          {/* Header */}
          <Section style={header}>
            <Row>
              <Column>
                <Text style={headerTitle}>NEW LEAD INQUIRY</Text>
              </Column>
              <Column style={{ textAlign: "right" as const }}>
                <Text style={headerTime}>{submittedAt}</Text>
              </Column>
            </Row>
          </Section>

          <Section style={accentLine} />

          {/* Quick Summary */}
          <Section style={summaryBar}>
            <Row>
              <Column style={summaryColumn}>
                <Text style={summaryLabel}>CONTACT</Text>
                <Text style={summaryValue}>{fullName}</Text>
              </Column>
              <Column style={summaryColumn}>
                <Text style={summaryLabel}>COMPANY</Text>
                <Text style={summaryValue}>{companyName}</Text>
              </Column>
              <Column style={summaryColumn}>
                <Text style={summaryLabel}>SERVICE</Text>
                <Text style={summaryValue}>{serviceInterest}</Text>
              </Column>
            </Row>
          </Section>

          {/* Details */}
          <Section style={content}>
            <Section style={fieldGroup}>
              <Text style={fieldLabel}>CONTACT INFORMATION</Text>
              <Hr style={fieldHr} />
              <Row style={fieldRow}>
                <Column style={fieldKey}>Name</Column>
                <Column style={fieldVal}>{fullName}</Column>
              </Row>
              <Row style={fieldRow}>
                <Column style={fieldKey}>Company</Column>
                <Column style={fieldVal}>{companyName}</Column>
              </Row>
              <Row style={fieldRow}>
                <Column style={fieldKey}>Email</Column>
                <Column style={fieldVal}>
                  <a href={`mailto:${email}`} style={emailLink}>{email}</a>
                </Column>
              </Row>
              {phone && (
                <Row style={fieldRow}>
                  <Column style={fieldKey}>Phone</Column>
                  <Column style={fieldVal}>{phone}</Column>
                </Row>
              )}
            </Section>

            <Section style={fieldGroup}>
              <Text style={fieldLabel}>SERVICE INTEREST</Text>
              <Hr style={fieldHr} />
              <Row style={fieldRow}>
                <Column style={fieldKey}>Category</Column>
                <Column style={fieldVal}>{serviceInterest}</Column>
              </Row>
              {serviceDetail && (
                <Row style={fieldRow}>
                  <Column style={fieldKey}>Specific</Column>
                  <Column style={fieldVal}>{serviceDetail}</Column>
                </Row>
              )}
            </Section>

            {projectDetails && (
              <Section style={fieldGroup}>
                <Text style={fieldLabel}>PROJECT DETAILS</Text>
                <Hr style={fieldHr} />
                <Text style={projectText}>{projectDetails}</Text>
              </Section>
            )}

            {referralSource && (
              <Section style={fieldGroup}>
                <Text style={fieldLabel}>REFERRAL SOURCE</Text>
                <Hr style={fieldHr} />
                <Text style={projectText}>{referralSource}</Text>
              </Section>
            )}
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              LCR Aero Group — Internal Lead Notification
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
  padding: "20px 32px",
};

const headerTitle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#00E8FF",
  letterSpacing: "2px",
  margin: "0",
};

const headerTime: React.CSSProperties = {
  fontSize: "12px",
  color: "#8899aa",
  margin: "0",
};

const accentLine: React.CSSProperties = {
  height: "3px",
  backgroundColor: "#00E8FF",
};

const summaryBar: React.CSSProperties = {
  backgroundColor: "#f8f9fb",
  padding: "16px 32px",
  borderBottom: "1px solid #E1E6EB",
};

const summaryColumn: React.CSSProperties = {
  verticalAlign: "top",
  padding: "0 8px",
};

const summaryLabel: React.CSSProperties = {
  fontSize: "9px",
  fontWeight: "700",
  color: "#3A4553",
  letterSpacing: "1px",
  margin: "0 0 2px",
};

const summaryValue: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: "600",
  color: "#0B1C2E",
  margin: "0",
};

const content: React.CSSProperties = {
  padding: "24px 32px",
};

const fieldGroup: React.CSSProperties = {
  marginBottom: "24px",
};

const fieldLabel: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: "700",
  color: "#3A4553",
  letterSpacing: "1.5px",
  margin: "0 0 8px",
};

const fieldHr: React.CSSProperties = {
  borderColor: "#E1E6EB",
  margin: "0 0 12px",
};

const fieldRow: React.CSSProperties = {
  marginBottom: "8px",
};

const fieldKey: React.CSSProperties = {
  width: "100px",
  fontSize: "12px",
  fontWeight: "600",
  color: "#3A4553",
  verticalAlign: "top",
};

const fieldVal: React.CSSProperties = {
  fontSize: "14px",
  color: "#0B1C2E",
  verticalAlign: "top",
};

const emailLink: React.CSSProperties = {
  color: "#0B1C2E",
  textDecoration: "underline",
};

const projectText: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#0B1C2E",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const footer: React.CSSProperties = {
  backgroundColor: "#f8f9fb",
  padding: "16px 32px",
  textAlign: "center" as const,
  borderTop: "1px solid #E1E6EB",
};

const footerText: React.CSSProperties = {
  fontSize: "11px",
  color: "#3A4553",
  margin: "0",
};
