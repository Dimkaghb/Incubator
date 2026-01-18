"use client";

import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";

export function Agenda() {
  return (
    <Section background="dark" className="py-32" id="curriculum">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-12">
           <div className="flex flex-col gap-8">
             <Reveal>
               <Label variant="light">4-WEEK PROGRAM</Label>
             </Reveal>
             <Reveal delay={0.2}>
               <h2 className="text-6xl md:text-8xl font-semibold tracking-tight text-white">Curriculum</h2>
             </Reveal>
           </div>
           {/* Logo placeholder if needed */}
        </div>

        {/* Schedule List */}
        <div className="flex flex-col">
           <ScheduleItem time="Days 1-3" title="Ideation & Validation" speaker="Problem Statement, User Research" tag="Foundation" delay={0.2} />
           <ScheduleItem time="Days 4-14" title="Building the MVP" speaker="MVP, Prototyping, First Code" tag="Build" delay={0.3} />
           <ScheduleItem time="Days 15-18" title="Go-to-Market Strategy" speaker="Marketing, Sales, Growth Loops" tag="Growth" delay={0.4} />
           <ScheduleItem time="Days 19-22" title="Business Model & Finance" speaker="Monetization, Unit Economics" tag="Business" delay={0.5} />
           <ScheduleItem time="Days 23-27" title="Pitch Deck Prep" speaker="Storytelling, Design, Feedback" tag="Pitch" delay={0.6} />
           <ScheduleItem time="Day 28" title="Demo Day" speaker="Pitches to possible investors" tag="Finale" delay={0.7} />
        </div>
      </div>
    </Section>
  );
}

function ScheduleItem({ time, title, speaker, tag, delay }: { time: string, title: string, speaker: string, tag: string, delay: number }) {
  return (
    <Reveal width="100%" delay={delay} y={20}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-white/10 hover:bg-white/5 transition-colors items-center px-4 -mx-4 rounded-lg group">
        <div className="md:col-span-3 text-zinc-400 font-mono text-sm group-hover:text-white transition-colors">{time}</div>
        <div className="md:col-span-6 text-xl md:text-2xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">{title}</div>
        <div className="md:col-span-3 flex flex-col md:items-end gap-1">
          <span className="text-white text-sm font-semibold">{speaker}</span>
          <span className="text-[#D6B3FF] text-xs uppercase tracking-wider">{tag}</span>
        </div>
      </div>
    </Reveal>
  );
}
