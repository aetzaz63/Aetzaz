'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  year: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    features: string[];
    impact: string;
  };
}

const allProjects: Project[] = [
  {
    title: 'BlogSphere - Full-Stack Blogging Platform',
    year: '2025',
    category: 'Web Development',
    description:
      'A comprehensive full-stack blogging platform built with Next.js featuring user authentication, admin dashboard, blog management, social features, and real-time notifications.',
    technologies: ['Next.js', 'React', 'Tailwind CSS',  'Context API', 'React Hook Form', 'Yup'],
   
    githubUrl: 'https://github.com/aetzaz63/Blog-sphere',
    caseStudy: {
      overview: 'BlogSphere is a modern, feature-rich blogging platform that enables users to create, manage, and share blog posts with an engaged community. The platform includes comprehensive user management, social networking features, and a powerful admin dashboard.',
      challenge: 'The main challenges were implementing a scalable architecture that handles complex user interactions, creating an intuitive admin panel for content moderation, building a robust notification system, and ensuring data persistence without a backend database.',
      solution: 'Implemented a client-side data management system using LocalStorage and Context API, created reusable components for blog cards and forms, developed a comprehensive admin dashboard with user and blog management capabilities, and built a real-time notification system with follow/unfollow functionality.',
      features: [
        'User Authentication System: Complete registration, login, and profile management with form validation using React Hook Form and Yup',
        'Blog Management: Create, edit, delete blogs with rich text content, image uploads, categories, and search/filter functionality',
        'Admin Dashboard: Comprehensive user and blog management with enable/disable capabilities, statistics dashboard, and search filters',
        'Social Features: Follow/unfollow system, user profiles, personalized feed showing posts from followed users',
        'Notifications System: Real-time notifications for new followers, comments, and interactions with read/unread status',
        'Rating & Comments: Interactive rating system with average calculations and nested comment threads with edit/delete options',
        'Responsive Design: Mobile-first approach using Tailwind CSS with dark mode support',
        'Data Persistence: Client-side state management with LocalStorage for seamless user experience',
      ],
      impact: 'Successfully created a fully functional blogging platform that demonstrates advanced Next.js capabilities, complex state management, and modern UI/UX patterns. The project showcases skills in full-stack development, user authentication flows, admin panel design, and social networking features implementation.',
    },
  },
  {
    title: 'Shopify Customer Support Automation',
    year: '2025',
    category: 'n8n Automation',
    description:
      'Developed an advanced AI-powered customer support automation system using n8n and Shopify Admin APIs. Implemented real-time order tracking, product lookup, automated email responses, and conversation memory.',
    technologies: ['n8n', 'Gemini', 'Shopify API', 'Webhooks'],
    image: '/shopify.png',
    githubUrl: 'https://github.com/aetzaz63/AI-Powered-Shopify-Customer-support-Chatbot',
  },
  {
    title: 'n8n AI-Powered Travel Package Automation',
    year: '2025',
    category: 'n8n Automation',
    description:
      'Built an automated workflow in n8n handling travel package recommendations, booking flow, and user interaction. Integrated OpenAI, webhook triggers, database operations, and decision logic.',
    technologies: ['n8n', 'OpenAI', 'Webhooks', 'Database'],
    image: '/travel.png',
    githubUrl: 'https://github.com/aetzaz63/AI-Powered-Travel-Automation-Tool',
  },
  {
    title: 'ShopNow E-Commerce Platform',
    year: '2024',
    category: 'Web Development',
    description:
      'Developed a modern, fully responsive e-commerce platform with product listings, cart management, checkout, and authentication. Implemented global state management using Context API.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Context API'],
    image: '/shop.png',
    githubUrl: 'https://github.com/aetzaz63/ShopNow-NextjsProject',
  },
 
  {
    title: 'End-to-End Data Engineering Pipeline',
    year: '2025',
    category: 'DevOps',
    description:
      'Built a complete ML + Data Engineering pipeline integrating DVC, Apache Airflow, MLflow, Docker, and Kubernetes. Implemented versioning, workflow automation, and CI/CD for machine learning experiments.',
    technologies: ['DVC', 'Apache Airflow', 'MLflow', 'Docker', 'Kubernetes', 'Python'],
    githubUrl: 'https://github.com/razzikhawaja/MLOPS_Project',
  },
  {
    title: 'BloodBond - Blood Donation App',
    year: '2024',
    category: 'Web Development',
    description:
      'Collaboratively built a blood donation system with user, admin, hospital, and organization modules. Implemented secure authentication and role-based access using JWT and BcryptJS.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/zaidi0069/BloodBond',
  },
  {
    title: 'Appointment & Scheduling Management System',
    year: '2024',
    category: 'Web Development',
    description:
      'Developed in a team as part of Software Project Management course. Implemented patient role features including appointment booking with time slot availability, doctor selection, and notifications using microservice architecture.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Microservices'],
    githubUrl: 'https://github.com/gmdvirk/appointment-management',
  },
];

const tabs = ['All Projects', 'n8n Automation', 'Web Development', 'DevOps'];

export function Projects() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getDisplayProjects = (): Project[] => {
    if (activeTab === 'All Projects') {
      return allProjects;
    }
    return allProjects.filter((p) => p.category === activeTab);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            A showcase of my work across web development, n8n automation, and software engineering.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 bg-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {getDisplayProjects().map((project, index) => (
            <div
              key={index}
              className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300 overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-blue-600/50 rounded-lg shadow-sm"
            >
              {project.image && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold leading-none tracking-tight text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-blue-100 dark:bg-blue-600/30 text-blue-700 dark:text-blue-300">
                    {project.year}
                  </span>
                </div>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-2 flex gap-3">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View on GitHub
                    </Link>
                  )}
                  {project.caseStudy && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Read Case Study
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="https://github.com/aetzaz63?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
          >
            View All Projects on GitHub
          </Link>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && selectedProject.caseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Case Study</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Overview</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {selectedProject.caseStudy.overview}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Challenge</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {selectedProject.caseStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Solution</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {selectedProject.caseStudy.solution}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Key Features Implemented</h4>
                <ul className="space-y-2">
                  {selectedProject.caseStudy.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></span>
                      <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Impact & Results</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {selectedProject.caseStudy.impact}
                </p>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}