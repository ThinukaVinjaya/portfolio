"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: Starts hidden, fades in on scroll, then fades out
  const opacity1 = useTransform(progress, [0, 0.05, 0.15, 0.25], [0, 1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.05, 0.25], [50, 0, -100]); 

  // Section 2: 25% to 60%
  const opacity2 = useTransform(progress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.25, 0.6], [100, -100]); // Moves from below to above

  // Section 3: 60% to 90%
  const opacity3 = useTransform(progress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.6, 0.9], [100, -100]);

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section 1 - Left Aligned */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-end justify-start pb-8 md:pb-16 text-left w-full px-6 md:px-12"
      >
        <div>
          <span className="block text-white/50 text-xl md:text-3xl font-medium tracking-normal mb-3 md:mb-4">Hi I am</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-600 bg-clip-text text-transparent">Thinuka Vinjaya Wickramanayaka</span>
          </h1>
        </div>
      </motion.div>

      {/* Section 2 - Right Aligned */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-end text-right w-full px-6 md:px-12"
      >
        <div className="max-w-2xl ml-auto">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4 leading-tight">
            Java Full-Stack Developer
          </h2>
          <p className="text-2xl md:text-3xl text-neutral-400 font-light leading-relaxed">
            <span className="text-neutral-500 font-medium tracking-wide">AI/ML Enthusiast</span>
          </p>
        </div>
      </motion.div>

      {/* Section 3 - Left Aligned (Optional Final Text) */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-start text-left w-full px-6 md:px-12"
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
            Bridging Logic <br /><span className="text-neutral-500">&</span> Architecture.
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-8">
            Building robust backend systems while prioritizing intelligent machine learning implementations.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
