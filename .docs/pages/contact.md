# Contact & Smart Lead Capture

> **Route:** `/contact`
> **Design System:** See `../ARCHITECTURE.md` | **Tech Stack:** See `../TECH-STACK.md`
> **Components:** Multi-step Form (React Hook Form + Zod), Toast (confirmations). **Data flow:** See `../TECH-STACK.md` Section 7.10

---

## 5.13 CONTACT & SMART LEAD CAPTURE (/contact)

**Page H1:** Let’s Talk About Your Project

**Page Intro:** Whether you’re starting from scratch or expanding an established operation, our team is ready to help. Tell us about your project and we’ll connect you with the right expert within 24 hours.

### Smart Inquiry Form

Replace the current generic Google Form with a multi-step, conditional inquiry form built directly into the site. The form should use the following logic:

**Step 1 — Contact Information:** Full Name (required), Company Name (required), Email Address (required), Phone Number (optional)

**Step 2 — Service Interest:** Dropdown or card selection: Initial Certification | Operational Expansion / Major Change | Safety & SMS | Technical Publications / Manuals | AI-Enhanced Services | Not Sure — I Need Guidance

**Step 3 — Conditional Follow-Up:** If “Initial Certification” is selected, show: “Which certification are you seeking? Part 121 | Part 135 | Part 145 | Part 137 | Other”. If “Operational Expansion” is selected, show: “What type of change? New Aircraft Type | ETOPS | Extended Overwater | Flag/Supplemental Transition | CPDLC | Additional Ratings | Other”.

**Step 4 — Project Details:** Free text field: “Tell us about your project, timeline, and any specific challenges you’re facing.”

**Step 5 — How did you hear about us?:** Search Engine | Referral | Social Media | Industry Event/Conference | Other

### Confirmation Message

Instead of a generic “Thank you,” display a context-aware message:

- If Part 121 was selected: “Thank you. Our Part 121 Certification Specialist will contact you within 24 hours. In the meantime, download our Part 121 Certification Readiness Checklist.”
- If Part 135 was selected: “Thank you. Our Part 135 team will reach out shortly. Download our Part 135 Pre-Application Guide while you wait.”
- Generic: “Thank you. A member of our team will be in touch within 24 hours.”

### Direct Contact

Below the form, display:

**Email:** info@lcr.aero

**Invitation:** “Prefer a direct conversation? Email us at info@lcr.aero and we’ll set up a time to discuss your needs. No obligation.”

## 5.14 CLIENT PORTAL (Future Phase)

The Client Portal is a Phase 2 feature designed to differentiate LCR from competitors and increase client retention. It is listed here for future development planning.

### Planned Features

- **Document Repository:** Secure, version-controlled storage for all authored manuals and audit reports. Clients always have access to the current effective revision.
- **Project Tracker:** Visual progress tracker for certification projects showing the current phase, completed milestones, and upcoming steps.
- **Support Tickets:** Direct communication channel to assigned LCR consultants for technical questions.
