"use client";

import { motion, useInView, useAnimation, HTMLMotionProps } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  y?: number;
}

export function Reveal({ 
  children, 
  width = "fit-content", 
  delay = 0.25, 
  duration = 0.5,
  y = 75,
  className,
  ...props 
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: y },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
      style={{ width }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
