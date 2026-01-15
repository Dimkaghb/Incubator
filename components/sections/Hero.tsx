"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

function Squiggle() {
  return (
    <svg width="63" height="16" viewBox="0 0 63 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D6B3FF]">
      <path d="M2.5 8C2.5 8 7.5 2 12.5 2C17.5 2 17.5 14 22.5 14C27.5 14 27.5 2 32.5 2C37.5 2 37.5 14 42.5 14C47.5 14 47.5 2 52.5 2C57.5 2 60.5 8 60.5 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden bg-[#09090B] text-white">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />
       
       <div className="z-10 flex flex-col items-center text-center gap-8 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="animate-pulse"
          >
            <Squiggle />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-9xl lg:text-[160px] leading-[0.85] font-semibold tracking-tighter mix-blend-screen"
          >
            OpenLab
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="block mt-2 md:mt-4"
            >
              Incubator
            </motion.span>
          </motion.h1>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="mt-8"
          >
            <Button size="lg" variant="primary">
              Apply for Cohort
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-0 right-0 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-lg md:text-xl font-medium text-zinc-400 gap-4"
        >
          <div>Applications Close: Mar 01</div>
          <div>Remote & On-site</div>
          <div>Global Cohort</div>
        </motion.div>
    </section>
  );
}
