"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function EndBlock() {
  return (
    <Section className="relative py-20 min-h-[80vh] flex flex-col justify-between overflow-hidden" id="end-block">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://framerusercontent.com/images/feBvJZF9HpjwounW6pOdnSIGrR4.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Moderate overlay for text readability */}
      </div>

      {/* Top Bar */}
      <div className="w-full flex justify-between items-start z-10 px-4 md:px-8 relative">
        <Reveal>
          <span className="text-sm font-medium text-zinc-300">Think Forward®</span>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="text-sm font-medium text-zinc-300">Designed by James Hicks</span>
        </Reveal>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center z-10 gap-8 relative">
        <Reveal delay={0.2}>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-none">
            Join us in May.
          </h2>
        </Reveal>
        
        <Reveal delay={0.3}>
          <p className="text-xl md:text-2xl font-medium text-zinc-100">
            Secure your spot for Think Forward 2025 now.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <Button size="lg" className="mt-4 px-8 py-6 text-lg relative z-20">
            <span className="mr-2">→</span> Get your ticket
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
