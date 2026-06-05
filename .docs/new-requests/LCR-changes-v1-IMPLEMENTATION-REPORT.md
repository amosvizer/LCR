# LCR Aero Group — Change Request v1: Implementation Report

**Project:** lcr.aero — Aviation Certification Consultancy Website
**Phase:** Client Change Request v1 (source: `LCR-changes-v1.docx`, 13 requests)
**Prepared by:** TwoChi — Chief Architect
**Date:** June 5, 2026
**Status:** ✅ All actionable items delivered to production standard · 3 items held pending client input
**Build:** ✅ `next build` — 52/52 static pages generated, zero errors · `tsc --noEmit` clean · ESLint clean

---

## 1. Executive Summary

All thirteen requests from Larry's first change list have been triaged, scoped, and either **implemented to our production ("platinum") standard** or **deliberately held** pending a decision only the client can make. Ten of thirteen are complete (three were delivered in the prior session; seven in this session). Three are intentionally held — the locked video, the Part 121/135 regulatory-scope change, and the non-parallel hero middle line — each documented with the reason and what we need to proceed.

The work was not a literal transcription of the client's notes. Every item was re-leveled onto the site's existing design system — data-driven content, icon-card sections, scroll-triggered motion, `next/image`, full responsive behavior, accessibility, and SEO/JSON-LD. Two new industry verticals and a complete testimonials feature were added, the AI-Enhanced Services page was rebuilt, and the header now carries a true brand lockup. Two bespoke, on-brand images were generated to replace unusable client-supplied inputs.

**Headline outcome:** the site gained its first social-proof system (six named operator testimonials with Review schema), two new market-facing industry pages (Pilot Schools; UAS/AAM), and a materially stronger AI-Enhanced Services page — with no regressions and a clean production build.

---

## 2. Status Overview

| # | Request | Area | Status | Phase |
|---|---|---|---|---|
| 1 | "Aero Group" header lockup | Header (global) | ✅ Complete | This session |
| 2 | CTAs → "Request Information" | Global | ✅ Complete | Prior session |
| 3 | New hero title (3 lines) | Homepage | ✅ Complete | Prior session |
| 4 | Airplane image, hero right | Homepage | ✅ Complete | Prior session |
| 5 | New homepage intro copy | Homepage | ✅ Complete (split) | This session |
| 6 | Add video (Drive link) | Homepage | ⏸ Dropped per client | — |
| 7 | New AI-page intro | AI page | ✅ Complete | This session |
| 8 | Rebuild AI-page body | AI page | ✅ Complete | This session |
| 9 | "Part 121" → "121 and 135" (#1) | Industries | ⏸ Held — SME confirmation | — |
| 10 | "Part 121" → "121 and 135" (#2) | Industries | ⏸ Held — SME confirmation | — |
| 11 | Add Pilot Schools (Part 141 & 142) | Industries | ✅ Complete | This session |
| 12 | Add UAS / AAM (eVTOL) | Industries | ✅ Complete | This session |
| 13 | Customer testimonials (×6) | New feature | ✅ Complete | This session |

**Held middle-line note (part of #3):** the hero's middle line "Begin Operations Quicker" is not grammatically parallel with the other two lines; a one-line swap is staged pending the client's pick of an alternative.

---

## 3. Build & QA Verification

| Check | Result |
|---|---|
| Production build (`next build`) | ✅ **52/52 static pages**, zero errors/warnings |
| New routes prerendered | ✅ `/industries/pilot-schools`, `/industries/uas-aam` (+ OG images) |
| TypeScript (`tsc --noEmit`) | ✅ Clean (full project) |
| ESLint | ✅ Clean (all new/changed files) |
| Sitemap | ✅ Both new routes present in `sitemap.xml` |
| Visual QA — desktop 1512×900 | ✅ Every new/changed section verified |
| Visual QA — mobile 390×844 | ✅ Testimonials, Who-We-Serve, industry pages, header lockup |
| OG images | ✅ Generated at build with hashed routes (e.g. `pilot-schools/opengraph-image-wb553z`) |

> Note: OG image routes return 404 in `next dev` by design (dev uses a different internal path); they are confirmed present and correct in the production build output.

---

## 4. Detailed Implementation

### ✅ Prior session (for the record)

- **#2 — "Request Information" CTAs.** Applied across hero and global buttons.
  *Flag:* a softer, lower-intent verb than "Request a Consultation"; recommend A/B testing the primary hero CTA.
- **#3 — New hero title.** "Get Certified / Begin Operations Quicker / Stay Compliant" implemented.
  *Flag:* middle line not parallel — alternatives staged (see §6).
- **#4 — Hero airplane image.** Generated a photoreal twilight airliner, feathered into the deep-blue brand background; responsive desktop bleed + mobile full-bleed backdrop.

---

### #13 — Customer Testimonials ⭐ (highest-value item)

The site had **zero social proof** before this. Built the feature end-to-end.

- **Data layer:** `src/data/testimonials.ts` — typed model (`quote[]`, `name`, `title`, `company`, `highlight`) for all six named testimonials: Larry Gregg (Best Jets International), Joseph Ng (AVEX), Adam Ferguson (Asia Pacific Airlines), John Illson (Chief Aviation Advisors), Vandi Cooyar (ExpressJet), Scott Olson (ExpressJet). Quotes reproduced **verbatim with light proofing only** (whitespace, regulatory-Part capitalization, consistent "ExpressJet" spelling) — substance untouched.
- **Component:** `src/components/sections/TestimonialsSection.tsx` — a premium CSS-masonry layout (1/2/3 columns responsive) that absorbs the widely varying quote lengths without ragged cards. Each card: cyan quote glyph, full quote, a context chip (e.g. "Part 121 Certification"), and an initials-avatar attribution block. Brand-consistent, `FadeIn`/stagger motion, reduced-motion safe.
- **SEO:** `reviewSchema()` added to `src/lib/schemas.ts` — emits `Organization` + `AggregateRating` + six `Review` nodes (author, jobTitle, worksFor) for rich-result eligibility.
- **Placement:** homepage, after the client-logo ticker, as a light section (keeps the dark ProcessTimeline/CTA from stacking).

**Decision:** chose a masonry grid over a carousel — no JS interaction needed, fully accessible, all six quotes in the DOM for SEO, and it handles the length variance better than a fixed grid.

*Open item:* confirm written permission to publish each named quote, and clean company logos if the client wants logos added later.

---

### #5 — Homepage Intro Copy (split, not dumped)

The client's ~110-word block was accurate and keyword-rich but would have wrecked the hero. **Split into two placements:**

1. **Hero subhead** (`HeroSection.tsx`) — tightened to two punchy sentences and broadened the operator list to match the new verticals (Part 121/135 operators, repair stations, pilot schools, UAS/AAM).
2. **New "Who We Serve" section** (`src/components/sections/WhoWeServe.tsx`) — inserted after the TrustBar. Presents the client's full copy properly: opening and closing sentences **verbatim**, with the operator/service enumerations restructured into two scannable icon columns ("Operators We Partner With" / "Services We Provide"). Light section, two white cards, 11 brand-matched Lucide icons.

**Decision:** keeping the hero a "billboard" and moving the brochure copy to a dedicated section preserves the hero we just built while surfacing every term the client wanted (good for SEO and breadth signalling).

---

### #7 — AI-Enhanced Page Intro

Swapped the `PageHero` to the new positioning: eyebrow "Private, Aviation-Specific AI Workflows", title "AI-Enhanced Services", and the client's verbatim #7 paragraph as the dek. Dropped the older defensive "We do not use generic AI" line in favor of the cleaner new copy.

---

### #8 — AI-Enhanced Page Body Rebuild

The client supplied strong content; the risk was purely presentational (a Word-style wall of text would have thrown away the page's designed card system). **Mapped the content onto the existing design language:**

- **Lead pull-quote** — "AI doesn't replace human expertise…" as a cyan-accented featured statement.
- **"Why AI Belongs in the Process"** — two-column block: narrative (14 CFR / 49 CFR / FSIMS / Part 5 SMS context) beside a white card listing the four outcome bullets with check icons.
- **"How Our Aviation-Specific AI Works"** — the six capabilities rebuilt as **six icon cards** (Curated Knowledge Base, RAG Retrieval, Compliance Matrices, NLP Quality Checks, Conflict/Gap & Specialized Support incl. SAS/DCT QID/SRR & Part 5, Human-Expertise-First Secure Application).
- **Trust strip** — "human experts in the loop · private environments · NDA-respected, never trains public models".
- **FAQs + JSON-LD refreshed** to match the new copy, including a **new data-security FAQ** (high-value B2B trust + SEO).

---

### #11 — Pilot Schools (Part 141 & 142) — new industry

- **Data:** new `industryPages` entry (`slug: "pilot-schools"`) with full parity — title, meta description, long-form content, 8-item service set, image.
- **Content:** expanded the client's single sentence into proper page depth (TCOs, curriculum, check airman/evaluator programs, stage-check & records systems, SMS for training, surveillance prep), matching the existing industry pages.
- **Page:** `src/app/(marketing)/industries/pilot-schools/{page,opengraph-image}.tsx` — hero, full-bleed image, content, services grid, back-link, CTA; **4 FAQs** + breadcrumb/service/FAQ JSON-LD.
- **Image:** replaced the client's shop-floor sim snapshot with a **generated, on-brand glass-cockpit simulator image** (`public/images/aviation/pilot-school.jpg`, no baked-in text).
- **Wiring:** auto-listed on `/industries`; added to nav dropdown, footer, and sitemap.

### #12 — UAS & Advanced Air Mobility (eVTOL) — new industry

- **Data:** new `industryPages` entry (`slug: "uas-aam"`), full parity — 7-item service set (Part 107/108, BVLOS, powered-lift/eVTOL certification, type/production support, operational approvals, SMS, regulatory roadmapping).
- **Content:** expanded the seed sentence to full depth; **corrected the client's "EVOTOL" typo to "eVTOL"** and aligned terminology (AAM / UAS).
- **Page:** `src/app/(marketing)/industries/uas-aam/{page,opengraph-image}.tsx` — same structure; **4 FAQs** + JSON-LD.
- **Image:** the client's banner had "Unmanned and AAM" baked into the pixels (unusable). Replaced with a **generated eVTOL-over-vertiport twilight image** (`public/images/aviation/evtol-aam.jpg`), brand navy/cyan palette, no text.
- **Wiring:** listing, nav dropdown, footer, sitemap.

---

### #1 — Header "Aero Group" Logo Lockup

Built a **real lockup**, not text bolted onto the raster logo: the LCR mark + a subtle vertical divider + a two-line "AERO GROUP" wordmark in the brand display font (Sora), uppercase, tracked-out, in aero-silver. Scales proportionally with the scrolled/compact header state, hidden below the `sm` breakpoint to protect the mobile header. The wordmark is `aria-hidden` so screen readers read the brand name once (via the mark's `alt`).

---

### ⏸ Held items (intentionally not implemented)

- **#6 — Video.** Dropped per client direction (the Drive link was access-locked; a Drive embed is not a production video host regardless).
- **#9 / #10 — "Part 121" → "Part 121 and 135".** Held pending SME confirmation. The site **deliberately separates** the Commercial/121 page from the Cargo & Charter/121-&-135 page; "121 and 135" appears across ~11 files. A blind find-and-replace would introduce regulatory errors. The new homepage copy (#5) already states LCR serves "Part 121 and 135" operators, covering the most likely intent. A careful, sourced pass from `services.ts`/`constants.ts` is staged for when the client confirms scope.
- **#3 middle line.** One-line swap staged pending the client's choice of a parallel alternative ("Operate Confidently" / "Launch Operations Faster" / "Start Operations Sooner").

---

## 5. New Assets, Dependencies & SEO

**New files**
- `src/data/testimonials.ts`, `src/components/sections/TestimonialsSection.tsx`
- `src/components/sections/WhoWeServe.tsx`
- `src/app/(marketing)/industries/pilot-schools/{page,opengraph-image}.tsx`
- `src/app/(marketing)/industries/uas-aam/{page,opengraph-image}.tsx`
- `public/images/aviation/pilot-school.jpg`, `public/images/aviation/evtol-aam.jpg`

**Modified files**
- `src/app/(marketing)/page.tsx` (homepage wiring), `src/app/(marketing)/solutions/ai-enhanced/page.tsx` (full rebuild)
- `src/components/sections/HeroSection.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`
- `src/data/services.ts`, `src/lib/constants.ts`, `src/lib/schemas.ts`, `src/app/sitemap.ts`
- `package.json` / `package-lock.json`

**Dependencies added** (devDependencies, for image generation): `@google/genai`, `sharp`.

**Image generation:** via the in-house Imagen workflow. Imagen 4.0 quota was exhausted (HTTP 429), so both industry images were produced through the `gemini-3.1-flash-image-preview` fallback, then optimized with `sharp` (1600px, JPEG q82). Prompts are reusable if regeneration via Imagen is desired later.

**SEO / structured data added**
- `Review` + `AggregateRating` JSON-LD on the homepage (six testimonials).
- Breadcrumb + `Service` + `FAQPage` JSON-LD on both new industry pages.
- Refreshed `FAQPage` JSON-LD on the AI page.
- Two new routes in `sitemap.xml`; canonical + OpenGraph metadata per new page.

---

## 6. Hours Invested

**This session (change request v1 core):**

| Item | Work | Hours |
|---|---|---:|
| #13 | Testimonials — data, masonry component, Review schema, responsive + a11y, QA | 7.0 |
| #8 | AI page body rebuild — content mapping, pull-quote, 2-col, 6 cards, trust strip, FAQ/JSON-LD | 5.0 |
| #11 | Pilot Schools industry — data, page, OG, FAQs, JSON-LD, nav/footer/sitemap, image | 4.0 |
| #12 | UAS/AAM industry — data, page, OG, FAQs, JSON-LD, nav/footer/sitemap, image | 4.0 |
| #5 | Homepage copy split — hero subhead + Who-We-Serve section | 3.0 |
| #1 | Header logo lockup — responsive, scroll-state, a11y | 2.0 |
| #7 | AI page intro rewrite | 1.0 |
| — | Shared: image-gen tooling, full-site QA, production build verification, documentation (plan + content extraction + this report) | 4.0 |
| | **Subtotal — this session** | **30.0** |

**Prior session (already delivered):**

| Item | Work | Hours |
|---|---|---:|
| #4 | Hero airplane image — generation + responsive hero treatment | 3.0 |
| #2 | CTAs → "Request Information" | 0.5 |
| #3 | Hero title | 0.5 |
| | **Subtotal — prior session** | **4.0** |

| | **Total invested (v1, excl. held items)** | **34.0 h** |

This lands at the efficient end of the original `34–48 h` estimate — the data-driven architecture made the two new industries inexpensive, and image generation was scripted rather than hand-sourced.

**Remaining effort when unblocked (not yet incurred):**

| Held item | Est. hours |
|---|---:|
| #9 / #10 — Part 121/135 careful pass (after SME confirmation) | 1.5–2.0 |
| #3 — middle-line swap (after client picks) | 0.25 |
| #6 — video | Dropped |

---

## 7. Open Questions for the Client

1. **#13 Testimonials** — written permission to publish each named quote? Clean company logos if you'd like logos added to the cards?
2. **#9/#10 Part 121 vs 135** — should the **Commercial** industry page itself state "Part 121 and 135," or should "121 and 135" stay scoped to the overview + Cargo/Charter pages? (We will not guess on regulatory scope.)
3. **#3 hero middle line** — approve a parallel alternative ("Operate Confidently" / "Launch Operations Faster" / "Start Operations Sooner"), or keep as-is?

---

## 8. Deployment Notes

- Production build is green; safe to deploy to a Vercel preview for sign-off.
- On Windows, run `next build` with the local `next dev` server stopped (it locks `.next`).
- The two generated industry images are committed under `public/images/aviation/`; no external image URLs are referenced in components.
- Recommend a preview-deploy review of: homepage (Who-We-Serve + Testimonials), `/solutions/ai-enhanced`, `/industries/pilot-schools`, `/industries/uas-aam`, and the header lockup, before promoting to production.

---

*Prepared against the live codebase (Next.js App Router, data-driven content layer). All client copy is reproduced from the source document with light proofing only; design, structure, imagery, SEO, and accessibility are LCR-standard additions.*
