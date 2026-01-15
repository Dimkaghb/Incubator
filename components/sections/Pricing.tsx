"use client";

import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function Pricing() {
  return (
    <Section background="light" className="py-32" id="perks">
       <div className="flex flex-col gap-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="flex flex-col gap-6">
               <Reveal>
                 <Label variant="dark">PERKS</Label>
               </Reveal>
               <Reveal delay={0.2}>
                 <h2 className="text-6xl md:text-8xl font-semibold tracking-tight">Zero Cost</h2>
               </Reveal>
            </div>
            <div className="md:text-right pb-4">
               <Reveal delay={0.4}>
                 <p className="text-xl md:text-2xl font-medium text-zinc-600 max-w-md ml-auto">
                   We don't take equity and we don't charge fees. We just want to see you succeed.
                 </p>
               </Reveal>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard 
              name="Education"
              price="$0"
              originalPrice=""
              description="Full access to our 12-week curriculum:"
              features={["Weekly live workshops", "Recorded content library", "Guest speaker sessions"]}
              delay={0.2}
            />
            <PricingCard 
              name="Mentorship"
              price="$0"
              originalPrice=""
              description="Direct access to industry experts:"
              features={["1:1 Office hours", "Dedicated lead mentor", "Investor pitch feedback"]}
              highlight
              delay={0.4}
            />
            <PricingCard 
              name="Resources"
              price="$0"
              originalPrice=""
              description="Tools to build your startup:"
              features={["$50k+ in software credits", "Co-working space access", "Legal & Cloud perks"]}
              delay={0.6}
            />
         </div>
       </div>
    </Section>
  );
}

function PricingCard({ name, price, originalPrice, description, features, highlight, delay }: { name: string, price: string, originalPrice: string, description: string, features: string[], highlight?: boolean, delay: number }) {
  return (
    <Reveal width="100%" delay={delay} className="h-full">
      <div className={cn(
        "flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 h-full",
        highlight ? "bg-black text-white border-black" : "bg-white border-zinc-200 hover:border-black/20"
      )}>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight">{price}</span>
              {originalPrice && <span className={cn("text-lg line-through decoration-2", highlight ? "text-zinc-500" : "text-zinc-400")}>{originalPrice}</span>}
            </div>
            <p className={cn("text-sm", highlight ? "text-zinc-400" : "text-zinc-500")}>Valued at $25,000+</p>
          </div>
          
          <div className="w-full h-px bg-current opacity-10 my-2" />

          <div className="flex flex-col gap-4">
            <p className="font-medium">{description}</p>
            <ul className="flex flex-col gap-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm opacity-80">
                  <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-current" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <Button 
            fullWidth 
            variant={highlight ? "primary" : "outline"}
            className={cn(highlight ? "" : "border-zinc-200 text-black hover:bg-zinc-50")}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
