import { motion } from 'framer-motion';

export default function Marquee() {
  const brands = ['React', 'TypeScript', 'Node.js', 'Framer', 'Tailwind', 'Next.js', 'Vercel', 'PostgreSQL'];
  const triplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="py-14 bg-[#050505] border-y border-white/5 overflow-hidden select-none">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div 
          className="flex whitespace-nowrap items-center min-w-full"
          animate={{ x: [0, "-33.333%"] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
        >
          {triplicatedBrands.map((brand, i) => (
            <span key={i} className="text-3xl font-black tracking-tighter text-neutral-800 mx-12 uppercase flex-shrink-0">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
