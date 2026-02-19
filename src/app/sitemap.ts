import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://lcr.aero";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/solutions",
    "/solutions/certification",
    "/solutions/expansion",
    "/solutions/safety-sms",
    "/solutions/publications",
    "/solutions/ai-enhanced",
    "/solutions/technology",
    "/solutions/compliance-auditing",
    "/industries",
    "/industries/commercial",
    "/industries/cargo-charter",
    "/industries/mro",
    "/industries/agricultural",
    "/about",
    "/about/team",
    "/about/case-studies",
    "/contact",
    "/knowledge",
  ];

  const hubPages = ["/solutions", "/industries"];
  return staticPages.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-02-18"),
    changeFrequency: (route === "" || hubPages.includes(route) ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1.0 : route.split("/").length <= 2 ? 0.9 : 0.7,
  }));
}
