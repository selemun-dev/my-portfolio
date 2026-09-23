'use client';

import { ArrowDown, Download, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';   // ← THE MISSING IMPORT

// Roles that will cycle in the typewriter effect
const roles = [
  'AI/ML Researcher',
  'Full-Stack Developer',
  'NLP Specialist',
  'Sustainable Development',
  'Community Impact',
  'Low-Resource Language Advocate',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Soft gradient background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-24 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-24 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 ring-4 ring-indigo-100"
          >
            <Image
              src={portfolioData.profileImage}
              alt={portfolioData.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col items-start space-y-5">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest text-indigo-600 uppercase"
            >
              {portfolioData.title}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
            >
              Hi, I'm <span className="gradient-text">{portfolioData.name}</span>
            </motion.h1>

            {/* Animated typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-2xl md:text-3xl font-semibold text-indigo-600 h-10 flex items-center"
            >
              <TypeAnimation
                sequence={roles.flatMap((role) => [role, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-slate-600 max-w-2xl leading-relaxed"
            >
              {portfolioData.subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 mt-2"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 inline-flex items-center gap-2 font-medium"
              >
                <Mail size={16} /> Get in Touch
              </a>
              <a
                href={portfolioData.cvLink}
                download
                className="px-6 py-3 border border-slate-300 text-slate-800 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all inline-flex items-center gap-2 font-medium"
              >
                Download CV <Download size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="text-slate-400" />
      </div>
    </section>
  );
}