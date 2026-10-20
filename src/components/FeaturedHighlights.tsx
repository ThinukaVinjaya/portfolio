"use client";

import { motion } from "framer-motion";
import { 
  Trophy, 
  BookOpen, 
  Award, 
  ArrowUpRight, 
  ExternalLink 
} from "lucide-react";
import Link from "next/link";
import achievements from "@/data/achievements.json";
import articles from "@/data/articles.json";
import certificates from "@/data/certificates.json";

export default function FeaturedHighlights() {
  // Strictly latest 2 achievements (last added comes first)
  const latestAchievements = [...achievements].reverse().slice(0, 2);
  // Latest 3 featured articles (last added comes first)
  const topArticles = [...articles].reverse().slice(0, 3);
  // Strictly latest 2 certificates (last added comes first)
  const latestCertificates = [...certificates].reverse().slice(0, 2);

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#121212] via-[#0e0e0e] to-[#121212]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-purple-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-28">

        {/* ========================================================================= */}
        {/* ROW 1: ACHIEVEMENTS & HACKATHONS (STRICTLY LATEST 2) */}
        {/* ========================================================================= */}
        <div id="achievements">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-3">
                <Trophy className="w-3.5 h-3.5" />
                <span>Honors & Competitions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Hackathons & Milestones
              </h2>
            </div>

            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 w-fit"
            >
              <span>Full Journey Timeline</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestAchievements.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-amber-400/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-amber-300 text-xs font-mono font-semibold border border-amber-500/30 flex items-center gap-1.5 shadow-lg">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 2: TECHNICAL ARTICLES ON MEDIUM */}
        {/* ========================================================================= */}
        <div id="articles">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Knowledge Sharing</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Latest Publications
              </h2>
            </div>

            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 w-fit"
            >
              <span>View All {articles.length} Articles</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topArticles.map((article, idx) => (
              <motion.a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 border border-white/10 bg-black/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="text-cyan-300">{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-200 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-neutral-400 text-xs font-light leading-relaxed line-clamp-3 mb-6">
                    {article.description}
                  </p>
                </div>

                <div className="flex items-center text-xs font-semibold text-cyan-300 pt-3 border-t border-white/10">
                  <span>Read on Medium</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 3: CERTIFICATES & CREDENTIALS (STRICTLY LATEST 2) */}
        {/* ========================================================================= */}
        <div id="certificates">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-widest uppercase mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Verified Credentials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Professional Certifications
              </h2>
            </div>

            <Link
              href="/certificates"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 w-fit"
            >
              <span>View All ({certificates.length}) Certificates</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Symmetrical 2-Column Grid for the Latest 2 Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestCertificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-emerald-400/30 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-emerald-300 text-xs font-mono font-medium border border-emerald-500/30 shadow-lg">
                      {cert.issuer}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-emerald-200 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-mono mb-6">
                    Issued: {cert.date} • Verified Credential
                  </p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white pt-4 border-t border-white/10 group-hover:text-emerald-300 transition-colors"
                >
                  <span>Verify Credential Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
