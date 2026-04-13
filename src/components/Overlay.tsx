"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.2], [0, -100]); // Moves up faster than scroll

  // Section 2: 20% to 50%
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.5], [100, -100]); // Moves from below to above

  // Section 3: 50% to 80%
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.8], [100, -100]);

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center text-center w-full px-6"
      >
        <div>
          <span className="block text-white/50 text-xl md:text-2xl font-medium tracking-normal mb-3 md:mb-4">Hello, I am</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
            My Name.<br/>
            <span className="bg-gradient-to-r from-neutral-200 to-neutral-600 bg-clip-text text-transparent">Creative Developer.</span>
          </h1>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start text-left w-full px-6 md:px-12"
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
            I build digital <span className="italic font-light text-neutral-400">experiences</span>.
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
            Fusing high-performance code with meticulous design to create interfaces that feel alive, intuitive, and unforgettable.
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end text-right w-full px-6 md:px-12"
      >
        <div className="max-w-2xl ml-auto">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
            Bridging design <br/><span className="text-neutral-500">&</span> engineering.
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-8">
            A relentless focus on typography, micro-interactions, and rendering strategy. Performance is fundamentally tied to aesthetics.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
