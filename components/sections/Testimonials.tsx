"use client";

import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const testimonials = [
    {
      text: "“OpenLab was the catalyst we needed. The mentorship helped us pivot our product and close our seed round within 3 months of graduating.”",
      name: "Igor Blink",
      role: "Founder and CEO, TabAI"
    },
    {
      text: "“The network is incredible. Being able to message a mentor and get a response in minutes saved us months of trial and error.”",
      name: "Milan Gorislavets",
      role: "Founder and CEO, Tilt.ai"
    },
    {
      text: "“Unlike other incubators, OpenLab genuinely put our success first. No equity, no fees, just pure value and support.”",
      name: "Zhan B.",
      role: "Founder and CEO, Catops"
    }
  ];

  return (
    <Section background="light" className="py-32 bg-zinc-50 overflow-hidden">
      <div className="flex flex-col items-center text-center gap-12">
        <Reveal>
          <Label variant="dark">ALUMNI STORIES</Label>
        </Reveal>
        
        <div className="max-w-4xl mx-auto">
          {/* Simple Slider Implementation - Just showing the first one for simplicity or mapping all */}
          <div className="flex flex-col gap-12">
             {testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 0.2} width="100%">
                  <div className="flex flex-col gap-8 items-center">
                    <h3 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-zinc-900">
                      {t.text}
                    </h3>
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-semibold text-lg">{t.name}</span>
                      <span className="text-zinc-500">{t.role}</span>
                    </div>
                    {i < testimonials.length - 1 && <div className="w-12 h-1 bg-zinc-200 mt-8 rounded-full" />}
                  </div>
                </Reveal>
             ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
