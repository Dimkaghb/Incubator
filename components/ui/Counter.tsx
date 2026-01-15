"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
  duration?: number; // Duration is less relevant with spring, but we can play with stiffness
}

export function Counter({ value, direction = "up", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    damping: 30,
    stiffness: 50,
    duration: duration * 1000, // Approximate mapping if we were using duration-based
  });

  const displayValue = useTransform(springValue, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}
