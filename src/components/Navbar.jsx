import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed top-6 inset-x-0 w-[95%] md:w-auto md:max-w-fit mx-auto z-50 glass rounded-full px-8 py-3.5 transition-all duration-300">
      <div className="flex items-center justify-between gap-12">
        <Link to="/" className="text-xl font-bold tracking-tighter text-neutral-900 group">
          prabu<span className="text-brand-emerald-dark group-hover:opacity-100 transition-opacity opacity-0">.</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">Services</a>
          <a href="#portfolio" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">Portfolio</a>
          <a href="#pricing" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center">
          <a href="#book" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition transform hover:scale-105 shadow-premium">
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
