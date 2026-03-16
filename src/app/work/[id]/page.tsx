'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  User,
  Wrench,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/utils/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
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
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-[#fcfcfc]" />

        {/* Navigation Bar (Overlay) */}
        <div className="absolute top-24 md:top-32 left-0 w-full px-6 md:px-10 flex justify-between items-center z-20">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/80 font-bold cursor-pointer hover:text-white transition-all drop-shadow-md group"
          >
            <div className="p-2 rounded-full glass border-white/20 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="text-sm uppercase tracking-widest font-black">
              Back to list
            </span>
          </button>
        </div>

        {/* Title Overlay */}
        <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-6 md:px-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-blue rounded-full text-xs font-black text-white uppercase tracking-widest shadow-lg mb-6">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-brand-blue-dark leading-tight drop-shadow-sm">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Project Info & Description */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left: Summary Grid */}
        <div className="lg:col-span-1 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 text-brand-blue mb-2">
                <Calendar className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Period
                </span>
              </div>
              <p className="text-lg font-bold text-brand-blue-dark">
                {project.period}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 text-brand-blue mb-2">
                <User className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Role
                </span>
              </div>
              <p className="text-lg font-bold text-brand-blue-dark">
                {project.role}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 text-brand-blue mb-2">
                <Wrench className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Tools
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-sm font-bold text-gray-600 bg-gray-50 px-3 py-1 rounded-lg"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Detailed Narrative */}
        <div className="lg:col-span-2">
          <div className="space-y-10">
            <div>
              <h3 className="text-xs font-black text-brand-blue uppercase tracking-[0.3em] mb-4">
                Overview
              </h3>
              <p className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed break-keep">
                {project.contribution}
              </p>
            </div>
            <div className="h-px bg-gray-100 w-20" />
            <div>
              <h3 className="text-xs font-black text-brand-blue uppercase tracking-[0.3em] mb-4">
                Challenge & Solution
              </h3>
              <p className="text-lg text-gray-600 leading-loose break-keep">
                {project.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery (Requested: Many images) */}
      {project.detailImages && project.detailImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-10 mt-32">
          <h3 className="text-center font-en text-sm font-black text-gray-300 uppercase tracking-[0.5em] mb-12">
            Visual Journey
          </h3>
          <div className="flex flex-col gap-8 md:gap-16">
            {project.detailImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-video w-full rounded-[40px] overflow-hidden shadow-2xl shadow-black/5"
              >
                <Image
                  src={img}
                  alt={`${project.title} detail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Pagination / Next Project */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-40">
        <div className="h-px bg-gray-100 mb-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href={`/work/${prevProject.id}`}
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
            href={`/work/${nextProject.id}`}
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
