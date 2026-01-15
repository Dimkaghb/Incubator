export function Footer() {
  return (
    <footer className="bg-[#09090B] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
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
