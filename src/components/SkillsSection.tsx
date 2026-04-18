"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const categories = {
    languages: {
      title: "Languages",
      skills: ["Java", "TypeScript", "Python", "JavaScript", "SQL", "C"],
    },
    frameworks: {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "React", "Next.js", "TailwindCSS", "Bootstrap", "Spring"],
    },
    cloud: {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Git"],
    },
    ai: {
      title: "AI & Other Tools",
      skills: ["Postman", "MongoDB", "MySQL", "PostgreSQL"],
    }
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden bg-transparent font-sans">
      {/* Subtle white radial glow matching site aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-5xl flex flex-col items-center relative z-10">

        {/* Root Node */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="border border-white/10 bg-white/[0.03] backdrop-blur-md px-10 py-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] rounded-sm z-20 relative"
        >
          <span className="text-white/80 font-semibold tracking-widest text-lg uppercase">My Skills</span>
        </motion.div>

        {/* Top Trunk */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-px h-10 bg-white/20 origin-top"
        ></motion.div>

        {/* Tree Layout Container */}
        <div className="relative w-full max-w-4xl flex flex-col items-center">

          {/* --- UPPER BRANCHES (Languages & Frameworks) --- */}
          <div className="relative w-full flex justify-center mb-16 md:mb-24">

            {/* Horizontal Line 1 */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-[calc(100%-80px)] md:w-[calc(100%-160px)] h-px bg-white/20 absolute top-0"
            ></motion.div>

            {/* Left Vertical Drop 1 (Languages) */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1 }}
              className="absolute left-[40px] md:left-[80px] top-0 w-px h-12 bg-white/20 origin-top"
            ></motion.div>

            {/* Right Vertical Drop 1 (Frameworks) */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1 }}
              className="absolute right-[40px] md:right-[80px] top-0 w-px h-12 bg-white/20 origin-top"
            ></motion.div>

            {/* Continuous Center Trunk (down to next branch) */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="w-px bg-white/20 origin-top absolute top-0 left-1/2 -translate-x-1/2 hidden md:block"
              style={{ height: "calc(100% + 4rem)" }}
            ></motion.div>

            {/* Content Upper */}
            <div className="w-full flex flex-col md:flex-row justify-between pt-12 relative z-10 gap-16 md:gap-4 px-4 md:px-0">
              {/* Languages (Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="w-full md:w-[45%] flex flex-col items-center md:items-end"
              >
                <h3 className="text-white/70 text-sm tracking-widest font-semibold uppercase mb-4">
                  {categories.languages.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-end content-start">
                  {categories.languages.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-white/[0.02] border border-white/10 rounded text-neutral-300 text-xs md:text-sm tracking-wider font-medium hover:bg-white/10 hover:border-white/30 hover:text-white transition-all backdrop-blur-md"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Frameworks (Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="w-full md:w-[45%] flex flex-col items-center md:items-start mt-16 md:mt-0"
              >
                <h3 className="text-white/70 text-sm tracking-widest font-semibold uppercase mb-4">
                  {categories.frameworks.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start content-start">
                  {categories.frameworks.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-white/[0.02] border border-white/10 rounded text-neutral-300 text-xs md:text-sm tracking-wider font-medium hover:bg-white/10 hover:border-white/30 hover:text-white transition-all backdrop-blur-md"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- LOWER BRANCHES (Cloud & AI) --- */}
          <div className="relative w-full flex justify-center hidden md:flex">

            {/* Horizontal Line 2 */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="w-[calc(100%-240px)] h-px bg-white/20 absolute top-0"
            ></motion.div>

            {/* Left Vertical Drop 2 (Cloud) */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.8 }}
              className="absolute left-[120px] top-0 w-px h-12 bg-white/20 origin-top"
            ></motion.div>

            {/* Right Vertical Drop 2 (AI) */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.8 }}
              className="absolute right-[120px] top-0 w-px h-12 bg-white/20 origin-top"
            ></motion.div>

            {/* Lower Center Fade Out Trunk */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.8 }}
              className="w-px h-32 bg-gradient-to-b from-white/20 to-transparent origin-top absolute top-0 left-1/2 -translate-x-1/2"
            ></motion.div>

            {/* Content Lower */}
            <div className="w-full flex flex-col md:flex-row justify-between pt-12 relative z-10 gap-16 md:gap-4 px-4 md:px-0 mb-12">
              {/* Cloud (Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="w-full md:w-[45%] flex flex-col items-center md:items-end pr-0 md:pr-10"
              >
                <h3 className="text-white/70 text-sm tracking-widest font-semibold uppercase mb-4">
                  {categories.cloud.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-end content-start">
                  {categories.cloud.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-white/[0.02] border border-white/10 rounded text-neutral-300 text-xs md:text-sm tracking-wider font-medium hover:bg-white/10 hover:border-white/30 hover:text-white transition-all backdrop-blur-md"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* AI & Tools (Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="w-full md:w-[45%] flex flex-col items-center md:items-start pl-0 md:pl-10"
              >
                <h3 className="text-white/70 text-sm tracking-widest font-semibold uppercase mb-4">
                  {categories.ai.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start content-start">
                  {categories.ai.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-white/[0.02] border border-white/10 rounded text-neutral-300 text-xs md:text-sm tracking-wider font-medium hover:bg-white/10 hover:border-white/30 hover:text-white transition-all backdrop-blur-md"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Display for Lower Blocks (since tree lines are messy on small screens) */}
          <div className="w-full flex flex-col md:hidden justify-center relative z-10 gap-16 px-4">
            {/* Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col items-center mt-4"
            >
              <h3 className="text-white/70 text-sm tracking-widest font-semibold uppercase mb-4">
                {categories.cloud.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center content-start">
                {categories.cloud.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-white/[0.02] border border-white/10 rounded text-neutral-300 text-xs md:text-sm tracking-wider font-medium hover:bg-white/10 hover:border-white/30 hover:text-white transition-all backdrop-blur-md"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col items-center mt-4"
            >
              <h3 className="text-blue-300 text-sm tracking-widest font-semibold uppercase mb-4 opacity-70">
                {categories.ai.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center content-start">
                {categories.ai.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-white/[0.02] border border-white/10 rounded text-neutral-300 text-xs md:text-sm tracking-wider font-medium hover:bg-white/10 hover:border-white/30 hover:text-white transition-all backdrop-blur-md"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
