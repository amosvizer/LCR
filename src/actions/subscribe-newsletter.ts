"use server";

import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function subscribeNewsletter(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const validated = newsletterSchema.parse({ email });

    // TODO: Connect to Supabase
    // const supabase = await createClient();
    // const { error } = await supabase.from("newsletter_subscribers").insert({
    //   email: validated.email,
    // });

    // TODO: Send welcome email via Resend

    console.log("Newsletter subscription:", validated.email);

    return { success: true, message: "Welcome to Regulatory Watch! Check your email for confirmation." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: "Please enter a valid email address." };
    }
    console.error("Newsletter subscription error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
