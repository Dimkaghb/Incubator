import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-8 transition-all duration-300">
      <Link href="/" className="text-xl font-bold tracking-tight text-white z-50">
        OpenLab
      </Link>
      
      <div className="hidden md:flex items-center gap-10">
        <Link href="#curriculum" className="text-sm font-medium uppercase tracking-wider text-white/70 hover:text-[#D6B3FF] transition-colors">Curriculum</Link>
        <Link href="#perks" className="text-sm font-medium uppercase tracking-wider text-white/70 hover:text-[#D6B3FF] transition-colors">Perks</Link>
      </div>

      <Link href="https://form.typeform.com/to/WvG1cXe7" target="_blank">
        <Button variant="link" className="text-white hover:text-[#D6B3FF]">
          Apply Now
        </Button>
      </Link>
    </nav>
  );
}
