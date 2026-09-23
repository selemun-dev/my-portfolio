'use client';

import { portfolioData } from '@/data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-mono text-gray-400">04b</span>
          <h2 className="text-3xl font-bold">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-start gap-3">
                <Award size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm leading-snug">{cert.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{cert.date}</p>
                </div>
              </div>
              {cert.link && cert.link !== '#' && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-3"
                >
                  Verify <ExternalLink size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}