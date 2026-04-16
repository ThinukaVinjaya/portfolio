import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import ActionButtons from "@/components/ActionButtons";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="w-full bg-[#121212] min-h-screen relative">
      <Header />
      
      <ScrollyCanvas sequencePaths={["/sequance1", "/sequance2"]} OverlayComponent={Overlay} />

      {/* Unified Discover & Contact Section */}
      <section className="w-full pt-16 pb-8 px-6 lg:px-8 flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-[#121212] to-[#0a0a0a]">
        {/* Subtle background radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.015] blur-[150px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-16 relative z-10 w-full">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Discover More</h2>
          <div className="w-16 h-px bg-white/20 mx-auto"></div>
        </div>

        <div className="max-w-6xl w-full flex justify-center relative z-10 mb-32 pt-16">
          <ActionButtons />
        </div>

        <ContactSection />

        <footer className="w-full text-center mt-24 pt-8 border-t border-white/5 text-neutral-500 text-sm relative z-10 max-w-5xl">
          &copy; 2026 Thinuka Vinjaya Wickramanayaka. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
