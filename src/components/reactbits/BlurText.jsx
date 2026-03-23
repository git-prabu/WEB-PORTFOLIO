import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BlurText({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  once = true
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const textArray = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay
      }
    }
  };

  const child = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
    show: {
      opacity: 1, filter: "blur(0px)", y: 0,
      transition: { duration, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={`inline-flex flex-wrap gap-x-2 ${className}`}
      aria-label={text}
    >
      {textArray.map((word, i) => (
        <motion.span key={i} variants={child} className="inline-block" aria-hidden>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
