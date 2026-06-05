# LCR Aero Group — Change Request v1: Design & Implementation Plan

## ▶ RESUME HERE (2026-06-05 — Larry's v1 feedback: DO-NOW set COMPLETE)
- **Thread:** Implement the actionable LCR change requests to platinum standard. Scope/decisions = this doc; **verbatim client copy = `LCR-changes-v1-content.md`**.
- **State:** ✅ **All DO-NOW items complete & verified** (tsc + eslint clean, all routes 200 in dev, every change screenshot-checked desktop+mobile):
  - **R2/R3/R4** (prior): CTAs, hero title, hero image.
  - **R13** — Testimonials: `src/data/testimonials.ts` (6 quotes) + `src/components/sections/TestimonialsSection.tsx` (masonry, light section) + `reviewSchema()` in `src/lib/schemas.ts` → wired into homepage after `ClientLogos`.
  - **R5** — Homepage copy split: tightened `HeroSection` subhead (broader operator set) + new `src/components/sections/WhoWeServe.tsx` (two icon columns: operators / services; verbatim open+close sentences) inserted after `TrustBar`.
  - **R7** — AI hero intro swapped (verbatim #7) on `solutions/ai-enhanced/page.tsx`; eyebrow="Private, Aviation-Specific AI Workflows", title="AI-Enhanced Services".
  - **R8** — AI body rebuilt into the card system: pull-quote → "Why AI Belongs" 2-col + 4 outcomes → 6 capability cards → trust strip; `AI_FAQS` refreshed (+data-security FAQ) + JSON-LD updated.
  - **R11** — Pilot Schools (Part 141 & 142): data entry + `industries/pilot-schools/{page,opengraph-image}.tsx` (4 FAQs + JSON-LD) + nav + footer + sitemap; image `public/images/aviation/pilot-school.jpg` (generated, no baked text).
  - **R12** — UAS & AAM (eVTOL): data entry + `industries/uas-aam/{page,opengraph-image}.tsx` (4 FAQs + JSON-LD) + nav + footer + sitemap; image `public/images/aviation/evtol-aam.jpg` (generated, no baked text); "EVOTOL"→"eVTOL" corrected.
  - **R1** — Header logo lockup: real `LCR` mark + divider + two-line "AERO GROUP" wordmark (Sora), scales with scroll, hidden below `sm`, wordmark `aria-hidden` (alt carries brand name once).
  - Added devDeps `@google/genai` + `sharp` (image gen). Imagen 4.0 quota-exhausted (429) → both industry images generated via `gemini-3.1-flash-image-preview` fallback.
- **Blocked / HOLD (still NOT implemented; await Ami/Larry):** R6 video (Drive link locked), R9/R10 "Part 121 → 121 and 135" (regulatory scope — no blind find/replace; R5 copy already says "121 and 135" on homepage), R3 middle line "Begin Operations Quicker" (awaiting client's parallel alternative).
- **Not committed:** all work is uncommitted (user's call). New: `.docs/new-requests/`, `public/images/aviation/{pilot-school,evtol-aam}.jpg`, two `industries/*` folders, `TestimonialsSection.tsx`, `WhoWeServe.tsx`, `testimonials.ts`. Modified: `page.tsx`, `ai-enhanced/page.tsx`, `sitemap.ts`, `Footer.tsx`, `Header.tsx`, `HeroSection.tsx`, `services.ts`, `constants.ts`, `schemas.ts`, `package*.json`.
- **Next action:** None in the DO-NOW set. When the client answers the BLOCKED items, implement R9/R10 (careful 121/135 pass from `services.ts`/`constants.ts`), R3 middle line, R6 video (re-host, not Drive embed). Final pre-deploy check: stop dev server, run `npm run build` (Windows file-lock on `.next` if dev is live) + `npx tsc --noEmit`.
- **Key paths:** this doc, `LCR-changes-v1-content.md`, `src/data/{services,testimonials,clients}.ts`, `src/lib/{constants,schemas}.ts`, `src/components/sections/`, `src/app/(marketing)/{page,solutions/ai-enhanced/page,industries/*}.tsx`, `src/components/layout/{Header,Footer}.tsx`.

---

**Source document:** `.docs/new-requests/LCR-changes-v1.docx` (13 numbered requests, 12 embedded screenshots)
**Prepared:** 2026-06-05 · **Status:** Scoping / pre-approval
**Codebase:** Next.js 16 (App Router) · TypeScript · Tailwind v4 · shadcn/ui · Framer Motion

---

## How to read this document

The client feedback came from **aviation subject-matter experts, not web/content professionals.** Their intent is valuable and their domain knowledge is authoritative, but several requests are, as written, **incomplete, technically naïve, or would degrade the site if implemented literally.** This plan does three things:

1. **Section 1 — Tally Sheet:** a one-screen scorecard for the client conversation — every request ranked by *quality of the ask*, *real value to the site*, and *effort in hours*.
2. **Section 2 — Detailed Scope:** request-by-request platinum-standard implementation, including the exact copy to use, files touched, design treatment, and **every place we believe the client is wrong, thin, or missing something** — with our recommended alternative.
3. **Sections 3–5 — Cross-cutting work, open questions, and recommended sequencing.**

**Non-negotiable:** Nothing ships as a literal copy-paste of the client's notes. Every item is re-leveled to the site's existing premium design system (icon cards, `FadeIn`/stagger motion, data-driven sections, `next/image`, SEO/JSON-LD, full responsive + a11y).

### Rating scales

| Scale | Meaning |
|---|---|
| **Ask Quality** | How well-formed the request is *as delivered*. ★★★★★ = ready to build · ★★☆☆☆ = good intent, needs rework · ★☆☆☆☆ = would hurt the site as written |
| **Site Value** | Does it genuinely help the site (conversion, credibility, SEO, UX)? High / Medium / Low |
| **Effort** | Realistic hours **to our platinum standard** — includes content polish, responsive, a11y, SEO, and QA, not just the literal edit |
| **Priority** | P1 = do first (high value, low effort or foundational) → P3 = optional / conditional |

---

## Section 1 — Tally Sheet (client estimate)

> Requests **#2, #3, #4 are already implemented** (image added to homepage, buttons → "Request Information", hero title updated). They are listed for completeness at **0 h remaining**.

| # | Request (short) | Area | Status | Ask Quality | Site Value | Effort (h) | Priority | Recommendation |
|---|---|---|---|---|---|---|---|---|
| 1 | Add "Aero Group" by the LCR logo | Header (all pages) | New | ★★★☆☆ | Medium | 1.5–2 | P2 | Implement as a **proper logo lockup**, not HTML text bolted to a PNG |
| 2 | Buttons → "Request Information" | Global CTAs | ✅ Done | ★★★☆☆ | Low–Med | 0 | — | Done. Flag: weaker CTA verb than "Request a Consultation" |
| 3 | New hero title (3 lines) | Homepage hero | ✅ Done | ★★☆☆☆ | High | 0 | — | Done. **Flag: middle line is not parallel** — recommend a copy pass |
| 4 | Airplane image, right of hero | Homepage hero | ✅ Done | ★★★★☆ | High | 0 | — | Done (generated twilight render, desktop + mobile) |
| 5 | New homepage intro paragraph | Homepage | New | ★★★☆☆ | Medium | 2–3 | P1 | **Don't dump it in the hero** — tighten hero + add a "Who We Serve" section |
| 6 | Add a video (Google Drive link) | Homepage | New | ★★☆☆☆ | Cond. | 4–6 | P3 | **Do not embed Google Drive.** Re-host + build a real player; review clip first |
| 7 | New AI-page intro paragraph | AI-Enhanced page | New | ★★★★☆ | Medium | 0.5–1 | P1 | Implement as-is (minor polish) |
| 8 | Replace all AI-page body copy | AI-Enhanced page | New | ★★★☆☆ | High | 4–6 | P2 | Strong content — **redesign into the page's card system**, don't paste a wall of text |
| 9 | "Part 121" → "Part 121 and 135" (#1) | Industries / Commercial | New | ★★☆☆☆ | Medium | — | P2 | **Likely partially wrong** — see #9/#10; needs SME confirmation |
| 10 | "Part 121" → "Part 121 and 135" (#2) | (2nd location) | New | ★★☆☆☆ | Medium | 1.5–2 (9+10) | P2 | Do a **careful, consistent pass** — not blind find/replace |
| 11 | Add "Part 141 & 142 Pilot Schools" industry | Industries page | New | ★★★☆☆ | High | 3–4 | P1 | Build full industry page; **replace the supplied sim photo** with a quality image |
| 12 | Add "UAS / Advanced Air Mobility (eVTOL)" industry | Industries page | New | ★★★☆☆ | High | 3–4 | P1 | Build full industry page; **supplied banner unusable** (low-res, baked-in text) |
| 13 | Add customer testimonials (×6) | New site feature | New | ★★★★★ | **Very High** | 6–10 | P1 | Excellent content — build a premium testimonials section + Review schema |

**Remaining effort (excludes done items #2–4):**

| Bucket | Hours |
|---|---|
| Per-request implementation (#1, 5, 7, 8, 9–10, 11, 12, 13) | **26–36 h** |
| Cross-cutting: nav updates, SEO/metadata/sitemap/JSON-LD for new pages, testimonial Review schema, responsive + cross-browser + a11y QA, deploy/preview review | **8–12 h** |
| Conditional: video (#6), only if the clip and hosting are sorted | **4–6 h** |
| **Total (core, excl. video)** | **≈ 34–48 h** (~1–1.5 weeks) |
| **Total (incl. video)** | **≈ 38–54 h** |

> **Client-facing one-liner:** *"All 13 items are actionable. Three are already live. The remaining ten are roughly 34–48 hours of work (about a week-and-a-half) to our production standard — testimonials and the two new industry pages are the high-value core; the video depends on getting a properly hosted, broadcast-quality clip."*

---

## Section 2 — Detailed Scope (platinum standard)

### ✅ Already completed (for the record)

- **#2 — "Request Information" CTAs.** Implemented across hero/global buttons.
  *Flag for client:* "Request Information" is a softer, lower-intent verb than "Request a Consultation." It can reduce qualified-lead quality. Recommend A/B testing or reverting the **primary** hero CTA to "Request a Consultation" while keeping "Request Information" on secondary placements. Low effort to adjust.
- **#3 — New hero title** ("Get Certified / Begin Operations Quicker / Stay Compliant"). Implemented.
  *Flag for client:* the three lines are **not grammatically parallel** — "Get Certified" (verb+adj), "Begin Operations Quicker" (verb+noun+adverb, awkward), "Stay Compliant" (verb+adj). The original "Get Certified. Stay Compliant. Fly Faster." was punchier. Recommended alternatives for the middle line: **"Operate Confidently"**, **"Launch Operations Faster"**, or **"Start Operations Sooner."** 15-minute change once the client picks one.
- **#4 — Airplane image right of hero.** Implemented as a generated photoreal twilight airliner, feathered into the deep-blue brand background, responsive desktop→mobile.

---

### #1 — Add "Aero Group" next to the LCR logo

**Client ask:** Put "Aero Group" after the LCR logo in the header.

**Our assessment (Ask Quality ★★★☆☆ · Value Medium):** Reasonable for brand clarity and SEO (the full legal/brand name is "LCR Aero Group"; the mark alone reads "LCR"). **Risk if done literally:** the logo is a fixed-aspect PNG (`public/images/logo/lcr-logo.png`). Bolting a Tailwind `<span>Aero Group</span>` next to a raster logo almost always looks amateur — font, weight, baseline, and color won't match the mark, and it breaks on the scrolled/compact header state.

**Platinum scope:**
- Build a **logo lockup**: render the LCR mark + an "AERO GROUP" wordmark set in the brand display font (Sora), uppercase, tracked-out, in `aero-silver`, vertically centered to the mark, with a subtle divider. Hide the wordmark on small screens (`hidden sm:inline-block`) to protect the mobile header.
- Handle the **scrolled/compact** header state (logo scales 140→120px) so the lockup scales proportionally.
- **Better option (recommended):** commission/produce a single **SVG lockup** so the full brand mark is crisp at every size and one asset. ~+1 h.
- **Files:** `src/components/layout/Header.tsx` (logo block ~L230–240); optional new `public/images/logo/lcr-aero-group.svg`.

**Effort:** 1.5 h (HTML lockup) · +1 h (SVG lockup). **Open question:** Does the client have a real logo file that already includes "Aero Group"? If so, we just swap the asset (0.5 h).

---

### #5 — New homepage intro paragraph

**Client ask:** Replace the homepage intro with a ~110-word, two-paragraph block listing every operator type and service line.

**Our assessment (★★★☆☆ · Value Medium):** The copy is accurate and keyword-rich (Part 121/135, Supplemental/Cargo, Repair Stations, AAM/UAS, Pilot Schools, SMS, NAS) — good for SEO and for signalling breadth. **But dropping 110 words of dense jargon into the hero would wreck the hero** we just built: it fights the headline, collides with the right-side aircraft image, and buries the CTAs below the fold. A hero subhead should be 1–3 sentences.

**Platinum scope (split the content):**
1. **Hero subhead** — tighten to 2 sentences that keep punch and the key promise. Proposed:
   > *"LCR Aero Group pairs former FAA Aviation Safety Inspectors with purpose-built AI to take Part 121 and 135 operators, repair stations, pilot schools, and emerging UAS/AAM organizations through certification, compliance, and safety management — accepted by the FAA the first time."*
2. **New "Who We Serve / What We Do" section** below the TrustBar — present the client's full copy properly: a short lead paragraph + a clean two-column list of **operator types served** and **services provided** (icon list), using the existing `FadeIn`/card patterns. This also reinforces the new Industries pages (#11/#12) and improves SEO with structured, scannable content.

**Verbatim client copy to place in the new section:**
> Accelerate your aviation safety and operational success with LCR Aero Group. We partner with Part 121 and 135 Scheduled Passenger Operators, Supplemental and Cargo Carriers, Repair Stations, Advanced Air Mobility (AAM and UAS) Organizations, Pilot Schools, and other aviation entities through all phases of certification, operational compliance, and safety management. Our services include initial certification support, continuous operational safety oversight, Safety Management System (SMS) development and implementation, regulatory compliance assistance, and specialized training programs.
>
> We are committed to helping aviation organizations successfully navigate today's increasingly complex National Airspace System (NAS) and evolving regulatory environment while strengthening both safety performance and operational efficiency.

- **Files:** `src/components/sections/HeroSection.tsx` (subhead); new `src/components/sections/WhoWeServe.tsx`; `src/app/(marketing)/page.tsx` (insert section). Capitalize "part" → "Part" (typo in source).

**Effort:** 2–3 h.

---

### #6 — Add a video to the homepage  ⚠️ conditional

**Client ask:** Embed a video from a **Google Drive share link** on the homepage.

**Our assessment (★★☆☆☆ · Value Conditional):** Good instinct (video lifts engagement) but the delivery method is wrong for production. **Google Drive is not a video host:** no adaptive bitrate, slow first-frame, Google's branding/UI, rate-limiting on popular files, no captions control, and links can break. Embedding it would look and perform poorly on an otherwise premium site. We also **haven't seen the clip** — if it's a phone-shot or low-resolution video, featuring it on the homepage would actively hurt credibility.

**Platinum scope:**
1. **Review the clip first** (download from Drive) for resolution, aspect, audio, and production quality. Go/no-go on homepage placement.
2. **Re-host properly** — recommend **Mux** (adaptive streaming, posters, captions — enterprise-grade) or, if budget-sensitive, an **unlisted YouTube/Vimeo** embed or a **self-hosted MP4** (`public/videos/`) with a poster image and `preload="none"`.
3. **Build `VideoSection.tsx`** — lazy-loaded, click-to-play with a branded poster (no autoplay-with-sound), 16:9 responsive, captions, reduced-motion respected, placed between `AdvantageSection` and `ClientLogos`.
- **Files:** new `src/components/sections/VideoSection.tsx`, `src/app/(marketing)/page.tsx`; possibly a Mux/YouTube dependency.

**Effort:** 4–6 h after the hosting decision. **Open questions:** (a) Can we see the video? (b) Hosting budget — Mux (paid) vs YouTube/Vimeo (free) vs self-host?

---

### #7 — New AI-page intro paragraph

**Client ask:** Replace the AI-Enhanced page intro with the supplied paragraph.

**Our assessment (★★★★☆ · Value Medium):** Clean, well-written, on-message; the new line drops the slightly defensive "We do not use generic AI" and adds "and ongoing compliance." Straight win.

**Scope:** Swap the hero description string. **Verbatim:**
> LCR Aero Group is pioneering the use of specialized Artificial Intelligence and Machine Learning tools in the FAA certification process and ongoing compliance. We use purpose-built, aviation-specific tools trained on regulatory datasets to deliver documentation that meets the highest standards of accuracy, traceability, and compliance. The result: first-time-right submissions that significantly reduce your total certification cost and timeline.

- **Files:** `src/app/(marketing)/solutions/ai-enhanced/page.tsx` (PageHero description).
**Effort:** 0.5–1 h. **Note:** ship together with #8 (same page).

---

### #8 — Replace all remaining AI-page body copy with "AI-Enhanced Services"

**Client ask:** Replace the rest of the AI page with the supplied "AI-Enhanced Services" content (intro + "Why AI belongs in the process" + "How our aviation-specific AI works" with six detailed capabilities + a closing note).

**Our assessment (★★★☆☆ content is genuinely good · Value High):** This is a substantive, credible rewrite that's better than the current copy (it foregrounds "human experts in the loop," secure/NDA handling, and concrete FAA artifacts — SAS/DCT, QID/SRR, FSIMS/8900.1, Part 5 SMS). **The risk is purely presentational:** the current page is a designed system of three icon-card sections + FAQs. Pasting raw paragraphs/bullets would throw away that design and look like a Word dump.

**Platinum scope — map the content onto the existing design language:**
- **Replace the three current sections** ("Guaranteeing Compliance / Speed Without Compromise / Engineered for Approval") with:
  - **Lead block:** "AI-Enhanced Services" + the new intro + "AI doesn't replace human expertise…" pull-quote.
  - **"Why AI belongs in the process"** — short narrative + the four outcome bullets (reduce revision cycles, improve traceability, highlight gaps before the FAA does, shorten timelines) as a compact checklist.
  - **"How our aviation-specific AI works"** — the **six capabilities as six icon cards** (reusing the existing card grid + `FadeIn`): Curated Regulatory Knowledge Base · RAG-Powered Regulatory Retrieval · Compliance Mapping & Matrices · NLP-Driven Quality & Consistency Checks · Targeted Conflict/Gap & Specialized Support · Human Expertise First with Secure Application.
  - **Closing:** "Human experts in the loop / secure, NDA-respecting, private environments" trust strip.
- **Preserve & refresh** the FAQ block + JSON-LD (update answers to match new copy) and the bottom CTA.
- Pick six fitting Lucide icons; keep heading hierarchy clean for SEO.
- **Files:** `src/app/(marketing)/solutions/ai-enhanced/page.tsx` (SECTIONS array, FAQs, JSON-LD). Full copy is in the source doc, request #8.

**Effort:** 4–6 h.

---

### #9 & #10 — "Part 121" → "Part 121 and 135"  ⚠️ likely partly wrong

**Client ask:** In two flagged spots (screenshot points at the **Industries → Commercial Airline** card), change "Part 121" to read "Part 121 and 135."

**Our assessment (★★☆☆☆ · Value Medium) — this is the clearest "non-expert feedback" trap:**
- The site **deliberately separates** *Commercial Airline Certification (Part 121)* from *Cargo Airline & Charter Operator Solutions (Part 121 & 135)*. The Commercial card reads "Part 121" **on purpose**.
- "Part 121 and 135" appears (correctly or not) across **~11 files** (`src/data/services.ts`, `src/lib/constants.ts`, nav, JSON-LD, email templates, FAQ pages, form options, certification/training/technology pages). A blind find-and-replace would introduce **factual errors** (e.g., implying the dedicated 121 page covers 135, duplicating what the Cargo/Charter page exists to cover).
- What the client most likely *means*: the **overview/marketing language** (homepage, industries intro) should make clear LCR serves **both** 121 and 135 — which #5's new copy already does.

**Platinum scope (a deliberate pass, not a replace-all):**
1. **Confirm intent with the SME** (Larry Richards): does the **Commercial** card/page genuinely cover both 121 and 135, or should "121 and 135" live only in the overview and Cargo/Charter contexts?
2. Apply edits **only where factually correct**, sourced from `src/data/services.ts` and `src/lib/constants.ts` so changes ripple consistently to all consumers (cards, nav, schema). Leave intentionally-scoped 121-only references intact.
3. Verify downstream copy (FAQ pages, emails, form labels) stays internally consistent after the change.

**Effort:** 1.5–2 h (combined), incl. the consistency review. **Open question:** the SME confirmation above — we will not guess on regulatory scope.

---

### #11 — Add "Part 141 and 142 Pilot Schools" to Industries We Serve

**Client ask:** Add a Pilot Schools industry with the supplied 1-sentence description and a flight-simulator photo (`image6`).

**Our assessment (★★★☆☆ · Value High):** Expands the addressable market and adds SEO surface. The architecture makes this cheap (industries are **data-driven** in `src/data/services.ts`), but the supplied inputs are **thin**: one sentence (other industries have full-page content) and a **mediocre, unbranded simulator snapshot**.

**Platinum scope:**
- Add a new `industryPages` entry (`slug: "pilot-schools"`) with full parity to existing industries: `h1`, meta `description`, long-form `content`, a `services[]` tag set (e.g., *Part 141 Certification, Part 142 Training Center, TCO/Training Course Outline, Check Airman & Evaluator Programs, Stage Check & Records Systems, SMS for Training*), and an `image`.
- **Expand the client's sentence** into proper page content (intro + what we do + why LCR) matching the depth/tone of the other four industries.
- **Replace the supplied sim photo** with a higher-quality, on-brand image (generate or license a clean flight-deck/simulator/training shot, no baked-in text).
- **Wire it in:** Industries listing card (auto from data), the **"Industries" nav dropdown** (`src/lib/constants.ts` NAV_ITEMS), `sitemap.xml`, and per-page JSON-LD.
- **Files:** `src/data/services.ts`, `src/lib/constants.ts`, `public/images/aviation/…`, sitemap.

**Client's supplied seed copy (to expand):**
> Achieving and maintaining FAA certification under 14 CFR Part 141 or 142 is essential to the successful operation of an aviation training center or flight operation. We provide expert guidance and comprehensive support throughout the certification process, and their ongoing operations, helping organizations navigate complex regulatory requirements with confidence and efficiency.

**Effort:** 3–4 h.

---

### #12 — Add "UAS / Advanced Air Mobility (eVTOL)" to Industries We Serve

**Client ask:** Add a UAS/AAM industry with the supplied description and banner (`image7`).

**Our assessment (★★★☆☆ · Value High):** Strong forward-looking positioning (eVTOL/UAS is where new FAA certification demand is growing). Same data-driven ease as #11. **Problems with the inputs:** the supplied `image7` is a **low-resolution banner with text ("Unmanned and AAM") baked into the pixels** — unusable on a premium site (never ship text-in-image; it can't be styled, localized, or made accessible). Also note the client's **"EVOTOL" is a typo for "eVTOL."**

**Platinum scope:**
- New `industryPages` entry (`slug: "uas-aam"`), full parity (h1, description, content, services[], image). Services e.g.: *Part 107/108 & Waivers, BVLOS Operations, Type/Production Certification Support, Powered-Lift (eVTOL) Certification, SMS for AAM, Operational Approvals*.
- **Expand** the client's sentence to full-page depth; correct **eVTOL** spelling; align terminology (AAM = Advanced Air Mobility; UAS = Unmanned Aircraft Systems).
- **Source a clean image** (generate/license a sharp eVTOL or drone-ops visual, **no embedded text**).
- Wire into listing, nav dropdown, sitemap, JSON-LD.
- **Files:** same set as #11.

**Client's supplied seed copy (to expand):**
> We assist Unmanned Aircraft Systems (UAS) and Advanced Air Mobility (AAM) organizations in obtaining and maintaining FAA certification while supporting the continued growth and expansion of their operations through the complex regulatory compliance and aviation safety requirements.

**Effort:** 3–4 h.

---

### #13 — Add customer testimonials (×6)  ⭐ highest-value item

**Client ask:** Add six real customer testimonials (full quotes + names/titles/companies; several include a company logo image8–12).

**Our assessment (★★★★★ · Value Very High):** This is the **best item in the document.** These are credible, specific, named testimonials from real operators — **ExpressJet, Asia Pacific Airlines, Best Jets International, AVEX, Chief Aviation Advisors** — including Part 121 reactivations and the B-747 Global Supertanker. Social proof of this caliber is one of the highest-converting elements a B2B site can have, and the site **currently has none.** The only "problem" is that the feature doesn't exist yet.

**Platinum scope (new feature, built right):**
- **Data:** new `src/data/testimonials.ts` — `{ quote, name, title, company, logo? }[]` for all six:
  1. **Larry Gregg** — Accountable Executive, *Best Jets International (MidWest Aero Club, LLC)* — Part 121 certification journey.
  2. **Joseph Ng** — President, *AVEX* — Repair Station SMS implementation + training.
  3. **Adam Ferguson** — President, *Asia Pacific Airlines* — recurring annual audit/evaluation.
  4. **John Illson** — Principal, *Chief Aviation Advisors* — FAA compliance, SMS, certification.
  5. **Vandi Cooyar** — President, *ExpressJet Airlines, LLC* — Part 121 ExpressJet reactivation.
  6. **Scott Olson** — Director of Maintenance, *ExpressJet Airlines, LLC* — Part 137 Global Supertanker, Part 145, ExpressJet recert.
- **Component:** new `src/components/sections/TestimonialsSection.tsx` — premium quote cards (large quote, attribution block, optional company logo), accessible carousel **or** staggered grid (recommend grid on desktop, swipe carousel on mobile), brand styling, `FadeIn`/stagger motion, reduced-motion fallback.
- **Placement:** homepage after `AdvantageSection`/`ClientLogos`; consider a condensed strip on relevant industry pages later.
- **SEO:** emit **`Review`/`AggregateRating` JSON-LD** so these can surface as rich results.
- **Editorial:** light proofing only (the source has minor typos, e.g., "PresidentExpressJet"); **do not alter the substance** of a real customer quote — confirm any edit with the client.
- **Assets:** verify image8–12 are usable company logos; if low-quality, request clean logos or render name-only attribution.
- **Files:** new `src/data/testimonials.ts`, new `src/components/sections/TestimonialsSection.tsx`, `src/app/(marketing)/page.tsx`, `src/components/JsonLd.tsx`.

**Effort:** 6–10 h (data + component design + carousel/grid + schema + responsive + a11y + QA). **Open questions:** logo quality/permission; written consent to publish each named quote.

---

## Section 3 — Cross-cutting work (folded into the estimate)

- **Navigation:** add Pilot Schools + UAS/AAM to the **Industries** dropdown (`src/lib/constants.ts` NAV_ITEMS) and the Industries listing.
- **SEO/metadata:** titles, descriptions, OpenGraph images, `sitemap.xml`, and per-page JSON-LD for the two new industry pages; `Review` schema for testimonials.
- **Content consistency:** the new homepage copy (#5), the Part 121/135 pass (#9/10), and the two new industries must all use the **same operator-type vocabulary** (one source of truth).
- **Accessibility:** alt text on all new imagery, captions for video, keyboard/focus + reduced-motion for the testimonials carousel.
- **Performance:** keep new imagery optimized (`next/image`, AVIF/WebP, right `sizes`); video lazy + `preload="none"`.
- **QA:** responsive (mobile→ultrawide), cross-browser, Lighthouse pass, preview-deploy review before production.

---

## Section 4 — Open questions for the client

1. **#1 Logo:** Do you have a logo file that already includes "Aero Group"? (lets us swap one asset)
2. **#3 Hero line:** Approve a replacement for the non-parallel middle line ("Operate Confidently" / "Launch Operations Faster" / keep "Begin Operations Quicker"?).
3. **#6 Video:** Can we see the clip? What's the hosting preference/budget (Mux vs YouTube/Vimeo vs self-host)?
4. **#9/#10 Part 121 vs 135:** Should the **Commercial** industry page state "Part 121 and 135," or should "121 and 135" stay scoped to the overview + Cargo/Charter pages? (We will not guess regulatory scope.)
5. **#11/#12 Imagery:** OK to replace the supplied simulator photo and the UAS banner with higher-quality, text-free images we source/generate on-brand?
6. **#13 Testimonials:** Do we have written permission to publish each named quote, and clean company logos for image8–12?

---

## Section 5 — Recommended sequencing

- **Phase 1 — Quick, high-value (≈ P1, ~10–13 h):** #7 (AI intro) → #5 (homepage copy split + Who-We-Serve) → #1 (logo lockup) → #9/#10 (Part 121/135 pass, after SME answer).
- **Phase 2 — High-value builds (≈ P1/P2, ~16–24 h):** #13 (testimonials) → #11 + #12 (two new industry pages) → #8 (AI page rebuild).
- **Phase 3 — Conditional (~4–6 h):** #6 (video) once the clip + hosting are resolved.
- Ship each phase to a **preview deployment** for client sign-off before production.

---

*Prepared against the live codebase (Next.js App Router, data-driven content layer). All copy blocks above are transcribed from the client's source document; design, structure, SEO, and a11y are LCR-standard additions, not part of the literal request.*
