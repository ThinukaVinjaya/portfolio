"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import articles from "@/data/articles.json";

export default function ArticlesPage() {
  return (
    <main className="w-full bg-[#121212] min-h-screen relative py-20 px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full mb-16 pt-12 md:pt-24">
        <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-12 group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
          Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">Articles</h1>
          <div className="w-24 h-px bg-white/20 mb-6"></div>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl font-light">
            Insights, tutorials, and thoughts on software engineering, AI, and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...articles].reverse().map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
            >
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-700 hover:bg-white/[0.05] hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-2 relative block"
              >
                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" strokeWidth={2} />
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
                  <div className="flex items-center text-xs text-neutral-500 mb-4 tracking-wider uppercase font-medium">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-3 group-hover:text-neutral-200 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-neutral-400 font-light text-sm md:text-base line-clamp-3 mb-6">
                    {article.description}
                  </p>
                  <div className="mt-auto inline-flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    Read Article
                    <div className="ml-2 w-4 h-[1px] bg-white/70 group-hover:w-6 group-hover:bg-white transition-all duration-300"></div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
