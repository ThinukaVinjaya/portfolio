"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 250) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });
  }, [scrollY]);

  return (
    <motion.div
      style={{ opacity }}
      className={`fixed bottom-12 right-6 md:right-12 z-50 flex flex-col items-center gap-4 pointer-events-none transition-opacity duration-300 ${isVisible ? '' : 'hidden'}`}
    >
      <motion.span 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-white/60 text-xs tracking-[0.25em] uppercase [writing-mode:vertical-rl] rotate-180 font-light"
      >
        Scroll Down
      </motion.span>
      <motion.div 
        className="w-px h-16 bg-white/20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div 
          className="absolute top-0 w-full h-1/2 bg-white"
          animate={{
            y: ["-100%", "200%"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
}
