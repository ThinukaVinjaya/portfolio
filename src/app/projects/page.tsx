import ProjectsClient from "./ProjectsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of my recent open-source work, full-stack applications, and experimental prototypes by Thinuka Vinjaya Wickramanayaka.",
  openGraph: {
    title: "Projects | Thinuka Vinjaya Wickramanayaka",
    description: "Explore my open-source work, full-stack applications, and experimental prototypes.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="w-full bg-[#121212] min-h-screen relative py-12 md:py-20 overflow-x-hidden font-sans">
      <ProjectsClient />
    </main>
  );
}
