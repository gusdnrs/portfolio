'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/utils/projects';

const categories = ['All', 'New Launch', 'UI/UX Renewal', 'Maintenance'];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-en text-sm font-bold tracking-widest text-brand-blue uppercase mb-4 block">
            03. The Evidence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            41건 이상의 프로젝트 데이터 중 핵심적인 성과를 선별했습니다.<br className="hidden md:block" />
            각 카테고리를 클릭하여 현욱님의 전문성을 확인해 보세요.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat 
                  ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20' 
                  : 'bg-white text-gray-400 border-gray-100 hover:border-brand-blue/30 hover:text-brand-blue'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden bg-gray-100 shadow-sm"
              >
                <Link href={`/work/${project.id}`} className="block w-full h-full">
                  {/* Image */}
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-brand-blue rounded-lg text-[10px] font-bold uppercase tracking-wider mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/60 text-sm mb-4 line-clamp-1 group-hover:line-clamp-none transition-all duration-500">
                        {project.contribution}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/10">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-bold border-b border-brand-blue pb-1 w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        View Details <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Analytics Counter Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 rounded-[40px] glass-dark border border-gray-100 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div>
              <div className="text-5xl font-black text-brand-blue mb-2 font-en">41+</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Total Projects</div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block" />
            <div>
              <div className="text-5xl font-black text-brand-blue mb-2 font-en">4Y 1M</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block" />
            <div>
              <div className="text-5xl font-black text-brand-blue mb-2 font-en">100%</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
