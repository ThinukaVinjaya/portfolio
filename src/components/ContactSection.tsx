"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const HackerRankIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 18h-2.5v-4.5h-5V18H7V6h2.5v4.5h5V6H17v12z"/>
  </svg>
);

const socialLinks = [
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/thinukavinjayawickramanayaka/" },
  { name: "GitHub", icon: FaGithub, href: "https://github.com/ThinukaVinjaya" },
  { name: "HackerRank", icon: HackerRankIcon, href: "https://www.hackerrank.com/profile/thinukavinjayau1" },
  { name: "Facebook", icon: FaFacebook, href: "https://web.facebook.com/ThinukaVinjayaWickramanayaka/" },
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/thinu__ka/" },
];

export default function ContactSection() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Let's Connect</h2>
          <p className="text-neutral-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Ready to start your next project or have a question? Drop a message below and let's make it happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="relative group">
                <input type="text" id="name" className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all peer" placeholder="Name" required />
                <label htmlFor="name" className="absolute text-neutral-500 text-sm transition-all bg-[#0a0a0a] px-1 -top-2 left-4 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:left-5 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-[#0a0a0a] peer-focus:text-xs peer-focus:text-white rounded">Name</label>
              </div>
              <div className="relative group">
                <input type="email" id="email" className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all peer" placeholder="Email" required />
                <label htmlFor="email" className="absolute text-neutral-500 text-sm transition-all bg-[#0a0a0a] px-1 -top-2 left-4 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:left-5 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-[#0a0a0a] peer-focus:text-xs peer-focus:text-white rounded">Email</label>
              </div>
              <div className="relative group">
                <textarea id="message" rows={5} className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all resize-none peer" placeholder="Message" required></textarea>
                <label htmlFor="message" className="absolute text-neutral-500 text-sm transition-all bg-[#0a0a0a] px-1 -top-2 left-4 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:left-5 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-[#0a0a0a] peer-focus:text-xs peer-focus:text-white rounded">Message</label>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 rounded-xl font-medium tracking-wide hover:bg-neutral-200 transition-colors focus:ring-4 focus:ring-white/20 active:scale-[0.98]">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center gap-12"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Connect With Me</h3>
              <p className="text-neutral-400 font-light mb-8 max-w-sm">
                Follow my journey, check out my code, or just see what I'm up to on my social profiles.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                      aria-label={link.name}
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.05] to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                      <Icon className="relative z-10 w-6 h-6 text-neutral-400 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
