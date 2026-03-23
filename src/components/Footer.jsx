import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center justify-between sm:flex-row gap-8">
          <Link to="/" className="text-4xl font-bold tracking-tighter text-white">
            prabu<span className="text-brand-accent drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">.</span>
          </Link>
          <div className="flex gap-8">
            <a href="#" className="text-neutral-400 hover:text-brand-accent transition-colors font-medium">Twitter</a>
            <a href="#" className="text-neutral-400 hover:text-brand-accent transition-colors font-medium">LinkedIn</a>
            <a href="#" className="text-neutral-400 hover:text-brand-accent transition-colors font-medium">GitHub</a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 font-medium">
            © {new Date().getFullYear()} Prabu. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500">
            Designed with absolute precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
