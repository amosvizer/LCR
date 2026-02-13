"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { resend, FROM_EMAIL } from "@/lib/resend";
import NewsletterWelcome from "@/emails/NewsletterWelcome";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function subscribeNewsletter(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const validated = newsletterSchema.parse({ email });

    // Insert into Supabase
    const supabase = await createClient();
    const { error: dbError } = await supabase.from("newsletter_subscribers").insert({
      email: validated.email,
    });

    if (dbError) {
      // Handle duplicate email gracefully
      if (dbError.code === "23505") {
        return { success: true, message: "You're already subscribed to Regulatory Watch!" };
      }
      console.error("Supabase insert error:", dbError);
      return { success: false, message: "Something went wrong. Please try again." };
    }

    // Send welcome email via Resend (non-blocking)
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: validated.email,
          subject: "Welcome to Regulatory Watch by LCR Aero Group",
          react: NewsletterWelcome(),
        });
      } catch (emailError) {
        console.error("Email send error (non-blocking):", emailError);
      }
    }

    return { success: true, message: "Welcome to Regulatory Watch! Check your email for confirmation." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: "Please enter a valid email address." };
    }
    console.error("Newsletter subscription error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
