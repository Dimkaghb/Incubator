"use client";

import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Faq() {
  return (
    <Section background="light" className="py-32 bg-zinc-50" id="faq">
       <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 flex flex-col gap-8 items-start">
             <Reveal>
               <Label variant="dark">FAQ</Label>
             </Reveal>
             <Reveal delay={0.2}>
               <h2 className="text-6xl md:text-7xl font-semibold tracking-tight">FAQ</h2>
             </Reveal>
             <Reveal delay={0.4}>
               <p className="text-xl font-medium text-zinc-600">
                 Got questions about the program? We're here to help you get started.
               </p>
             </Reveal>
             <Reveal delay={0.6}>
               <Button variant="link" className="text-black hover:text-[#7B50AD] p-0 text-lg">Contact Admissions</Button>
             </Reveal>
          </div>

          <div className="md:col-span-8 flex flex-col gap-4">
             <FaqItem question="Do I need a technical co-founder?" answer="Not necessarily. While it helps, we accept solo non-technical founders if you have a strong domain expertise and a plan to build." delay={0.2} />
             <FaqItem question="Is it really 100% free?" answer="Yes. We do not charge any program fees and we do not take any equity in your company. We are funded by corporate partners and grants." delay={0.3} />
             <FaqItem question="Can I participate remotely?" answer="Yes, OpenLab is a hybrid program. We have a physical hub in London, but all sessions are streamed and mentorship can be done virtually." delay={0.4} />
             <FaqItem question="What stage should my startup be?" answer="We focus on early-stage startups. You might have just an idea, a prototype, or a live MVP. If you're raising Series A, you're likely too advanced for us." delay={0.5} />
             <FaqItem question="What happens after the 12 weeks?" answer="You become part of our alumni network for life. We also host a Demo Day where you can pitch to selected angel investors and VCs." delay={0.6} />
          </div>
       </div>
    </Section>
  );
}

function FaqItem({ question, answer, delay }: { question: string, answer: string, delay: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal width="100%" delay={delay} y={20}>
      <div className="border-b border-zinc-200 pb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between text-xl font-semibold py-4 hover:text-[#7B50AD] transition-colors">
          {question}
          <motion.span 
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ↓
          </motion.span>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-zinc-600 leading-relaxed max-w-2xl pb-4">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
