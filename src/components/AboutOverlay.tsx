"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function AboutOverlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: 0% to 40%
  const opacity1 = useTransform(progress, [0, 0.1, 0.3, 0.4], [0, 1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.1, 0.4], [50, 0, -100]); 

  // Section 2: 30% to 70%
  const opacity2 = useTransform(progress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.3, 0.7], [100, -100]);

  // Section 3: 60% to 100%
  const opacity3 = useTransform(progress, [0.6, 0.7, 0.9, 1], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.6, 1], [100, -100]);

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center text-center w-full px-6"
      >
        <div className="max-w-3xl">
          <span className="block text-white/50 text-xl font-medium tracking-widest uppercase mb-4">About Me</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            I craft digital products that <span className="italic font-light text-neutral-400">solve</span> complex problems.
          </h2>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start text-left w-full px-6 md:px-12"
      >
        <div className="max-w-xl">
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            The Philosophy
          </h3>
          <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
            I believe that great software is built at the intersection of performant backend logic and stunning frontend interactions. Quality is an end-to-end pursuit.
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end text-right w-full px-6 md:px-12"
      >
        <div className="max-w-xl ml-auto">
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Beyond Code
          </h3>
          <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
            When I&apos;m not architecting systems, I am deeply invested in the AI/ML landscape, experimenting with neural networks and generative media.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
