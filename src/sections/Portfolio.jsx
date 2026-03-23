import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    { 
      tag: 'Scale Dashboard', span: 'md:col-span-2', height: 'h-[500px]',
      mockup: (
        <div className="absolute -bottom-8 -right-8 w-[105%] h-[85%] bg-[#030303] rounded-tl-3xl border-t border-l border-white/10 shadow-2xl flex flex-col overflow-hidden group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-700">
           <div className="h-10 border-b border-white/5 flex items-center px-6 gap-2 bg-[#0A0A0A]">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div><div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div><div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
           </div>
           <div className="flex-1 flex p-6 gap-6">
              <div className="w-1/4 space-y-4">
                 <div className="h-3 w-full bg-white/10 rounded"></div>
                 <div className="h-3 w-3/4 bg-white/5 rounded mt-8"></div>
                 <div className="h-3 w-5/6 bg-white/5 rounded"></div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                 <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-end overflow-hidden relative">
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-accent/20 to-transparent border-b-2 border-brand-accent"></div>
                 </div>
                 <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col gap-2">
                    <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                    <div className="flex-1 rounded bg-brand-purple/20"></div>
                 </div>
                 <div className="col-span-2 bg-[#111] rounded-xl border border-white/5 p-4 relative overflow-hidden">
                    <div className="absolute top-4 left-4 h-2 w-32 bg-white/10 rounded"></div>
                    <div className="absolute bottom-4 right-4 h-8 w-24 bg-brand-accent/20 rounded-full border border-brand-accent/50"></div>
                 </div>
              </div>
           </div>
        </div>
      )
    },
    { 
      tag: 'E-Comm Flow', span: 'md:col-span-1', height: 'h-[500px]',
      mockup: (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[120%] bg-[#030303] rounded-t-[3rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden group-hover:-translate-y-8 transition-transform duration-700 mt-12">
            <div className="h-8 w-32 bg-black mx-auto mt-4 rounded-full border border-white/10"></div>
            <div className="p-6 space-y-4 mt-4">
                <div className="aspect-square bg-white/5 rounded-2xl border border-white/5"></div>
                <div className="h-4 w-2/3 bg-white/10 rounded"></div>
                <div className="h-10 w-full bg-brand-accent text-black font-bold flex items-center justify-center rounded-xl text-sm mt-4">Add to Cart</div>
            </div>
        </div>
      )
    },
    { 
      tag: 'Mobile App Wire', span: 'md:col-span-1', height: 'h-[400px]',
      mockup: (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-[120%] bg-[#0A0A0A] rounded-t-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden group-hover:scale-105 transition-transform duration-700">
            <div className="h-6 w-24 bg-black mx-auto mt-2 rounded-b-xl border flex-none border-b-white/10 border-x-white/10"></div>
            <div className="p-6 space-y-4">
                <div className="h-24 bg-gradient-to-br from-brand-purple/20 to-brand-accent/20 rounded-2xl border border-white/5"></div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white/5 rounded-xl border border-white/5"></div>
                    <div className="h-20 bg-white/5 rounded-xl border border-white/5"></div>
                </div>
            </div>
        </div>
      )
    },
    { 
      tag: 'Architecture', span: 'md:col-span-2', height: 'h-[400px]',
      mockup: (
        <div className="absolute inset-8 rounded-2xl border border-white/5 flex items-center justify-center group-hover:bg-white/5 transition-colors duration-500 overflow-hidden">
            <svg className="w-full h-full opacity-20 group-hover:opacity-40 transition-opacity" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 Q 25 50 50 80 T 100 0" fill="none" stroke="#06b6d4" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
                <path d="M0 100 Q 25 80 50 40 T 100 20" fill="none" stroke="#6366f1" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
            </svg>
            <div className="absolute bg-[#030303] border border-white/10 px-6 py-3 rounded-full text-xs font-bold tracking-widest text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]">ENTERPRISE SCALE</div>
        </div>
      )
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Selected Works</h2>
          <p className="mt-6 text-xl text-neutral-400 font-medium leading-relaxed">A curated collection of projects where design meets precise engineering.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative ${item.span} ${item.height} rounded-[2.5rem] overflow-hidden cursor-pointer bg-[#0A0A0A] border border-white/5 flex items-center justify-center shadow-lg hover:shadow-[0_14px_40px_rgba(6,182,212,0.15)] hover:border-brand-accent/20 transition-all duration-700`}
            >
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-brand-accent/5 transition-colors duration-500 z-10 pointer-events-none" />
              <div className="w-full h-full bg-[#111] overflow-hidden relative">
                {item.mockup}
              </div>
              <div className="absolute top-8 left-8 z-20 pointer-events-none">
                <span className="px-5 py-2.5 bg-[#030303]/80 backdrop-blur-xl rounded-full text-sm font-semibold text-white shadow-sm border border-white/10">
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-8 left-8 z-20 opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none">
                <span className="flex items-center space-x-2 text-black bg-brand-accent px-6 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)] border border-brand-accent">
                  <span>View Case Study</span>
                  <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
