'use client';

import { portfolioData } from '@/data/portfolioData';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            number="02b"
            title="Experience & Education"
            subtitle="Research, industry, and academic background"
          />
        </Reveal>

        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-300 hidden sm:block" />

          <div className="space-y-8">
            {portfolioData.experience.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.08}>
                <div className="relative sm:pl-16">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-indigo-500 items-center justify-center shadow-sm">
                    <Briefcase size={16} className="text-indigo-600" />
                  </div>

                  <div className="card-lift bg-white rounded-xl p-6 border border-slate-200">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full whitespace-nowrap w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-600 mb-3">
                      {exp.company}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}