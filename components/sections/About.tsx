'use client';

import { GraduationCap, MapPin, Award, Target, Download } from 'lucide-react';
import Link from 'next/link';

export function About() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a software engineer with industrial experience, graduated from FAST NUCES, Islamabad. I specialize in creating efficient automation workflows using n8n and building scalable web applications.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My expertise spans across the MERN stack, Python, and modern DevOps practices. I'm particularly passionate about AI integration and workflow automation that helps businesses streamline their operations.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/Muhammad_Aetzaz.pdf"
                download
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 bg-slate-700 dark:bg-slate-700 hover:bg-slate-600 dark:hover:bg-slate-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
              >
                Hire Me
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-l-blue-600 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 p-6">
                <GraduationCap className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-base text-slate-900 dark:text-white mb-1">
                    Education
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    BS Software Engineering
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">FAST-NUCES | June 2025</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-l-blue-600 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 p-6">
                <Award className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-base text-slate-900 dark:text-white mb-1">
                    Experience
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    1+ Years
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-l-blue-600 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 p-6">
                <Target className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-base text-slate-900 dark:text-white mb-1">
                    Specialization
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    MERN Stack Developer and AI Automations
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-l-blue-600 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 p-6">
                <MapPin className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-base text-slate-900 dark:text-white mb-1">
                    Location
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Current: H.M.C Taxila
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Permanent: Gujranwala
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
