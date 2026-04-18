"use client";

import { motion, Variants } from "framer-motion";
import certificateData from "@/data/certificates.json";
import Link from "next/link";
import { ExternalLink, Award, Sparkles } from "lucide-react";

export default function CertificatesClient() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const sortedCertificates = [...certificateData].sort((a, b) => Number(b.id) - Number(a.id));

  return (
    <section className="relative overflow-hidden pb-24 bg-background text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute left-[-10%] top-10 h-120 w-120 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12%] bottom-8 h-136 w-136 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-background to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-sm transition hover:bg-white/10 hover:text-white"
          >
            <span aria-hidden="true">←</span>
            <span>Back to Home</span>
          </Link>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200 backdrop-blur-md">
            Certificate Showcase
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950/80 p-8 md:p-10 mb-16 shadow-[0_40px_120px_rgba(15,23,42,0.6)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_30%)] opacity-90" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold tracking-[0.16em] text-cyan-200">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                Latest Certifications
              </div>
              <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
                Professional certificates crafted to impress.
              </h2>
              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-8 text-neutral-300">
                Showcasing your most recent verified credentials with animated cards, glassmorphism highlights, and a polished presentation that matches your portfolio design.
              </p>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/5 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">Certificates</p>
              <p className="mt-4 text-5xl font-semibold text-white">22</p>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Displaying the most recent credentials first, with direct links to verified authority pages.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-200">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Verified Issuers</p>
                  <p className="text-xs text-neutral-400">Trusted certificate authorities</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {sortedCertificates.map((cert) => (
            <motion.article
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950/70 shadow-[0_20px_60px_rgba(15,23,42,0.55)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.16),transparent_22%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />
              <div className="relative h-52 overflow-hidden border-b border-white/10">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                
              </div>

              <div className="relative p-6 sm:p-8 flex min-h-65 flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200/90 border border-white/10">
                    <Award className="h-4 w-4 text-cyan-300" />
                    {cert.date}
                  </span>
                  <span className="rounded-full bg-slate-950/70 px-3 py-2 text-xs tracking-[0.25em] text-neutral-400 border border-white/10">
                    Verified
                  </span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight text-white">
                  {cert.title}
                </h3>
                <p className="text-sm leading-6 text-neutral-400 grow">{cert.issuer}</p>

                <div className="mt-auto pt-4 border-t border-white/10">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition-colors duration-300 hover:bg-cyan-400/20"
                  >
                    View Credential
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.linkedin.com/in/thinukavinjayawickramanayaka/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-cyan-400/10"
          >
            <span>See more certificates on LinkedIn</span>
            <ExternalLink className="h-4 w-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
