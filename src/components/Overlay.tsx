"use client";

import { useState, useEffect } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";
import siteData from "@/data/site.json";
import articles from "@/data/articles.json";
import projects from "@/data/projects.json";
import { 
  Terminal, 
  Sparkles, 
  Trophy, 
  Code2, 
  Cpu, 
  BookOpen, 
  ArrowRight,
  GraduationCap
} from "lucide-react";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  const [activeBeat, setActiveBeat] = useState(1);

  // Determine current active beat based on scroll progress
  const getBeatFromProgress = (v: number) => {
    if (v < 0.16) return 1;
    if (v < 0.44) return 2;
    if (v < 0.72) return 3;
    return 4;
  };

  useMotionValueEvent(progress, "change", (latest: number) => {
    const nextBeat = getBeatFromProgress(latest);
    setActiveBeat(nextBeat);
  });

  useEffect(() => {
    const initialBeat = getBeatFromProgress(progress.get());
    setActiveBeat(initialBeat);
  }, [progress]);

  return (
    <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ========================================================================= */}
      {/* BEAT 1: HERO INTRODUCTION */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-all duration-500 ease-out ${
          activeBeat === 1
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-8 scale-95 pointer-events-none invisible"
        }`}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-3 sm:mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] sm:text-sm font-medium text-neutral-300 tracking-wide">
              Full-Stack Developer & AI/ML Enthusiast
            </span>
          </div>

          <span className="block text-neutral-400 text-xs sm:text-lg md:text-xl font-light tracking-[0.2em] sm:tracking-widest uppercase mb-1.5 sm:mb-3">
            Hello, I am
          </span>

          {/* Name with tight mobile leading to avoid overlapping lines */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-tight sm:leading-none mb-3 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
              {siteData.personal.name}
            </span>
          </h1>

          <p className="max-w-2xl text-xs sm:text-base md:text-xl text-neutral-300 font-light leading-relaxed mb-6 sm:mb-8 px-2">
            Crafting scalable enterprise systems with <span className="text-white font-medium">Full Stack Development</span> and building intelligent, fluid web experiences with <span className="text-white font-medium">AI Integration</span>.
          </p>

          {/* Quick CTA Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href="#projects"
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
            >
              Explore Projects
            </a>
            <a
              href="#skills"
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/5 border border-white/15 text-white text-xs sm:text-sm font-medium hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all"
            >
              Skills Matrix
            </a>
          </div>

          {/* Scroll Down Prompt */}
          <div className="absolute bottom-3 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 text-neutral-500">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium text-neutral-400">
              Scroll to explore
            </span>
            <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
              <div className="w-1 h-1.5 sm:h-2 rounded-full bg-white/80 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BEAT 2: DUAL ENGINEERING SPECIALTIES (The Two Pillars) */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 flex items-center justify-center px-3 sm:px-4 transition-all duration-500 ease-out ${
          activeBeat === 2
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-8 scale-95 pointer-events-none invisible"
        }`}
      >
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8 py-2">
          
          {/* Card 1: Java & Enterprise Backend */}
          <div className="p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-[#121212]/95 border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] group hover:border-amber-400/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-2.5 sm:mb-5">
              <div className="p-2 sm:p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300">
                <Terminal className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                Pillar 01
              </span>
            </div>

            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1.5 sm:mb-3 tracking-tight">
              {siteData.personal.role1}
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-3 sm:mb-5">
              Specialized in scalable server-side systems, microservices architecture, secure RESTful APIs with Spring Boot, MERN Stack, JPA, MySQL, and cloud deployments.
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["React.js", "Next.js", "TypeScript", "Java", "Spring Boot", "REST APIs", "MySQL", "AWS S3"].map(tag => (
                <span key={tag} className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: AI & Intelligent Systems */}
          <div className="p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-[#121212]/95 border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] group hover:border-cyan-400/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-2.5 sm:mb-5">
              <div className="p-2 sm:p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                <Cpu className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Pillar 02
              </span>
            </div>

            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1.5 sm:mb-3 tracking-tight">
              {siteData.personal.role2}
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed mb-3 sm:mb-5">
              Engineering fluid web interfaces with integrating Artificial Intelligence & Machine Learning features into modern, production-grade applications.
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["Machine Learning", "Deep Learning", "NLP", "Automation", "Computer Vision", "Generative AI"].map(tag => (
                <span key={tag} className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* BEAT 3: PROVEN IMPACT & MILESTONES (Symmetrical 2x2 on Mobile) */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-500 ease-out ${
          activeBeat === 3
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-8 scale-95 pointer-events-none invisible"
        }`}
      >
        <div className="w-full max-w-5xl">
          <div className="text-center mb-3 sm:mb-8">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-1 sm:mb-2 block">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Milestones of Growth
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
            
            {/* Stat 1 */}
            <div className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#121212]/90 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 w-fit mb-2 sm:mb-4">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5 sm:mb-1">2x</p>
                <p className="text-xs sm:text-sm font-semibold text-neutral-200 mb-0.5 sm:mb-1">Hackathon Winner</p>
                <p className="text-[10px] sm:text-xs text-neutral-400 line-clamp-2">UvaXtreme v2.0 (IEEE) & HackMs&apos;25</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#121212]/90 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 w-fit mb-2 sm:mb-4">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5 sm:mb-1">{projects.length}+</p>
                <p className="text-xs sm:text-sm font-semibold text-neutral-200 mb-0.5 sm:mb-1">Full-Stack Systems</p>
                <p className="text-[10px] sm:text-xs text-neutral-400 line-clamp-2">Hotel booking & retail cloud billing</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#121212]/90 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 w-fit mb-2 sm:mb-4">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5 sm:mb-1">{articles.length}+</p>
                <p className="text-xs sm:text-sm font-semibold text-neutral-200 mb-0.5 sm:mb-1">Articles Published</p>
                <p className="text-[10px] sm:text-xs text-neutral-400 line-clamp-2">Deep-dive technical guides on Medium</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#121212]/90 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 w-fit mb-2 sm:mb-4">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5 sm:mb-1">BSc</p>
                <p className="text-xs sm:text-sm font-semibold text-neutral-200 mb-0.5 sm:mb-1">Computer Science</p>
                <p className="text-[10px] sm:text-xs text-neutral-400 line-clamp-2">Uva Wellassa University of Sri Lanka</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BEAT 4: ABOUT ME & STORY */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-6 md:px-12 transition-all duration-500 ease-out ${
          activeBeat === 4
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-8 scale-95 pointer-events-none invisible"
        }`}
      >
        <div className="max-w-2xl w-full p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#121212]/90 border border-white/15 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            About Me
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4 leading-snug">
            Engineering scalable code with clean architecture & modern intelligence.
          </h2>

          <div className="space-y-2 sm:space-y-3 text-neutral-300 font-light text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
            <p>
              I am an undergraduate pursuing a <strong>BSc (Hons) in Computer Science and Technology</strong> at Uva Wellassa University, and a dedicated full-stack developer passionate about Java, Spring Boot, and AI/ML.
            </p>
            <p className="hidden xs:block sm:block">
              My focus is on engineering high-throughput backend services, robust RESTful APIs, and responsive frontend applications that solve real operational challenges for end users.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3 border-t border-white/10">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              <span>Featured Work</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href="#skills"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 border border-white/15 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <span>View Tech Stack</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
