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

  return staticPages.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
