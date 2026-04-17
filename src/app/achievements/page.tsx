import AchievementsClient from "./AchievementsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description: "A timeline mapping my growth through hackathons, open source contributions, and technical milestones by Thinuka Vinjaya Wickramanayaka.",
  openGraph: {
    title: "Achievements & Milestones | Thinuka Vinjaya Wickramanayaka",
    description: "A timeline mapping my growth through hackathons, open source contributions, and technical milestones.",
  },
};

export default function AchievementsPage() {
  return (
    <main className="w-full bg-[#0a0a0a] min-h-screen relative py-12 md:py-20 overflow-x-hidden font-sans">
      <AchievementsClient />
    </main>
  );
}
