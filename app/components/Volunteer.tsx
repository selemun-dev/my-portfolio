'use client';

import { portfolioData } from '@/data/portfolioData';
import { Heart, Users, GraduationCap, Radio, Code } from 'lucide-react';
import Image from 'next/image';

const icons = [Heart, Users, GraduationCap, Radio, Code];

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-mono text-gray-400">04</span>
          <h2 className="text-3xl font-bold">Volunteering & Leadership</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.volunteer.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.id}
                className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4"
              >
                {item.images?.[0] && (
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.images[0]}
                      alt={item.organization}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-500">{item.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <p className="text-gray-600 text-sm font-medium">{item.organization}</p>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}