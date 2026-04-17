"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import articles from "@/data/articles.json";

export default function ArticlesClient() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Stagger animation setup
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <>
      {/* Dynamic Background glow blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full mb-16 pt-12 md:pt-24 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-all mb-12 sm:mb-16 group bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 sm:mb-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-6 drop-shadow-lg">
              Articles
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              Insights, tutorials, and thoughts on software engineering, AI, and full-stack development. Exploring the intersection of code and creativity.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {[...articles].reverse().map((article, i) => (
            <motion.div
              variants={itemVars}
              key={article.id}
              className="h-full"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.03)] hover:-translate-y-2 relative block"
              >
                {/* Image Section */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500" strokeWidth={2} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-4 tracking-wider uppercase font-medium">
                    <span className="bg-white/5 border border-white/10 px-2 py-1 rounded-md">{article.date}</span>
                    <span className="mx-1">•</span>
                    <span className="text-white/70">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                    {article.title}
                  </h3>
                  <p className="text-neutral-400 font-light text-sm md:text-base line-clamp-3 mb-6 flex-grow">
                    {article.description}
                  </p>
                  
                  {/* Read Article Bottom Area */}
                  <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="inline-flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors duration-300">
                      Read Article
                      <div className="ml-2 w-0 h-[1px] bg-white group-hover:w-6 transition-all duration-500 ease-out"></div>
                    </span>
                  </div>
                </div>
                
                {/* Ambient glow inside the card based on hover state */}
                <div className={`absolute inset-0 z-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
