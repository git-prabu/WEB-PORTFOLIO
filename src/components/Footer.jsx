import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-between sm:flex-row gap-6">
          <Link to="/" className="text-3xl font-bold tracking-tighter text-neutral-900">
            prabu<span className="text-brand-emerald-dark">.</span>
          </Link>
          <div className="flex gap-8">
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors font-medium">Twitter</a>
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors font-medium">LinkedIn</a>
            <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors font-medium">GitHub</a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 font-medium">
            © {new Date().getFullYear()} Prabu. All rights reserved.
          </p>
          <p className="text-sm text-neutral-400">
            Designed with absolute precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
