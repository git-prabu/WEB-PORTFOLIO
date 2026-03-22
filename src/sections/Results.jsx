export default function Results() {
  return (
    <section className="py-32 bg-[#0A0A0B] text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-0 max-w-7xl mx-auto [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      {/* Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-emerald/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Results that matter</h2>
          <p className="mt-6 text-xl text-neutral-400 font-medium">We don't just build websites, we build growth engines.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[2.5rem] flex flex-col items-center justify-center space-y-6 hover:bg-white/10 transition-colors duration-500 group">
            <h3 className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-emerald-600 group-hover:scale-105 transition-transform duration-500">100</h3>
            <span className="text-neutral-400 font-semibold tracking-[0.2em] uppercase text-xs">Lighthouse Score</span>
          </div>
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[2.5rem] flex flex-col items-center justify-center space-y-6 transform md:-translate-y-8 hover:bg-white/10 transition-all duration-500 group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 group-hover:scale-105 transition-transform duration-500">2.5x</h3>
            <span className="text-neutral-400 font-semibold tracking-[0.2em] uppercase text-xs">Conversion Lift</span>
          </div>
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[2.5rem] flex flex-col items-center justify-center space-y-6 hover:bg-white/10 transition-colors duration-500 group">
            <h3 className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600 group-hover:scale-105 transition-transform duration-500">{'<'} 1s</h3>
            <span className="text-neutral-400 font-semibold tracking-[0.2em] uppercase text-xs">Page Load Time</span>
          </div>
        </div>
      </div>
    </section>
  );
}
