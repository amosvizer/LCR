"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { trackCTAClick } from "@/lib/analytics";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-4 sm:p-6"
        >
          <div className="pointer-events-auto glass mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-2xl px-6 py-4 shadow-2xl shadow-black/20">
            <p className="hidden text-sm font-medium text-aero-silver sm:block">
              Ready to accelerate your certification?
            </p>
            <p className="text-sm font-medium text-aero-silver sm:hidden">
              Ready to get certified?
            </p>
            <Link
              href="/contact"
              onClick={() => trackCTAClick("talk_to_expert", "sticky_cta")}
              className="flex-shrink-0 rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-deep-blue transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan/25 active:scale-[0.98]"
            >
              Talk to an Expert
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
