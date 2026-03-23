import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SplitText({ text, className = '', delay = 0, once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <div ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        aria-hidden
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay }
          }
        }}
        className="inline-block"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20, rotateX: -90 },
              visible: { 
                opacity: 1, y: 0, rotateX: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            style={{ display: "inline-block", transformOrigin: "bottom center" }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
