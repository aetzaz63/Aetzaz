'use client';

import { Github, Facebook, Linkedin, Mail, Instagram } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/aetzaz.736/', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/aetzaz63', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-aetzaz-ashraf-59713926b/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/muhammad.aetzaz.545', label: 'Facebook' },
    { icon: Mail, href: 'mailto:aetzaz36@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-black text-slate-500 dark:text-slate-500 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-600">
            &copy; {new Date().getFullYear()} Muhammad Aetzaz Ashraf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}