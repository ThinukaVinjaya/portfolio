import projects from "@/data/projects.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full bg-[#121212] min-h-screen relative pb-20">
      {/* Hero Image Section */}
      <div className="w-full h-[50vh] md:h-[60vh] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/50 to-[#121212] z-10"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute top-12 left-6 lg:left-12 z-20">
          <Link href="/projects" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-20 px-6 lg:px-8 -mt-20 md:-mt-32">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="px-3 py-1 text-xs tracking-wider uppercase font-medium bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
            {project.year}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
          {project.title}
        </h1>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <FaGithub className="w-5 h-5 mr-3" />
              View Source
            </a>
          )}
          {project.githubUrlbackend && (
            <a
              href={project.githubUrlbackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <FaGithub className="w-5 h-5 mr-3" />
              Backend Source
            </a>
          )}
          {project.githubUrlfrontend && (
            <a
              href={project.githubUrlfrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <FaGithub className="w-5 h-5 mr-3" />
              Frontend Source
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors font-medium"
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              Live Demo
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
              Overview
            </h2>
            <p className="text-neutral-300 font-light leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white border-b border-white/10 pb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map(tech => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm text-neutral-300 bg-white/[0.03] border border-white/10 rounded-lg hover:border-white/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
