"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  Mail, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  ExternalLink 
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const HackerRankIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 18h-2.5v-4.5h-5V18H7V6h2.5v4.5h5V6H17v12z"/>
  </svg>
);

const socialLinks = [
  { 
    name: "LinkedIn", 
    icon: FaLinkedin, 
    href: "https://www.linkedin.com/in/thinukavinjayawickramanayaka/",
    color: "#0a66c2",
    handle: "thinukavinjayawickramanayaka"
  },
  { 
    name: "GitHub", 
    icon: FaGithub, 
    href: "https://github.com/ThinukaVinjaya",
    color: "#ffffff",
    handle: "ThinukaVinjaya"
  },
  { 
    name: "HackerRank", 
    icon: HackerRankIcon, 
    href: "https://www.hackerrank.com/profile/thinukavinjayau1",
    color: "#00ea64",
    handle: "thinukavinjayau1"
  },
  { 
    name: "Facebook", 
    icon: FaFacebook, 
    href: "https://web.facebook.com/ThinukaVinjayaWickramanayaka/",
    color: "#1877f2",
    handle: "ThinukaVinjayaWickramanayaka"
  },
  { 
    name: "Instagram", 
    icon: FaInstagram, 
    href: "https://www.instagram.com/thinu__ka/",
    color: "#e1306c",
    handle: "@thinu__ka"
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const emailAddress = "thinukavinjayauni@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey?.trim()) {
      setErrorMessage("The contact form is not configured yet. Please email me directly.");
      setStatus("error");
      return;
    }

    formData.set("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result: { success?: boolean } = await response.json();

      if (response.ok && result.success === true) {
        setStatus("success");
      } else {
        setErrorMessage("Could not send your message. Please email me directly.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Could not send your message. Please check your connection or email me directly.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full pt-12 sm:pt-16 pb-14 sm:pb-20 relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, seeking a Java , Full-Stack engineer, or want to discuss AI integration? My inbox is always open.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left: Contact Info & Socials (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4 sm:space-y-6"
          >
            {/* Quick Email Copy Card */}
            <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-3">
                Direct Contact
              </span>
              
              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-mono text-neutral-200 truncate">
                    {emailAddress}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors flex-shrink-0"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${emailAddress}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors"
              >
                <span>Write an Email</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location & Availability Card */}
            <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/5 text-neutral-300 border border-white/10">
                  <MapPin className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-400">Location</p>
                  <p className="text-sm font-semibold text-white">Sri Lanka (UTC +5:30)</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/5 text-neutral-300 border border-white/10">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-400">Current Status</p>
                  <p className="text-sm font-semibold text-emerald-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open for Software Engineering & AI roles
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Matrix */}
            <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                Social Profiles & Repositories
              </h3>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300"
                      aria-label={link.name}
                    >
                      <Icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                      <span className="text-xs font-medium text-neutral-300 group-hover:text-white">
                        {link.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right: Modern Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl sm:rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-light mb-5 sm:mb-8">
              Fill out the form below and I will get back to you within 24 hours.
            </p>

            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-sm text-neutral-300">
                  Thank you for reaching out. I have received your message and will reply shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-medium text-neutral-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-medium text-neutral-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-medium text-neutral-300">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="e.g. Project Inquiry / Collaboration / Job Opportunity"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-medium text-neutral-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project, timeline, or inquiry..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-rose-400">
                    {errorMessage} <a className="underline" href={`mailto:${emailAddress}`}>{emailAddress}</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 focus:outline-none focus:ring-4 focus:ring-white/20 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                >
                  <span>{status === "submitting" ? "Sending Message..." : "Send Message"}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}
