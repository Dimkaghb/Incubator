import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatToExpect } from "@/components/sections/WhatToExpect";
import { Speakers } from "@/components/sections/Speakers";
import { Agenda } from "@/components/sections/Agenda";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Sponsors } from "@/components/sections/Sponsors";
import { Faq } from "@/components/sections/Faq";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090B] font-sans selection:bg-[#D6B3FF] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatToExpect />
        <Speakers />
        <Agenda />
        <Testimonials />
        <Pricing />
        <Sponsors />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
