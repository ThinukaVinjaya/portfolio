"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
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
  ChevronDown, 
  ArrowRight,
  GraduationCap
} from "lucide-react";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Beat 1: Hero Welcome (0 to 0.18)
  const opacity1 = useTransform(progress, [0, 0.02, 0.14, 0.18], [1, 1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.02, 0.18], [0, 0, -80]);
  const scale1 = useTransform(progress, [0, 0.18], [1, 0.95]);
  const pointerEvents1 = useTransform(progress, (v) => (v < 0.18 ? "auto" : "none"));

  // Beat 2: Core Engineering Specialties (0.20 to 0.42)
  const opacity2 = useTransform(progress, [0.20, 0.24, 0.38, 0.42], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.20, 0.24, 0.38, 0.42], [60, 0, 0, -60]);
  const pointerEvents2 = useTransform(progress, (v) => (v >= 0.19 && v < 0.43 ? "auto" : "none"));

  // Beat 3: Key Milestones & Impact (0.44 to 0.66)
  const opacity3 = useTransform(progress, [0.44, 0.48, 0.62, 0.66], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.44, 0.48, 0.62, 0.66], [60, 0, 0, -60]);
  const pointerEvents3 = useTransform(progress, (v) => (v >= 0.43 && v < 0.67 ? "auto" : "none"));

  // Beat 4: About Me & Vision (0.68 to 0.94)
  const opacity4 = useTransform(progress, [0.68, 0.72, 0.90, 0.95], [0, 1, 1, 0]);
  const y4 = useTransform(progress, [0.68, 0.72, 0.90, 0.95], [60, 0, 0, -60]);
  const pointerEvents4 = useTransform(progress, (v) => (v >= 0.67 && v < 0.96 ? "auto" : "none"));

  return (
    <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ========================================================================= */}
      {/* BEAT 1: HERO INTRODUCTION */}
      {/* ========================================================================= */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1, pointerEvents: pointerEvents1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-neutral-300 tracking-wide">
              Full-Stack Developer & AI/ML Specialist
            </span>
          </div>

          <span className="block text-neutral-400 text-base sm:text-lg md:text-xl font-light tracking-widest uppercase mb-3">
            Hello, I am
          </span>

          {/* Name with subtle shimmer */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none mb-6">
            <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(255,255,255,0.15)]">
              {siteData.personal.name}
            </span>
          </h1>

          <p className="max-w-2xl text-sm sm:text-base md:text-xl text-neutral-300 font-light leading-relaxed mb-8">
            Crafting scalable enterprise systems with <span className="text-white font-medium">Java & Spring Boot</span> and building intelligent, fluid web experiences with <span className="text-white font-medium">Next.js & AI</span>.
          </p>

          {/* Quick CTA Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
            >
              Explore Projects
            </a>
            <a
              href="#skills"
              className="px-6 py-2.5 rounded-full bg-white/5 border border-white/15 text-white text-xs sm:text-sm font-medium hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all"
            >
              Skills Matrix
            </a>
          </div>

          {/* Scroll Down Prompt */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500">
            <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-neutral-400">
              Scroll to explore
            </span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 rounded-full bg-white/80"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* BEAT 2: DUAL ENGINEERING SPECIALTIES */}
      {/* ========================================================================= */}
      <motion.div
        style={{ opacity: opacity2, y: y2, pointerEvents: pointerEvents2 }}
        className="absolute inset-0 flex items-center justify-center px-4"
      >
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Java & Enterprise Backend */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#121212]/80 border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] group hover:border-amber-400/30 transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400/80">
                Pillar 01
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              {siteData.personal.role1}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed mb-6">
              Specialized in scalable server-side systems, microservices architecture, secure RESTful APIs with Spring Boot, JPA, MySQL, and cloud deployments.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "Spring Security", "REST APIs", "MySQL", "JPA"].map(tag => (
                <span key={tag} className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Modern Frontend & AI */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#121212]/80 border border-white/15 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] group hover:border-cyan-400/30 transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400/80">
                Pillar 02
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              {siteData.personal.role2}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed mb-6">
              Engineering fluid web interfaces with React & Next.js, and integrating Artificial Intelligence & Machine Learning features into modern, production-grade applications.
            </p>

            <div className="flex flex-wrap gap-2">
              {["React.js", "Next.js", "TypeScript", "Machine Learning", "AWS S3", "Tailwind"].map(tag => (
                <span key={tag} className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* BEAT 3: PROVEN IMPACT & MILESTONES */}
      {/* ========================================================================= */}
      <motion.div
        style={{ opacity: opacity3, y: y3, pointerEvents: pointerEvents3 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-4"
      >
        <div className="w-full max-w-5xl">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2 block">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Milestones of Growth & Dedication
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Stat 1 */}
            <div className="p-6 rounded-2xl bg-[#121212]/80 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 w-fit mb-4">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white mb-1">2x</p>
                <p className="text-sm font-semibold text-neutral-200 mb-1">Hackathon Winner</p>
                <p className="text-xs text-neutral-400">UvaXtreme v2.0 (IEEE) & HackMs&apos;25 Best Performance</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-6 rounded-2xl bg-[#121212]/80 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 w-fit mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white mb-1">{projects.length}+</p>
                <p className="text-sm font-semibold text-neutral-200 mb-1">Full-Stack Systems</p>
                <p className="text-xs text-neutral-400">OsianView Hotel Booking & Retail Cloud Billing with AWS</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-6 rounded-2xl bg-[#121212]/80 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 w-fit mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white mb-1">{articles.length}+</p>
                <p className="text-sm font-semibold text-neutral-200 mb-1">Articles Published</p>
                <p className="text-xs text-neutral-400">Deep-dive technical writing on Medium on Java, React & AI</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-6 rounded-2xl bg-[#121212]/80 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 w-fit mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white mb-1">BSc</p>
                <p className="text-sm font-semibold text-neutral-200 mb-1">Computer Science</p>
                <p className="text-xs text-neutral-400">Undergraduate at Uva Wellassa University of Sri Lanka</p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* BEAT 4: ABOUT ME & STORY (Positioned Left, complementing right avatar) */}
      {/* ========================================================================= */}
      <motion.div
        style={{ opacity: opacity4, y: y4, pointerEvents: pointerEvents4 }}
        className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 md:px-12"
      >
        <div className="max-w-2xl w-full p-8 sm:p-10 rounded-3xl bg-[#121212]/85 border border-white/15 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            About Me
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
            Engineering scalable code with clean architecture & modern intelligence.
          </h2>

          <div className="space-y-3 text-neutral-300 font-light text-xs sm:text-sm md:text-base leading-relaxed mb-6">
            <p>
              I am an undergraduate pursuing a <strong>BSc (Hons) in Computer Science and Technology</strong> at Uva Wellassa University, and a dedicated full-stack developer passionate about Java, Spring Boot, and AI/ML.
            </p>
            <p>
              My focus is on engineering high-throughput backend services, robust RESTful APIs, and responsive frontend applications that solve real operational challenges for end users.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors"
            >
              <span>Featured Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#skills"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <span>View Tech Stack</span>
            </a>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
