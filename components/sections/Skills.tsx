'use client';

import { Code, Wrench, Package, Zap, Workflow, Layers, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['JavaScript', 'Python', 'C++', 'C#', 'Java', 'SQL'],
  },
  {
    title: 'Web Technologies',
    icon: Package,
    skills: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'SQL',
      'Git',
      'Tailwind CSS',
      'Postman',
      'TypeScript',
      'JWT',
      'BcryptJS',
      
      'RESTful APIs',
    ],
  },
  {
    title: 'Automation Workflows',
    icon: Zap,
    skills: ['n8n', 'Zapier', 'Make.com'],
  },
  {
    title: 'DevOps Tools',
    icon: Wrench,
    skills: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes', 'DVC', 'MLflow', 'AWS'],
  },
];

const additionalExpertise = ['Microservices', 'CI/CD'];

const expertiseCards = [
  {
    title: 'n8n Automation',
    icon: Workflow,
    description: 'Expert in creating complex workflow automations and integrations',
  },
  {
    title: 'Full-Stack Development',
    icon: Layers,
    description: 'End-to-end application development with modern technologies',
  },
  {
    title: 'AI Integration',
    icon: Sparkles,
    description: 'Implementing AI solutions in web applications and workflows',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
            A comprehensive toolkit for building modern applications and automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 hover:border-blue-600/50 rounded-lg shadow-sm"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-base font-semibold leading-none tracking-tight flex items-center gap-3 text-slate-900 dark:text-white">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <Icon className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    {category.title}
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-slate-200 dark:bg-slate-800/50 text-slate-700 dark:text-slate-400 hover:bg-blue-600/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalExpertise.map((skill, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {expertiseCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="hover:shadow-xl transition-all hover:-translate-y-1 duration-300 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 hover:border-blue-600/50 rounded-lg shadow-sm"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="p-3 bg-blue-600/20 rounded-lg w-fit mb-3">
                    <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold leading-none tracking-tight text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}