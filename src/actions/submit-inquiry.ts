"use server";

import { z } from "zod";

const inquirySchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  serviceInterest: z.string().min(1, "Please select a service"),
  serviceDetail: z.string().optional(),
  projectDetails: z.string().optional(),
  referralSource: z.string().optional(),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;

export async function submitInquiry(data: InquiryFormData) {
  try {
    const validated = inquirySchema.parse(data);

    // TODO: Connect to Supabase
    // const supabase = await createClient();
    // const { error } = await supabase.from("inquiries").insert({
    //   full_name: validated.fullName,
    //   company_name: validated.companyName,
    //   email: validated.email,
    //   phone: validated.phone || null,
    //   service_interest: validated.serviceInterest,
    //   service_detail: validated.serviceDetail || null,
    //   project_details: validated.projectDetails || null,
    //   referral_source: validated.referralSource || null,
    // });

    // TODO: Send emails via Resend
    // await resend.emails.send({ ... });

    console.log("Inquiry submitted:", validated);

    return {
      success: true,
      message: getConfirmationMessage(validated.serviceInterest, validated.serviceDetail),
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: "Please check your form inputs and try again." };
    }
    console.error("Inquiry submission error:", error);
    return { success: false, message: "Something went wrong. Please try again or email us at info@lcr.aero." };
  }
}

function getConfirmationMessage(serviceInterest: string, serviceDetail?: string): string {
  if (serviceInterest === "Initial Certification") {
    if (serviceDetail === "Part 121") {
      return "Thank you. Our Part 121 Certification Specialist will contact you within 24 hours. In the meantime, download our Part 121 Certification Readiness Checklist.";
    }
    if (serviceDetail === "Part 135") {
      return "Thank you. Our Part 135 team will reach out shortly. Download our Part 135 Pre-Application Guide while you wait.";
    }
    return "Thank you. Our certification team will contact you within 24 hours to discuss your project.";
  }
  return "Thank you. A member of our team will be in touch within 24 hours.";
}
