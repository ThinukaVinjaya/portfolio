"use client";

import Link from "next/link";
import { ArrowUp, Sparkles, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative z-10 bg-[#0a0a0a] border-t border-white/[0.08] pt-10 sm:pt-16 pb-8 sm:pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/[0.08]">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-mono text-xs font-black text-white group-hover:border-cyan-400/40 transition-colors">
                TV
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Thinuka Vinjaya
              </span>
            </Link>

            <p className="text-sm font-light leading-relaxed max-w-sm text-neutral-400">
              Undergraduate pursuing BSc (Hons) Computer Science & Technology. Specializing in Java, Spring Boot, Full-Stack Architecture, and AI/ML integrations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/ThinukaVinjaya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/thinukavinjayawickramanayaka/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-200 mb-3 font-semibold">
                Portfolio
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/#about" className="hover:text-white transition-colors">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/#skills" className="hover:text-white transition-colors">
                    Skills Matrix
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors">
                    Featured Projects
                  </Link>
                </li>
                <li>
                  <Link href="/achievements" className="hover:text-white transition-colors">
                    Hackathons & Awards
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-200 mb-3 font-semibold">
                Explore
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/articles" className="hover:text-white transition-colors">
                    Technical Articles
                  </Link>
                </li>
                <li>
                  <Link href="/certificates" className="hover:text-white transition-colors">
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to top (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

           
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center text-xs font-light gap-4">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Thinuka Vinjaya Wickramanayaka. All rights reserved.
          </p>

          
        </div>

      </div>
    </footer>
  );
}
