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
      
      <div className="max-w-5xl w-full relative z-10 px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6">Let&apos;s Connect</h2>
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto px-4 sm:px-0">
            Ready to start your next project or have a question? Drop a message below and let&apos;s make it happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4 sm:space-y-6">
              <input type="hidden" name="access_key" value="b8037788-9746-42ec-896a-2741a033977d" />
              <div className="relative group">
                <input type="text" name="name" id="name" className="w-full bg-white/[0.02] border border-white/10 rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-transparent focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all peer text-sm sm:text-base" placeholder="Name" required />
                <label htmlFor="name" className="absolute text-neutral-500 text-xs sm:text-sm transition-all bg-[#0a0a0a] px-1 -top-2 left-3 sm:left-4 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 sm:peer-placeholder-shown:left-5 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-3 sm:peer-focus:left-4 peer-focus:bg-[#0a0a0a] peer-focus:text-xs peer-focus:text-white rounded">Name</label>
              </div>
              <div className="relative group">
                <input type="email" name="email" id="email" className="w-full bg-white/[0.02] border border-white/10 rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-transparent focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all peer text-sm sm:text-base" placeholder="Email" required />
                <label htmlFor="email" className="absolute text-neutral-500 text-xs sm:text-sm transition-all bg-[#0a0a0a] px-1 -top-2 left-3 sm:left-4 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 sm:peer-placeholder-shown:left-5 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-3 sm:peer-focus:left-4 peer-focus:bg-[#0a0a0a] peer-focus:text-xs peer-focus:text-white rounded">Email</label>
              </div>
              <div className="relative group">
                <textarea name="message" id="message" rows={4} className="w-full bg-white/[0.02] border border-white/10 rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-transparent focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all resize-none peer text-sm sm:text-base" placeholder="Message" required></textarea>
                <label htmlFor="message" className="absolute text-neutral-500 text-xs sm:text-sm transition-all bg-[#0a0a0a] px-1 -top-2 left-3 sm:left-4 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 sm:peer-placeholder-shown:left-5 peer-placeholder-shown:bg-transparent peer-focus:-top-2 peer-focus:left-3 sm:peer-focus:left-4 peer-focus:bg-[#0a0a0a] peer-focus:text-xs peer-focus:text-white rounded">Message</label>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-white text-black py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium tracking-wide hover:bg-neutral-200 transition-colors focus:ring-4 focus:ring-white/20 active:scale-[0.98] text-sm sm:text-base">
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
            className="flex flex-col justify-center gap-8 sm:gap-12"
          >
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4">Connect With Me</h3>
              <p className="text-neutral-400 font-light mb-6 sm:mb-8 max-w-sm text-sm sm:text-base">
                Follow my journey, check out my code, or just see what I&apos;m up to on my social profiles.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                      aria-label={link.name}
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.05] to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                      <Icon className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
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
