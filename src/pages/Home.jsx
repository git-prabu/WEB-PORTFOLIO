import { motion } from 'framer-motion';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Results from '../sections/Results';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import About from '../sections/About';
import Pricing from '../sections/Pricing';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 max-w-7xl mx-auto -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="text-center space-y-8 px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-7xl font-bold tracking-tighter text-balance leading-tight"
          >
            We build websites that <br className="hidden md:block"/>
            <span className="relative inline-block text-emerald-600">
              grow your business
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-400" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00035 6.81363C47.8863 3.01633 118.06 -1.13459 198.026 3.8647" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto text-balance"
          >
            Premium web design, Next.js development, and SEO optimization. Stunning, high-performing websites tailored to scale your brand.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a href="#pricing" className="px-8 py-3.5 text-base font-medium text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto">
              View Pricing
            </a>
            <a href="#portfolio" className="px-8 py-3.5 text-base font-medium text-neutral-900 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 transition transform hover:-translate-y-1 w-full sm:w-auto">
              Our Work
            </a>
          </motion.div>
        </div>
      </section>
      <Services />
      <Results />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <About />
      <Pricing />
    </div>
  );
}
