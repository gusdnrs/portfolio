'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Image from 'next/image';

interface ProjectGalleryProps {
  detailImages: string[];
}

export default function ProjectGallery({ detailImages }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [pcIndex, setPcIndex] = useState(0);

  const pcImages = detailImages.filter((img) => !img.includes('mo-'));
  const moImages = detailImages.filter((img) => img.includes('mo-'));

  const nextPc = () => setPcIndex((prev) => (prev + 1) % pcImages.length);
  const prevPc = () =>
    setPcIndex((prev) => (prev - 1 + pcImages.length) % pcImages.length);

  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <div className="space-y-32">
        {/* PC Images Group (Carousel) */}
        {pcImages.length > 0 && (
          <div className="space-y-10 group/pc relative">
            <div className="flex items-end justify-between border-l-4 border-brand-blue pl-6 py-2">
              <div>
                <h4 className="text-2xl font-black text-gray-900 tracking-tight">
                  PC VIEW
                </h4>
              </div>
              {pcImages.length > 1 && (
                <div className="flex gap-2">
                  <button
                    onClick={prevPc}
                    className="p-3 rounded-2xl bg-white border border-gray-100 hover:bg-brand-blue hover:text-white transition-all shadow-sm cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextPc}
                    className="p-3 rounded-2xl bg-white border border-gray-100 hover:bg-brand-blue hover:text-white transition-all shadow-sm cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${pcIndex * 100}%)` }}
              >
                {pcImages.map((img, index) => (
                  <div
                    key={index}
                    className="w-full shrink-0 group relative aspect-video bg-gray-50 rounded-[32px] overflow-hidden cursor-zoom-in border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={img}
                      alt="PC view"
                      fill
                      sizes="100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center cursor-zoom-in pointer-events-none">
                      <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                        <Plus className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Images Group */}
        {moImages.length > 0 && (
          <div className="space-y-10">
            <div className="border-l-4 border-brand-blue pl-6 py-2">
              <h4 className="text-2xl font-black text-gray-900 tracking-tight uppercase">
                Mobile VIEW
              </h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {moImages.slice(0, 3).map((img, index) => (
                <div
                  key={index}
                  className="group relative aspect-9/19 bg-gray-50 rounded-[24px] md:rounded-[40px] overflow-hidden cursor-zoom-in border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    alt="Mobile view"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center cursor-zoom-in pointer-events-none">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                      <Plus className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/95 backdrop-blur-xl overflow-y-auto pt-20 pb-20 px-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={`relative w-full ${selectedImage.includes('mo-') ? 'max-w-md mx-auto' : 'max-w-[1440px]'}`}
          >
            <Image
              src={selectedImage}
              alt="Expanded view"
              width={2560}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <button
            className="fixed top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Plus className="w-10 h-10 rotate-45" />
          </button>
        </div>
      )}
    </div>
  );
}
