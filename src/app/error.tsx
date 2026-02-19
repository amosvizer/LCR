"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    trackEvent({
      action: "error_client",
      category: "error",
      label: error.message,
    });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-deep-blue px-6 text-center">
      <p className="font-mono text-sm font-medium uppercase tracking-widest text-orange">
        Something went wrong
      </p>
      <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
        An unexpected error occurred
      </h1>
      <p className="mt-4 max-w-md font-body text-base leading-relaxed text-aero-silver/70">
        We apologize for the inconvenience. Please try again or contact us if the problem persists.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button
          onClick={reset}
          className="rounded-full bg-cyan px-8 py-3 text-sm font-semibold text-deep-blue transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan/20"
        >
          Try Again
        </button>
        <a
          href="mailto:info@lcr.aero"
          className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
        >
          Email Support
        </a>
      </div>
    </div>
  );
}
