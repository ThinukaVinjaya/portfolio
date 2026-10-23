"use client";

import { motion } from "framer-motion";
import { BookOpen, FolderDot, Trophy, ArrowUpRight, Award, Sparkles } from "lucide-react";
import Link from "next/link";
import projects from "@/data/projects.json";
import achievements from "@/data/achievements.json";
import articles from "@/data/articles.json";
import certificates from "@/data/certificates.json";

export default function ActionButtons() {
  const cards = [
    {
      title: "Projects",
      count: `${projects.length} Flagship Systems`,
      icon: FolderDot,
      href: "/projects",
      desc: "Full-stack apps, Java microservices & cloud architectures",
      color: "from-cyan-500/20 to-blue-500/5",
      accent: "text-cyan-300",
      delay: 0
    },
    {
      title: "Achievements",
      count: `${achievements.length} Hackathon Awards`,
      icon: Trophy,
      href: "/achievements",
      desc: "UvaXtreme v2.0 2nd Runners Up & HackMs'25 Best Performance",
      color: "from-amber-500/20 to-orange-500/5",
      accent: "text-amber-300",
      delay: 0.1
    },
    {
      title: "Articles",
      count: `${articles.length} Technical Guides`,
      icon: BookOpen,
      href: "/articles",
      desc: "Published Medium guides on Java, Spring Boot, React & AI in 2026",
      color: "from-purple-500/20 to-pink-500/5",
      accent: "text-purple-300",
      delay: 0.2
    },
    {
      title: "Certificates",
      count: `${certificates.length} Verified Credentials`,
      icon: Award,
      href: "/certificates",
      desc: "Spring Boot APIs, Amigoscode & LinkedIn Learning verified badges",
      color: "from-emerald-500/20 to-teal-500/5",
      accent: "text-emerald-300",
      delay: 0.3
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mx-auto px-4">
      {cards.map((card) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: card.delay, ease: "easeOut" }}
          className="h-full"
        >
          <Link
            href={card.href}
            className="group relative flex flex-col justify-between p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:-translate-y-2 h-full w-full block"
          >
            {/* Top decorative gradient glow */}
            <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${card.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div>
              <div className="flex justify-between items-start mb-5 sm:mb-8 relative z-10">
                <div className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 ${card.accent} group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              <span className={`text-[11px] font-mono font-medium tracking-wider uppercase block mb-1.5 ${card.accent}`}>
                {card.count}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-neutral-100">
                {card.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
              <span>View details</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
