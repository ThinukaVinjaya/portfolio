import projects from "@/data/projects.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ExternalLink, 
  Calendar, 
  Layers, 
  FolderDot, 
  ArrowRight,
  Code2,
  CheckCircle2
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Metadata } from "next";

export function findProject(idParam: string) {
  if (!idParam) return undefined;

  const legacyAliases: Record<string, string> = {
    "osianviwe-hotel": "osianview-hotel",
    "osianviwehotel": "osianview-hotel",
  };

  // 1. Direct match on id
  let project = projects.find((p) => p.id === idParam);
  if (project) return project;

  try {
    // 2. Decode URL encoded param
    const decoded = decodeURIComponent(idParam).trim();
    project = projects.find(
      (p) => p.id === decoded || p.id.toLowerCase() === decoded.toLowerCase()
    );
    if (project) return project;

    // Check alias
    const aliasTarget = legacyAliases[decoded.toLowerCase()] || legacyAliases[decoded.toLowerCase().replace(/[^a-z0-9]/g, "")];
    if (aliasTarget) {
      project = projects.find((p) => p.id === aliasTarget);
      if (project) return project;
    }

    // 3. Match normalized alphanumeric strings (handles dashes, en-dashes, spaces, case)
    const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const targetNorm = normalize(decoded);

    project = projects.find(
      (p) => normalize(p.id) === targetNorm || normalize(p.title) === targetNorm
    );
    if (project) return project;
  } catch {
    // Fall through if URI component is malformed
  }

  return undefined;
}

export function generateStaticParams() {
  const params: { id: string }[] = [];
  projects.forEach((project) => {
    params.push({ id: project.id });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = findProject(resolvedParams.id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Thinuka Vinjaya Wickramanayaka`,
      description: project.shortDescription,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: [project.imageUrl],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = findProject(resolvedParams.id);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Other related projects for the recommendation cards
  const otherProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  const hasBackend = Boolean(project.githubUrlbackend && project.githubUrlbackend.trim().length > 0);
  const hasFrontend = Boolean(project.githubUrlfrontend && project.githubUrlfrontend.trim().length > 0);
  const hasLiveDemo = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim().length > 0);

  return (
    <main className="w-full bg-[#121212] min-h-screen relative pb-16 sm:pb-28 pt-16 sm:pt-24 md:pt-28 font-sans">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[400px] bg-cyan-500/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[400px] bg-amber-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation & Breadcrumb Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-cyan-300 transition-colors text-xs sm:text-sm font-medium w-fit backdrop-blur-md group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects Archive</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-cyan-400 truncate max-w-[200px] sm:max-w-xs">{project.title}</span>
          </div>
        </div>

        {/* Hero Media Showcase Card */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/60 shadow-[0_20px_60px_rgba(0,0,0,0.7)] mb-8 sm:mb-12">
          <div className="relative w-full h-[220px] sm:h-[380px] md:h-[500px]">
            {/* Ambient inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30 z-10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />

            {/* Overlaid Badges */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
              <span className="px-3.5 py-1.5 text-xs font-mono font-semibold bg-black/80 backdrop-blur-md rounded-xl text-white border border-white/15 flex items-center gap-1.5 shadow-lg">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{project.year}</span>
              </span>
              <span className="px-3.5 py-1.5 text-xs font-semibold bg-cyan-500/20 backdrop-blur-md rounded-xl text-cyan-200 border border-cyan-500/30 shadow-lg">
                Full-Stack Architecture
              </span>
            </div>
          </div>
        </div>

        {/* Title & Action Links Block */}
        <div className="mb-14">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            {project.title}
          </h1>

          <p className="text-neutral-300 text-lg sm:text-xl font-light leading-relaxed max-w-4xl mb-8">
            {project.shortDescription}
          </p>

          {/* Action Link Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {hasLiveDemo && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-all font-semibold text-sm shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo Experience
              </a>
            )}

            {hasBackend && (
              <a
                href={project.githubUrlbackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all text-sm font-medium backdrop-blur-md"
              >
                <FaGithub className="w-4 h-4 mr-2.5" />
                Backend Repository
              </a>
            )}

            {hasFrontend && (
              <a
                href={project.githubUrlfrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all text-sm font-medium backdrop-blur-md"
              >
                <FaGithub className="w-4 h-4 mr-2.5" />
                Frontend Repository
              </a>
            )}
          </div>
        </div>

        {/* Two-Column Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 mb-12 sm:mb-20">
          
          {/* Main Case Narrative (2 Columns) */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
                <FolderDot className="w-4 h-4" />
                <span>System Architecture & Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Project Narrative
              </h2>

              <div className="prose prose-invert max-w-none text-neutral-300 font-light text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-4">
                {project.fullDescription}
              </div>
            </div>

            {/* Engineering Highlights */}
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-2.5 text-amber-400 font-mono text-xs uppercase tracking-widest mb-4">
                <Code2 className="w-4 h-4" />
                <span>Core Implementation Highlights</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Technical Highlights
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-sm sm:text-base font-light">
                    Engineered with clean architectural separation between stateful persistence, service domain logic, and client-side reactive rendering.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-sm sm:text-base font-light">
                    Implemented secure API endpoints, robust exception handling, and modular component hierarchy for maximum reusability.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-sm sm:text-base font-light">
                    Optimized for rapid response latency, fluid UX states, and intuitive dashboard management workflows.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Specs Sidebar (1 Column) */}
          <div className="space-y-6 sm:space-y-8">
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl sticky top-28">
              <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-6">
                <Layers className="w-4 h-4" />
                <span>Tech Stack Ecosystem</span>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs font-medium text-neutral-200 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/40 hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Quick Metadata List */}
              <div className="pt-6 border-t border-white/10 space-y-4 text-xs font-mono">
                <div className="flex justify-between items-center text-neutral-400">
                  <span>Release Year</span>
                  <span className="text-white font-semibold">{project.year}</span>
                </div>
                <div className="flex justify-between items-center text-neutral-400">
                  <span>Engineering Scope</span>
                  <span className="text-white font-semibold">Full-Stack Solution</span>
                </div>
                <div className="flex justify-between items-center text-neutral-400">
                  <span>Status</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Completed & Deployed
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Previous / Next Project Navigation Bar */}
        <div className="pt-8 sm:pt-10 border-t border-white/10 mb-12 sm:mb-20 flex flex-col sm:flex-row justify-between items-stretch gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="flex-1 p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all group flex flex-col justify-between"
            >
              <span className="text-xs font-mono text-neutral-400 mb-2 flex items-center gap-1.5">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                Previous Project
              </span>
              <span className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.id}`}
              className="flex-1 p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all group flex flex-col justify-between text-right"
            >
              <span className="text-xs font-mono text-neutral-400 mb-2 flex items-center justify-end gap-1.5">
                Next Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {nextProject.title}
              </span>
            </Link>
          )}
        </div>

        {/* More Projects Recommendation Grid */}
        {otherProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">
                Explore More Solutions
              </h3>
              <Link
                href="/projects"
                className="text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group p-6 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
                >
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 border border-white/10 bg-black/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white text-[11px] font-mono border border-white/10">
                      {p.year}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-neutral-400 text-xs line-clamp-2 font-light leading-relaxed mb-4">
                    {p.shortDescription}
                  </p>

                  <div className="flex items-center text-xs font-semibold text-cyan-300 pt-3 border-t border-white/5">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
