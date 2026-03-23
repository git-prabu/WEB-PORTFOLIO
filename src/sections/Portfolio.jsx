import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    { tag: 'Law Firm Website', border: 'border-black/5', span: 'md:col-span-2', height: 'h-[500px]' },
    { tag: 'SV Construction', border: 'border-black/5', span: 'md:col-span-1', height: 'h-[500px]' },
    { tag: 'SaaS Dashboard', border: 'border-black/5', span: 'md:col-span-1', height: 'h-[400px]' },
    { tag: 'E-Comm Brand', border: 'border-black/5', span: 'md:col-span-2', height: 'h-[400px]' }
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
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-brand-accent/5 transition-colors duration-500 z-10" />
              <div className="w-full h-full bg-[#111] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center">
                <span className="text-neutral-600 font-medium text-lg blur-[1px] group-hover:blur-none transition-all duration-500">✨ Project Snapshot</span>
              </div>
              <div className="absolute top-8 left-8 z-20">
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
