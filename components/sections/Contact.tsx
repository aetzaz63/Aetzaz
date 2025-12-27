'use client';

import {
  Mail,
  Facebook,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export function Contact() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/aetzaz.736/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-aetzaz-mern-stack-ai-automation-n8n/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/muhammad.aetzaz.545', label: 'Facebook' },
    { icon: FaWhatsapp, href: 'https://wa.me/923125956773', label: 'WhatsApp' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: ['Current: H.M.C Taxila', 'Permanent: Gujranwala'],
      type: 'text',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: [
        { text: '0312 5956773', href: 'tel:+923125956773' },
        { text: '0304 0096320', href: 'tel:+923040096320' },
      ],
      type: 'link',
    },
    {
      icon: Mail,
      title: 'Email',
      content: [{ text: 'aetzaz36@gmail.com', href: 'mailto:aetzaz36@gmail.com' }],
      type: 'link',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities, whether it&apos;s a freelance project,
            full-time position, or just a chat about technology and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-blue-600/50 transition-all bg-slate-50 dark:bg-slate-900/40 rounded-lg shadow-sm"
            >
              <div className="flex flex-col items-center text-center p-8">
                <div className="p-3 bg-blue-600/20 rounded-full mb-4">
                  <info.icon className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                {info.type === 'text' ? (
                  info.content.map((text, idx) => (
                    <p key={idx} className="text-slate-600 dark:text-slate-400">
                      {text as string}
                    </p>
                  ))
                ) : (
                  info.content.map((item, idx) => (
                    <Link
                      key={idx}
                      href={(item as { href: string }).href}
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer break-all"
                    >
                      {(item as { text: string }).text}
                    </Link>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
              aria-label={link.label}
            >
              <link.icon size={24} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}