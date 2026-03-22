import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            prabu.
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Services</a>
            <a href="#portfolio" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Portfolio</a>
            <a href="#pricing" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#book" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition transform hover:scale-105">
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
