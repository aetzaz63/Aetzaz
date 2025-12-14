'use client';

import { Github, Facebook, Linkedin, Mail, Instagram, FileText } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-slate-500 dark:text-slate-500 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <Link
              href="https://www.instagram.com/aetzaz.736/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://github.com/aetzaz63"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-aetzaz-ashraf-59713926b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/muhammad.aetzaz.545"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="mailto:aetzaz36@gmail.com"
              className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </Link>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-600">
            &copy; {new Date().getFullYear()} Muhammad Aetzaz Ashraf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
