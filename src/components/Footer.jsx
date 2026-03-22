import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Link to="/" className="text-2xl font-bold tracking-tighter mb-4 sm:mb-0">
            prabu.
          </Link>
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Prabu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
