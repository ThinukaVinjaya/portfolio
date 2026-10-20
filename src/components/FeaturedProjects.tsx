"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderDot, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import projects from "@/data/projects.json";

export default function FeaturedProjects() {
  // Only the latest 2 flagship projects on the homepage
  const latestProjects = [...projects].reverse().slice(0, 2);

  return (
    <section id="projects" className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#121212]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[500px] bg-cyan-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[500px] bg-amber-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
              <FolderDot className="w-3.5 h-3.5" />
              <span>Flagship Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-white transition-colors group bg-white/5 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 backdrop-blur-md w-fit"
          >
            <span>Explore Full Archive ({projects.length})</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Projects Grid: Strictly Latest 2 Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {latestProjects.map((project, idx) => {
            const hasBackend = Boolean(project.githubUrlbackend && project.githubUrlbackend.trim().length > 0);
            const hasFrontend = Boolean(project.githubUrlfrontend && project.githubUrlfrontend.trim().length > 0);
            const hasLiveDemo = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim().length > 0);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative flex flex-col rounded-3xl sm:rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-white/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Media Preview Container */}
                <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black/40 border-b border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                  
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
                      Latest Flagship
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

                {/* Content Box */}
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
                    <div className="flex items-center gap-2">
                      {hasLiveDemo && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-black bg-white/10 hover:bg-white px-3.5 py-2 rounded-xl transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {hasBackend && (
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
                      {hasFrontend && (
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
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA to View All */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium text-xs sm:text-sm transition-all backdrop-blur-md group hover:scale-105 active:scale-95 shadow-lg"
          >
            <span>Explore All {projects.length} Engineering Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
