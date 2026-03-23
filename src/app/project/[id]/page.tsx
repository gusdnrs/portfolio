import {
  ArrowLeft,
  Calendar,
  User,
  Wrench,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/utils/projects';
import ProjectGallery from '@/components/project/ProjectGallery';

const TOOL_ICONS = {
  HTML: '/images/icons/html.svg',
  CSS: '/images/icons/css.svg',
  SCSS: '/images/icons/scss.svg',
  Tailwind: '/images/icons/tailwind.svg',
  JS: '/images/icons/javascript.svg',
  jQuery: '/images/icons/jquery.svg',
  Gnuboard: '/images/icons/gnuboard.svg',
  PHP: '/images/icons/php.svg',
  MySQL: '/images/icons/mysql.svg',
  Figma: '/images/icons/figma.svg',
  Photoshop: '/images/icons/photoshop.svg',
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link
          href="/"
          className="text-brand-blue font-bold flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const prevProject =
    projects[projectIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[projectIndex + 1] || projects[0];

  return (
    <main className="min-h-screen bg-[#fcfcfc] pb-32">
      {/* Dynamic Header/Hero */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-[#fcfcfc]" />

        {/* Navigation Bar (Overlay) */}
        <div className="absolute top-24 md:top-32 left-0 w-full px-6 md:px-10 flex justify-between items-center z-20">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/80 font-bold hover:text-white transition-all drop-shadow-md group"
          >
            <div className="p-2 rounded-full glass border-white/20 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="text-sm uppercase tracking-widest font-black">
              Back to Home
            </span>
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute inset-x-0 bottom-0 max-w-[1440px] mx-auto px-6 md:px-10 pb-12">
          <div>
            <span className="inline-block px-4 py-2 bg-brand-blue rounded-full text-xs font-black text-white uppercase tracking-widest shadow-lg mb-6">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-brand-blue-dark leading-tight drop-shadow-sm">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Info & Description */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 pt-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left: Summary Grid */}
        <div className="lg:col-span-1 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 text-brand-blue mb-2">
                <Calendar className="w-5 h-5" />
                <span className="text-lg font-bold uppercase tracking-widest text-brand-blue-dark">
                  Period
                </span>
              </div>
              <p className="text-base font-bold text-gray-600">
                {project.period}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 text-brand-blue mb-2">
                <User className="w-5 h-5" />
                <span className="text-lg font-bold uppercase tracking-widest text-brand-blue-dark">
                  기여도
                </span>
              </div>
              <p className="text-base font-bold text-gray-600">
                {project.contribution}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 text-brand-blue mb-6">
                <Wrench className="w-5 h-5" />
                <span className="text-lg font-bold uppercase tracking-widest text-brand-blue-dark">
                  Tools
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, i) => {
                  const iconSrc = TOOL_ICONS[tool as keyof typeof TOOL_ICONS];
                  return (
                    <div
                      key={i}
                      className="w-[60px] h-[60px] rounded-2xl bg-gray-50 flex items-center justify-center p-3 border border-gray-50/50"
                    >
                      {iconSrc ? (
                        <Image
                          src={iconSrc}
                          alt={tool}
                          width={34}
                          height={34}
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-6 h-6 rounded bg-gray-200" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Detailed Narrative */}
        <div className="lg:col-span-2">
          <div className="space-y-10">
            <div>
              <h3 className="text-[clamp(1.75rem,4vw,2.5rem)] font-black text-brand-blue tracking-tight leading-[1.2] mb-8">
                주요 작업 내용
              </h3>
              <p className="text-[clamp(1.25rem,3vw,1.875rem)] font-black tracking-tight text-gray-900 mb-2">
                {project.shortDescription}
              </p>
              <p className="text-lg text-gray-600 leading-loose break-keep">
                {project.longDescription}
              </p>
            </div>

            {project.websiteUrl && (
              <div className="pt-4">
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-5 hover:bg-brand-blue hover:text-white rounded-[24px] font-black bg-white text-brand-blue hover:scale-105 border border-brand-blue active:scale-95 transition-all shadow-xl shadow-brand-blue/20"
                >
                  <span className="text-lg">{project.title} 바로가기</span>
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image Gallery (Client Component) */}
      {project.detailImages && project.detailImages.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 mt-32">
          <ProjectGallery detailImages={project.detailImages} />
        </section>
      )}

      {/* Pagination / Next Project */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 mt-40">
        <div className="h-px bg-gray-100 mb-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href={`/project/${prevProject.id}`}
            className="group p-10 rounded-[40px] border border-gray-100 bg-white hover:border-brand-blue/30 transition-all text-left"
          >
            <span className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 group-hover:-translate-x-2 transition-transform">
              <ChevronLeft className="w-4 h-4" /> Previous Project
            </span>
            <h4 className="text-2xl font-bold group-hover:text-brand-blue transition-colors">
              {prevProject.title}
            </h4>
          </Link>

          <Link
            href={`/project/${nextProject.id}`}
            className="group p-10 rounded-[40px] border border-gray-100 bg-white hover:border-brand-blue/30 transition-all text-right"
          >
            <span className="flex items-center justify-end gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 group-hover:translate-x-2 transition-transform">
              Next Project <ChevronRight className="w-4 h-4" />
            </span>
            <h4 className="text-2xl font-bold group-hover:text-brand-blue transition-colors">
              {nextProject.title}
            </h4>
          </Link>
        </div>
      </section>
    </main>
  );
}
