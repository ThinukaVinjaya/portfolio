import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full bg-[#121212] min-h-screen">
      <ScrollyCanvas sequencePaths={["/sequance1", "/sequance2"]} OverlayComponent={Overlay} />
      <Projects />
    </main>
  );
}
