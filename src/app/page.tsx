import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Thinuka Vinjaya Wickramanayaka",
};

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import ActionButtons from "@/components/ActionButtons";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <main className="w-full bg-[#121212] min-h-screen relative">
      <Header />
      
      <ScrollyCanvas sequencePaths={["/sequance1", "/sequance2"]} OverlayComponent={Overlay} />

      {/* Unified Discover & Contact Section */}
      <section className="w-full pt-12 pb-6 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-[#121212] to-[#0a0a0a]">
        {/* Subtle background radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] sm:w-[800px] sm:h-[500px] bg-white/[0.015] blur-[150px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-12 sm:mb-16 relative z-10 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Discover More</h2>
          <div className="w-12 sm:w-16 h-px bg-white/20 mx-auto"></div>
        </div>

        <div className="max-w-6xl w-full flex justify-center relative z-10 mb-24 sm:mb-32 pt-8 sm:pt-16">
          <ActionButtons />
        </div>

        <ContactSection />


      </section>
    </main>
  );
}
