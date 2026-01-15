import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 backdrop-blur-sm bg-black/10">
      <Link href="/" className="text-xl font-bold tracking-tight text-white z-50">
        OpenLab
      </Link>
      
      <div className="hidden md:flex items-center gap-8 bg-black/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
        <Link href="#mentors" className="text-sm font-medium uppercase tracking-wide text-white/80 hover:text-[#D6B3FF] transition-colors">Mentors</Link>
        <Link href="#curriculum" className="text-sm font-medium uppercase tracking-wide text-white/80 hover:text-[#D6B3FF] transition-colors">Curriculum</Link>
        <Link href="#perks" className="text-sm font-medium uppercase tracking-wide text-white/80 hover:text-[#D6B3FF] transition-colors">Perks</Link>
        <Link href="#partners" className="text-sm font-medium uppercase tracking-wide text-white/80 hover:text-[#D6B3FF] transition-colors">Partners</Link>
      </div>

      <Button variant="link" className="text-white hover:text-[#D6B3FF]">
        Apply Now
      </Button>
    </nav>
  );
}
