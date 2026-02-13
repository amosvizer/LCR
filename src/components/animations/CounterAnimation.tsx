"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterAnimationProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
  isYear?: boolean;
}

export function CounterAnimation({
  target,
  suffix = "",
  duration = 2,
  className,
  isYear = false,
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    // For integers, round to whole number. For decimals, keep one decimal.
    if (Number.isInteger(target)) {
      return Math.round(latest);
    }
    return Math.round(latest * 10) / 10;
  });

  const [displayValue, setDisplayValue] = useState(isYear ? target : 0);

  useEffect(() => {
    if (isYear) return;
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);

    const controls = animate(motionValue, target, {
      duration,
      type: "spring",
      stiffness: 50,
      damping: 20,
      mass: 1,
    });

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, hasAnimated, motionValue, rounded, target, duration, isYear]);

  if (isYear) {
    return (
      <span ref={ref} className={cn(className)}>
        {target}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={cn(className)}>
      {displayValue}
      {suffix}
    </span>
  );
}
