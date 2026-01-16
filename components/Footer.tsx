export function Footer() {
  return (
    <footer className="relative bg-[#09090B] text-white py-12 border-t border-white/10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
          <img 
            src="https://framerusercontent.com/images/feBvJZF9HpjwounW6pOdnSIGrR4.png" 
            alt="Footer Background" 
            className="w-full h-full object-cover" 
          />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tight">OpenLab</div>
        <div className="flex gap-8 text-sm text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        <div className="text-sm text-zinc-500">
          © 2026 OpenLab Incubator. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
