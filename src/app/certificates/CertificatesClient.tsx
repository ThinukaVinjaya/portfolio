"use client";

import { motion, Variants } from "framer-motion";
import certificateData from "@/data/certificates.json";
import Link from "next/link";
import { ExternalLink, Award } from "lucide-react";

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

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-[80vh]">

        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex items-center gap-4">
          <Link href="/" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/10 transition-all duration-300">
            <span className="text-white/50 group-hover:text-white transition-colors duration-300">←</span>
          </Link>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2">Certifications</h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-light">Validating skills through continuous learning.</p>
          </div>
        </div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24"
        >
          {certificateData.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10">
                  <Award className="w-5 h-5 text-white/80" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="mb-2">
                  <span className="text-xs font-medium tracking-wider text-neutral-500 uppercase">{cert.date}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-wide text-white mb-2 group-hover:text-white/90 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-light text-neutral-400 flex-1">
                  {cert.issuer}
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Link */}
        <div className="flex justify-center pb-24">
          <a
            href="https://www.linkedin.com/in/thinukavinjayawickramanayaka/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1"
          >
            <span className="relative z-10 text-white font-medium tracking-wide">See more certificates on LinkedIn</span>
            <ExternalLink className="relative z-10 w-5 h-5 text-neutral-300 group-hover:text-white transition-colors" strokeWidth={1.5} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
          </a>
        </div>
      </div>
    </>
  );
}
