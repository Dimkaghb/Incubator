import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  containerClassName?: string;
  background?: "dark" | "light" | "gray";
}

export function Section({ children, className, containerClassName, background = "dark", ...props }: SectionProps) {
  return (
    <section 
      className={cn(
        "py-24 px-6 md:px-12",
        {
          "bg-[#09090B] text-white": background === "dark",
          "bg-white text-black": background === "light",
          "bg-zinc-100 text-black": background === "gray",
        },
        className
      )}
      {...props}
    >
      <div className={cn("max-w-7xl mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
