# LCR Aero Group — lcr.aero

Aviation certification consultancy website. Former FAA inspectors, AI-enhanced methodology, 95%+ first-time DCT acceptance.

## Tech Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS v4 (CSS-first config, no tailwind.config.js)
- **Components**: shadcn/ui (Radix primitives, project-owned)
- **Animation**: Framer Motion (scroll-triggered, page transitions, counters)
- **Backend**: Supabase (PostgreSQL, RLS, Auth in Phase 3)
- **Email**: Resend + React Email templates
- **Hosting**: Vercel (custom domain lcr.aero)

## Project Structure

```
src/
├── app/
│   ├── (marketing)/          # Public site route group
│   │   ├── page.tsx          # Homepage
│   │   ├── solutions/        # 5 service sub-pages
│   │   ├── industries/       # 4 industry verticals
│   │   ├── about/            # About, team, case studies
│   │   ├── contact/          # Smart inquiry form
│   │   └── layout.tsx        # Marketing layout (header + footer)
│   ├── (portal)/             # Client Portal (Phase 3)
│   ├── api/                  # API routes
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Tailwind v4 tokens + imports
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── layout/               # Header, Footer, Nav, StickyCTA
│   ├── sections/             # HeroSection, TrustBar, ServicesGrid, etc.
│   ├── forms/                # InquiryForm, NewsletterForm
│   └── animations/           # FadeIn, StaggerContainer, CounterAnimation, ParticleHero
├── lib/
│   ├── supabase/             # client.ts, server.ts, types.ts
│   ├── resend.ts
│   ├── constants.ts
│   └── utils.ts              # cn() helper
├── emails/                   # React Email templates
├── actions/                  # Server Actions (submit-inquiry, subscribe-newsletter)
└── data/                     # Static data (team, services, clients)
```

## Design System

| Token | Value | Tailwind Class |
|-------|-------|---------------|
| Deep Space Blue | `#0B1C2E` | `bg-deep-blue`, `text-deep-blue` |
| Aero Silver | `#E1E6EB` | `bg-aero-silver` |
| Electric Cyan | `#00E8FF` | `bg-cyan`, `text-cyan`, `border-cyan` |
| Signal Orange | `#FF5722` | `bg-orange`, `text-orange` |
| Slate Gray | `#3A4553` | `text-slate` |

- **Headings**: Sora (Bold 700 for H1/H2, SemiBold 600 for H3/H4)
- **Body**: Inter (Regular 400, Medium 500 for emphasis)
- **Monospace**: JetBrains Mono (regulation citations, CFR references)

## Key Conventions

- **Server Components by default** — only add `"use client"` when interactivity is required
- **Dynamic imports** for heavy client components (ParticleHero, counters, logo ticker) with `{ ssr: false }`
- **Forms**: React Hook Form + Zod validation, submitted via Server Actions
- **Emails**: Templates in `src/emails/` as React components, triggered from Server Actions
- **RLS enabled on all Supabase tables** from day one
- **All images** through `next/image` with WebP/AVIF, lazy loading, blur placeholders
- **Fonts** via `next/font/google` with `display: 'swap'`

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=       # Supabase API URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=  # Supabase anon key (client-safe)
SUPABASE_SERVICE_ROLE_KEY=      # Server-only, bypasses RLS
RESEND_API_KEY=                 # Server-only
RESEND_FROM_EMAIL=              # e.g. noreply@lcr.aero
NOTIFICATION_EMAIL=             # e.g. info@lcr.aero
NEXT_PUBLIC_SITE_URL=           # https://lcr.aero
```

## Implementation Phases

- **Phase 1A** (Core): Scaffold, layout, all marketing pages, contact form, SEO, Vercel deploy
- **Phase 1B** (Content): Case studies, PDF toolkits, newsletter signup, GA4, CWV monitoring
- **Phase 2** (Knowledge Hub): Articles CMS, category filtering, readiness quiz, compliance tools
- **Phase 3** (Client Portal): Supabase Auth + 2FA, document repo, project tracker, support tickets

## Documentation

All specs live in `.docs/`:
- `OVERVIEW.md` — strategy, competitive landscape, differentiators
- `ARCHITECTURE.md` — sitemap, navigation, design system, layout principles
- `TECH-STACK.md` — full stack details, project structure, data flows, env vars
- `DATABASE.md` — Supabase table schemas, RLS policies, migration SQL
- `SEO.md` — SEO strategy, security headers, performance targets
- `IMPLEMENTATION.md` — phased timeline, content migration checklist
- `pages/*.md` — per-page content specs (homepage, solutions, industries, about, contact, etc.)

## Images & Visual Assets

### Local images
User-provided images are in `public/images/`. Use these throughout the site via `next/image` with `src="/images/..."`. Distribute them across pages based on their visual content — aviation shots for industry/service pages, corporate shots for about sections, tech/abstract shots for AI-related content, hero images for hero sections.

### Additional images
When more images are needed beyond what's available locally (e.g., section backgrounds, decorative visuals, alternating content blocks), download high-quality images from `https://picsum.photos` and save them to the appropriate `public/images/` subfolder before referencing them. Example:
```bash
curl -L "https://picsum.photos/1920/1080" -o public/images/sections/section-bg-1.jpg
```

### Image rules
- Always use `next/image` with explicit `width` and `height` props (or `fill` with a sized parent)
- Apply `quality={85}` for hero/full-bleed images, `quality={75}` for cards and thumbnails
- Add meaningful `alt` text describing the image content for accessibility
- Use `priority` prop on above-the-fold images (hero, first visible section)
- Use `placeholder="blur"` with `blurDataURL` for a polished loading experience — generate a tiny base64 blur placeholder or use a solid color matching Deep Space Blue
- For team headshots: display in circular crop (rounded-full) at consistent sizes
- Never reference external image URLs in production components — always download to `public/images/` first


## Performance Targets

- LCP under 2.5s
- First-load JS under 100KB
- WCAG 2.2 AA compliance
