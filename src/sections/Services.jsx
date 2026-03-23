import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { 
      title: 'Frontend Engineering', 
      desc: 'Building blazing fast, scalable web architectures using React and Next.js.', 
      icon: '⚡',
      span: 'md:col-span-2 md:row-span-2',
      visual: (
        <div className="mt-8 rounded-2xl bg-[#030303] border border-white/5 p-6 font-mono text-sm text-neutral-400 overflow-hidden relative shadow-inner">
          <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
             <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
             <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
             <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="space-y-3 opacity-90 relative z-10 text-[13px] md:text-sm">
            <p><span className="text-brand-purple">import</span> {'{'} motion {'}'} <span className="text-brand-purple">from</span> <span className="text-brand-accent">'framer-motion'</span>;</p>
            <p className="pt-2"><span className="text-brand-purple">export default function</span> <span className="text-blue-400 font-bold">App</span>() {'{'}</p>
            <p className="pl-4"><span className="text-brand-purple">return</span> (</p>
            <p className="pl-8">{'<'}<span className="text-blue-400">motion.div</span> <span className="text-brand-accent">layoutId</span>=<span className="text-brand-accent">"hero"</span>{'>'}</p>
            <p className="pl-12 text-white">Next Gen Performance & Architecture.</p>
            <p className="pl-8">{'</'}<span className="text-blue-400">motion.div</span>{'>'}</p>
            <p className="pl-4">);</p>
            <p>{'}'}</p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-accent/10 blur-[60px] rounded-full pointer-events-none"></div>
        </div>
      )
    },
    { 
      title: 'Digital Design', 
      desc: 'Crafting visually stunning styling and interactions.', 
      icon: '✨',
      span: 'md:col-span-1 md:row-span-1',
      visual: (
        <div className="mt-8 relative h-32 flex items-center justify-center">
          <div className="absolute w-20 h-20 border border-brand-purple/40 rounded-2xl rotate-12 backdrop-blur-sm bg-brand-purple/10 transition-transform duration-500 group-hover:rotate-45"></div>
          <div className="absolute w-20 h-20 border border-brand-accent/40 rounded-2xl -rotate-12 backdrop-blur-md bg-brand-accent/10 transition-transform duration-500 group-hover:-rotate-45 text-2xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">💎</div>
        </div>
      )
    },
    { 
      title: 'Performance SEO', 
      desc: 'Optimizing core vitals for max visibility.', 
      icon: '🎯',
      span: 'md:col-span-1 md:row-span-1',
      visual: (
        <div className="mt-8 relative h-32 flex items-center justify-center">
          <svg className="w-24 h-24 transform -rotate-90 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 36 36">
            <path className="text-white/5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="100, 100" />
            <path className="text-brand-accent drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="100, 100" />
            <text x="18" y="20.35" className="text-[10px] font-bold fill-white" textAnchor="middle">100</text>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#030303] relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 60 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Expertise</h2>
          <p className="mt-6 text-xl text-neutral-400 font-medium">Everything required to build a world-class digital presence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col justify-between ${service.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10 block">
                <div className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] border border-white/10 group-hover:border-brand-accent/50">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{service.title}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed text-balance">{service.desc}</p>
                {service.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
