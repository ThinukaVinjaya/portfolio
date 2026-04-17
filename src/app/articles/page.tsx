import ArticlesClient from "./ArticlesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description: "Insights, tutorials, and thoughts on software engineering, AI, and full-stack development by Thinuka Vinjaya Wickramanayaka.",
  openGraph: {
    title: "Articles | Thinuka Vinjaya Wickramanayaka",
    description: "Insights, tutorials, and thoughts on software engineering, AI, and full-stack development.",
  },
};

export default function ArticlesPage() {
  return (
    <main className="w-full bg-[#121212] min-h-screen relative py-12 md:py-20 overflow-x-hidden font-sans">
      <ArticlesClient />
    </main>
  );
}
