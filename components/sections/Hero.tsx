'use client';

import { Instagram, Github, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/aetzaz.736/', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/aetzaz63', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-aetzaz-ashraf-59713926b/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/muhammad.aetzaz.545', label: 'Facebook' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-black dark:via-slate-900 dark:to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300/10 dark:bg-slate-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            aria-label={link.label}
          >
            <link.icon size={24} />
          </Link>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="shrink-0">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-600 overflow-hidden shadow-2xl">
                <Image
                  src="/Aetzaz.png"
                  alt="Profile"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Software Engineer <br />& AI Specialist
            </h1>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-400 mb-6 max-w-2xl">
              Building scalable web applications and intelligent automation solutions
            </p>

            <Link
              href="#contact"
              scroll={true}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}