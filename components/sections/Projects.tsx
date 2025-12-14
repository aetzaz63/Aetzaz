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
}

const allProjects: Project[] = [
  {
    title: 'Shopify Customer Support Automation',
    year: '2025',
    category: 'n8n Automation',
    description:
      'Developed an advanced AI-powered customer support automation system using n8n and Shopify Admin APIs. Implemented real-time order tracking, product lookup, automated email responses, and conversation memory.',
    technologies: ['n8n', 'Gemini', 'Shopify API', 'Webhooks'],
    image: '/image4.png',
  },
  {
    title: 'n8n AI-Powered Travel Package Automation',
    year: '2025',
    category: 'n8n Automation',
    description:
      'Built an automated workflow in n8n handling travel package recommendations, booking flow, and user interaction. Integrated OpenAI, webhook triggers, database operations, and decision logic.',
    technologies: ['n8n', 'OpenAI', 'Webhooks', 'Database'],
    image: '/image1.png',
  },
  {
    title: 'ShopNow E-Commerce Platform',
    year: '2024',
    category: 'Web Development',
    description:
      'Developed a modern, fully responsive e-commerce platform with product listings, cart management, checkout, and authentication. Implemented global state management using Context API.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Context API'],
    image: '/image1.png',
  },
  {
    title: 'Blog Platform',
    year: '2024',
    category: 'Web Development',
    description:
      'Built a full-featured blogging system with authentication, article CRUD, comments, and reactions. Developed a REST API backend using Express and MongoDB with modern UI practices.',
    technologies: ['Next.js', 'React', 'Express.js', 'MongoDB'],
    image: '/image1.png',
  },
  {
    title: 'End-to-End Data Engineering Pipeline',
    year: '2025',
    category: 'DevOps',
    description:
      'Built a complete ML + Data Engineering pipeline integrating DVC, Apache Airflow, MLflow, Docker, and Kubernetes. Implemented versioning, workflow automation, and CI/CD for machine learning experiments.',
    technologies: ['DVC', 'Apache Airflow', 'MLflow', 'Docker', 'Kubernetes', 'Python'],
    image: '/image1.png',
  },
  {
    title: 'BloodBond - Blood Donation App',
    year: '2024',
    category: 'Web Development',
    description:
      'Collaboratively built a blood donation system with user, admin, hospital, and organization modules. Implemented secure authentication and role-based access using JWT and BcryptJS.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: '/image1.png',
  },
  {
    title: 'Appointment & Scheduling Management System',
    year: '2024',
    category: 'Web Development',
    description:
      'Developed in a team as part of Software Project Management course. Implemented appointment booking with user roles, time slot availability, and notifications using microservice architecture.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Microservices'],
    image: '/image1.png',
  },
  {
    title: 'Meal Kit Delivery Web App',
    year: '2024',
    category: 'Web Development',
    description:
      'Designed and developed a full-stack web application for meal kit delivery service. Implemented user authentication, cart management, responsive UI, and RESTful APIs for efficient CRUD operations.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    image: '/image1.png',
  },
];

const tabs = ['All Projects', 'n8n Automation', 'Web Development', 'DevOps'];

export function Projects() {
  const [activeTab, setActiveTab] = useState('All Projects');

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
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-blue-100 dark:bg-blue-600/30 text-blue-700 dark:text-blue-300">{project.year}</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-400">
                      {tech}
                    </span>
                  ))}
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
            Load More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
