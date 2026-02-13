import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = schema.parse(body);

    // TODO: Connect to Supabase
    // const supabase = createClient();
    // const { error } = await supabase.from("newsletter_subscribers").insert({ email });

    // TODO: Send welcome email via Resend

    console.log("Newsletter API subscription:", email);

    return NextResponse.json(
      { success: true, message: "Welcome to Regulatory Watch!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
