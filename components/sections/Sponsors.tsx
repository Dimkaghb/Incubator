"use client";

import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Sponsors() {
  return (
    <Section background="light" className="py-32" id="sponsors">
      <div className="flex flex-col gap-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="flex flex-col gap-6">
               <Reveal>
                 <Label variant="dark">SPONSORS</Label>
               </Reveal>
               <Reveal delay={0.2}>
                 <h3 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight max-w-2xl">
                   We’re proud to partner with an outstanding group of forward-thinking organisations.
                 </h3>
               </Reveal>
            </div>
            <div className="md:text-right pb-2">  
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Sponsor Cards Placeholder */}
            {[1, 2, 3].map((i) => (
               <Reveal key={i} delay={0.1 * i} width="100%">
                 <div className="aspect-square bg-zinc-100 rounded-xl flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all cursor-pointer h-full w-full">
                    <div className="w-16 h-16 bg-zinc-300 rounded-full" /> {/* Logo Placeholder */}
                 </div>
               </Reveal>
            ))}

            {/* CTA Card */}
            <Reveal delay={0.8} width="100%">
              <div className="aspect-square relative rounded-xl overflow-hidden bg-zinc-900 text-white flex flex-col items-center justify-center p-8 text-center gap-6 group h-full w-full">
                  <div className="absolute inset-0 opacity-50">
                    <img 
                        src="https://framerusercontent.com/images/feBvJZF9HpjwounW6pOdnSIGrR4.png" 
                        alt="Sponsor Background" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  <div className="relative z-10 font-semibold text-2xl">Become a sponsor</div>
                  <div className="relative z-10">
                    <Button variant="primary" size="sm">Get in touch</Button>
                  </div>
              </div>
            </Reveal>
         </div>
      </div>
    </Section>
  );
}
