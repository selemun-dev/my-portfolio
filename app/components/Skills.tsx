'use client';

import { portfolioData } from '@/data/portfolioData';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { Sparkles } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            number="03"
            title="Skills & Technologies"
            subtitle="Tools and languages I work with"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.skills.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.08}>
              <div className="card-lift bg-slate-50 rounded-2xl p-6 border border-slate-200 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={18} className="text-indigo-600" />
                  <h3 className="text-lg font-bold text-slate-900">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-indigo-300 hover:text-indigo-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}