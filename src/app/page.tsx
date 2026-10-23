import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thinuka Vinjaya Wickramanayaka | Full-Stack Developer & AI Enthusiast",
  description: "Portfolio of Thinuka Vinjaya Wickramanayaka, an undergraduate pursuing BSc (Hons) Computer Science & Technology, Full-Stack Developer, Spring Boot Developer, and AI/ML Enthusiast.",
};

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import FeaturedHighlights from "@/components/FeaturedHighlights";
import ActionButtons from "@/components/ActionButtons";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="w-full bg-[#121212] min-h-screen relative">
      {/* 240-Frame Interactive Scrollytelling Experience */}
      <div id="hero">
        <ScrollyCanvas sequencePaths={["/sequance1", "/sequance2"]} OverlayComponent={Overlay} />
      </div>

      <div id="about" className="scroll-mt-24" />

      {/* Interactive Tech Matrix & Architecture Pillars */}
      <SkillsSection />

      {/* Flagship Production Projects Showcase */}
      <FeaturedProjects />

      {/* Hackathons, Medium Publications & Verified Credentials */}
      <FeaturedHighlights />

      {/* Discovery Hub */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-[#121212] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto relative z-10 text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2 block">
            Navigation Hub
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Discover More Dimensions
          </h2>
          <div className="w-16 h-px bg-white/20 mx-auto" />
        </div>

        <ActionButtons />
      </section>

      {/* Interactive Direct Contact Section */}
      <ContactSection />
    </main>
  );
}
