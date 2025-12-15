'use client';

import {
  Mail,
  Facebook,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export function Contact() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/aetzaz.736/', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/aetzaz63', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-aetzaz-ashraf-59713926b/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/muhammad.aetzaz.545', label: 'Facebook' },
    { icon: FaWhatsapp, href: 'https://wa.me/923125956773', label: 'WhatsApp' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities, whether it's a freelance project,
            full-time position, or just a chat about technology and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Address */}
          <div className="border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-blue-600/50 transition-all bg-white dark:bg-slate-900/40 rounded-lg shadow-sm">
            <div className="flex flex-col items-center text-center p-8">
              <div className="p-3 bg-blue-600/20 rounded-full mb-4">
                <MapPin className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                Address
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Current: H.M.C Taxila
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Permanent: Gujranwala
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-blue-600/50 transition-all bg-white dark:bg-slate-900/40 rounded-lg shadow-sm">
            <div className="flex flex-col items-center text-center p-8">
              <div className="p-3 bg-blue-600/20 rounded-full mb-4">
                <Phone className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                Phone
              </h3>
              <Link
                href="tel:+923125956773"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                0312 5956773
              </Link>
              <Link
                href="tel:+923040096320"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                0304 0096320
              </Link>
            </div>
          </div>

          {/* Email */}
          <div className="border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-blue-600/50 transition-all bg-white dark:bg-slate-900/40 rounded-lg shadow-sm">
            <div className="flex flex-col items-center text-center p-8">
              <div className="p-3 bg-blue-600/20 rounded-full mb-4">
                <Mail className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                Email
              </h3>
              <Link
                href="mailto:aetzaz36@gmail.com"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
              >
                aetzaz36@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600/50 transition-all duration-300 transform hover:scale-110"
              aria-label={link.label}
            >
              <link.icon
                size={24}
                className={link.label === 'WhatsApp' ? 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all' : ''}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
