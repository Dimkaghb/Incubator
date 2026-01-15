import { cn } from "@/lib/utils";
import * as React from "react";

// Simple utility if clsx/tailwind-merge aren't available, but I'll assume standard Shadcn-like structure or just standard props.
// Since I don't have lib/utils yet, I'll create a simple version here or just inline it.
// I'll create lib/utils.ts next.

interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "dark" | "light";
}

export function Label({ children, className, variant = "light", ...props }: LabelProps) {
  const isDark = variant === "dark";
  return (
    <div 
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase
        ${isDark ? "bg-white text-black" : "bg-white text-black"}
        ${className}`}
      {...props}
    >
      <span className="mr-2 text-[#7B50AD]">•</span>
      {children}
    </div>
  );
}
