import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function SpotlightCard({ children, className = "", spotlightColor = "rgba(16, 185, 129, 0.15)" }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative group overflow-hidden bg-[#FAFAFA] border border-black/5 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full z-10 hover:shadow-premium-hover transition-all duration-500">
        {children}
      </div>
    </div>
  );
}
