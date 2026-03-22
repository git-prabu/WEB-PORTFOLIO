import { motion } from 'framer-motion';

export default function Results() {
  return (
    <section className="py-24 bg-neutral-900 border-t border-neutral-800 overflow-hidden relative">
      <div className="absolute inset-0 max-w-7xl mx-auto [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Results that matter.</h2>
          <p className="mt-4 text-lg text-neutral-400">We don't just build websites, we build growth engines.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 p-8 rounded-3xl flex flex-col items-center justify-center space-y-4 hover:bg-neutral-800 transition">
            <h3 className="text-5xl font-extrabold text-emerald-400">100</h3>
            <span className="text-neutral-400 font-medium tracking-wide text-sm">Lighthouse Score</span>
          </div>
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 p-8 rounded-3xl flex flex-col items-center justify-center space-y-4 transform md:-translate-y-4 hover:bg-neutral-800 transition">
            <h3 className="text-5xl font-extrabold text-blue-400">2.5x</h3>
            <span className="text-neutral-400 font-medium tracking-wide text-sm">Conversion Lift</span>
          </div>
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 p-8 rounded-3xl flex flex-col items-center justify-center space-y-4 hover:bg-neutral-800 transition">
            <h3 className="text-5xl font-extrabold text-purple-400">{'<'} 1s</h3>
            <span className="text-neutral-400 font-medium tracking-wide text-sm">Page Load Time</span>
          </div>
        </div>
      </div>
    </section>
  );
}
