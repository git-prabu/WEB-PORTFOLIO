import { motion } from 'framer-motion';
import SplitText from '../components/reactbits/SplitText';

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 space-y-8"
          >
            <SplitText text="About Us." className="text-4xl font-bold tracking-tighter sm:text-5xl text-white" />
            <p className="text-xl text-neutral-400 leading-relaxed text-balance font-medium">
              We are a specialized development studio focused on creating web experiences that feel native, responsive, and incredibly fast. 
              Led by Prabu, our team bridges the gap between premium design and scalable engineering architecture.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Web Development', 'UI/UX Design', 'Performance Optimization', 'Brand Strategy'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-[#111] border border-white/5 text-neutral-300 rounded-full font-medium text-sm shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            <div className="aspect-square max-w-sm mx-auto bg-[#0A0A0A] rounded-[3rem] overflow-hidden border border-brand-accent/20 relative group shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500">
              <div className="absolute inset-0 bg-brand-accent/5 group-hover:bg-brand-accent/10 transition duration-500 z-10" />
              <div className="w-full h-full filter grayscale group-hover:grayscale-0 transition duration-500 flex items-center justify-center text-neutral-700 text-9xl">
                👨‍💻
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
