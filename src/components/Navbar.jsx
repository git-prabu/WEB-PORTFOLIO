import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed top-6 inset-x-0 w-[95%] md:w-auto md:max-w-fit mx-auto z-50 glass rounded-full px-8 py-3.5 transition-all duration-300 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between gap-12">
        <Link to="/" className="text-xl font-bold tracking-tighter text-white group relative">
          prabu<span className="text-brand-accent group-hover:opacity-100 transition-opacity opacity-0 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">.</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
          </a>
          <a href="#portfolio" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
          </a>
          <a href="#pricing" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
          </a>
          <a href="#faq" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
          </a>
        </nav>
        <div className="flex items-center">
          <a href="#book" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-black bg-brand-accent rounded-full hover:bg-white hover:text-black transition transform hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]">
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
