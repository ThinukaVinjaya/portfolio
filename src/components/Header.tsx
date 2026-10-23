"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Sparkles, 
  FolderDot, 
  Trophy, 
  BookOpen, 
  Award, 
  Cpu, 
  User, 
  Mail, 
  ArrowUpRight 
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "/#about", icon: User },
  { name: "Skills", href: "/#skills", icon: Cpu },
  { name: "Projects", href: "/projects", icon: FolderDot },
  { name: "Achievements", href: "/achievements", icon: Trophy },
  { name: "Articles", href: "/articles", icon: BookOpen },
  { name: "Certificates", href: "/certificates", icon: Award },
  { name: "Contact", href: "/#contact", icon: Mail },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "py-3 bg-[#121212]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "py-5 sm:py-6 bg-gradient-to-b from-[#121212]/90 via-[#121212]/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 relative focus:outline-none"
            aria-label="Thinuka Vinjaya Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:border-cyan-400/40 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] transition-all duration-300">
              <span className="font-mono text-xs font-black tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                TV
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                Thinuka Vinjaya
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for hire
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            {navLinks.map((link) => {
              const isAnchor = link.href.startsWith("/#");
              const isActive = isAnchor
                ? false
                : link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/15"
                      : "text-neutral-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/ThinukaVinjaya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/thinukavinjayawickramanayaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <Link
              href="/#contact"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 group-hover:rotate-12 transition-transform duration-300" />
              <span>Let&apos;s Connect</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop click-away overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden pointer-events-auto"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 top-16 sm:top-20 z-50 p-4 lg:hidden pointer-events-auto max-h-[calc(100dvh-4.5rem)] overflow-y-auto"
            >
              <div className="rounded-3xl border border-white/10 bg-[#121212]/95 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <nav className="flex flex-col gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isAnchor = link.href.startsWith("/#");
                    const isActive = isAnchor
                      ? false
                      : link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition-all ${
                          isActive
                            ? "bg-white/10 text-white border border-white/15"
                            : "text-neutral-300 hover:text-white hover:bg-white/[0.05]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg border ${
                            isActive ? "bg-white/10 border-white/20 text-white" : "bg-white/5 border-white/10 text-neutral-400"
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">{link.name}</span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                      </Link>
                    );
                  })}
                </nav>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/ThinukaVinjaya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/thinukavinjayawickramanayaka/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                  </div>

                  <Link
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-colors"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
