export interface Inquiry {
  id: string;
  full_name: string;
  company_name: string;
  email: string;
  phone: string | null;
  service_interest: string;
  service_detail: string | null;
  project_details: string | null;
  referral_source: string | null;
  status: "new" | "contacted" | "in_progress" | "closed";
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: "regulatory_update" | "guide" | "explainer" | "webinar";
  summary: string;
  body: string;
  author: string | null;
  featured_image_url: string | null;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}
