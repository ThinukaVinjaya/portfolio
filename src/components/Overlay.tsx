"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import siteData from "@/data/site.json";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: Starts hidden, fades in on scroll, then fades out
  // Scaled for 1500vh container
  const opacity1 = useTransform(progress, [0, 0.03, 0.1, 0.13], [0, 1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.03, 0.13], [50, 0, -100]); 

  // Section 2: Fades in after Section 1
  const opacity2 = useTransform(progress, [0.13, 0.16, 0.23, 0.26], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.13, 0.26], [100, -100]); // Moves from below to above

  const opacity2B = useTransform(progress, [0.13, 0.16, 0.23, 0.26], [0, 1, 1, 0]);
  const y2B = useTransform(progress, [0.13, 0.26], [100, -100]);

  // Section 3: About (Fades in right at the 0.5 mark)
  const opacity3 = useTransform(progress, [0.5, 0.55], [0, 1]);
  const y3 = useTransform(progress, [0.5, 0.55], [100, 0]);

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 1 - Centered but pushed down */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-end justify-center pb-4 md:pb-8 text-center w-full px-4 sm:px-6 md:px-12 pointer-events-auto"
      >
        <div>
          <span className="block text-white/50 text-lg sm:text-xl md:text-3xl font-medium tracking-normal mb-2 sm:mb-3 md:mb-4">Hi I am</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-2xl leading-tight">
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">{siteData.personal.name}</span>
          </h1>
        </div>
      </motion.div>

      {/* Section 2 - Right Aligned (Desktop Only) */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-end text-right w-full px-4 sm:px-6 md:px-12 pointer-events-auto hidden md:flex"
      >
        <div className="max-w-2xl ml-auto pr-2 sm:pr-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight text-white leading-tight break-words">
            {siteData.personal.role1}
          </h2>
        </div>
      </motion.div>

      {/* Section 2B - Left Aligned (Desktop Only) */}
      <motion.div
        style={{ opacity: opacity2B, y: y2B }}
        className="absolute inset-0 flex items-center justify-start text-left w-full px-4 sm:px-6 md:px-12 pointer-events-auto hidden md:flex"
      >
        <div className="max-w-2xl pl-2 sm:pl-0 -ml-2 md:-ml-8 lg:-ml-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight text-white leading-tight break-words">
            {siteData.personal.role2}
          </h2>
        </div>
      </motion.div>

      {/* Mobile Roles Section - Centered and Stacked */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-4 sm:px-6 md:px-12 pointer-events-auto md:hidden"
      >
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white leading-tight break-words">
              {siteData.personal.role1}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white leading-tight break-words">
              {siteData.personal.role2}
            </h2>
          </motion.div>
        </div>
      </motion.div>

      {/* Section 3 - About Paragraph (Left Aligned, No Glass, Remains Visible) */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-start text-left w-full px-4 sm:px-6 md:px-12 pointer-events-auto"
      >
        <div className="max-w-4xl w-full py-6 sm:py-8 md:py-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 sm:mb-6 md:mb-8 border-b border-white/10 pb-3 sm:pb-4 inline-block">
            About Me
          </h2>
          <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed">
            {siteData.personal.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
