'use client';

import { portfolioData } from '@/data/portfolioData';
import Reveal from './Reveal';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { Eye, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Centered Heading ─── */}
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
              About Me
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-slate-800" />
              <span className="text-xl md:text-2xl font-bold text-blue-600 italic">
                who i am
              </span>
              <span className="h-px w-8 bg-slate-800" />
            </div>
          </div>
        </Reveal>

        {/* ─── Intro Line With Typewriter ─── */}
        <Reveal delay={0.1}>
          <div className="text-center mb-14">
            <p className="text-xl md:text-2xl font-semibold text-slate-900 min-h-[2.5rem]">
              I'm <span className="text-slate-900">Selemun</span>, and I'm{' '}
              <TypeAnimation
                sequence={[
                  'building AI for the languages Africa speaks.',
                  2500,
                  'closing the gap in low-resource NLP.',
                  2500,
                  'proving Africa can build its own AI.',
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-600"
                cursor={true}
              />
            </p>
          </div>
        </Reveal>

        {/* ─── Two-Column Layout: Image | Vision/Mission ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-start">
          {/* LEFT — Image */}
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 aspect-[3/4] lg:aspect-auto lg:h-[600px]">
              <Image
                src="/about-illustration.jpg"
                alt="Selemun Abrha — AI Researcher"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          {/* RIGHT — Vision & Mission Cards */}
          <div className="space-y-6">
            {/* Vision */}
            <Reveal delay={0.15}>
              <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm card-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Eye size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600">
                    Vision
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  To harness AI and NLP to close the technology gap facing
                  low-resource African languages, ensuring that critical systems
                   from healthcare to education, work reliably for the
                  communities that speak them. I strive to lead research that
                  turns AI from a tool built for the few into infrastructure that
                  serves the many, advancing the UN Sustainable Development
                  Goals in health, education, and reduced inequality across
                  Africa.
                </p>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal delay={0.25}>
              <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm card-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Target size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600">
                    Mission
                  </h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  As an AI researcher, I am committed to building
                  parameter-efficient, low-resource language technology that
                  solves real, high-stakes problems, starting with Tigrinya
                  healthcare translation and to mentoring the next generation
                  of African researchers so this work outlasts any single
                  project. My mission is to prove that Africa can build its own
                  AI, for its own people, creating sustainable and equitable
                  technological futures shaped by those who understand the need
                  firsthand.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}