"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: Starts hidden, fades in on scroll, then fades out
  // Scaled for 1500vh container
  const opacity1 = useTransform(progress, [0, 0.03, 0.1, 0.13], [0, 1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.03, 0.13], [50, 0, -100]); 

  // Section 2: Fades in after Section 1
  const opacity2 = useTransform(progress, [0.13, 0.16, 0.23, 0.26], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.13, 0.26], [100, -100]); // Moves from below to above

  // Section 3: About (Fades in right at the 0.5 mark, which corresponds to the EXACT look-left frame from your screenshot + stays during frozen background scroll)
  const opacity3 = useTransform(progress, [0.5, 0.55], [0, 1]);
  const y3 = useTransform(progress, [0.5, 0.55], [100, 0]);

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section 1 - Left Aligned */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-end justify-start pb-8 md:pb-16 text-left w-full px-6 md:px-12 pointer-events-auto"
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
        className="absolute inset-0 flex items-center justify-end text-right w-full px-6 md:px-12 pointer-events-auto"
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

      {/* Section 3 - About Paragraph (Left Aligned, No Glass, Remains Visible) */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-start text-left w-full px-6 md:px-12 pointer-events-auto"
      >
        <div className="max-w-4xl w-full py-8 md:py-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 md:mb-8 border-b border-white/10 pb-4 inline-block">
            About Me
          </h2>
          <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-neutral-300 font-light leading-relaxed">
            <p>
              I am Thinuka Vinjayawickramanayaka, an undergraduate pursuing a BSc (Hons) in Computer Science and Technology, and a passionate AI/ML learner, Java developer, and full-stack developer.
            </p>
            <p>
              My journey in software development began with a curiosity about how digital systems work, which led me to explore web technologies, backend development, and intelligent systems. Over time, I have gained hands-on experience in building responsive web applications, designing RESTful APIs, and working with full-stack technologies to deliver end-to-end solutions.
            </p>
            <p>
              As a Java developer, I enjoy building scalable backend systems using technologies like Spring Boot, focusing on clean architecture, performance, and security. As a full-stack developer, I work across both frontend and backend to create seamless and user-friendly applications.
            </p>
            <p>
              I am also actively exploring Artificial Intelligence and Machine Learning to integrate intelligent features into real-world applications and contribute to innovative solutions.
            </p>
            <p>
              Beyond coding, I share my knowledge through technical writing and continuously stay updated with emerging technologies to grow as a developer.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
