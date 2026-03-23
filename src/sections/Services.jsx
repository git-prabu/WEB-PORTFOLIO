import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { title: 'Digital Design', desc: 'Crafting visually stunning, highly converting interfaces with pixel-perfect precision.', icon: '✨' },
    { title: 'Frontend Engineering', desc: 'Building blazing fast, scalable web architectures using React and Next.js.', icon: '⚡' },
    { title: 'Performance SEO', desc: 'Optimizing core web vitals and semantic structure for maximum visibility.', icon: '🎯' }
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(6,182,212,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] border border-white/10 group-hover:border-brand-accent/50">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{service.title}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed text-balance">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
