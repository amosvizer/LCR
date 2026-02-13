# Implementation Phases & Content Migration

> Timeline, phased delivery plan, and content migration checklist.

---

# 9. CONTENT MIGRATION CHECKLIST

The following items must be migrated or recreated from the old website and internal LCR materials:

| Content Item | Source | Status / Action |
| --- | --- | --- |
| Team member headshot photos (12 members) | Old website / LCR internal | Obtain high-res originals |
| Team member bios (expanded versions) | Old website + this document | Use this document as base, expand with team input |
| Client logo files (air carriers + air agencies) | LCR internal / client permission | Obtain SVG/PNG logos with client approval |
| Case study details (specific projects) | LCR leadership interviews | Develop 4–6 initial case studies |
| LCR logo (SVG format) | LCR brand assets | Convert to SVG if not available |
| "Accelerate Your Certification" infographic | Old website PDF | Redesign for web with new visual system |
| Knowledge Hub initial articles (6–8) | New content creation | Develop post-launch as Phase 2 |
| Downloadable toolkits (PDFs) | New content creation | Develop 3–4 for launch, expand quarterly |

# 10. IMPLEMENTATION PHASES & TIMELINE

## Phase 1A: Core Website (Weeks 1–6)

- Project scaffolding: Next.js 15 (App Router) + TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion
- Supabase project setup: database, RLS policies, inquiries and newsletter_subscribers tables
- Resend configuration: domain verification, email templates (LeadNotification, InquiryConfirmation)
- Global layout: Header with NavigationMenu (shadcn), Footer, StickyCTA bar, mobile responsive Sheet nav
- Homepage: Hero with ParticleHero animation, TrustBar with CounterAnimation, ServicesGrid (Bento cards), LCR Advantage blocks, LogoTicker, 5-Phase timeline preview, pre-footer CTA
- Solutions hub + all 5 sub-pages (Certification, Expansion, SMS, Publications, AI-Enhanced)
- Industries pages (Commercial, Cargo/Charter, MRO, Agricultural, Defense/Government)
- About page + Team Expert Directory with Dialog modals for expanded bios
- Contact page with multi-step smart inquiry form (React Hook Form + Zod + Server Actions)
- SEO: generateMetadata per page, JSON-LD schemas, sitemap.ts, robots.ts, dynamic OG images
- Vercel deployment: custom domain (lcr.aero), environment variables, preview deployments

## Phase 1B: Content & Lead Capture (Weeks 5–8)

- Case studies page with filterable Badge components (by Part type and project type)
- 2–3 downloadable PDF toolkits (hosted in /public or Supabase Storage)
- Regulatory Watch newsletter signup form in footer and standalone (writes to newsletter_subscribers table, triggers Resend welcome email)
- Google Analytics 4 integration via next/script
- Core Web Vitals monitoring via Vercel Analytics

## Phase 2: Knowledge Hub & Interactive Tools (Weeks 8–12)

- Supabase articles table creation (see Section 7.5.2 schema)
- Knowledge Hub listing page (/knowledge) with category filtering via Tabs component
- Dynamic article page (/knowledge/[slug]) with Markdown rendering (react-markdown)
- Certification Readiness Assessment quiz (interactive multi-step form with scored results)
- Interactive Compliance Timeline tool
- A/B testing framework for CTAs
- Optional: simple admin page for LCR team to create/edit articles directly

## Phase 3: Client Portal (Weeks 12–20)

- Supabase Auth integration: email/password signup with 2FA enforcement
- Portal layout within (portal) route group: sidebar navigation, auth-protected routes
- Secure document repository using Supabase Storage with RLS per client organization
- Project progress tracker (visual timeline of certification phases per client)
- Support ticket system (Supabase tables with real-time subscriptions for status updates)
- Personalized regulatory alerts based on client’s certification type and OpSpecs

## Document End

This document provides the complete content specification, design direction, technology architecture, and implementation roadmap for the LCR Aero Group website redesign. Every piece of text specified in Section 5 is intended for direct implementation. The technology stack defined in Section 7 has been selected for maximum performance, developer productivity, and scalability from a marketing site to a full client portal. The developer should treat this document as the single source of truth for all website content, structure, technology decisions, and functionality.

For questions about this specification, contact the project lead. For content clarifications, defer to LCR Aero Group leadership for final approval of any client-specific claims, metrics, or case study details.
