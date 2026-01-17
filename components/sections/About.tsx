import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section background="light" className="relative z-10 rounded-t-[40px] -mt-8 pt-32 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-start">
        <Reveal>
          <Label variant="dark">ABOUT US</Label>
        </Reveal>
        
        <Reveal className="col-span-1 md:col-span-3" delay={0.4}>
          <h3 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
            We help ambitious founders, builders, and dreamers turn early-stage ideas into scalable companies - completely for free.
          </h3>
        </Reveal>
      </div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/10 pt-12">
        <div className="hidden md:block" /> {/* Spacer */}
        <Stat label="MENTORS" value={4} />
        <Stat label="WEEKS" value={8} />
        <Stat label="STARTUPS" value={50} />
        <Stat label="Guests" value={20} />
      </div>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <Reveal width="100%" y={20}>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold tracking-widest text-zinc-500">{label}</span>
        <span className="text-4xl md:text-6xl font-semibold tracking-tighter">
          <Counter value={value} />
        </span>
      </div>
    </Reveal>
  );
}
