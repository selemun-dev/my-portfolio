'use client';

import { portfolioData } from '@/data/portfolioData';
import { ExternalLink, Eye, Download } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function Work() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            number="02"
            title="Selected Work"
            subtitle="Research projects and production systems"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.work.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="card-lift bg-white rounded-2xl p-6 border border-slate-200 flex flex-col h-full">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                {item.metric && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-md mb-3 w-fit">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                    {item.metric}
                  </div>
                )}

                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>

                {item.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors mt-auto"
                  >
                    Learn more <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* ─── CV Actions ─── */}
        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <p className="text-slate-500 text-sm mb-4">
              For a full breakdown of my research, experience, and education:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {/* View CV — opens PDF in new tab */}
              <a
                href={portfolioData.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-medium shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300"
              >
                <Eye size={16} /> View CV
              </a>

              {/* Download CV — saves the file */}
              <a
                href={portfolioData.cvLink}
                download="Selemun_Abrha_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all font-medium"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}