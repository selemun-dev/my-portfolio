'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-mono text-gray-400">04c</span>
          <h2 className="text-3xl font-bold">Community Impact</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioData.gallery.map((img) => (
            <button
              key={img.id}
              onClick={() => setSelected(img.id)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end">
                <span className="text-white text-xs font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelected(null)}
          >
            <X size={28} />
          </button>
          <div className="relative max-w-4xl w-full aspect-[4/3]">
            <Image
              src={portfolioData.gallery.find((g) => g.id === selected)!.src}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}