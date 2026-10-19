"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Terminal, 
  Layers, 
  Cloud, 
  Database, 
  Cpu, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import { 
  FaJava, 
  FaReact, 
  FaPython, 
  FaDocker, 
  FaAws, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt 
} from "react-icons/fa";
import { 
  SiSpringboot, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiJavascript, 
  SiPostman, 
  SiBootstrap,
  SiC
} from "react-icons/si";

type Skill = {
  name: string;
  category: "backend" | "frontend" | "cloud" | "db-ai";
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badge: string;
  description: string;
};

const allSkills: Skill[] = [
  // Backend & Java
  { 
    name: "Java", 
    category: "backend", 
    icon: FaJava, 
    color: "#f89820", 
    badge: "Core Language",
    description: "OOP, Concurrency, Enterprise Applications" 
  },
  { 
    name: "Spring Boot", 
    category: "backend", 
    icon: SiSpringboot, 
    color: "#6db33f", 
    badge: "Specialization",
    description: "RESTful APIs, Microservices, Dependency Injection" 
  },
  { 
    name: "Spring Security", 
    category: "backend", 
    icon: SiSpringboot, 
    color: "#6db33f", 
    badge: "Security",
    description: "JWT Authentication, Role-Based Access Control" 
  },
  { 
    name: "Python", 
    category: "backend", 
    icon: FaPython, 
    color: "#3776ab", 
    badge: "AI / Scripting",
    description: "Data analysis, machine learning scripts & automation" 
  },
  { 
    name: "C Programming", 
    category: "backend", 
    icon: SiC, 
    color: "#a8b9cc", 
    badge: "Systems",
    description: "Low-level memory management & competitive programming" 
  },

  // Frontend & Full-Stack
  { 
    name: "React.js", 
    category: "frontend", 
    icon: FaReact, 
    color: "#61dafb", 
    badge: "Primary UI",
    description: "Modern hooks, state management & component architecture" 
  },
  { 
    name: "Next.js", 
    category: "frontend", 
    icon: SiNextdotjs, 
    color: "#ffffff", 
    badge: "Full-Stack",
    description: "Server Components, App Router, SSR & performance optimization" 
  },
  { 
    name: "TypeScript", 
    category: "frontend", 
    icon: SiTypescript, 
    color: "#3178c6", 
    badge: "Type-Safe",
    description: "Strict typing, robust interfaces & scalable codebases" 
  },
  { 
    name: "JavaScript", 
    category: "frontend", 
    icon: SiJavascript, 
    color: "#f7df1e", 
    badge: "Modern ES6+",
    description: "Asynchronous workflows, DOM manipulation & client logic" 
  },
  { 
    name: "Tailwind CSS", 
    category: "frontend", 
    icon: SiTailwindcss, 
    color: "#38bdf8", 
    badge: "Styling",
    description: "Utility-first modern design systems & responsive layouts" 
  },
  { 
    name: "Bootstrap 5", 
    category: "frontend", 
    icon: SiBootstrap, 
    color: "#7952b3", 
    badge: "Framework",
    description: "Rapid responsive grid & enterprise dashboards" 
  },

  // Cloud & DevOps
  { 
    name: "AWS S3 / Cloud", 
    category: "cloud", 
    icon: FaAws, 
    color: "#ff9900", 
    badge: "Cloud Storage",
    description: "Media storage, asset pipelines & cloud infrastructure" 
  },
  { 
    name: "Docker", 
    category: "cloud", 
    icon: FaDocker, 
    color: "#2496ed", 
    badge: "Containers",
    description: "Containerization, environment parity & multi-service setups" 
  },
  { 
    name: "Git & GitHub", 
    category: "cloud", 
    icon: FaGitAlt, 
    color: "#f05032", 
    badge: "VCS",
    description: "Branching strategies, collaborative workflows & CI/CD basics" 
  },
  { 
    name: "Postman", 
    category: "cloud", 
    icon: SiPostman, 
    color: "#ff6c37", 
    badge: "Testing",
    description: "API testing, automated request suites & documentation" 
  },

  // Databases & AI
  { 
    name: "MySQL", 
    category: "db-ai", 
    icon: SiMysql, 
    color: "#4479a1", 
    badge: "Relational DB",
    description: "Schema design, relational indexing & complex queries" 
  },
  { 
    name: "PostgreSQL", 
    category: "db-ai", 
    icon: SiPostgresql, 
    color: "#336791", 
    badge: "Relational DB",
    description: "ACID compliance, enterprise data integrity & optimization" 
  },
  { 
    name: "MongoDB", 
    category: "db-ai", 
    icon: SiMongodb, 
    color: "#47a248", 
    badge: "NoSQL",
    description: "Document stores, dynamic schemas & flexible storage" 
  },
];

const categories = [
  { id: "all", label: "All Technologies" },
  { id: "backend", label: "Backend & Java" },
  { id: "frontend", label: "Frontend & Full-Stack" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "db-ai", label: "Databases & AI" },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSkills = activeTab === "all" 
    ? allSkills 
    : allSkills.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#121212]">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/[0.03] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[350px] bg-amber-500/[0.02] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Engineered for High Performance
          </h2>
          
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            From low-level algorithms to enterprise Java backends and reactive client applications, here is the technology stack I deploy to build robust, scalable software.
          </p>
        </motion.div>

        {/* 3 Core Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:border-amber-400/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Java & Spring Architecture</h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Designing layered RESTful microservices, JWT security layers, database pooling, and domain-driven design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Modern Reactive Web</h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Crafting fast, responsive UIs using React, Next.js, TypeScript, and fluid animations for high user engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:border-purple-400/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cloud & Data Systems</h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Connecting backend applications to AWS S3, relational databases, containerized environments, and AI pipelines.
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105"
                  : "bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.05] hover:border-white/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between"
                >
                  {/* Subtle top-corner glow */}
                  <div 
                    className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: skill.color }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-white/5 text-neutral-400 border border-white/5">
                        {skill.badge}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1.5 group-hover:text-cyan-200 transition-colors">
                      {skill.name}
                    </h4>

                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
                      Verified Skill
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
