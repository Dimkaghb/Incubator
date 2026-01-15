import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
          "hover:scale-105 active:scale-95 duration-200",
          {
            "bg-[#D6B3FF] text-black hover:bg-[#c499ff]": variant === "primary",
            "border border-white/20 text-white hover:bg-white/10": variant === "outline",
            "bg-transparent text-white hover:text-[#D6B3FF] p-0": variant === "link",
            "bg-transparent hover:bg-white/5": variant === "ghost",
            "text-sm px-4 py-2": size === "sm",
            "text-base px-6 py-3": size === "md",
            "text-lg px-8 py-4": size === "lg",
            "w-full": fullWidth,
          },
          className
        )}
        {...props}
      >
        {variant === "link" && <span className="mr-2">→</span>}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
