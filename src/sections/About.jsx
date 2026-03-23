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
            className="flex-1 w-full relative min-h-[400px]"
          >
            {/* Base Container */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] aspect-[4/5] bg-[#0A0A0A] rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(6,182,212,0.1)] transition-all duration-500 z-0">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-50"></div>
               <svg className="absolute -bottom-20 -right-20 w-64 h-64 text-brand-purple opacity-20 blur-3xl" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="currentColor"/></svg>
            </div>
            
            {/* Floating Stat 1 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute left-0 top-20 bg-[#111]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4 hover:border-brand-accent transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border-2 border-brand-accent flex items-center justify-center text-lg shadow-[0_0_15px_rgba(6,182,212,0.3)] text-white">🏆</div>
              <div>
                <p className="text-white font-black text-xl leading-none">5+ Years</p>
                <p className="text-neutral-400 text-xs font-bold uppercase tracking-wider mt-1">Experience</p>
              </div>
            </motion.div>

            {/* Floating Stat 2 */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute right-10 bottom-10 bg-[#030303]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20 flex flex-col gap-2 hover:border-brand-purple transition-colors cursor-pointer group"
            >
              <div className="flex justify-between items-center gap-6">
                 <p className="text-neutral-400 text-xs font-bold uppercase tracking-wider">Performance</p>
                 <span className="text-brand-purple font-black text-lg drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]">100</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
                 <div className="bg-brand-purple h-full w-full rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
              </div>
            </motion.div>

            {/* Floating Graphic 3 */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}
              className="absolute left-10 bottom-20 bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 w-24 h-24 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-10 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full border border-dashed border-white/20 animate-spin-slow flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(6,182,212,1)]"></div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
