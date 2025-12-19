'use client';

import { GraduationCap, MapPin, Award, Target, Download } from 'lucide-react';
import Link from 'next/link';

export function About() {
  const infoCards = [
    {
      icon: GraduationCap,
      title: 'Education',
      content: 'BS Software Engineering',
      subtitle: 'FAST-NUCES | June 2025',
    },
    {
      icon: Award,
      title: 'Experience',
      content: '1+ Years',
      subtitle: null,
    },
    {
      icon: Target,
      title: 'Specialization',
      content: 'MERN Stack Developer and AI Automations',
      subtitle: null,
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Current: H.M.C Taxila',
      subtitle: 'Permanent: Gujranwala',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a software engineer with industrial experience, graduated from FAST NUCES, Islamabad. I specialize in creating efficient automation workflows using n8n and building scalable web applications.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              My expertise spans across the MERN stack, Python, and modern DevOps practices. I'm particularly passionate about AI integration and workflow automation that helps businesses streamline their operations.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/Muhammad_Aetzaz.pdf"
                download
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <Download size={20} />
                Download Resume
              </Link>
              <Link
                href="#contact"
                scroll={true}
                className="inline-flex items-center gap-2 bg-slate-700 dark:bg-slate-700 hover:bg-slate-600 dark:hover:bg-slate-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Hire Me
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="border-l-4 border-l-blue-600 bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm"
              >
                <div className="flex items-start gap-4 p-6">
                  <card.icon className="text-blue-600 dark:text-blue-400 shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-base text-slate-900 dark:text-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      {card.content}
                    </p>
                    {card.subtitle && (
                      <p className="text-xs text-slate-500 dark:text-slate-500">{card.subtitle}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}