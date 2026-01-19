import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/text-reveal";

export function About() {
  return (
    <Section background="light" className="relative z-10 rounded-t-[40px] -mt-8 pt-32 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-start">
        <Reveal>
          <Label variant="dark">ABOUT</Label>
        </Reveal>
        
        <div className="col-span-1 md:col-span-3">
          <TextReveal 
            className="h-[120vh]"
            textClassName="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-zinc-400"
          >
            Where ambitious founders, creatives, and technologists come together to reimagine what progress looks like.
          </TextReveal>
        </div>
      </div>

      <div className="mt-24 w-full grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-black/10 pt-16 items-start">
        <Stat 
          label="MENTORS" 
          value={4} 
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#7B50AD"/></svg>}
        />
        <Stat 
          label="WEEKS" 
          value={4} 
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8Z" fill="#7B50AD"/></svg>}
        />
        <Stat 
          label="STARTUPS" 
          value={50} 
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.12 2.06L7.58 11.23C6.99 12.2 7.69 13.43 8.82 13.43H12V21.94L17.54 12.77C18.13 11.8 17.43 10.57 16.3 10.57H13.12V2.06Z" fill="#7B50AD"/></svg>}
        />
        <Stat 
          label="GUESTS" 
          value={20} 
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#7B50AD"/></svg>}
        />
      </div>
    </Section>
  );
}

function Stat({ label, value, icon }: { label: string; value: number; icon: React.ReactNode }) {
  return (
    <Reveal width="100%" y={20}>
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <span className="text-6xl md:text-8xl font-semibold tracking-tighter text-black">
          <Counter value={value} />
        </span>
        <div className="flex items-center gap-2 text-[#7B50AD]">
            {icon}
            <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">{label}</span>
        </div>
      </div>
    </Reveal>
  );
}
