type GtagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: string | number | undefined;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
}

export function trackEvent({ action, category, label, value, ...rest }: GtagEvent) {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...rest,
  });
}

export function trackFormStep(formName: string, stepNumber: number, stepName: string) {
  trackEvent({
    action: "form_step",
    category: "engagement",
    form_name: formName,
    step_number: stepNumber,
    step_name: stepName,
  });
}

export function trackFormSubmission(formName: string, metadata?: Record<string, string>) {
  trackEvent({
    action: "form_submission",
    category: "conversion",
    form_name: formName,
    ...metadata,
  });
}

export function trackCTAClick(ctaName: string, location: string) {
  trackEvent({
    action: "cta_click",
    category: "engagement",
    cta_name: ctaName,
    label: location,
  });
}

export function trackOutboundClick(url: string) {
  trackEvent({
    action: "outbound_click",
    category: "engagement",
    label: url,
  });
}
