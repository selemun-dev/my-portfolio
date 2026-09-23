'use client';

import { portfolioData } from '@/data/portfolioData';
import { Mail, MapPin } from 'lucide-react';  // ← Only Mail & MapPin (these still exist)
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

// ─── Inline SVG Brand Icons (lucide-react v1 removed these) ───
// Path data from Simple Icons (CC0 license)
// https://simpleicons.org/

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
              05
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Let's talk</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              Want to collaborate on AI/ML Research, low-resource language AI, Web Develpment or discuss a
              research opportunity? Reach out directly.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="card-lift bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <Mail size={22} className="text-indigo-400 mb-3" />
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                Personal
              </p>
              <p className="font-medium text-white break-all">
                {portfolioData.contact.email}
              </p>
            </a>

            <a
              href={`mailto:${portfolioData.contact.institutionalEmail}`}
              className="card-lift bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <Mail size={22} className="text-indigo-400 mb-3" />
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                Institutional
              </p>
              <p className="font-medium text-white break-all">
                {portfolioData.contact.institutionalEmail}
              </p>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="https://github.com/selemun-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors text-sm font-medium"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/selemun-abrha-teklu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors text-sm font-medium"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 text-slate-400 text-sm">
              <MapPin size={16} /> Addis Ababa, Ethiopia
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}