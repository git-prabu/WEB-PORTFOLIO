import { motion } from 'framer-motion';

export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#FAFAFA]"></div>
      
      {/* Animated Grid that moves downwards to create an infinite perspective loop */}
      <motion.div 
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        initial={{ y: 0 }}
        animate={{ y: 64 }}
        transition={{ ease: "linear", duration: 2, repeat: Infinity }}
      >
        <div className="absolute inset-x-0 inset-y-[-100%] bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </motion.div>
      
      {/* Radial soft lighting layer */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-emerald/10 rounded-full blur-[120px]"></div>
    </div>
  );
}
