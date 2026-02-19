"use client";

import { useState } from "react";
import { subscribeNewsletter } from "@/actions/subscribe-newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Loader2 } from "lucide-react";
import { trackFormSubmission } from "@/lib/analytics";

export function NewsletterForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const formData = new FormData();
      formData.append("email", email);
      const result = await subscribeNewsletter(formData);

      if (result.success) {
        trackFormSubmission("newsletter");
        setStatus("success");
        setMessage(result.message);
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setMessage(result.message);
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const isDark = variant === "dark";

  return (
    <div>
      <p className={`mb-3 text-sm font-medium ${isDark ? "text-aero-silver" : "text-deep-blue"}`}>
        Regulatory Watch Newsletter
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`h-10 rounded-full border-0 px-4 text-sm ${
            isDark
              ? "bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-cyan"
              : "bg-aero-silver/50 text-deep-blue placeholder:text-slate/50 focus-visible:ring-cyan"
          }`}
        />
        <Button
          type="submit"
          size="sm"
          disabled={status === "loading"}
          className="h-10 rounded-full bg-cyan px-4 text-deep-blue hover:bg-cyan-dark disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>
      {status === "success" && (
        <p className="mt-2 text-xs text-cyan">{message}</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-orange">{message}</p>
      )}
    </div>
  );
}
