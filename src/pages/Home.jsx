import { motion } from 'framer-motion';
import Marquee from '../components/Marquee';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Results from '../sections/Results';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import About from '../sections/About';
import Pricing from '../sections/Pricing';
import GridBackground from '../components/reactbits/GridBackground';
import SplitText from '../components/reactbits/SplitText';
import BlurText from '../components/reactbits/BlurText';

export default function Home() {
  return (
    <div className="pt-0 bg-[#030303]">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        
        <GridBackground />

        <div className="text-center space-y-8 px-4 max-w-5xl mx-auto relative z-10 pt-20">
          
          {/* Floating Elite Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="hidden md:flex absolute top-10 right-4 items-center justify-center p-4 bg-[#0A0A0A]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-20 hover:rotate-0 hover:scale-105 hover:border-brand-accent/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex -space-x-3 mr-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] bg-gradient-to-br from-brand-accent to-brand-purple flex items-center justify-center text-xs font-bold text-black shadow-lg shadow-brand-accent/20">100%</div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] bg-[#111] flex items-center justify-center text-lg shadow-lg">🚀</div>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white leading-tight">Elite Performer</p>
              <p className="text-xs font-semibold text-neutral-400">Top 1% UI/UX Designer</p>
            </div>
          </motion.div>
          
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Available for new projects</span>
            </div>
          </motion.div>

          <SplitText 
            text="Digital experiences that defy expectations." 
            className="text-6xl md:text-8xl font-bold tracking-tighter text-balance leading-[1.05] text-white pb-4 drop-shadow-2xl" 
            delay={0.1}
          />

          <BlurText 
            text="I craft incredibly fast, flawlessly designed digital products that help ambitious brands accelerate their growth. Emphasizing typography, motion, and conversion." 
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto text-balance font-medium leading-relaxed justify-center" 
            delay={0.2}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <a href="#portfolio" className="px-8 py-4 text-sm font-bold text-black bg-brand-accent rounded-full hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] w-full sm:w-auto">
              View Selected Work
            </a>
            <a href="#pricing" className="px-8 py-4 text-sm font-semibold text-white bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              Discover Pricing
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="pt-16 max-w-3xl mx-auto flex flex-col items-center justify-center border-t border-white/5 mt-16"
          >
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-600 mb-6">Trusted By Forward-Thinking Teams</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100">
              {['Acme Corp', 'GlobalBank', 'NexTech', 'Vertex', 'Lumina'].map((partner, i) => (
                <div key={i} className="text-xl font-black tracking-tighter text-white drop-shadow-md">
                  {partner}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Marquee />

      <div className="relative z-20 bg-[#030303]">
        <Services />
        <Results />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <About />
        <Pricing />
      </div>
    </div>
  );
}
