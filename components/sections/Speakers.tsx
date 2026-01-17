"use client";

import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Speakers() {
  return (
    <Section background="light" className="pt-0 pb-32" id="mentors">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sticky Sidebar */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit flex flex-col gap-8">
           <Reveal>
             <Label variant="dark">MENTORS</Label>
           </Reveal>
           <Reveal delay={0.2}>
             <h2 className="text-6xl md:text-8xl font-semibold tracking-tight">Inspiring mentors</h2>
           </Reveal>
           <Reveal delay={0.4}>
             <p className="text-xl md:text-2xl font-medium text-zinc-600">
               Learn from successful founders, investors, and software engineers.
             </p> 
           </Reveal>
        </div>

        {/* Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12">
           <SpeakerCard name="Alina Chen" company="NEW FUTURES" role="Founder" image="https://framerusercontent.com/images/8Jj1iL1q1j3k5k5k5k5.jpg" delay={0.2} />
           <SpeakerCard name="David Miller" company="TECH GREEN" role="CTO" delay={0.4} />
           <SpeakerCard name="Sarah Johnson" company="SUSTAINABLE AI" role="Director" delay={0.6} />
           <SpeakerCard name="Michael Chen" company="ECO SYSTEMS" role="Lead Designer" delay={0.8} />
        </div>
      </div>
    </Section>
  );
}

function SpeakerCard({ name, company, role, image, delay }: { name: string, company: string, role: string, image?: string, delay: number }) {
  return (
    <Reveal delay={delay} width="100%">
      <div className="group cursor-pointer">
        <div className="aspect-[3/4] bg-zinc-200 rounded-lg overflow-hidden mb-4 relative">
          {/* Placeholder for image */}
          <div className="absolute inset-0 bg-zinc-300 group-hover:bg-zinc-400 transition-colors flex items-center justify-center text-zinc-500">
              [Image: {name}]
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold group-hover:text-[#7B50AD] transition-colors">{name}</h3>
          <div className="flex items-center gap-2 text-sm font-medium tracking-wide">
            <span className="text-[#7B50AD] uppercase">{company}</span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-500">{role}</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
