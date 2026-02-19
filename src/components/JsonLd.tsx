interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://lcr.aero/#organization",
  name: "LCR Aero Group",
  url: "https://lcr.aero",
  logo: "https://lcr.aero/images/logo/lcr-logo.png",
  description:
    "Former FAA inspectors delivering AI-enhanced aviation certification consulting. 95%+ first-time DCT acceptance rate. Since 2013.",
  foundingDate: "2013",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@lcr.aero",
    contactType: "sales",
    availableLanguage: "English",
  },
  sameAs: ["https://www.linkedin.com/company/111646937/"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  knowsAbout: [
    "FAA Certification",
    "Aviation Safety",
    "Part 121 Certification",
    "Part 135 Certification",
    "Part 145 Certification",
    "Part 137 Certification",
    "Safety Management Systems",
    "Aviation Compliance",
    "ETOPS Authorization",
    "Aviation Manual Development",
    "Compliance Auditing",
    "IATA IOSA",
    "Aviation Technology Consulting",
  ],
};

export const consultingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://lcr.aero/#service",
  name: "LCR Aero Group",
  url: "https://lcr.aero",
  description:
    "Aviation certification and compliance consulting. FAA Part 121, 135, 145, and 137 certification services.",
  image: "https://lcr.aero/images/logo/lcr-logo.png",
  priceRange: "$$$$",
  serviceType: "Aviation Certification Consulting",
  areaServed: "Worldwide",
  provider: { "@id": "https://lcr.aero/#organization" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Aviation Certification Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "FAA Air Carrier Certification",
          description: "Complete 5-Phase certification management for Parts 121, 135, 145, and 137",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Safety Management Systems",
          description: "SMS implementation, auditing, and compliance programs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Operational Expansion",
          description: "Expert management of FAA major change projects: new aircraft types, ETOPS, extended overwater, CPDLC, and operational transitions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical Publications",
          description: "Complete aviation manual development, revision, and compliance verification for all Part 121/135/145 documentation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Enhanced Compliance",
          description: "AI-powered regulatory verification and documentation quality assurance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Compliance Auditing",
          description: "Independent regulatory compliance auditing for FAA, IATA/IOSA, and DoD evaluation programs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technology Solutions",
          description: "End-to-end operational technology consulting: system selection, implementation, training, and ongoing support",
        },
      },
    ],
  },
};
