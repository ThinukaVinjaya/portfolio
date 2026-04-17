"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderDot } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="w-full bg-[#121212] min-h-screen relative py-20 px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full mb-16 pt-12 md:pt-24">
        <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-12 group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
          Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <FolderDot className="w-8 h-8 text-neutral-400 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Projects</h1>
          </div>
          <div className="w-24 h-px bg-white/20 mb-6"></div>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl font-light">
            A selection of my recent open-source work, full-stack applications, and experimental prototypes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group flex flex-col h-full rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-700 hover:bg-white/[0.05] hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-2 block relative"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs tracking-wider uppercase font-medium bg-black/60 backdrop-blur-md rounded-full text-white/80 border border-white/10">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" strokeWidth={2} />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative z-20">
                  <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 font-light text-base mb-6">
                    {project.shortDescription}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="text-xs text-neutral-500 px-2 py-1 rounded bg-white/[0.03] border border-white/5">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs text-neutral-500 px-2 py-1 rounded bg-white/[0.03] border border-white/5">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
