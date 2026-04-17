"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderDot } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import projects from "@/data/projects.json";

export default function ProjectsClient() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)", scale: 0.98 },
    show: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <>
      {/* Background glow tailored for projects */}
      <div className="absolute top-10 right-1/4 w-[300px] h-[300px] sm:w-[600px] sm:h-[500px] bg-white/[0.02] blur-[100px] sm:blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full mb-16 pt-12 md:pt-24 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-10 sm:mb-12 group bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 gap-4">
            <div className="p-3 bg-white/10 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <FolderDot className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md">Projects</h1>
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-white to-transparent mb-6"></div>
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl font-light">
            A selection of my recent open-source work, full-stack applications, and experimental prototypes building for scale and performance.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {[...projects].reverse().map((project, i) => (
            <motion.div
              variants={itemVars}
              key={project.id}
              className="h-full"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group flex flex-col h-full rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,0.04)] hover:-translate-y-2 block relative"
              >
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 text-xs tracking-wider uppercase font-semibold bg-black/60 backdrop-blur-md rounded-lg text-white/90 border border-white/10 shadow-lg">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:border-white transition-all duration-500 shadow-xl">
                    <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" strokeWidth={2} />
                  </div>
                  
                  {/* Image overlay glow on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#121212] to-transparent z-10"></div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-20 bg-gradient-to-b from-[#121212] via-transparent to-transparent">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 font-light text-sm sm:text-base mb-8 flex-grow">
                    {project.shortDescription}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map(tech => (
                        <span key={tech} className="text-xs font-medium text-neutral-300 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:text-white transition-colors">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-xs font-medium text-neutral-400 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Floating ambient glow effect */}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
