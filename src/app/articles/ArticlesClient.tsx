"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, ArrowLeft, Search, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import articles from "@/data/articles.json";

const categories = ["All", "Java", "React", "AI & Machine Learning", "Full-Stack", "APIs"];

export default function ArticlesClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const latestArticles = [...articles].reverse();

  const filteredArticles = latestArticles.filter(article => {
    const matchesCategory = selectedCategory === "All" ||
      (selectedCategory === "Java" && (article.title.toLowerCase().includes("java") || article.description.toLowerCase().includes("java"))) ||
      (selectedCategory === "React" && (article.title.toLowerCase().includes("react") || article.description.toLowerCase().includes("react"))) ||
      (selectedCategory === "AI & Machine Learning" && (article.title.toLowerCase().includes("artificial intelligence") || article.title.toLowerCase().includes("ai"))) ||
      (selectedCategory === "Full-Stack" && (article.title.toLowerCase().includes("full stack") || article.title.toLowerCase().includes("mern") || article.title.toLowerCase().includes("spring boot"))) ||
      (selectedCategory === "APIs" && (article.title.toLowerCase().includes("api") || article.title.toLowerCase().includes("rest") || article.title.toLowerCase().includes("graphql")));

    const matchesSearch = searchQuery.trim() === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Dynamic Background glow blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10 w-full mb-10 sm:mb-16 pt-8 sm:pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <Link 
          href="/" 
          className="inline-flex items-center text-neutral-400 hover:text-white transition-all mb-6 sm:mb-10 group bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md w-fit"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs sm:text-sm font-medium">Back to Home</span>
        </Link>
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/10 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-purple-300" />
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400">
              Technical Writings • {articles.length} Publications
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Articles & Insights
          </h1>
          
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-8">
            Deep-dive tutorials, architecture comparisons, and guides on Java, Spring Boot, React.js, Artificial Intelligence, and modern software engineering.
          </p>

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-6 border-t border-white/10">
            {/* Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105"
                      : "bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-all"
              />
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, i) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="h-full"
              >
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 relative block"
                >
                  {/* Image Section */}
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-black/40 border-b border-white/10">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-7 flex flex-col flex-grow relative z-20">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 mb-3 font-mono">
                      <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded-md text-[11px]">
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="text-purple-300 text-[11px]">{article.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-neutral-400 font-light text-xs sm:text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                      {article.description}
                    </p>
                    
                    {/* Read on Medium */}
                    <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4 text-xs font-semibold text-neutral-400 group-hover:text-purple-300 transition-colors">
                      <span className="flex items-center gap-1.5">
                        <span>Read on Medium</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20 text-neutral-500">
            <p className="text-base">No articles found matching your query.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-4 px-4 py-2 rounded-full bg-white/10 text-white text-xs hover:bg-white/20"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </>
  );
}
