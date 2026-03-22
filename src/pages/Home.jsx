import { motion } from 'framer-motion';
import Marquee from '../components/Marquee';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Results from '../sections/Results';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import About from '../sections/About';
import Pricing from '../sections/Pricing';

export default function Home() {
  return (
    <div className="pt-0 bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Soft Radial Gradient Backing */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-emerald/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        {/* Sophisticated Grid Overlay */}
        <div className="absolute inset-0 max-w-7xl mx-auto -z-20 [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="text-center space-y-8 px-4 max-w-5xl mx-auto relative z-10 pt-20">
          
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white/50 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald-dark"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600">Available for new projects</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-balance leading-[1.05] text-neutral-900"
          >
            Digital experiences that <br className="hidden md:block"/>
            <span className="relative text-black inline-block px-2">
              defy expectations.
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-brand-emerald/40 -z-10" viewBox="0 0 200 9" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00035 6.81363C47.8863 3.01633 118.06 -1.13459 198.026 3.8647" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto text-balance font-medium leading-relaxed"
          >
            I craft incredibly fast, flawlessly designed digital products that help ambitious brands accelerate their growth. Emphasizing typography, motion, and conversion.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <a href="#portfolio" className="px-8 py-4 text-sm font-semibold text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all duration-300 transform hover:-translate-y-1 shadow-premium hover:shadow-premium-hover w-full sm:w-auto">
              View Selected Work
            </a>
            <a href="#pricing" className="px-8 py-4 text-sm font-semibold text-neutral-900 bg-white/80 backdrop-blur-md border border-black/5 rounded-full hover:bg-white hover:border-black/10 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto shadow-sm">
              Discover Pricing
            </a>
          </motion.div>
        </div>
      </section>

      <Marquee />

      <div className="relative z-20 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
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
