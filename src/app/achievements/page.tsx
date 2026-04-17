"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy } from "lucide-react";

// Mock Data for Achievements
const achievements = [
  {
    id: 1,
    year: "First Year",
    title: "Hackathon Winner - CodeFest 2023",
    description: "Won 1st place in the university's annual coding competition. Developed a smart resource tracking system for campus facilities using Python and React.",
    imageUrl: "https://images.unsplash.com/photo-1542382122-73145cadd121?q=80&w=2673&auto=format&fit=crop"
  },
  {
    id: 2,
    year: "Second Year",
    title: "Open Source Contributor",
    description: "Successfully merged 10+ PRs into major open-source web frameworks. Recognized as a core contributor to an emerging React ecosystem library.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    year: "Third Year",
    title: "Best AI Innovation Award",
    description: "Awarded by the Computer Science department for developing a novel machine learning model that predicts local traffic anomalies with 95% accuracy.",
    imageUrl: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?q=80&w=2664&auto=format&fit=crop"
  },
  {
    id: 4,
    year: "Fourth Year",
    title: "Top 50 - National Web Dev Championship",
    description: "Placed in the top 50 nationally in a rigorous 48-hour full-stack development championship focused on scalable system design.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function AchievementsPage() {
  return (
    <main className="w-full bg-[#121212] min-h-screen relative py-20 overflow-x-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.015] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 px-6 lg:px-8 pt-12 md:pt-24">
        <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-12 group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
          Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-neutral-300 mb-6">
            <Trophy className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Milestones & Achievements</h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            A timeline of my growth, awards, and major accomplishments through four years of deep diving into tech.
          </p>
        </motion.div>

        {/* Tree Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Trunk Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 md:translate-x-0 hidden md:block"></div>
          {/* Mobile view trunk line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 md:hidden block"></div>

          {achievements.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.id} className="relative mb-24 md:mb-32 last:mb-0 group">
                
                {/* Node Dot */}
                <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 md:-translate-x-1/2 z-20 w-4 h-4 rounded-full bg-white border-[4px] border-[#121212] group-hover:scale-150 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>

                <div className={`flex flex-col md:flex-row items-center justify-between w-full
                  ${isEven ? "md:flex-row-reverse" : ""}
                `}>
                  
                  {/* Empty Spacer for Desktop Layout */}
                  <div className="hidden md:block w-[45%]"></div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`w-full md:w-[45%] pl-14 md:pl-0 mt-2 md:mt-0 relative`}
                  >
                    {/* Connecting line to trunk (desktop only) */}
                    <div className={`hidden md:block absolute top-1.5 h-px bg-white/10 w-[calc(100%-10px)]
                        ${isEven ? "right-[100%]" : "left-[100%]"}
                    `}></div>

                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.03)] p-6">
                      <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/90 text-xs font-semibold tracking-widest uppercase mb-4">
                        {item.year}
                      </span>
                      
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      <h3 className="text-2xl font-medium text-white mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-neutral-400 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
