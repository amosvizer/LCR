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
  sameAs: [],
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
    "Safety Management Systems",
    "Aviation Compliance",
  ],
};

export const consultingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LCR Aero Group",
  url: "https://lcr.aero",
  description:
    "Aviation certification and compliance consulting. FAA Part 121, 135, 145, and 137 certification services.",
  priceRange: "$$$$",
  serviceType: "Aviation Certification Consulting",
  areaServed: "Worldwide",
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
          name: "AI-Enhanced Compliance",
          description: "AI-powered regulatory verification and documentation quality assurance",
        },
      },
    ],
  },
};
