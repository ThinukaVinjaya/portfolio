"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Globe } from "lucide-react";

const projects = [
  {
    title: "Ethereal Finance",
    category: "Web3 Platform",
    description: "A decentralized exchange interface focusing on high-performance charting and abstract glassmorphic UI elements.",
    year: "2024",
    link: "#",
  },
  {
    title: "Aura OS",
    category: "Concept OS",
    description: "Web-based operating system built with Framer Motion, recreating window management and desktop experiences in the browser.",
    year: "2023",
    link: "#",
  },
  {
    title: "Vanguard Studio",
    category: "Agency Portfolio",
    description: "Multi-award winning creative studio site. Implements advanced WebGL shaders synced to scroll triggers.",
    year: "2023",
    link: "#",
  },
  {
    title: "Lumina API",
    category: "Developer Tool",
    description: "Interactive documentation blending CLI aesthetic with modern react patterns.",
    year: "2022",
    link: "#",
  }
];

export default function Projects() {
  return (
    <section className="bg-[#121212] py-24 md:py-32 relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
          <div className="h-[1px] w-full bg-neutral-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative h-96 rounded-2xl bg-white/[0.02] border border-white/[0.05] p-8 flex flex-col justify-between overflow-hidden hover:bg-white/[0.04] transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex justify-between items-start w-full">
                <span className="text-sm font-mono text-neutral-500 uppercase tracking-wider">{project.category}</span>
                <span className="text-sm font-mono text-neutral-600">{project.year}</span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold text-white mb-3 flex items-center gap-3">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-lg font-light leading-relaxed mb-6 max-w-md">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <a href={project.link} className="flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
                    <ArrowUpRight size={18} />
                  </a>
                  <a href={project.link} className="flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
                    <GitBranch size={18} />
                  </a>
                  <a href={project.link} className="flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
                    <Globe size={18} />
                  </a>
                </div>
              </div>
              
              {/* Subtle Glow */}
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-neutral-600/10 blur-[100px] rounded-full group-hover:bg-neutral-500/20 transition-colors duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
