# Technology Stack & Architecture

> This file defines the complete technology stack, project structure, configuration, and data flows.
> For database schemas see `DATABASE.md`. For page content specs see `pages/`.

---

# 7. TECHNOLOGY STACK & ARCHITECTURE

This section defines the complete technology stack, project structure, database schema, API design, and configuration for the LCR Aero website. The stack is chosen for maximum performance, developer productivity, modern aesthetics, and seamless scalability from a marketing site to a full client portal without requiring a rewrite.

## 7.1 Core Stack Overview

| Layer | Technology | Purpose & Rationale |
| --- | --- | --- |
| **Framework** | Next.js 15 (App Router) | React-based framework with SSR and SSG. App Router provides React Server Components for optimal performance, streaming, and SEO. |
| **Language** | TypeScript 5.x | Type safety across the entire codebase. Catches errors at build time, improves IDE autocompletion, and ensures data structures from Supabase are properly typed. |
| **Styling** | Tailwind CSS v4 | Utility-first CSS framework. v4 introduces CSS-first configuration, native cascade layers, and improved performance. |
| **UI Components** | shadcn/ui | Copy-paste component library built on Radix UI primitives. Components are owned by the project, giving full customization control. |
| **Animation** | Framer Motion | Production-grade animation library for React. Handles scroll-triggered animations, page transitions, hover effects, counter animations, and hero particle effects. |
| **Backend / Database** | Supabase | PostgreSQL database, authentication, file storage, and Row Level Security (RLS). Handles form submissions, articles (Phase 2), and Client Portal (Phase 3). |
| **Email** | Resend | Modern email API for transactional emails. React Email templates for consistent branding. |
| **Hosting** | Vercel | Optimized hosting for Next.js. Automatic Git deployments, edge caching, image optimization, analytics, and custom domain support. |

This stack is entirely TypeScript-based from frontend to backend, requires no separate CMS infrastructure, scales from a marketing site to a full-featured client portal without architectural changes, and delivers the Core Web Vitals performance targets specified in the design requirements (LCP under 2.5 seconds).

## 7.2 Frontend: Next.js 15 + TypeScript

### Why Next.js App Router

The App Router (introduced in Next.js 13, mature in 15) is the correct choice over the legacy Pages Router for this project. Key advantages:

- **React Server Components (RSC):** Pages like the Team Directory, Services pages, and About page contain static content that does not need client-side JavaScript. RSC renders these on the server and sends pure HTML to the browser, resulting in smaller JavaScript bundles and faster page loads.
- **Streaming & Suspense:** The Knowledge Hub (Phase 2) can stream article content progressively. The homepage hero loads instantly while the client logo ticker and stats counter hydrate in the background.
- **Metadata API:** Next.js provides a built-in metadata API for generating dynamic SEO meta tags, Open Graph images, and structured data (JSON-LD) per page — critical for the SEO strategy.
- **Route Groups:** The App Router’s route groups allow organizing the public marketing site and the future Client Portal under separate layouts without URL path changes. Example: (marketing)/solutions/certification and (portal)/dashboard share the same domain but have completely different navigation, auth requirements, and layouts.
- **Server Actions:** Form submissions (Contact page, Readiness Assessment) can use Server Actions to write directly to Supabase and trigger Resend emails without building separate API routes, reducing boilerplate.

### Key Next.js Configuration

- **next.config.ts:** Enable image optimization for team headshots and client logos. Configure remote image patterns for Supabase Storage URLs. Enable experimental features like optimizePackageImports for shadcn/ui and framer-motion.
- **Middleware:** Implement middleware for the future Client Portal to check authentication before allowing access to protected routes. Not needed for Phase 1 but the file should be created as a placeholder.
- **Image Optimization:** All images served through next/image with automatic WebP conversion, lazy loading, and responsive srcset generation. Team headshots should be stored locally in /public/team/ for Phase 1.

## 7.3 Styling: Tailwind CSS v4 + shadcn/ui

### Tailwind v4 Configuration

Tailwind v4 uses a CSS-first configuration approach instead of the JavaScript-based tailwind.config.js from v3. The design system colors, fonts, and spacing are defined directly in the global CSS file.

**Design Token Mapping:** The following CSS custom properties should be defined to map the visual design system to Tailwind:

| CSS Variable | Value | Usage in Tailwind |
| --- | --- | --- |
| --color-deep-blue | #0B1C2E | bg-deep-blue, text-deep-blue |
| --color-aero-silver | #E1E6EB | bg-aero-silver |
| --color-electric-cyan | #00E8FF | bg-cyan, text-cyan, border-cyan |
| --color-signal-orange | #FF5722 | bg-orange, text-orange |
| --color-slate | #3A4553 | text-slate (body copy) |
| --font-heading | 'Sora', sans-serif | font-heading |
| --font-body | 'Inter', sans-serif | font-body |

'Inter', sans-serif

font-body

### shadcn/ui Component Plan

The following shadcn/ui components should be installed and customized for the LCR design system. Install using: npx shadcn@latest add [component-name]

| Component | Used On | Customization Notes |
| --- | --- | --- |
| **NavigationMenu** | Global header navigation with dropdowns | Style with Deep Space Blue bg, white text, cyan hover accents |
| **Accordion** | Operational Expansion services, FAQ sections | Expand/collapse with Framer Motion spring animation |
| **Dialog / Sheet** | Team member expanded bios, mobile nav | Modal overlay for full bio on team card click |
| **Card** | Services grid, team cards, case studies, Knowledge Hub | Aero Silver bg, subtle border, cyan hover border-left accent |
| **Form / Input / Select** | Smart inquiry form, readiness assessment | Multi-step form with conditional fields, validation states |
| **Tabs** | Certification types section, industry pages | Tab navigation between Part 121/135/145/137 content |
| **Badge** | Trust signals, certification type labels, case study filters | Outlined style with cyan for active, gray for inactive |
| **Button** | All CTAs throughout the site | Primary: cyan bg + deep-blue text. Secondary: outlined cyan. Destructive: signal orange. |
| **Separator** | Section dividers between page sections | Subtle Aero Silver line with optional gradient fade |
| **Toast** | Form submission success/error feedback | Bottom-right position, auto-dismiss after 5 seconds |

## 7.4 Animation: Framer Motion

Framer Motion handles all animations on the site. The following animation patterns should be implemented as reusable components or hooks:

**Animation**

**Location**

**Implementation**

| Animation | Location | Implementation |
| --- | --- | --- |
| **Fade-in on scroll** | All page sections | `motion.div` with `whileInView`. Reusable `<FadeIn>` component. |
| **Stagger children** | Service cards, team grid, client logos | Parent uses `staggerChildren: 0.1`. Each child fades in sequentially. |
| **Counter animation** | Trust bar stats (400+, 95%+, 50+) | `useMotionValue` and `useTransform` to animate from 0 to target over 2s. |
| **Scrollytelling stepper** | 5-Phase Certification timeline | `useScroll` with container ref. Map `scrollYProgress` to highlight active phase. |
| **Logo ticker** | Client logos section | Infinite horizontal scroll with `repeat: Infinity` and linear easing. |
| **Hero particles** | Homepage hero background | Canvas-based particle grid. Keep particle count low (50-80). |
| **Page transitions** | All route navigations | `AnimatePresence` with layout animations. Subtle opacity fade (0.2s). |

## 7.5 Backend: Supabase

Supabase serves as the single backend for all phases of the project. In Phase 1 it handles form submissions and lead storage. In Phase 2 it serves Knowledge Hub articles. In Phase 3 it provides authentication, file storage, and data for the Client Portal.

### Supabase Project Setup

- Create a Supabase project at supabase.com
- Install @supabase/supabase-js and @supabase/ssr in the Next.js project
- Configure the Supabase client using environment variables (see Section 7.11)
- Use the @supabase/ssr package to create server-side and client-side Supabase clients for the App Router
- Enable Row Level Security (RLS) on all tables from the start, even if Phase 1 only has public-facing inserts

> **Database schemas are in `DATABASE.md`** — see that file for complete table definitions, RLS policies, and migration SQL.

### 7.5.1 Database Schema — Phase 1

See [`DATABASE.md`](./DATABASE.md) for the full `inquiries`, `newsletter_subscribers`, and `articles` table schemas with column types, constraints, and RLS policies.



## 7.6 Email: Resend

Resend handles all transactional email for the site. It integrates natively with React via the @react-email/components package, allowing email templates to be built as React components with the same design system as the website.

### Email Templates Required

**1. Internal Lead Notification:** Sent to info@lcr.aero when a new inquiry is submitted. Contains: full name, company, email, phone, service interest, service detail, project details, referral source, and timestamp. Subject line: “New Inquiry: [Company Name] — [Service Interest]”

**2. Context-Aware Confirmation (Certification):** Sent to the submitter when they select “Initial Certification” as their service interest. Subject: “Thank You — Your Certification Inquiry Has Been Received”. Body includes a brief confirmation message and a link to download the relevant readiness guide (Part 121 or Part 135 based on their service_detail selection).

**3. Context-Aware Confirmation (General):** Sent for all other service interests. Subject: “Thank You — LCR Aero Group Will Be in Touch”. Body includes confirmation and a link to the Knowledge Hub.

**4. Newsletter Welcome (Phase 2):** Sent when a user subscribes to Regulatory Watch. Subject: “Welcome to Regulatory Watch by LCR Aero Group”.

### Resend Configuration

- Create a Resend account and add the lcr.aero domain with DNS verification (SPF, DKIM, DMARC records)
- Install resend and @react-email/components packages
- Store the RESEND_API_KEY in environment variables
- Email templates live in /src/emails/ as React components
- Emails are triggered from Next.js Server Actions or API routes

## 7.7 Hosting: Vercel

Vercel is the optimal hosting platform for Next.js applications. It provides zero-configuration deployments from a Git repository.

### Vercel Configuration

- **Custom Domain:** Connect lcr.aero to the Vercel project. Configure DNS A and CNAME records as specified by Vercel. Enable automatic HTTPS.
- **Environment Variables:** Set all environment variables (Supabase, Resend) in the Vercel dashboard under Project Settings > Environment Variables. Use separate values for Preview and Production deployments.
- **Image Optimization:** Vercel’s built-in image optimization handles next/image transformations at the edge. No additional CDN configuration is needed.
- **Analytics:** Enable Vercel Analytics (included in Pro plan) for Core Web Vitals monitoring and page-level performance tracking.
- **Preview Deployments:** Every Git branch push creates a unique preview URL. Use this for LCR stakeholder review before merging to production.
- **Redirects:** Configure redirects in next.config.ts if any old URLs from the previous site need to be preserved for SEO continuity.

## 7.8 Project Structure & File Organization

The following directory structure organizes the codebase for maintainability and scalability. It follows Next.js App Router conventions with clear separation between page routes, reusable components, data utilities, and static assets.

```
lcr-aero/
  ├─ src/
  │   ├─ app/                          ← Next.js App Router pages
  │   │   ├─ (marketing)/                ← Route group for public site
  │   │   │   ├─ page.tsx                 ← Homepage
  │   │   │   ├─ solutions/
  │   │   │   │   ├─ page.tsx               ← Solutions hub
  │   │   │   │   ├─ certification/page.tsx
  │   │   │   │   ├─ expansion/page.tsx
  │   │   │   │   ├─ safety-sms/page.tsx
  │   │   │   │   ├─ publications/page.tsx
  │   │   │   │   └─ ai-enhanced/page.tsx
  │   │   │   ├─ industries/
  │   │   │   │   ├─ commercial/page.tsx
  │   │   │   │   ├─ cargo-charter/page.tsx
  │   │   │   │   ├─ mro/page.tsx
  │   │   │   │   └─ agricultural/page.tsx
  │   │   │   ├─ knowledge/                  ← Phase 2
  │   │   │   │   ├─ page.tsx               ← Article listing
  │   │   │   │   └─ [slug]/page.tsx        ← Dynamic article page
  │   │   │   ├─ about/
  │   │   │   │   ├─ page.tsx               ← About / Our Story
  │   │   │   │   ├─ team/page.tsx          ← Expert Directory
  │   │   │   │   └─ case-studies/page.tsx
  │   │   │   ├─ contact/page.tsx
  │   │   │   └─ layout.tsx               ← Marketing layout (header + footer)
  │   │   ├─ (portal)/                   ← Route group for Client Portal (Phase 3)
  │   │   │   ├─ dashboard/page.tsx
  │   │   │   ├─ documents/page.tsx
  │   │   │   └─ layout.tsx               ← Portal layout (sidebar nav + auth)
  │   │   ├─ api/                        ← API routes (if needed beyond Server Actions)
  │   │   │   └─ newsletter/route.ts
  │   │   ├─ layout.tsx                  ← Root layout (fonts, metadata)
  │   │   └─ globals.css                 ← Tailwind v4 imports + design tokens
  │   ├─ components/
  │   │   ├─ ui/                        ← shadcn/ui components (auto-generated)
  │   │   ├─ layout/                    ← Header, Footer, Navigation, StickyCTA
  │   │   ├─ sections/                  ← Page sections (HeroSection, TrustBar, ServicesGrid, etc.)
  │   │   ├─ forms/                     ← InquiryForm, NewsletterForm, ReadinessQuiz
  │   │   └─ animations/                ← FadeIn, StaggerContainer, CounterAnimation, ParticleHero
  │   ├─ lib/
  │   │   ├─ supabase/
  │   │   │   ├─ client.ts              ← Browser Supabase client
  │   │   │   ├─ server.ts              ← Server-side Supabase client
  │   │   │   └─ types.ts               ← Generated database types
  │   │   ├─ resend.ts                  ← Resend client configuration
  │   │   ├─ constants.ts               ← Site-wide constants (team data, services, client logos)
  │   │   └─ utils.ts                   ← Utility functions (cn helper from shadcn)
  │   ├─ emails/                        ← React Email templates
  │   │   ├─ LeadNotification.tsx
  │   │   ├─ InquiryConfirmation.tsx
  │   │   └─ NewsletterWelcome.tsx
  │   ├─ actions/                       ← Next.js Server Actions
  │   │   ├─ submit-inquiry.ts
  │   │   └─ subscribe-newsletter.ts
  │   └─ data/                          ← Static data files
  │       ├─ team-members.ts            ← Team member data (names, bios, specialties)
  │       ├─ services.ts                ← Service descriptions and metadata
  │       └─ clients.ts                 ← Client names and logo paths
  ├─ public/
  │   ├─ team/                          ← Team member headshots
  │   ├─ clients/                       ← Client logo files
  │   ├─ icons/                         ← Service icons, favicons
  │   └─ og-image.png                   ← Default Open Graph image
  ├─ .env.local                             ← Local environment variables
  ├─ next.config.ts
  ├─ tailwind.config.ts                     ← Tailwind v4 may not need this (CSS-first)
  ├─ tsconfig.json
  ├─ package.json
  └─ components.json                        ← shadcn/ui configuration
```

## 7.10 API Routes & Data Flow

The application uses two primary data flow patterns: Server Actions for form submissions and Server Components with direct Supabase queries for data fetching.

### Form Submission Flow (Contact Page)

1. User fills out multi-step smart inquiry form (client-side, React Hook Form + Zod validation)
2. On submit, the form calls the submitInquiry Server Action
3. Server Action validates input with Zod schema
4. Server Action inserts row into Supabase inquiries table
5. Server Action calls Resend API to send internal notification email to info@lcr.aero
6. Server Action calls Resend API to send context-aware confirmation email to the submitter
7. Server Action returns success/error result to the client
8. Client displays success toast with context-aware message and optional download link

### Newsletter Subscription Flow

1. User enters email in newsletter form (footer or Knowledge Hub)
2. API route or Server Action checks for duplicate email in newsletter_subscribers
3. If new, inserts row and sends welcome email via Resend
4. If duplicate, returns friendly message (“You’re already subscribed!”)

### Knowledge Hub Data Fetching (Phase 2)

1. Article listing page (/knowledge) is a React Server Component
2. At request time, the server-side Supabase client queries articles WHERE is_published = true, ordered by published_at descending
3. Articles render as cards with title, summary, category badge, date, and author
4. Individual article page (/knowledge/[slug]) fetches single article by slug
5. Markdown body is rendered using a lightweight library like react-markdown with custom components for headings, code blocks, and callouts
6. Page metadata (title, description, OG image) is generated dynamically from the article data using Next.js generateMetadata

## 7.11 Environment Variables & Configuration

The following environment variables must be configured in both the local .env.local file and the Vercel dashboard:

| Variable Name | Source | Notes |
| --- | --- | --- |
| **NEXT_PUBLIC_SUPABASE_URL** | Supabase Dashboard > Settings > API | Public — safe for client-side use |
| **NEXT_PUBLIC_SUPABASE_ANON_KEY** | Supabase Dashboard > Settings > API | Public — RLS enforces access control |
| **SUPABASE_SERVICE_ROLE_KEY** | Supabase Dashboard > Settings > API | SECRET — server-side only, bypasses RLS |
| **RESEND_API_KEY** | Resend Dashboard > API Keys | SECRET — server-side only |
| **RESEND_FROM_EMAIL** | Set manually | e.g., noreply@lcr.aero (must verify domain in Resend) |
| **NOTIFICATION_EMAIL** | Set manually | e.g., info@lcr.aero — receives lead notifications |
| **NEXT_PUBLIC_SITE_URL** | Set manually | https://lcr.aero — used for OG tags, sitemap, canonical URLs |

The NEXT_PUBLIC_ prefix makes variables available in client-side code. Variables without this prefix are server-side only and should never be exposed to the browser. The SUPABASE_SERVICE_ROLE_KEY and RESEND_API_KEY must remain strictly server-side.
