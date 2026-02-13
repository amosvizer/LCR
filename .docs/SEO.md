# SEO, Security & Performance

> Technical implementation guidelines for search optimization, security, and performance.

---

# 8. SEO & TECHNICAL IMPLEMENTATION

## 8.1 SEO Strategy

- **Schema Markup:** Implement structured data (JSON-LD) for Organization, ConsultingService, and Person schemas on the relevant pages. This helps LCR appear in Google Knowledge Graph panels and rich snippets for queries like “FAA certification consultant.” Implement using Next.js’s built-in metadata API and generateMetadata function.
- **Long-Tail Keywords:** Target high-intent operational queries such as: “Part 135 SMS manual requirements,” “FAA Part 121 certification timeline,” “Part 145 repair station certification process,” “DCT submission preparation,” and “ETOPS authorization requirements.” These queries have low competition and high conversion intent from operators actively seeking certification support.
- **Core Web Vitals:** Ensure Largest Contentful Paint (LCP) under 2.5 seconds. The Next.js + Vercel stack with React Server Components, next/image optimization, and edge caching achieves this by default. Monitor via Vercel Analytics.
- **Meta Descriptions:** Every page must have a unique, keyword-rich meta description under 160 characters. Define these in each page’s generateMetadata export.
- **Internal Linking:** Every Knowledge Hub article should link to relevant service pages. Every service page should link to relevant case studies and downloadable resources. This creates topical authority clusters around certification, safety, and compliance.
- **Sitemap & Robots:** Next.js generates sitemap.xml automatically using the sitemap.ts convention. Configure to include all public pages and exclude portal routes. Submit sitemap to Google Search Console.
- **Open Graph Images:** Generate dynamic OG images per page using Next.js’s ImageResponse API. Each page should have a branded OG image with the page title and LCR branding for social media sharing.

## 8.2 Security

As an aviation vendor handling sensitive operational documentation, the website must demonstrate security consciousness:

- **HTTPS:** Mandatory. Vercel provides automatic SSL certificates for custom domains. No additional configuration needed.
- **Content Security Policy:** Configure CSP headers in next.config.ts to restrict resource loading to trusted origins only.
- **Rate Limiting:** Implement rate limiting on form submission endpoints (Server Actions and API routes) to prevent spam. Use Vercel’s Edge Middleware or a lightweight package like @upstash/ratelimit with a Redis instance.
- **Input Validation:** All form inputs validated server-side with Zod schemas before database insertion. Never trust client-side validation alone.
- **Client Portal (Phase 3):** When implemented, the portal must use Supabase Auth with encrypted sessions, enforce RLS policies per user, and require 2FA for access to sensitive documents.
- **Security Badges:** Display SSL certificate info and security badges in the footer alongside trust signals to reinforce credibility.

## 8.3 Performance Optimization

- **React Server Components:** All static content pages (services, about, team) render as Server Components by default — zero client-side JavaScript for these pages.
- **Dynamic Imports:** Heavy client components (ParticleHero, counter animations, logo ticker) loaded via next/dynamic with { ssr: false } to prevent blocking initial page load.
- **Image Optimization:** All images served through next/image with automatic WebP/AVIF conversion, responsive srcset, lazy loading, and blur placeholders.
- **Font Optimization:** Load Sora, Inter, and JetBrains Mono via next/font/google with display: 'swap' for zero layout shift.
- **Bundle Analysis:** Use @next/bundle-analyzer to monitor JavaScript bundle size. Target under 100KB first-load JavaScript.
