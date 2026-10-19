"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FolderDot, ArrowLeft, ExternalLink, Code2, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import projects from "@/data/projects.json";

const filterOptions = ["All", "Spring Boot", "React.js", "AWS", "MySQL"];

export default function ProjectsClient() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const latestProjects = [...projects].reverse();

  const filteredProjects = selectedFilter === "All"
    ? latestProjects
    : latestProjects.filter(p => p.techStack.some(t => t.toLowerCase().includes(selectedFilter.toLowerCase())));

  return (
    <>
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.03] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-500/[0.02] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10 w-full mb-16 pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <Link 
          href="/" 
          className="inline-flex items-center text-neutral-400 hover:text-white transition-all mb-10 sm:mb-12 group bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 backdrop-blur-md w-fit"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs sm:text-sm font-medium">Back to Home</span>
        </Link>
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/10 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              <FolderDot className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-300" />
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
              Engineering Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Production & Open-Source Projects
          </h1>
          
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-3xl font-light leading-relaxed">
            Full-stack web applications, enterprise Java backends, and cloud architectures built for real clients and modern operational workflows.
          </p>

          {/* Technology Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-white/10">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedFilter(opt)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  selectedFilter === opt
                    ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105"
                    : "bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col rounded-3xl sm:rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-white/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Media Container */}
                <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black/50 border-b border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10 opacity-70 group-hover:opacity-30 transition-opacity duration-500" />
                  
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                    <span className="px-3 py-1.5 text-xs font-mono font-semibold bg-black/70 backdrop-blur-md rounded-lg text-white border border-white/10 shadow-lg">
                      {project.year}
                    </span>
                    <span className="px-3 py-1.5 text-xs font-semibold bg-cyan-500/20 backdrop-blur-md rounded-lg text-cyan-200 border border-cyan-500/30">
                      Full-Stack
                    </span>
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/15 text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-xl"
                    aria-label={`View ${project.title} details`}
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <Link href={`/projects/${project.id}`}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed mb-6 flex-grow">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-neutral-300 group-hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Links */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-white/10 mt-auto">
                    <div className="flex items-center gap-3">
                      {project.githubUrlbackend && (
                        <a
                          href={project.githubUrlbackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/5 hover:border-white/15"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>Backend</span>
                        </a>
                      )}
                      {project.githubUrlfrontend && (
                        <a
                          href={project.githubUrlfrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/5 hover:border-white/15"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>Frontend</span>
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </>
  );
}
