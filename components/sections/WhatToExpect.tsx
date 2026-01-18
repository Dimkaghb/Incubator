"use client";

import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";

export function WhatToExpect() {
  return (
    <Section background="light" className="pt-0 pb-32">
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="flex flex-col gap-6 col-span-2">
             <Reveal>
              <Label variant="dark">THE PROGRAM</Label>
             </Reveal>
             <Reveal delay={0.3}>
              <h2 className="text-6xl md:text-8xl font-semibold tracking-tight">What we offer</h2>
             </Reveal>
           </div>
           <Reveal className="flex items-end justify-end pb-4" delay={0.5}>
             <p className="text-xl md:text-2xl font-medium max-w-sm text-right">
               A 8-week intensive program designed to fast-track your startup from idea to investment.
             </p>
           </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[500px]">
          <InfoCard 
            index="01"
            title="Expert Mentorship" 
            delay={0.2}
            description={<>Get 1:1 guidance from <strong>successful founders</strong> and <strong>industry leaders</strong> who have been in your shoes.</>}
          />
          <InfoCard 
            index="02"
            title="Hands-on Building" 
            delay={0.4}
            description={<>Weekly sprints and technical workshops focused on <strong>shipping your MVP</strong> and finding product-market fit.</>}
          />
          <InfoCard 
            index="03"
            title="Global Network" 
            delay={0.6}
            description={<>Join a <strong>community of builders</strong> and get access to our network of investors and partners.</>}
          />
          
          <Reveal delay={0.8} width="100%" className="h-full">
            <div className="relative h-full rounded-2xl overflow-hidden bg-[#09090B] text-white p-8 flex flex-col justify-between group min-h-[300px]">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-60">
                  <img 
                    src="https://framerusercontent.com/images/feBvJZF9HpjwounW6pOdnSIGrR4.png" 
                    alt="CTA Background" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <div className="relative z-10 flex justify-between items-start">
                <h3 className="text-2xl font-semibold">Ready to build?</h3>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                    <path d="M2.5 10C2.5 10 5 7 7.5 7C10 7 10 13 12.5 13C15 13 15 7 17.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="relative z-10">
                <Link href="https://discord.gg/pn2dns3e" target="_blank">
                  <Button variant="primary" fullWidth>Apply</Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function InfoCard({ index, title, description, delay }: { index: string, title: string, description: React.ReactNode, delay: number }) {
  return (
    <Reveal delay={delay} width="100%" className="h-full">
      <div className="bg-[#F4F4F5] h-full rounded-2xl p-8 flex flex-col justify-between min-h-[300px] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-black/5">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <div className="text-lg text-zinc-600 leading-relaxed">
            {description}
          </div>
        </div>
        <span className="text-zinc-400 font-mono text-sm">{index}</span>
      </div>
    </Reveal>
  );
}
