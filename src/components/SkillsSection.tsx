"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Layers, 
  BrainCircuit,
  Cpu, 
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { 
  FaJava, 
  FaReact, 
  FaPython, 
  FaDocker, 
  FaAws, 
  FaGitAlt
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
  SiC,
  SiNodedotjs,
  SiExpress
} from "react-icons/si";

type Skill = {
  name: string;
  category: "backend" | "frontend" | "cloud" | "ai";
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badge: string;
  description: string;
  isCore?: boolean;
};

const allSkills: Skill[] = [
  // Backend & Java (Core Flagships)
  { 
    name: "Java", 
    category: "backend", 
    icon: FaJava, 
    color: "#f89820", 
    badge: "Core Language",
    description: "OOP, Concurrency, Enterprise Backend Architectures",
    isCore: true
  },
  { 
    name: "Spring Boot", 
    category: "backend",
    icon: SiSpringboot, 
    color: "#6db33f", 
    badge: "Specialization",
    description: "RESTful APIs, Microservices, Dependency Injection & JPA",
    isCore: true
  },
  { 
    name: "Spring Security", 
    category: "backend", 
    icon: SiSpringboot, 
    color: "#6db33f", 
    badge: "Security",
    description: "JWT Authentication, OAuth2, and Role-Based Access Control",
    isCore: true
  },
  {
    name: "Node.js",
    category: "backend", 
    icon: SiNodedotjs,
    color: "#339933",
    badge: "Runtime",
    description: "JavaScript runtime for asynchronous backend services and APIs"
  },
  {
    name: "Express.js",
    category: "backend",
    icon: SiExpress,
    color: "#ffffff",
    badge: "Framework",
    description: "Modular routing, REST services, and Express middleware"
  },
  { 
    name: "C Programming", 
    category: "backend", 
    icon: SiC, 
    color: "#a8b9cc", 
    badge: "Systems",
    description: "Memory pointers, data structures & competitive programming" 
  },

  // Frontend & Full-Stack
  { 
    name: "React.js", 
    category: "frontend", 
    icon: FaReact, 
    color: "#61dafb", 
    badge: "Primary UI",
    description: "Custom hooks, state management & reactive component architecture",
    isCore: true
  },
  { 
    name: "Next.js", 
    category: "frontend", 
    icon: SiNextdotjs, 
    color: "#ffffff", 
    badge: "Full-Stack",
    description: "Server Components, App Router, SSR & performance optimization",
    isCore: true
  },
  { 
    name: "TypeScript", 
    category: "frontend", 
    icon: SiTypescript, 
    color: "#3178c6", 
    badge: "Type-Safe",
    description: "Strict typing, robust generic models & maintainable codebases",
    isCore: true
  },
  { 
    name: "JavaScript", 
    category: "frontend", 
    icon: SiJavascript, 
    color: "#f7df1e", 
    badge: "Modern ES6+",
    description: "Async/await patterns, DOM manipulation & client workflows" 
  },
  { 
    name: "Tailwind CSS", 
    category: "frontend", 
    icon: SiTailwindcss, 
    color: "#38bdf8", 
    badge: "Styling",
    description: "Utility-first modern design systems & fully responsive layouts" 
  },
  { 
    name: "Bootstrap 5", 
    category: "frontend", 
    icon: SiBootstrap, 
    color: "#7952b3", 
    badge: "UI Library",
    description: "Responsive grids & enterprise dashboard layouts" 
  },

  // Cloud & DevOps
  { 
    name: "AWS S3 / Cloud", 
    category: "cloud", 
    icon: FaAws, 
    color: "#ff9900", 
    badge: "Cloud Storage",
    description: "Cloud media storage, asset pipelines & production hosting",
    isCore: true
  },
  { 
    name: "Docker", 
    category: "cloud", 
    icon: FaDocker, 
    color: "#2496ed", 
    badge: "Containers",
    description: "Containerization, environment parity & multi-service deployment" 
  },
  { 
    name: "Git & GitHub", 
    category: "cloud", 
    icon: FaGitAlt, 
    color: "#f05032", 
    badge: "VCS",
    description: "Version control, branching workflows & collaborative development" 
  },
  { 
    name: "Postman", 
    category: "cloud", 
    icon: SiPostman, 
    color: "#ff6c37", 
    badge: "API Testing",
    description: "Automated API endpoint testing, request mocks & documentation" 
  },

  // Databases & AI
  { 
    name: "MySQL", 
    category: "ai", 
    icon: SiMysql, 
    color: "#4479a1", 
    badge: "Relational DB",
    description: "Schema normalization, indexing, connection pooling & complex queries",
    isCore: true
  },
  { 
    name: "PostgreSQL", 
    category: "ai", 
    icon: SiPostgresql, 
    color: "#336791", 
    badge: "Relational DB",
    description: "ACID compliance, relational integrity & performance tuning" 
  },
  { 
    name: "MongoDB", 
    category: "ai", 
    icon: SiMongodb, 
    color: "#47a248", 
    badge: "NoSQL",
    description: "Document stores, schema flexibility & aggregation pipelines" 
  },
  {
    name: "Python",
    category: "ai",
    icon: FaPython,
    color: "#3776ab",
    badge: "Scripting / ML",
    description: "Machine learning workflows, data preprocessing, and scripting"
  },
  {
    name: "AI & Machine Learning",
    category: "ai",
    icon: Sparkles,
    color: "#c084fc",
    badge: "Intelligence",
    description: "Integrating intelligent features, LLM workflows & modern AI APIs"
  },
];

const categoryTabs = [
  { id: "core", label: "Core Stack", count: 8 },
  { id: "backend", label: "Backend & Java", count: 6 },
  { id: "frontend", label: "Frontend & UI", count: 6 },
  { id: "cloud", label: "Cloud & DevOps", count: 4 },
  { id: "ai", label: "AI & Databases", count: 5 },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("core");
  const [showAllExpanded, setShowAllExpanded] = useState<boolean>(false);

  // Compute skills to show
  let visibleSkills: Skill[];
  if (showAllExpanded) {
    visibleSkills = allSkills;
  } else if (activeTab === "core") {
    visibleSkills = allSkills.filter(s => s.isCore);
  } else {
    visibleSkills = allSkills.filter(s => s.category === activeTab);
  }

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
            A curated overview of specialized frameworks, languages, and cloud infrastructures powering my full-stack and AI-driven solutions.
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
            <h3 className="text-xl font-bold text-white mb-2">Full-Stack Development</h3>
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
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI Integration</h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Exploring AI/ML concepts, integrating intelligent features, and leveraging Python for machine learning experiments and automation.
            </p>
          </motion.div>
        </div>

        {/* Category Tabs: Focused Sets */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categoryTabs.map((cat) => {
            const isSelected = !showAllExpanded && activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setShowAllExpanded(false);
                  setActiveTab(cat.id);
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105"
                    : "bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? "bg-black/15 text-black font-bold" : "bg-white/10 text-neutral-400"
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Focused Skills Grid (Never overwhelms with 20+ cards) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
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

        {/* Expand / Collapse Control */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          <button
            onClick={() => setShowAllExpanded(!showAllExpanded)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium text-xs sm:text-sm transition-all backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
          >
            {showAllExpanded ? (
              <>
                <span>Collapse to Core Stack</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Explore Full Tech Matrix ({allSkills.length} Technologies)</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Quick ecosystem tags strip */}
          {!showAllExpanded && (
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl text-center pt-2">
              <span className="text-xs text-neutral-500 font-mono">Also experienced in:</span>
              {["Docker", "MongoDB", "PostgreSQL", "Node.js", "Express.js", "Python", "Bootstrap 5", "Postman", "C"].map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5 text-neutral-400 font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
