# Architecture — Sitemap, Navigation & Design System

> Reference: `OVERVIEW.md` for strategy context. `TECH-STACK.md` for implementation details.

---

# 3. INFORMATION ARCHITECTURE & SITEMAP

## 3.1 Primary Navigation Structure

The navigation follows a Hub-and-Spoke model designed for three primary user personas: the Start-up CEO (speed, cost certainty), the Safety/Compliance Director (technical depth, tools), and the Expanding Operator (specific authorization guidance).

| Top Nav Item | Dropdown / Sub-Pages | Purpose |
| --- | --- | --- |
| **Solutions** | Certification Services, Operational Expansion, Safety & SMS, Technical Publications, AI-Enhanced Services | Core service offering organized by client need, not internal taxonomy |
| **Industries** | Commercial Airlines, Cargo & Charter, Repair Stations (MRO), Agricultural Aviation, Defense & Government | Speaks the specific language of each buyer type for long-tail SEO |
| **Knowledge Hub** | Regulatory Updates, Guides & Toolkits, Webinars, FAA Process Explainers | Lead generation engine through demonstrated expertise and free value |
| **About** | Our Story, The LCR Team (Expert Directory), Client Success Stories, Why LCR | Trust-building through personnel credentials and proven results |
| **Contact** | Smart Inquiry Form, Direct Consultation Booking | Conversion-optimized intake with conditional routing |

## 3.2 Persistent Elements (Every Page)

- **Header:** Logo (left), Navigation (center), “Request Consultation” CTA button (right, Electric Cyan accent)
- **Sticky CTA Bar:** Appears on scroll — “Ready to accelerate your certification? Talk to an expert.”
- **Footer:** 3-column layout with: Company info + email (info@lcr.aero) | Quick Links to all major pages | Trust badges (FAA logo acknowledgment, industry memberships, “Since 2013”). Include a brief tagline: “Former FAA inspectors. AI-enhanced precision. Certification certainty.”

# 4. VISUAL DESIGN SYSTEM

## 4.1 Design Philosophy

“Enterprise-Grade Clarity” — the site must look modern and efficient without looking risky. The aviation sector demands conservatism and precision. The visual language should signal: “We are precise, we are current, we are trustworthy.” The design avoids generic aviation stock photos of airplanes in sunsets. Instead, it uses abstract data visualizations, blueprint-style line art, and professional team photography.

## 4.2 Color Palette

**Role**

**Color**

**Hex Code**

**Usage**

| Role | Color | Hex Code | Usage |
| --- | --- | --- | --- |
| **Primary** | Deep Space Blue | #0B1C2E | Backgrounds, headers, nav, footer |
| **Secondary** | Aero Silver | #E1E6EB | Card backgrounds, section dividers, body bg |
| **Accent** | Electric Cyan | #00E8FF | CTAs, hover states, active indicators, key metrics |
| **Alert / Emphasis** | Signal Orange | #FF5722 | Urgent CTAs, warning badges, limited use |
| **Body Text** | Slate Gray | #3A4553 | All body copy for maximum readability |

## 4.3 Typography

- **Headings:** Sora or Space Grotesk — modern, slightly tech-forward sans-serif with character. Weights: Bold (700) for H1/H2, SemiBold (600) for H3/H4.
- **Body:** Inter — neutral, highly readable interface font optimized for screen rendering at all sizes. Weight: Regular (400) for body, Medium (500) for emphasis.
- **Monospace / Technical:** JetBrains Mono — for any regulation citations, CFR references, or code snippets.

## 4.4 Layout Principles

- **Bento Grid:** Modular, card-based layouts for organizing dense service and credential information into scannable blocks.
- **Scrollytelling:** Scroll-triggered animations for complex processes (e.g., the 5-Phase Certification visual). Each phase reveals as the user scrolls.
- **Whitespace:** Generous spacing between sections. Aviation clients expect clean, uncluttered precision.
- **Responsive:** Mobile-first design. Many aviation professionals access information from hangars, airport Wi-Fi, or mobile devices.
- **Accessibility:** WCAG 2.2 AA compliance. High contrast ratios, keyboard navigation, screen-reader compatibility. Accessible design signals attention to regulatory detail.
