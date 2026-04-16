"use client";

import { motion } from "framer-motion";
import { BookOpen, FolderDot, Trophy, ArrowUpRight } from "lucide-react";

export default function ActionButtons() {
  const cards = [
    {
      title: "Articles",
      icon: BookOpen,
      href: "#articles",
      desc: "Read my latest technical writings",
      delay: 0
    },
    {
      title: "Projects",
      icon: FolderDot,
      href: "#projects",
      desc: "Explore my open-source work",
      delay: 0.2
    },
    {
      title: "Achievements",
      icon: Trophy,
      href: "#achievements",
      desc: "Awards, hackathons & milestones",
      delay: 0.4
    }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 w-full">
      {cards.map((card, i) => (
        <motion.a
          key={card.title}
          href={card.href}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: card.delay, ease: "easeOut" }}
          className="group relative flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-700 hover:bg-white/[0.05] hover:border-white/30 hover:shadow-[0_0_60px_rgba(255,255,255,0.05)] hover:-translate-y-2 flex-1 min-w-[280px]"
        >
          {/* Animated Gradient Background */}
          <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-white/10 to-transparent rounded-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
          
          <div className="flex justify-between items-start mb-12 relative z-10">
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-neutral-400 group-hover:text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
              <card.icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
            </div>
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" strokeWidth={1.5} />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-medium tracking-wide text-white mb-2">{card.title}</h3>
            <p className="text-sm md:text-base text-neutral-400 font-light line-clamp-2 transition-colors duration-500 group-hover:text-neutral-300">
              {card.desc}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
