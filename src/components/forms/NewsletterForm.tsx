"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function NewsletterForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // TODO: Connect to server action
    console.log("Newsletter subscription:", email);
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
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
          className="h-10 rounded-full bg-cyan px-4 text-deep-blue hover:bg-cyan-dark"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
      {status === "success" && (
        <p className="mt-2 text-xs text-cyan">
          Welcome to Regulatory Watch!
        </p>
      )}
    </div>
  );
}
