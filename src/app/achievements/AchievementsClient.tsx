"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Trophy, Award, Target, Zap, ArrowLeft, LucideIcon } from "lucide-react";
import { useRef } from "react";

import achievements from "@/data/achievements.json";

// Map string icon names to Lucide components
const IconMap: Record<string, LucideIcon> = {
  Trophy,
  Target,
  Zap,
  Award
};

export default function AchievementsClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 pt-12 md:pt-24">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-all mb-10 sm:mb-16 group bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 backdrop-blur-md">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 sm:mb-32 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500 mb-6 drop-shadow-xl">
              The Journey
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              A timeline mapping my growth through years of deep diving into technology. From hackathons to open source, these milestones shaped my engineering mindset.
            </p>
          </div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="hidden md:flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-xl relative"
          >
            <div className="absolute inset-2 rounded-full border border-dashed border-white/20 animate-[spin_10s_linear_infinite]"></div>
            <Trophy className="w-12 h-12 text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          </motion.div>
        </motion.div>

        {/* Tree Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto pb-32">
          {/* Central Trunk Background Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-white/[0.03] -translate-x-1/2 rounded-full"></div>
          
          {/* Animated Highlight Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-1 bg-gradient-to-b from-white/80 via-white/40 to-transparent -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          ></motion.div>

          {achievements.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = IconMap[item.icon] || Trophy;
            
            return (
              <div key={item.id} className="relative mb-24 md:mb-40 last:mb-0 group">
                
                {/* Node Center Dot & Pulse */}
                <div className="absolute left-6 md:left-1/2 top-12 -translate-x-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="absolute w-12 h-12 bg-white/10 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"></div>
                  <div className="w-5 h-5 rounded-full bg-[#121212] border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.6)] group-hover:scale-125 group-hover:bg-white transition-all duration-300"></div>
                </div>

                <div className={`flex flex-col md:flex-row items-stretch justify-between w-full
                  ${isEven ? "md:flex-row-reverse" : ""}
                `}>
                  
                  {/* Empty Spacer */}
                  <div className="hidden md:block w-[45%]"></div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`w-full md:w-[45%] pl-16 md:pl-0 mt-2 md:mt-0 relative`}
                  >
                    {/* Connecting dashed line (desktop) */}
                    <div className={`hidden md:block absolute top-[58px] border-t-2 border-dashed border-white/20 w-[calc(100%-20px)] transition-all duration-500 group-hover:border-white/50
                        ${isEven ? "right-[100%]" : "left-[100%]"}
                    `}></div>

                    {/* Card Body */}
                    <div className={`relative p-1 rounded-[2rem] bg-gradient-to-br ${item.color} overflow-hidden group-hover:-translate-y-2 transition-transform duration-500`}>
                      <div className="absolute inset-0 bg-[#121212] rounded-[2rem] m-[1px] z-0"></div>
                      
                      <div className="relative z-10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 rounded-[calc(2rem-1px)] h-full w-full border border-white/5 shadow-2xl">
                        
                        <div className="flex items-center justify-between mb-6">
                          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-bold tracking-widest uppercase border border-white/10 shadow-inner">
                            {item.year}
                          </span>
                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 md:group-hover:rotate-12 transition-transform">
                            <Icon className="w-5 h-5 text-neutral-300 md:group-hover:text-white transition-colors" />
                          </div>
                        </div>
                        
                        <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 border border-white/5 ring-1 ring-black/50 shadow-2xl">
                          <div className="absolute inset-0 bg-black/40 md:group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={item.imageUrl} 
                            alt={item.title}
                            className="w-full h-full object-cover transform scale-100 md:group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                          />
                          {/* Inner glow effect */}
                          <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] z-20 pointer-events-none"></div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight drop-shadow-sm">
                          {item.title}
                        </h3>
                        
                        <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed mb-8">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {item.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs text-neutral-400 bg-black/40 rounded-md border border-white/5 md:group-hover:border-white/20 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
