# Database Schema — Supabase

> All tables, constraints, RLS policies, and migration SQL for the LCR Aero website.
> Referenced by `TECH-STACK.md` Section 7.5.

---

## Supabase Project Setup

- Create a Supabase project at supabase.com
- Install `@supabase/supabase-js` and `@supabase/ssr` in the Next.js project
- Configure the Supabase client using environment variables (see `TECH-STACK.md` Section 7.11)
- Use the `@supabase/ssr` package to create server-side and client-side Supabase clients for the App Router
- Enable Row Level Security (RLS) on all tables from the start

---

### 7.5.1 Database Schema — Phase 1

**Table: inquiries**

Stores all form submissions from the Contact page smart inquiry form.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| **id** | uuid | PRIMARY KEY, gen_random_uuid() | Unique identifier |
| **full_name** | text | NOT NULL | Contact's full name |
| **company_name** | text | NOT NULL | Company or organization name |
| **email** | text | NOT NULL | Contact email address |
| **phone** | text | NULLABLE | Optional phone number |
| **service_interest** | text | NOT NULL | Selected service category |
| **service_detail** | text | NULLABLE | Conditional follow-up selection |
| **project_details** | text | NULLABLE | Free-text project description |
| **referral_source** | text | NULLABLE | How they heard about LCR |
| **status** | text | DEFAULT 'new' | Lead status: new, contacted, in_progress, closed |
| **created_at** | timestamptz | DEFAULT now() | Submission timestamp |

**Table: newsletter_subscribers**

Stores Regulatory Watch newsletter signups.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| **id** | uuid | PRIMARY KEY | Unique identifier |
| **email** | text | UNIQUE, NOT NULL | Subscriber email |
| **subscribed_at** | timestamptz | DEFAULT now() | Subscription timestamp |
| **is_active** | boolean | DEFAULT true | Unsubscribe flag |

### 7.5.2 Database Schema — Phase 2 (Knowledge Hub)

**Table: articles**

Stores Knowledge Hub articles, regulatory updates, and guides.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| **id** | uuid | PRIMARY KEY | Unique identifier |
| **title** | text | NOT NULL | Article headline |
| **slug** | text | UNIQUE, NOT NULL | URL-friendly identifier for /knowledge/[slug] |
| **category** | text | NOT NULL | regulatory_update, guide, explainer, webinar |
| **summary** | text | NOT NULL | Short description for cards and meta tags |
| **body** | text | NOT NULL | Full article content in Markdown format |
| **author** | text | NULLABLE | Team member name for attribution |
| **featured_image_url** | text | NULLABLE | URL to hero image (Supabase Storage) |
| **is_published** | boolean | DEFAULT false | Draft/published toggle |
| **published_at** | timestamptz | NULLABLE | Publication date (for sorting and display) |
| **created_at** | timestamptz | DEFAULT now() | Row creation timestamp |
| **updated_at** | timestamptz | DEFAULT now() | Last modification timestamp |

### 7.5.3 Row Level Security (RLS) Policies

RLS must be enabled on all tables from day one. The following policies should be created:

- **inquiries:** INSERT allowed for anonymous users (the form is public). SELECT, UPDATE, DELETE restricted to authenticated admin users only (future admin panel).
- **newsletter_subscribers:** INSERT allowed for anonymous users. SELECT, UPDATE, DELETE restricted to authenticated admin users.
- **articles:** SELECT allowed for anonymous users WHERE is_published = true. INSERT, UPDATE, DELETE restricted to authenticated admin users.

---

## Migration SQL

Use this SQL to create all Phase 1 tables in a single migration:

```sql
-- ============================================================
-- Phase 1: inquiries + newsletter_subscribers
-- ============================================================

CREATE TABLE IF NOT EXISTS inquiries (
  id              uuid         PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name       text         NOT NULL,
  company_name    text         NOT NULL,
  email           text         NOT NULL,
  phone           text,
  service_interest text        NOT NULL,
  service_detail  text,
  project_details text,
  referral_source text,
  status          text         NOT NULL DEFAULT 'new',
  created_at      timestamptz  NOT NULL DEFAULT now()
);

-- RLS: Public can insert, only authenticated admins can read/update/delete
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON inquiries
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Admin full access" ON inquiries
  FOR ALL TO authenticated USING (true) WITH CHECK (true);


CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id              uuid         PRIMARY KEY DEFAULT gen_random_uuid(),
  email           text         UNIQUE NOT NULL,
  subscribed_at   timestamptz  NOT NULL DEFAULT now(),
  is_active       boolean      NOT NULL DEFAULT true
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON newsletter_subscribers
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Admin full access" ON newsletter_subscribers
  FOR ALL TO authenticated USING (true) WITH CHECK (true);


-- ============================================================
-- Phase 2: articles (Knowledge Hub)
-- ============================================================

CREATE TABLE IF NOT EXISTS articles (
  id                  uuid         PRIMARY KEY DEFAULT gen_random_uuid(),
  title               text         NOT NULL,
  slug                text         UNIQUE NOT NULL,
  category            text         NOT NULL,
  summary             text         NOT NULL,
  body                text         NOT NULL,
  author              text,
  featured_image_url  text,
  is_published        boolean      NOT NULL DEFAULT false,
  published_at        timestamptz,
  created_at          timestamptz  NOT NULL DEFAULT now(),
  updated_at          timestamptz  NOT NULL DEFAULT now()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published" ON articles
  FOR SELECT TO anon USING (is_published = true);

CREATE POLICY "Admin full access" ON articles
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Auto-update updated_at on article changes
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
```
