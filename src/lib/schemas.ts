const SITE_URL = "https://lcr.aero";

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.url}`,
    provider: {
      "@type": "Organization",
      name: "LCR Aero Group",
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: "Aviation Certification Consulting",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function personSchema(member: {
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    description: member.bio,
    worksFor: {
      "@type": "Organization",
      name: "LCR Aero Group",
      url: SITE_URL,
    },
    knowsAbout: member.specialties,
    ...(member.image && { image: `${SITE_URL}${member.image}` }),
  };
}
